---
name: Stellar Infomatica
description: A diagnostic lab's twelve-product suite shown as frames on one cutting-bench select rail
colors:
  ink: "#0a0a0a"
  char: "#1a1a1a"
  spool: "#2e2e2e"
  spool-light: "#3d3d3d"
  accent: "#8f6bff"
  tape: "#a98cff"
  punch: "#ffffff"
  edge: "#f2f2f2"
  edge-dim: "#b8b8b8"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.8rem, 6.6vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 12vw, 8rem)"
    fontWeight: 300
    lineHeight: 0.8
    letterSpacing: "normal"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
  plate:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  perf: "0.625rem"
  frame-gap: "0.75rem"
  gutter: "1rem"
  gutter-sm: "1.5rem"
  cell: "1.75rem"
  scene: "6rem"
  scene-lg: "7rem"
components:
  plate-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem"
    height: "2.75rem"
  plate-primary-hover:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
  plate-primary-lg:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 3rem"
    height: "3.5rem"
  plate-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem"
    height: "2.75rem"
  plate-secondary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  plate-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem"
    height: "2.75rem"
  plate-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.tape}"
  window:
    backgroundColor: "{colors.punch}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.375rem"
  trim:
    backgroundColor: "{colors.char}"
    textColor: "{colors.edge}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.625rem 0.75rem"
  tape-band:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.625rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.edge-dim}"
    typography: "{typography.label}"
    padding: "0 0 0.25rem 0"
  nav-link-hover:
    textColor: "{colors.edge}"
  nav-link-current:
    textColor: "{colors.edge}"
  cell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.edge}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  header-band:
    backgroundColor: "{colors.char}"
    textColor: "{colors.edge}"
    rounded: "{rounded.none}"
    padding: "2.5rem 0"
---

# Design System: Stellar Infomatica

## Overview

**Creative North Star: "The Cutting Bench Rail"**

The site is a film editor's cutting bench. An ink-black field is the bench top; one grained purple rail with square sprocket holes runs full-bleed across it and holds the twelve products as numbered frames; the product screens live only inside punched white windows cut into those frames; and what the visitor needs to know about state is a physical mark on the material rather than a hue or a badge. The world was chosen as a refusal of the healthcare-SaaS hero-plus-feature-grid, and the build keeps that refusal: there is no hero image, no icon feature grid, no gradient wash, no logo wall. The direction contract that governed the build is emitted verbatim as the first child of `<body>` in `app/layout.tsx`; its OWN-WORLD line still says "grain-accent rail" and the surface brief says "grain-orange". That wording is historical. The accent shipped as purple and the token is named `accent`; nothing orange remains in the build.

Density is editorial and physical, and the register is industry-facing rather than filmic. Large condensed caps headlines sit hard on 0.92 line-height; frame numerals (01 to 12) ride the sprocket strips and the tick scale; running copy is carried on trims (bordered strips with perforated edges), on char bands, or inside windows. The page vocabulary is the laboratory's: "Products", "Why Stellar", "Clinical logic", "Request a demonstration", "Governance", "Roadmap", "Status", "Works with". A fixed film-grain layer (`.grain`, 7% overlay, static) sits over the whole page and a coarser grain is baked into the rail's accent field, so the materials read as paper and tape rather than flat fills. Motion is restrained to the physical: the rail scrubs with native inertia and scroll-snap, drag-scrubs under the mouse, the tape flag springs to the frame in view, and plates shift tone on hover. Nothing swings, tilts, pulses or glows.

The state vocabulary as shipped: **tape flag** = the frame in view on the rail; **grease tick** = an available feature or a governance capability; **tape band reading "Available"** = a released capability on a product page; **pin plus perforated trim captioned "Planned"** = a roadmap item (home roadmap section and product pages). Status colours (green, amber, red, blue) exist only inside the miniature product screens, where they depict the product's own UI.

**Key Characteristics:**
- One field (ink), one accent (purple, with a lighter tape tone), charcoal steps for bands, trims and hairlines, and white reserved for punched windows.
- The grained accent surface appears once, on the rail; everywhere else the accent is a sprocket strip, a stroke, a numeral, a plate face or a word.
- One family at two widths: Barlow Condensed caps for display, headlines, numerals, labels and plates; Barlow sentence case for running copy.
- State is a mark (tape flag, grease tick, tape band, pin and trim), never a colour change or a glow.
- Sprocket strips are the edge treatment on every transition between the ink field and a char band or the rail.
- Plates (buttons) are punched metal tags with hole columns, one soft offset shadow, hover to the tape tone.
- Every image on the site is inline SVG authored in code; `app/icon.svg` is the only authored image file and no rasters ship.

## Colors

A one-accent palette on a near-black field: three charcoal steps carry bands, trims and hairlines; one purple accent with a lighter tape tone marks the rail, the strips and every interactive stroke; white appears only as the punched window.

### Primary
- **Accent** (`{colors.accent}`): the rail field (grained via `field-accent`), every sprocket strip between ink and a char band, primary plate faces, the frame numerals on ink, grease ticks, the scene word in every section head and the hairline beneath it, the current-page nav underline, the one highlighted line of the hero headline, the email address, the secondary plate stroke and text, the provenance quote's left rule, focus rings, selection, the scrollbar thumb and the caret. Inside the screen vignettes it is the product's brand colour: the title-bar dot, the primary button, the active tab underline and chart bars.
- **Tape** (`{colors.tape}`): the hover state of every accent thing (primary plate faces, accent links, ink-plate text) and the body of the tape flag and tape band. It never appears at rest on a surface.

### Neutral
- **Ink** (`{colors.ink}`): the page field, text on accent, the hole colour of sprockets cut into accent, the rail frames, the cells of every hairline grid, the navbar at 95%.
- **Char** (`{colors.char}`): the bench's one raised band. Page headers on product, clinical and legal pages, the contact close, the `ProductFrame` article, the product page's window surround, hung trims, the hover fill of list rows, the scrollbar track.
- **Spool** (`{colors.spool}`): the default border colour, the 1px gap of every hairline grid, dividers in feature lists and the mobile nav, the footer's meta rule.
- **Spool Light** (`{colors.spool-light}`): trim borders, the burger's outline, the navbar's tagline rule, the inert frame numerals in the footer.
- **Edge** (`{colors.edge}`): primary text on ink and char; the hole colour of the fine perforation on trims (at 40% opacity).
- **Edge Dim** (`{colors.edge-dim}`): secondary text, labels at rest, the pin wire (at 50 to 60% opacity).
- **Punch** (`{colors.punch}`): the punched window only. It is never a background for copy, a card or a section.

The theme also declares `accent-deep` (#6d4fd6) and `accent-ink` (#1d1440). `accent-deep` is used once, as the dark thread of the tape flag's weave; `accent-ink` and the shadcn `destructive` red are unused by any shipped surface. None of the three is part of the system.

### Named Rules
**The One Accent Field Rule.** The grained accent surface (`field-accent`) exists only on the rail. Everywhere else the accent appears as a strip, a stroke, a numeral, a plate face or a word, never as a section background. A new section that wants the accent gets a sprocket strip, not a field.

**The Framed Char Rule.** Char is the only grey that forms a section background, and a char band is always closed top and bottom by an accent sprocket strip with ink holes (`PerfEdge hole="ink"`, 1rem on page headers and the contact close, 1.25rem on `ProductFrame`). An unframed char section does not exist in this world.

**The Punched Window Rule.** White appears only as a window with an inset hairline (`inset 0 0 0 1px rgba(0,0,0,0.25)`) and a product screen or diagram inside it. A white panel without content punched into it does not exist.

**The State Is a Mark Rule.** No site colour is a status colour. Accent is the rail's material, not "active"; edge-dim is secondary text, not "disabled". Status on the site is carried by the tape flag, grease tick, tape band and pin. Green, amber, red and blue exist only inside vignettes as the product's own UI semantics.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif), weights 300 / 400 / 500 / 600 / 700 via `next/font/google`
**Body Font:** Barlow (with system-ui, sans-serif), weights 400 / 500 / 600
**Label Font:** Barlow Condensed, caps, tracked (`label-caps`)

**Character:** One condensed grotesk does all the speaking. Headlines, section heads, frame names, numerals, plates and labels are Barlow Condensed set in caps on 0.92 line-height with almost no tracking at display size, opening to 0.12 to 0.14em on labels and plates. Running copy is Barlow in sentence case. The pairing is one family at two widths, so the voice never changes, only the register. Tabular figures are on at the body (`"tnum" 1, "ss01" 1`), so every numeral, count and sample ID aligns.

**Adaptation from the source world, confirmed in review:** the OWN-WORLD block prescribes a single condensed grotesk. The build sets running copy (product summaries, feature lines, provenance, governance cells, the legal pages, the footer blurb) in Barlow rather than Barlow Condensed as a readability adaptation for long product and legal text. Running copy is carried on trims, on char bands, in hairline cells or inside windows. Display, labels and numerals remain Barlow Condensed caps. Future surfaces inherit this split.

### Hierarchy
- **Display** (500, `clamp(2.8rem, 6.6vw, 4.6rem)`, 0.92): the home headline, two lines with the second line as a span in accent. Page headers use the same shape at `clamp(2.6rem, 7vw, 5rem)` (product), `clamp(2.6rem, 7vw, 4.5rem)` (legal) and `clamp(3rem, 8vw, 6rem)` (clinical); the contact close h2 at `clamp(2.6rem, 6vw, 4.4rem)`. Caps, `text-wrap: balance`, 0.01em tracking, weight 500 throughout.
- **Numeral** (300, `clamp(4rem, 12vw, 8rem)`, 0.8): the frame number on a product page header, tabular, accent, set light so it reads as a scale mark rather than a headline.
- **Headline** (400, 2.6rem at base / 3.4rem at `md`, 0.92): `SceneHead`, the h2 of every section, with the scene word in accent (`01.`, `Why Stellar.`, `Governance.`, `Roadmap.`, `A.`) before the title in edge, and an accent hairline beneath.
- **Title** (400, 2rem, 0.92): h3 in cells and product page h2s (`What it does`, `Status`, `Works with`). The scale steps around it by context: `ProductFrame` names 2.2rem / 2.5rem at `md`, legal h2 1.9rem, the demo box 1.8rem, governance h3 1.7rem, clinical vector cells 1.6rem, prev / next names 1.4rem, rail frame names 1.25rem.
- **Body** (400, 1.0625rem, 1.5, Barlow): running copy on trims, in cells and in the footer. Lead paragraphs step to 1.125 to 1.35rem; trim feature lines and provenance drop to 0.9 to 0.95rem with `leading-snug`. Measure is capped at 42 to 60ch on trims and bands, 72 to 80ch on legal and note paragraphs.
- **Label** (400, 0.8125rem, 0.12em, caps, line-height 1): `label-caps`; nav links, the "Selected · product · platform" readout, platform lines, "Planned", "Illustrative screen with synthetic data", "Last updated", footer meta, the rail's Previous / Next controls, back-links.
- **Plate** (400, 0.9rem at `md` / 1.05rem at `lg`, 0.14em, caps): the text on plates. Frame numerals on ink, on sprocket strips and on the tick scale use the same family at 0.75 to 0.95rem with 0.1 to 0.16em tracking; the wordmark is 1.35rem at 0.06em with "Infomatica" at weight 300.

### Named Rules
**The One Voice Rule.** Everything that is not running copy is Barlow Condensed in caps. There is no third face, no serif, no italic. The screen vignettes use the same two families at miniature sizes (8 to 11px) with tabular figures for IDs and values.

**The Numeral Rule.** Frame numbers are always two digits (`01` to `12`), always Barlow Condensed, always tabular. The numeral is printed on the sprocket strip, the tick scale, or beside the name in a list, never inside the window.

**The Copy Has a Carrier Rule.** Barlow running copy sits on a trim, a char band, a hairline cell or in a window. On the accent field (the rail) only numerals, labels and the tape flag appear; no paragraph is set on the accent.

## Layout

The container is 80rem (`max-w-[80rem]`) with a 1rem gutter at base and 1.5rem from `sm`. The rail and every char band are full-bleed; the rail's inner padding is computed as `max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))` so the first frame lines up with the container's left edge. The navbar is fixed, 4rem tall plus a 0.625rem accent sprocket strip; `main` is padded 4.6rem to clear it.

The first viewport is deliberately short: the headline top-left in a 1.2fr / 1fr grid at `lg` with the lead paragraph, the "Request a demonstration" plate and an "All products" arrow link in the right column, and the rail starting inside the first screen at both desktop and phone widths. Sections after the rail step down the page at 6rem (`mt-24`: Why Stellar, Governance) and 7rem (`mt-28`: product groups, Roadmap, Contact), each opened by a `SceneHead` with an accent hairline, with 2.5rem (`mt-10`) between the head and its content. Facts and capabilities use the hairline grid: cells with `gap-px` on a spool background so the 1px gap draws the lines, 1.75rem internal padding (1.5rem on the clinical vector cells), 2 to 3 columns from `sm` / `md`.

The rail itself: frames are 15rem wide at base, 17rem at `sm`, 19rem at `lg`, with a 0.75rem gap. Narrow screens drop the number of frames visible, never the frame size. The scroller uses `scroll-snap-type: x mandatory` with `scroll-padding-inline` matched to the rail padding, mouse-drag scrubbing (pointer events, 4px dead zone), Arrow / Home / End keys on the listbox, and `sessionStorage` persistence of the active frame. Above the frames sits a tick scale (`rail-ticks`: a hairline every fifth of a frame at 40% height, a 100%-tall major at frame pitch) with the numerals riding it in ink at 90%; the tape flag hangs over the top-left corner of the frame in view and tracks it with a spring.

Trims hang on pins under the rail, in the roadmap section and on product pages: a wire (`h-px`, edge-dim at 50 to 60%), a `Pin` per trim, the trim overlapping the pin by 0.25rem, 2 columns at base, 3 to 5 from `sm` / `lg`. Under the rail the trims carry the active product's first four feature lines as text, not stills, because exactly one screen vignette exists per product (confirmed in review); the fifth column holds the "View {product}" plate and the "All products" link.

Product pages run: char header band with the back-link, group readout, numeral and name; the large window on a char surround closed by a 0.875rem strip; a 1.1fr / 1fr grid of summary, provenance and "What it does" beside the Status, "Works with" and demo aside; a two-cell prev / next hairline nav; an "All products" secondary plate. Legal pages set a 72ch column of 1.0625rem copy at `leading-relaxed`.

Breakpoints are Tailwind v4 defaults: `sm` 40rem, `md` 48rem, `lg` 64rem. `prefers-reduced-motion` collapses every transition and animation to 0.01ms; the rail then jumps instead of smoothing and the tape flag moves in zero time.

## Elevation & Depth

Depth is material, not atmospheric. The page is flat ink under a static 7% grain; depth appears only where one thing physically lies on another: a plate on the bench, tape on a sprocket, a window punched through a frame, a pin's foot on the wire. There are no glows, no coloured shadows, no blur haloes anywhere on the site. The only blur is the navbar's 2px backdrop over 95% ink.

### Shadow Vocabulary
- **Plate lift** (`box-shadow: 0 3px 8px -2px rgba(0,0,0,0.5)`): every plate at rest, all three tones. The shadow never changes on hover; hover is the tape tone, press is a 1px translate.
- **Window inset** (`box-shadow: inset 0 0 0 1px rgba(0,0,0,0.25)`): the punched edge of every white window on rail frames, product frames and product pages.
- **Active frame ring** (`box-shadow: 0 0 0 3px var(--color-ink), 0 0 0 5px var(--color-edge)`): the frame in view on the rail, a doubled key-line rather than a shadow.
- **Tape drop** (`feDropShadow dy=3 stdDeviation=2.5 flood-opacity=0.55` inside the SVG): the tape flag's own shadow onto the rail; the tape band uses `0 1px 2px rgba(0,0,0,0.45)`.
- **Rail focus** (`inset 0 0 0 3px var(--color-ink)`): keyboard focus on the scroller. Elsewhere focus is the global 2px accent outline at 3px offset.

### Named Rules
**The No Glow Rule.** Shadows are black, soft and short (8px blur or less) and only sit under things that are physically lifted: plates, tape, the pin's foot. Nothing emits light, and the accent never casts a coloured shadow.

**The Grain Is Still Rule.** The fixed `.grain` overlay (7% opacity, overlay blend, 220px fractal-noise tile) and the coarser rail grain (`field-accent`, 160px tile at 20% alpha) are the only texture, and neither moves. New surfaces inherit the grain by being on the page; it is never re-applied locally.

## Shapes

Hard corners everywhere. The world's radius token is 2px (`--radius` 2px, `lg` 3px, `xl` 4px) and in practice the site renders square: plates, windows, trims, cells, bands, frames and the navbar burger are all 0 radius. The 2 to 3px step appears only inside vignette panels and chips, where it is the product's own UI. The only circles are the plate holes (0.375rem, three per column), the pin head, and the vignette status dots.

Edges are perforated. Every transition between the ink field and the rail or a char band is a sprocket strip: 0.6 x 0.5rem square holes on a 1.25rem pitch (`sprocket-x`), ink-coloured when cut into accent, accent-coloured when cut into an ink rail frame. Trims carry a finer round perforation in edge at 40% (`perf-x` via `PerfEdge hole="edge"`, 0.625rem tall). Strip heights: 1rem on the rail, page headers, the contact close and the footer; 1.25rem on `ProductFrame`; 0.875rem under the product page window; 0.75rem on rail frames; 0.625rem on trims and the navbar.

Recurring silhouettes: the punched 35mm frame (the `Mark`, `app/icon.svg`, every rail frame), the folded tape strip with a torn foot (`TapeFlag`), the push pin, and the plate with hole columns. Lines are hairlines: 1px borders in spool or spool-light, an accent 1px rule under scene heads, a 1px accent/60 left rule on provenance quotes, and a 1px accent border on the product page's demo box.

## Components

### Buttons (Plates)
A plate is a punched metal tag: a 0.375rem hole column at each end, condensed caps text, hard corners, one soft shadow. Tactile and matter-of-fact.
- **Shape:** square (0 radius), 2.75rem tall at `md` with 2.25rem side padding; 3.5rem tall at `lg` with 3rem side padding. Holes are three circles per side, 0.25rem apart, 0.375rem in from the edge.
- **Primary:** accent face, ink text, ink holes. "Request a demonstration" in the navbar (md), the hero and contact close (lg), the product page demo box (md, full width).
- **Secondary:** transparent face, 1px accent border, accent text, outlined holes. "View {product}" under the rail and on every `ProductFrame`, "All products" on product pages, "View Stellar BioSentry" on the clinical page.
- **Ink:** ink face, accent text, accent holes, 1px accent/60 border. Defined for use on the accent field; no shipped surface currently places a plate on the rail.
- **Hover / Focus:** primary fills tape; secondary fills accent with ink text; ink brightens its border and shifts text to tape. 200ms ease-out on background, colour and transform. Press translates 1px down. Focus is the global accent outline.
- **Text links:** `label-caps` in edge-dim with an inline arrow icon, hover to accent (on ink) or to edge (on char headers). The support address in the footer and contact close is display-size accent at 1.4rem, hover tape. Inline links in running copy are edge, underlined, hover accent.

### Icons
Three arrows (left, right, down) at 1em, 1.5 stroke, square caps, drawn to match the mark. The burger is the same stroke idiom at 2px with round caps. No icon library ships; every icon is inline SVG in `primitives.tsx`.

### Windows
The only surface that is white. Punch background, ink text, inset hairline, 0.375rem padding on rail frames, 0.5rem on `ProductFrame`, 0.5 to 0.75rem on product pages; inside sits a `ScaledScreen` rendering a vignette at a 560 / 640 / 720px design width scaled to fit at 16:10. Every vignette prints an "Illustrative data" tag in its title bar, and the product page window carries the `label-caps` caption "Illustrative screen with synthetic data". Vignettes have their own interior chrome palette (`#0f1115` field, `#13161c` bar, `#171a20` panel, white/10 rules, accent for the brand dot and primary button, status dots and chips in `#35c46a` ok / `#f2b134` warn / `#ff4d3d` err / `#4aa8ff` info) which depicts the product UI and does not leak onto the site. The clinical page's diagrams (`PathologyGrid`, `MoMExplainer`) sit in the same punched windows.

### Trims
Running copy's carrier. A bordered strip (1px spool-light) on char, a fine edge perforation top and bottom at 40%, 0.625 x 0.75rem text padding, Barlow at 0.9rem `leading-snug` in edge. Hung trims sit under a `Pin` and overlap it by 0.25rem; the roadmap trim adds the product name as a `label-caps` line in accent above the feature line and "Planned" in edge-dim below it, and the whole trim is a link whose border turns accent on hover. The footer hangs its legal links the same way as single-line trims at 0.85rem. On `ProductFrame` the trim grows to a full ink column with the frame name, platform label, summary, four grease-ticked feature lines, a provenance quote and a secondary plate.

### Frames
- **Rail frame:** 15 / 17 / 19rem wide, ink, accent sprocket strips top and bottom (0.75rem), numeral in accent and the short line in `label-caps` on the first row, the window, then the name at 1.25rem caps. Active frame carries the doubled key-line ring; inactive frames sit at 95% opacity and lift to 100% on hover.
- **Product frame (`ProductFrame`):** a char article with 1.25rem accent sprocket strips top and bottom, the numeral printed on the top strip in a small accent tag at weight 500, a 1.15fr / 1fr grid of window and trim that alternates sides down the page.
- **Cells:** the hairline grid (`gap-px border border-spool bg-spool`, ink cells at 1.75rem padding). Used for Why Stellar facts, the four governance capabilities (each led by a grease tick), clinical input vectors, "Works with" rows, and prev / next navigation. Rows in a list variant hover to char.

### Header Bands
Product, clinical and legal page headers and the contact close are char bands framed by 1rem accent sprocket strips. Inside: a `label-caps` back-link with an arrow (and the group readout on product pages), the display headline in edge at weight 500, and a `label-caps` or body line in edge-dim beneath. Padding 2.5rem at base, 3.5rem at `md` (5rem on the clinical header); the contact close runs 4rem / 6rem.

### State Marks
- **Tape flag:** 4 x 7.5rem SVG; woven tape pattern in tape with lighter (`#b9a3ff`) and darker (`#6d4fd6`) threads, a fold band with a falling shadow, torn foot, the frame numeral in grease pencil at weight 600. One per rail, over the frame in view, spring-tracked (`stiffness 260, damping 28`).
- **Grease tick:** 1.25rem filled hand-stroke in accent through `filter: url(#grease)` (fractal-noise displacement, scale 1.6). One per available feature line and per governance capability.
- **Tape band:** a small rotated (-1.5 degrees) strip of striped tape (`tape` / `#b9a3ff` at 2px) reading "Available", 0.75rem caps, on product page Status rows.
- **Pin:** 0.875 x 1.5rem SVG; radial-shaded accent head (`#d2c4ff` to `#8f6bff` to `#3e2a8a`), grey shaft, a dark foot ellipse. Carries every hung trim and the footer's legal links.
- **Grease cross:** defined in `primitives.tsx` and as a CSS utility but mounted on no page. It is vocabulary in reserve, not a shipped state.

### Section Heads
`SceneHead`: the scene word in accent followed by the title in edge, an optional 60ch line in edge-dim, and a 1px accent rule under the whole row. An optional right slot takes controls. Scene words as shipped: product group numbers (`01` to `04`), "Why Stellar", "Governance", "Roadmap", and letters `A` to `C` on the clinical page.

### Navigation
Fixed ink/95 bar, 4rem tall, wordmark left (mark plus "STELLAR Infomatica" with the second word at weight 300), the tagline "Laboratory software suite" in `label-caps` behind a spool-light hairline at `lg`, links "Products / Why Stellar / Clinical logic / Contact" in `label-caps` edge-dim with a transparent bottom border that turns accent on the current page and text that lifts to edge on hover, and a primary plate at the end. A 0.625rem accent sprocket strip closes the bar. Below `md` the links collapse behind a square spool-light burger into a stacked list with spool dividers and a full-width plate.

### Footer
Opened by a 1rem accent sprocket strip; wordmark, a 42ch blurb, the support address at display size; four group columns headed `label-caps` in accent ("01 · Laboratory operations" through "04 · People and finance") with numerals in spool-light that turn accent on hover; legal pages and "Clinical logic" hung on pins from a wire; a `label-caps` meta row with the product count and the synthetic-data notice above a spool rule.

## Do's and Don'ts

### Do:
- **Do** put every product screen and clinical diagram inside a punched white window with the inset hairline; the window is the only white on the site.
- **Do** carry running copy on a trim, a char band, a hairline cell or inside a window; on the rail use numerals, labels and the tape flag only.
- **Do** frame every char band with a 1rem accent sprocket strip top and bottom (`PerfEdge hole="ink"`), and cut accent holes into ink rail frames.
- **Do** keep the grained accent field (`field-accent`) to the rail; elsewhere the accent is a strip, a stroke, a numeral, a plate or a word.
- **Do** mark state with the shipped vocabulary: tape flag in view, grease tick available, tape band "Available" on product pages, pin plus perforated trim captioned "Planned" for roadmap items.
- **Do** set frame numbers as two tabular digits in Barlow Condensed on the sprocket strip, the tick scale or beside the name in a list.
- **Do** keep plates square, with hole columns and the one plate shadow (`0 3px 8px -2px rgba(0,0,0,0.5)`); hover is the tape tone.
- **Do** build facts, capabilities and lists on the hairline grid (`gap-px` on spool) rather than on cards.
- **Do** keep the register industry-facing: "Request a demonstration", "Products", "Status", "Works with", "Planned", "Illustrative data".
- **Do** author new imagery as inline SVG in code; nothing rasterised ships, and `app/icon.svg` carries its own hand-authored note.
- **Do** print "Illustrative data" in the title bar of any new screen vignette and caption its window as illustrative.

### Don't:
- **Don't** add a glow, a coloured shadow, a blur halo or a gradient wash; shadows are black, short and only under lifted things.
- **Don't** use orange anywhere; the accent is purple and the token is `accent`. The contract's "grain-orange" wording is historical.
- **Don't** use accent, green, amber, red or blue as status colours on the site; status inside vignettes is the product's own UI and stays in the window.
- **Don't** introduce a third typeface, a serif or an italic.
- **Don't** set a paragraph in Barlow Condensed, or set Barlow running copy on the accent field.
- **Don't** animate the grain, swing the trims, tilt the frames or pulse anything; motion is scroll inertia, the tape flag spring and 200 to 300ms hover and ring transitions.
- **Don't** round corners beyond the 2px hairline; plates, windows, trims, bands and frames are square.
- **Don't** build a hero image, an icon feature grid, a testimonial strip or a logo wall; the world refuses the healthcare-SaaS layout and the site publishes no customer logos, testimonials or certifications.
- **Don't** add a kicker or eyebrow above a headline; the only thing that precedes a headline is the scene word inside `SceneHead` or a `label-caps` back-link.
- **Don't** change frame size on narrow screens; drop the number of frames in view instead.
