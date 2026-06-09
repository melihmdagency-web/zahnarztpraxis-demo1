import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-teal-700 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
      </Link>
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Hinweis: Dies ist eine Demo-/Musterseite. Der folgende Text ist ein Platzhalter und ersetzt keine rechtsgültige Datenschutzerklärung.
      </div>
      <h1 className="mt-8 text-3xl font-bold text-slate-900">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-6 text-slate-700">
        <section>
          <h2 className="font-semibold text-slate-900">1. Verantwortlicher</h2>
          <p className="mt-2">Zahnarztpraxis am Markt, Dr. Lena Brandt, Markt 1, 06108 Halle (Saale).</p>
        </section>
        <section>
          <h2 className="font-semibold text-slate-900">2. Kontaktformular</h2>
          <p className="mt-2">Bei einer Beratungsanfrage verarbeiten wir Ihre Angaben (Name, E-Mail, Telefon, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
        </section>
        <section>
          <h2 className="font-semibold text-slate-900">3. Ihre Rechte</h2>
          <p className="mt-2">Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch gemäß DSGVO.</p>
        </section>
      </div>
    </main>
  )
}
