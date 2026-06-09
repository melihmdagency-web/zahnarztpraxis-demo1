import { CalendarClock, ScanLine, Smile } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const STEPS = [
  {
    icon: CalendarClock,
    step: "01",
    title: "Kostenlose Beratung",
    description:
      "Wir lernen Sie kennen, schauen uns Ihre Zähne an und beantworten alle Ihre Fragen – völlig unverbindlich.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Individueller Plan",
    description:
      "Mit einem digitalen 3D-Scan erstellen wir Ihren persönlichen Behandlungsplan und zeigen Ihr mögliches Ergebnis.",
  },
  {
    icon: Smile,
    step: "03",
    title: "Unsichtbare Behandlung",
    description:
      "Sie tragen Ihre transparenten Aligner im Alltag – diskret, herausnehmbar und mit regelmäßiger Betreuung.",
  },
]

export function HowItWorks() {
  return (
    <section id="ablauf" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="So funktioniert's"
          title="In drei einfachen Schritten zum geraden Lächeln"
          description="Transparent, planbar und ohne Überraschungen – von der ersten Beratung bis zum Ergebnis."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <Reveal
              as="li"
              key={item.step}
              delay={index * 120}
              className="glass group relative rounded-3xl border border-border/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 text-4xl font-bold text-primary/15">
                {item.step}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
