# Implementation Kickstart — Zahnarztpraxis am Markt (Dr. Lena Brandt)

Single-page, conversion-focused dental landing page. Next.js App Router +
Tailwind v4 + shadcn/ui + lucide-react. Mobile-first. ALL visible copy in German.
Prototype with example content. One single CTA everywhere:
**"Kostenlose Aligner-Beratung buchen"**.

## Stack & Conventions
- Next.js 16 (App Router), Tailwind v4, shadcn/ui, lucide-react.
- Font: Geist Sans (already wired in `layout.tsx`).
- Components kept short and reusable (≤ ~600 lines/file), no global state yet.
- No email capture. CTA opens a placeholder modal booking form.
- Full width layout. Basic SEO via `metadata`.

## File Plan
```
app/
  layout.tsx                 # German lang, SEO metadata, theme-color
  page.tsx                   # Composes all sections
  impressum/page.tsx         # Legal placeholder
  datenschutz/page.tsx       # Legal placeholder
  globals.css                # Design tokens (teal accent) + reveal/glass utils
components/
  site-header.tsx            # Sticky header + mobile burger menu
  mobile-cta-bar.tsx         # Fixed bottom CTA bar (mobile only)
  booking-dialog.tsx         # Placeholder modal booking form (shadcn Dialog)
  cta-button.tsx             # Single reusable CTA, opens booking dialog
  reveal.tsx                 # On-scroll reveal wrapper (IntersectionObserver)
  sections/
    hero.tsx
    trust-bar.tsx
    before-after.tsx
    how-it-works.tsx
    treatment-features.tsx
    pricing.tsx
    social-proof.tsx
    faq.tsx
    site-footer.tsx
lib/
  booking-context.tsx        # Lightweight context to open the booking dialog
```

## Sections (exact order)
1. Sticky header — clinic name/logo + "Termin buchen" + burger menu (mobile).
2. Hero — bold German headline, subheadline, before/after image, CTA.
3. Trust bar — Google 4,9★, 500+ Patienten, Zertifizierter Anbieter.
4. Vorher / Nachher — before-after gallery (generated images).
5. So funktioniert's — 3 columns (Beratung, Plan, Behandlung).
6. Ihre Behandlung im Überblick — 3 feature columns.
7. Faire & flexible Preise — anchor "ab 49 €/Monat", 0% Finanzierung, CTA only.
8. Das sagen unsere Patienten — 4 stat cards + 3 testimonials w/ avatars.
9. Häufige Fragen — shadcn Accordion, 5 Q&A, CTA below.
10. Footer (Option A) — logo + tagline, "Nach oben" + secondary CTA, legal strip.

## CTA Placement (≥3, target ~5)
Header, Hero, Pricing, FAQ end, Footer + mobile fixed bottom bar.

## Components to install (shadcn)
`button` (present), `dialog`, `accordion`, `input`, `label`, `textarea`,
`sonner` (toast on placeholder submit).

## Images (GenerateImage)
- Hero before/after smile composite.
- 2–3 before/after gallery pairs.
- 3 testimonial avatars (Sarah, Daniel, Lena).

## Design (see DESIGN_TOKENS.md)
- Medical teal accent ONLY on CTAs / stars / key icons.
- Clean light theme, generous whitespace, rounded-2xl glass cards.
- Subtle hover scale + on-scroll reveal; smooth scroll for "Nach oben".
- Fully responsive: tablet + mobile with burger nav.

## Verification
Browser check: desktop, tablet, mobile breakpoints; burger menu; booking modal;
scroll reveals; "Nach oben" smooth scroll; legal pages reachable.
