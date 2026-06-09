import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const CASES = [
  {
    name: "Engstand der Frontzähne",
    duration: "5 Monate Behandlung",
    before: "/images/before-1.png",
    after: "/images/after-1.png",
  },
  {
    name: "Lücke & Fehlstellung",
    duration: "7 Monate Behandlung",
    before: "/images/before-2.png",
    after: "/images/after-2.png",
  },
]

export function BeforeAfter() {
  return (
    <section id="ergebnisse" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vorher / Nachher"
          title="Echte Veränderungen, die sich sehen lassen"
          description="Beispielhafte Ergebnisse unserer Aligner-Behandlungen. Ihr persönliches Ergebnis sehen Sie dank 3D-Planung schon in der kostenlosen Beratung."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CASES.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 120}
              className="glass group overflow-hidden rounded-3xl border border-border/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid grid-cols-2 gap-3">
                <figure className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.before || "/placeholder.svg"}
                    alt={`Vorher: ${item.name}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
                    Vorher
                  </figcaption>
                </figure>
                <figure className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.after || "/placeholder.svg"}
                    alt={`Nachher: ${item.name}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    Nachher
                  </figcaption>
                </figure>
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <ArrowRight className="size-5 text-primary" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
