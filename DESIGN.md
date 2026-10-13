---
colors:
  sand: "#f4efe6"
  sand-deep: "#e7dfd0"
  paper: "#fffdf8"
  ink: "#1a2418"
  ink-muted: "#3e4a38"
  canopy: "#1b4332"
  canopy-deep: "#0f2a1f"
  on-canopy: "#f4efe6"
  teal: "#0c5c56"
  teal-deep: "#084440"
  amber: "#d4923a"
  amber-ink: "#7a4510"
  line: "#d9d0c2"
  focus: "#0c5c56"
typography:
  font-serif: "Fraunces, Georgia, serif"
  font-sans: "Source Sans 3, sans-serif"
  text-xs: "0.8125rem"
  text-sm: "0.9375rem"
  text-md: "1.0625rem"
  text-lg: "1.35rem"
  text-xl: "1.75rem"
  text-2xl: "2.4rem"
  text-3xl: "3.4rem"
  leading-body: "1.6"
  leading-tight: "1.12"
  tracking-label: "0.14em"
spacing:
  space-2xs: "0.25rem"
  space-xs: "0.5rem"
  space-sm: "0.75rem"
  space-md: "1rem"
  space-lg: "1.5rem"
  space-xl: "2rem"
  space-2xl: "3rem"
  space-3xl: "4.5rem"
  space-4xl: "6.5rem"
radius:
  radius-sm: "0.5rem"
  radius-md: "1rem"
  radius-lg: "1.5rem"
  radius-pill: "999px"
layout:
  content-max: "72rem"
  bp-md: "48rem"
  bp-lg: "64rem"
---

# Costa Rica guide tokens

Use these tokens for every color, size, space, and radius. Do not invent one-off values in CSS.

## Color roles

- **Sand** is the page background. **Paper** is a raised card sitting on sand. **Sand-deep** is a quiet band or inset, used when a section needs to recede without going dark.
- **Ink** is body and heading text on sand, paper, and sand-deep. **Ink-muted** is secondary copy on those same light surfaces. Both pairings meet WCAG AA.
- **Canopy** and **canopy-deep** are the dark rainforest surfaces (header, hero, footer). Text on them uses **on-canopy** only.
- **Teal** is for links, the current nav item, and focus rings on light surfaces. **Teal-deep** is the pressed or hover state of a teal control.
- **Amber** is decorative: large day numbers, short rules, and icon marks. It is not for small text. When amber must be readable copy, use **amber-ink** on sand or paper.
- **Line** is hairline borders and dividers on light surfaces.

## Type

- **Fraunces** carries headings, the hero title, and itinerary day numbers. Keep headings tight (`leading-tight`).
- **Source Sans 3** carries body, navigation, facts, and buttons. Body copy uses `text-md` and `leading-body`. Labels and eyebrows use `text-xs` with `tracking-label` in small caps styling.
- Scale steps are `text-xs` through `text-3xl`. The hero may use `text-3xl`. Section titles use `text-2xl`. Card titles use `text-xl`.

## Space and shape

- Stack related items with `space-sm` or `space-md`. Separate sections with `space-3xl` on small screens and `space-4xl` from the `bp-md` breakpoint up.
- Cards use `radius-md`. Pills and tags use `radius-pill`. The hero photo frame uses `radius-lg`.
- Content sits in `content-max`, with `space-lg` of horizontal padding on small screens and `space-xl` from `bp-md` up.
- Below `bp-md`, navigation collapses to a menu button and cards stack in one column. From `bp-md`, cards use two columns. From `bp-lg`, region cards use three columns where the count allows.
