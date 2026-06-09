import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">Zahnarztpraxis am Markt</p>
            <p className="text-sm text-slate-500">Dr. Lena Brandt · Halle (Saale)</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal-600" /> Markt 1, 06108 Halle (Saale)
              </p>
              <a href="tel:+493451234567" className="flex items-center gap-2 hover:text-teal-700">
                <Phone className="h-4 w-4 text-teal-600" /> 0345 123 45 67
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#vorteile" className="hover:text-teal-700">Vorteile</a></li>
              <li><a href="#ablauf" className="hover:text-teal-700">Ablauf</a></li>
              <li><a href="#preise" className="hover:text-teal-700">Preise</a></li>
              <li><a href="#bewertungen" className="hover:text-teal-700">Bewertungen</a></li>
              <li><a href="#faq" className="hover:text-teal-700">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Rechtliches</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/impressum" className="hover:text-teal-700">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-teal-700">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Zahnarztpraxis am Markt. Alle Rechte vorbehalten.</p>
          <p className="mt-1">Demoseite / Musterprojekt – keine echte Zahnarztpraxis.</p>
        </div>
      </div>
    </footer>
  )
}
