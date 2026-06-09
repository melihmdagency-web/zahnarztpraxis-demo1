# Design Tokens — Zahnarztpraxis am Markt

Conversion-focused dental landing page. Clean, light, medical aesthetic with a
single dominant accent color reserved exclusively for CTAs.

## Color Strategy

Total palette: 5 roles (1 accent + neutrals + 1 supporting tint).

| Role | Token | OKLCH | Usage |
|------|-------|-------|-------|
| Accent (CTA only) | `--primary` | `oklch(0.62 0.13 195)` | Medical teal. ONLY on CTA buttons, star ratings, key icons. |
| Accent foreground | `--primary-foreground` | `oklch(0.99 0 0)` | Text on CTA buttons. |
| Background | `--background` | `oklch(1 0 0)` | Page background (white). |
| Foreground | `--foreground` | `oklch(0.21 0.02 230)` | Primary text (cool near-black). |
| Card | `--card` | `oklch(0.99 0.004 220)` | Card surfaces (used with glass effect). |
| Muted | `--muted` | `oklch(0.96 0.006 220)` | Section bands / subtle fills. |
| Muted foreground | `--muted-foreground` | `oklch(0.5 0.02 230)` | Secondary text, captions. |
| Border | `--border` | `oklch(0.92 0.006 220)` | Hairline borders, dividers. |
| Secondary | `--secondary` | `oklch(0.96 0.01 195)` | Soft teal-tinted badges/chips (NOT a CTA). |

### Rules
- The teal accent (`--primary`) is never used for large background fills or
  body text. It is reserved for CTA buttons, star ratings, and a few key icons
  so the CTA stays impossible to miss.
- Everything else stays on a clean light neutral system.
- No gradients on primary elements. Subtle teal tint allowed for badges only.

## Typography
- Geist Sans (`--font-sans`) for everything — headings and body.
- Headings: tight tracking, `font-semibold`/`font-bold`, `text-balance`.
- Body: `leading-relaxed`, `text-muted-foreground` for secondary copy.
- Geist Mono available but unused on this page.

## Radius & Surfaces
- `--radius: 1rem` — generous rounding for a soft medical feel.
- Cards: rounded-2xl, subtle shadow, subtle glass effect
  (`bg-card/70 backdrop-blur-sm border border-border/60`).
- Hover: `hover:scale-[1.02]` transition on interactive cards.

## Motion
- On-scroll reveal via a reusable `Reveal` wrapper (IntersectionObserver +
  fade/translate). Respects `prefers-reduced-motion`.
- Subtle hover scale on cards and CTAs.
- Smooth scroll for in-page anchors ("Nach oben").
