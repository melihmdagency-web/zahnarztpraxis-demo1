import Image from "next/image"
import { Star, ShieldCheck, Clock } from "lucide-react"

import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Soft background tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_0%,oklch(0.95_0.04_195),transparent)]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground sm:text-sm">
              <ShieldCheck className="size-4 text-primary" />
              Zertifizierter Aligner-Anbieter in Halle
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Ihr selbstbewusstes Lächeln – mit{" "}
              <span className="text-primary">unsichtbaren Alignern</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Gerade Zähne ohne sichtbare Spange. Diskret, herausnehmbar und
              individuell für Sie geplant – in der Zahnarztpraxis am Markt von
              Dr. Lena Brandt.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton emphasis="hero" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </span>
                <span className="font-medium text-foreground">4,9</span> bei
                Google
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-primary" />
                Ø 6 Monate Behandlung
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="glass relative overflow-hidden rounded-3xl border border-border/60 p-2 shadow-xl shadow-primary/5">
            <Image
              src="/images/hero-smile.png"
              alt="Patientin lächelt selbstbewusst und hält eine transparente Aligner-Schiene"
              width={720}
              height={760}
              priority
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="glass animate-float-soft absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border/60 px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-lg font-bold">500+</p>
              <p className="text-xs text-muted-foreground">
                zufriedene Patienten
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
