import { Star, Users, BadgeCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const BADGES = [
  {
    icon: Star,
    title: "Google 4,9★",
    subtitle: "200+ Bewertungen",
  },
  {
    icon: Users,
    title: "500+ Patienten",
    subtitle: "erfolgreich behandelt",
  },
  {
    icon: BadgeCheck,
    title: "Zertifiziert",
    subtitle: "Geprüfter Aligner-Anbieter",
  },
]

export function TrustBar() {
  return (
    <section aria-label="Vertrauen" className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BADGES.map((badge) => (
              <li
                key={badge.title}
                className="flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-center sm:justify-start sm:text-left"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <badge.icon className="size-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-bold sm:text-base">
                    {badge.title}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    {badge.subtitle}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
