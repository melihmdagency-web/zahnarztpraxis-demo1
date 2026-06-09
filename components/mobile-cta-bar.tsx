"use client"

import { CalendarCheck } from "lucide-react"
import { useBooking } from "@/lib/booking-context"

/**
 * Fixed bottom CTA bar shown only on mobile so the single CTA is always reachable.
 */
export function MobileCtaBar() {
  const { openBooking } = useBooking()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 p-3 backdrop-blur-md sm:hidden">
      <button
        type="button"
        onClick={openBooking}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
      >
        <CalendarCheck className="size-5" />
        Kostenlose Beratung buchen
      </button>
    </div>
  )
}
