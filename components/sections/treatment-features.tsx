import { Box, EyeOff, HeartHandshake } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const FEATURES = [
  {
    icon: Box,
    title: "3D-Behandlungsplan",
    description:
      "Sehen Sie Ihr zukünftiges Lächeln schon vor dem Start. Dank digitaler 3D-Planung wissen Sie genau, was Sie erwartet.",
  },
  {
    icon: EyeOff,
    title: "Unsichtbar & herausnehmbar",
    description:
      "Transparente Schienen, die im Alltag niemand bemerkt – einfach herausnehmbar zum Essen und Zähneputzen.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    description:
      "Regelmäßige Kontrollen und fachkundige Begleitung durch Dr. Brandt und ihr Team – von Anfang bis Ende.",
  },
]

export function TreatmentFeatures() {
  return (
    <section id="vorteile" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ihre Behandlung im Überblick"
          title="Moderne Zahnkorrektur, die in Ihr Leben passt"
          description="Komfortabel, diskret und durchgehend begleitet – damit Sie sich rundum gut aufgehoben fühlen."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 120}
              className="glass group rounded-3xl border border-border/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
