"use client"

import { useState, type FormEvent } from "react"
import { CalendarCheck, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useBooking } from "@/lib/booking-context"

/**
 * Placeholder booking modal. No real backend — submitting just shows a toast
 * and resets. Mounted once at the app root and controlled via BookingContext.
 */
export function BookingDialog() {
  const { open, setOpen, closeBooking } = useBooking()
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    // Placeholder: simulate a request.
    setTimeout(() => {
      setSubmitting(false)
      closeBooking()
      toast.success("Anfrage gesendet", {
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      })
    }, 700)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mb-1 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CalendarCheck className="size-5" />
          </div>
          <DialogTitle className="text-lg">
            Kostenlose Aligner-Beratung buchen
          </DialogTitle>
          <DialogDescription>
            Unverbindlich und kostenlos. Hinterlassen Sie Ihre Daten – wir
            melden uns für Ihren Wunschtermin.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="booking-name">Name</Label>
            <Input
              id="booking-name"
              name="name"
              placeholder="Ihr vollständiger Name"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="booking-email">E-Mail</Label>
              <Input
                id="booking-email"
                name="email"
                type="email"
                placeholder="name@beispiel.de"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="booking-phone">Telefon</Label>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                placeholder="0345 123 456"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="booking-message">Nachricht (optional)</Label>
            <Textarea
              id="booking-message"
              name="message"
              placeholder="Wann passt es Ihnen am besten?"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="mt-1 h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90"
          >
            {submitting ? "Wird gesendet…" : "Beratung anfragen"}
          </Button>

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <CheckCircle2 className="size-3.5 text-primary" />
            Kostenlos &amp; unverbindlich – keine Verpflichtung
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
