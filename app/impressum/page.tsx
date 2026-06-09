import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-teal-700 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
      </Link>
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Hinweis: Dies ist eine Demo-/Musterseite. Die folgenden Angaben sind Platzhalter und beziehen sich auf keine reale Praxis.
      </div>
      <h1 className="mt-8 text-3xl font-bold text-slate-900">Impressum</h1>
      <div className="mt-6 space-y-6 text-slate-700">
        <section>
          <h2 className="font-semibold text-slate-900">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">Zahnarztpraxis am Markt<br />Dr. Lena Brandt<br />Markt 1<br />06108 Halle (Saale)</p>
        </section>
        <section>
          <h2 className="font-semibold text-slate-900">Kontakt</h2>
          <p className="mt-2">Telefon: 0345 123 45 67<br />E-Mail: info@zahnarztpraxis-am-markt.de</p>
        </section>
        <section>
          <h2 className="font-semibold text-slate-900">Berufsrechtliche Angaben</h2>
          <p className="mt-2">Berufsbezeichnung: Zahnärztin (Bundesrepublik Deutschland)<br />Zuständige Kammer: Zahnärztekammer Sachsen-Anhalt</p>
        </section>
      </div>
    </main>
  )
}
