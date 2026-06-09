import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const FAQS = [
  {
    question: "Sieht man die Aligner?",
    answer:
      "Nein. Die Schienen sind transparent und im Alltag praktisch unsichtbar – die meisten Menschen bemerken sie gar nicht.",
  },
  {
    question: "Tut die Behandlung weh?",
    answer:
      "Die Aligner sind schmerzfrei. In den ersten Tagen einer neuen Schiene spüren Sie einen leichten Druck – ein Zeichen, dass sie wirkt.",
  },
  {
    question: "Wie lange dauert die Behandlung?",
    answer:
      "Je nach Ausgangslage meist zwischen 4 und 12 Monaten. Ihren genauen Zeitplan sehen Sie schon in der kostenlosen Beratung dank 3D-Planung.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Schon ab 49 €/Monat mit flexibler Ratenzahlung und 0% Finanzierung. Den genauen Preis besprechen wir unverbindlich in Ihrer kostenlosen Beratung.",
  },
  {
    question: "Funktioniert das wirklich bei mir?",
    answer:
      "In der kostenlosen Beratung prüfen wir Ihre Zähne und zeigen Ihnen per 3D-Simulation Ihr mögliches Ergebnis – ganz ohne Verpflichtung.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Häufige Fragen"
          title="Antworten auf Ihre wichtigsten Fragen"
          description="Alles, was Sie vor Ihrer kostenlosen Beratung wissen möchten."
        />

        <Reveal className="mt-10">
          <Accordion className="glass rounded-3xl border border-border/60 px-6 shadow-sm sm:px-8">
            {FAQS.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <CtaButton emphasis="hero" />
        </Reveal>
      </div>
    </section>
  )
}
