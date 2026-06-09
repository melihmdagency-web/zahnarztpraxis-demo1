import Image from "next/image"
import { Star } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const STATS = [
  { value: "500+", label: "behandelte Patienten" },
  { value: "4,9★", label: "bei Google" },
  { value: "Ø 6 Monate", label: "Behandlungsdauer" },
  { value: "98%", label: "Weiterempfehlung" },
]

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    age: 29,
    avatar: "/images/avatar-sarah.png",
    quote:
      "Ich hatte Angst, dass man die Schiene sieht – aber niemand hat etwas bemerkt. Nach 5 Monaten liebe ich mein Lächeln endlich.",
  },
  {
    name: "Daniel K.",
    age: 34,
    avatar: "/images/avatar-daniel.png",
    quote:
      "Super entspannt von der ersten Beratung an. Alles digital geplant, ich wusste genau, was mich erwartet. Absolut empfehlenswert.",
  },
  {
    name: "Lena R.",
    age: 26,
    avatar: "/images/avatar-lena.png",
    quote:
      "Endlich gerade Zähne ohne diese sichtbare Spange. Das Team in Halle war total freundlich und der Preis pro Monat war fair.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <section id="bewertungen" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Das sagen unsere Patienten"
          title="Lächeln, die für sich sprechen"
          description="Vertrauen, das auf echten Erfahrungen basiert – ruhig, ehrlich und überzeugend."
        />

        {/* Results bar */}
        <Reveal className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6 sm:p-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        {/* Testimonials */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 120}
              className="glass flex flex-col rounded-3xl border border-border/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {`„${item.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.avatar || "/placeholder.svg"}
                  alt={`Porträt von ${item.name}`}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.age} Jahre
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
