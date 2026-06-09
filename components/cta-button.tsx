"use client"

import { CalendarCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useBooking } from "@/lib/booking-context"

const CTA_LABEL = "Kostenlose Aligner-Beratung buchen"

type CtaButtonProps = {
  /** Override the visible label. Defaults to the single global CTA. */
  label?: string
  className?: string
  /** Visual emphasis. "hero" renders a larger, more prominent button. */
  emphasis?: "default" | "hero"
  withIcon?: boolean
}

/**
 * The single, reusable CTA used across the whole page.
 * Always opens the placeholder booking dialog.
 */
export function CtaButton({
  label = CTA_LABEL,
  className,
  emphasis = "default",
  withIcon = true,
}: CtaButtonProps) {
  const { openBooking } = useBooking()

  return (
    <Button
      onClick={openBooking}
      className={cn(
        "font-semibold shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30",
        emphasis === "hero"
          ? "h-13 rounded-xl px-7 text-base sm:h-14 sm:text-lg"
          : "h-11 rounded-xl px-5 text-sm sm:text-base",
        className,
      )}
    >
      {withIcon && <CalendarCheck className="size-5" />}
      {label}
    </Button>
  )
}

export { CTA_LABEL }
