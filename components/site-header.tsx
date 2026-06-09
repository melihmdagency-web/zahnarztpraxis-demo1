"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CtaButton } from "@/components/cta-button"

const NAV_LINKS = [
  { href: "#vorteile", label: "Vorteile" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#preise", label: "Preise" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60 shadow-sm"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Zur Startseite">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight sm:text-base">
              Zahnarztpraxis am Markt
            </span>
            <span className="text-[0.7rem] text-muted-foreground sm:text-xs">
              Dr. Lena Brandt · Halle (Saale)
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+493451234567"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:flex"
          >
            <Phone className="size-4" />
            0345 123 45 67
          </a>
          <div className="hidden sm:block">
            <CtaButton label="Termin buchen" />
          </div>
          <Button
            variant="outline"
            size="icon-lg"
            className="rounded-xl lg:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-16 origin-top border-b border-border/60 bg-background/95 px-4 pb-6 pt-2 backdrop-blur-md transition-all duration-300",
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0",
          )}
        >
          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+493451234567"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              <Phone className="size-4" />
              0345 123 45 67
            </a>
            <div className="mt-3" onClick={() => setMenuOpen(false)}>
              <CtaButton className="w-full" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
