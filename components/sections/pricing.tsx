import { Check, Wallet, Percent, CalendarRange } from "lucide-react"

import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

const HIGHLIGHTS = [
  {
    icon: Percent,
    title: "0% Finanzierung möglich",
    description: "Ohne Zinsen, ohne versteckte Kosten.",
  },
  {
    icon: CalendarRange,
    title: "Ratenzahlung verfügbar",
    description: "Flexible monatliche Raten, die zu Ihnen passen.",
  },
  {
    icon: Wallet,
    title: "Transparente Beratung",
    description: "Ihren genauen Preis besprechen wir unverbindlich.",
  },
]

export function Pricing() {
  return (
    <section id="preise" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="glass overflow-hidden rounded-3xl border border-border/60 shadow-lg">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Faire & flexible Preise
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ein gerades Lächeln, das ins Budget passt
              </h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                  ab 49 €
                </span>
                <span className="mb-1.5 text-lg font-medium text-muted-foreground">
                  / Monat
                </span>
              </div>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Mit flexibler Ratenzahlung und 0% Finanzierung. Den genauen
                Preis ermitteln wir gemeinsam in Ihrer kostenlosen Beratung –
                ganz ohne Verpflichtung.
              </p>
              <div className="mt-8">
                <CtaButton emphasis="hero" />
              </div>
            </div>

            <ul className="grid gap-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Check className="size-4 text-primary" />
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
