import { Phone } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
export function FinalCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Bereit für Ihr neues Lächeln?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Buchen Sie Ihre kostenlose Aligner-Beratung – unverbindlich und mit
            3D-Simulation Ihres möglichen Ergebnisses.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton
            emphasis="hero"
            label="Kostenlose Beratung buchen"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary shadow-lg"
          />
         <Button
            asChild
            variant="outline"
            className="h-13 rounded-xl border-white/70 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white sm:h-14 sm:text-lg"
          >
            <a href="tel:+493451234567" className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
              <Phone className="size-5 shrink-0" />
              <span>0345 123 45 67</span>
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
