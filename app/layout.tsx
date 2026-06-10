import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { BookingProvider } from '@/lib/booking-context'
import { BookingDialog } from '@/components/booking-dialog'
import { Toaster } from '@/components/ui/sonner'
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Zahnarztpraxis am Markt – Dr. Lena Brandt | Halle (Saale)',
  description:
    'Unsichtbare Aligner in Halle (Saale). Gerade Zähne ohne sichtbare Spange – jetzt kostenlose Beratung buchen.',
  generator: 'v0.app',
  openGraph: {
    title: 'Zahnarztpraxis am Markt – Dr. Lena Brandt | Halle (Saale)',
    description:
      'Unsichtbare Aligner in Halle (Saale). Gerade Zähne ohne sichtbare Spange – jetzt kostenlose Beratung buchen.',
    locale: 'de_DE',
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <BookingProvider>
          {children}
          <BookingDialog />
          <Toaster />
        </BookingProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
