---
name: Stellar Infomatica
description: A diagnostic lab's twelve-product suite shown as frames on one cutting-bench select rail
colors:
  ink: "#0a0a0a"
  char: "#1a1a1a"
  spool: "#2e2e2e"
  spool-light: "#3d3d3d"
  orange: "#ff5a1f"
  tape: "#ff7a3d"
  punch: "#ffffff"
  edge: "#f2f2f2"
  edge-dim: "#b8b8b8"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.9rem, 7vw, 4.9rem)"
    fontWeight: 600
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
  perf: "0.75rem"
  frame-gap: "0.75rem"
  gutter: "1rem"
  gutter-sm: "1.5rem"
  cell: "1.75rem"
  scene: "7rem"
components:
  plate-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem"
    height: "2.75rem"
  plate-primary-hover:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
  plate-primary-lg:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 3rem"
    height: "3.5rem"
  plate-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.orange}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem"
    height: "2.75rem"
  plate-secondary-hover:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
  plate-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.orange}"
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
  cell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.edge}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
---

# Design System: Stellar Infomatica

## Overview

**Creative North Star: "The Cutting Bench Rail"**

The site is a film editor's cutting bench. An ink-black field is the bench top; a grain-orange rail with square sprocket holes runs full-bleed across it and holds the twelve products as numbered frames; the product screens live only inside punched white windows cut into those frames; and everything the visitor needs to know about state is a physical mark on the material rather than a hue or a badge. The world was chosen as a refusal of the healthcare-SaaS hero-plus-feature-grid, and the build keeps that refusal: there is no hero image, no card grid of icons, no gradient wash. The direction contract that governed the build is emitted verbatim as the first child of `<body>` in `app/layout.tsx`.

Density is editorial and physical. Large condensed caps headlines sit hard on 0.92 line-height; frame numerals (01 to 12) ride the sprocket strips and the tick scale; running copy is carried on trims (bordered strips with perforated edges) or inside windows, never loose on the orange. A fixed film-grain layer (`.grain`, 16% overlay) sits over the whole page and a coarser grain is baked into every orange surface, so the two materials read as paper and tape rather than as flat fills. Motion is restrained to the physical: the rail scrubs with native inertia and scroll-snap, the tape flag springs to the frame in view, the trims swing once from their pins when they re-hang.

The state vocabulary as shipped: **tape flag** = the frame in view; **grease tick** (a hand-weight filled stroke through the `#grease` displacement filter) = a committed feature; **tape band** = committed state on product pages; **hung on a pin with a perforated trim** = deferred; a **punched white strip with a grease cross and the caption "not in this cut"** = a deferred item in the pins section. Nothing else encodes state.

**Key Characteristics:**
- Two materials only: ink field and grain-orange rail, with white reserved for punched windows.
- One display face (Barlow Condensed, caps) for headlines, labels, numerals and plates; Barlow sentence case for running copy, confined to trims and windows.
- State is a mark (tape flag, grease tick, tape band, pin, grease cross), never a colour change or a glow.
- Perforation strips (sprocket-x / perf-y) are the edge treatment on every transition between materials.
- Plates (buttons) are punched metal tags with hole columns; one soft offset shadow, hover shifts to the tape tone.
- Every image on the site is inline SVG authored in code; no rasters ship.

## Colors

A two-material palette: a near-black ink field with three charcoal steps for trims and dividers, one orange with a lighter tape tone, and a white that appears only as the punched window.

### Primary
- **Grain Orange** (`{colors.orange}`): the rail, the contact close, the product and legal page headers, the navbar's bottom sprocket strip, the footer's top strip, primary plates, the frame numerals on ink, grease ticks, the active nav underline, focus rings, selection, the scrollbar thumb, the caret. Always carries baked grain on surfaces (`field-orange`); flat only on text, strokes and plate faces.
- **Tape** (`{colors.tape}`): the hover state of every orange thing (plate faces, orange links, ink-plate text) and the body of the tape flag and tape band. Never used at rest on a surface.

### Neutral
- **Ink** (`{colors.ink}`): the page field, text on orange, the hole colour of sprockets cut into orange, the frames on the rail.
- **Char** (`{colors.char}`): one step up from ink; trims, the product-page window surround, the scrollbar track, the hover fill of list rows, the `ProductFrame` article.
- **Spool** (`{colors.spool}`): the default border colour and the 1px grid gap between cells (`gap-px border border-spool bg-spool`); dividers.
- **Spool Light** (`{colors.spool-light}`): trim borders, the inert frame numerals in the footer, the navbar rule.
- **Edge** (`{colors.edge}`): primary text on ink; the hole colour of perforations cut into trims (at 40% opacity); the grease-cross stroke.
- **Edge Dim** (`{colors.edge-dim}`): secondary text, labels at rest, the pin wire (at 50 to 60% opacity).
- **Punch** (`{colors.punch}`): the punched window only. It is never a background for copy, a card, or a section.

The theme also declares `orange-deep`, `orange-ink` and a `destructive` red for shadcn compatibility; none is used by any shipped surface, so they are not part of the system.

### Named Rules
**The Two Materials Rule.** Every surface is either the ink field or the orange rail. Grey steps (char, spool, spool-light) are only ever trims, borders and dividers on the ink; they never form a section background of their own.

**The Punched Window Rule.** White appears only as a window with an inset hairline (`inset 0 0 0 1px rgba(0,0,0,0.25)`) and a product screen inside it. A white panel without a screen in it does not exist in this world; the one exception is the 2.25rem crossed strip in the pins section, which reads as an empty frame.

**The State Is a Mark Rule.** No colour is a status colour. Orange is the rail's material, not "active"; edge-dim is secondary text, not "disabled". Status within the site is carried by the tape flag, grease tick, tape band, pin and grease cross. (Status dots and chips exist only inside the miniature app vignettes, where they depict the product's own UI.)

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif), weights 300 / 400 / 500 / 600 / 700 via `next/font/google`
**Body Font:** Barlow (with system-ui, sans-serif), weights 400 / 500 / 600
**Label Font:** Barlow Condensed, caps, tracked (`label-caps`)

**Character:** One condensed grotesk does all the speaking. Headlines, section heads, frame names, numerals, plates and labels are Barlow Condensed set in caps with 0.92 line-height and almost no tracking at display size, opening to 0.12 to 0.14em on labels and plates. Running copy is Barlow in sentence case. The pairing is one family at two widths, so the voice never changes, only the register.

**Adaptation from the source world, confirmed in the finish review:** the OWN-WORLD block prescribes a single condensed grotesk. The build sets running copy (product summaries, feature lines, provenance, the legal pages, the footer blurb) in Barlow rather than Barlow Condensed, as a readability adaptation for long product summaries and legal text. Running copy is carried on trims or inside windows, never loose on the orange field. Display, labels and numerals remain Barlow Condensed caps. Future surfaces inherit this split.

### Hierarchy
- **Display** (600, `clamp(2.9rem, 7vw, 4.9rem)`, 0.92): the page headline. Product, legal and contact headlines use the same shape at `clamp(2.6rem, 7vw, 5rem)` and `clamp(2.8rem, 7vw, 5rem)`; the clinical page goes to `clamp(3rem, 8vw, 6rem)`. Caps, `text-wrap: balance`, 0.01em tracking. The one accent is a span in orange on the last line.
- **Numeral** (300, `clamp(4rem, 12vw, 8rem)`, 0.8): the frame number on a product page header, tabular, set light so it reads as a scale mark rather than a headline.
- **Headline** (400, 2.6rem at base / 3.4rem at md, 0.92): `SceneHead`, the h2 of every section, with the scene word (`Scene 01.`, `The bench.`) in orange before the title and an orange hairline beneath.
- **Title** (400, 2rem, 0.92): h3 in cells and product-page h2s (`What it does`, `State of the frame`). Frame names on `ProductFrame` trims run 2.3rem / 2.7rem; frame names on rail frames 1.25rem.
- **Body** (400, 1.0625rem, 1.5, Barlow): running copy on trims and in the footer. Lead paragraphs step to 1.125 to 1.35rem; trim feature lines and provenance drop to 0.9 to 0.95rem with `leading-snug`. Measure is capped at 42 to 60ch on trims and 72ch on legal pages.
- **Label** (400, 0.8125rem, 0.12em, caps, line-height 1): `label-caps`; nav links, the "On the pins" readout, platform lines, captions under windows, footer meta, the rail's Prev / Next controls.
- **Plate** (400, 0.9rem md / 1.05rem lg, 0.14em, caps): the text on plates. Frame numerals on ink and sprocket strips use the same family at 0.75 to 0.95rem with 0.1 to 0.16em tracking.

### Named Rules
**The One Voice Rule.** Everything that is not running copy is Barlow Condensed in caps. There is no third face, no serif, no italic. Monospace appears only inside vignettes depicting a raw-frame log or sample IDs, where it is the product's own UI.

**The Numeral Rule.** Frame numbers are always two digits (`01` to `12`), always Barlow Condensed, always tabular (`font-feature-settings: "tnum"` is on at the body). The numeral is printed on the sprocket strip or the tick scale, never inside the window.

**The Copy-on-a-Trim Rule.** Barlow running copy is never set loose on the orange field. On orange, only display, labels and plates appear; a paragraph that must sit in an orange section is Barlow at ink/85 and no longer than 56ch, as on the contact close and the clinical header.

## Layout

The container is 80rem (`max-w-[80rem]`) with a 1rem gutter at base and 1.5rem from `sm`. The rail and every orange section are full-bleed; the rail's inner padding is computed as `max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))` so the first frame lines up with the container's left edge. The navbar is fixed, 4rem tall plus a 0.625rem sprocket strip; `main` is padded 4.6rem to clear it.

The first viewport is deliberately short: headline plate top-left (two columns at `lg`, 1.2fr / 1fr), the Request a demo plate beneath, and the orange rail starting inside the first screen at both desktop and phone widths. Sections after the rail step down the page at 6 to 7rem (`mt-24` / `mt-28`), each opened by a `SceneHead` with an orange hairline rule. Groups of facts use the hairline grid: cells with `gap-px` on a spool background so the 1px gap draws the lines, 1.75rem internal padding, 2 to 3 columns from `md`.

The rail itself: frames are 15rem wide at base, 17rem at `sm`, 19rem at `lg`, with a 0.75rem gap. Narrow screens drop the number of frames visible, never the frame size. The scroller uses `scroll-snap-type: x mandatory` with `scroll-padding-inline` matched to the rail padding, mouse-drag scrubbing, Arrow / Home / End keys on the listbox, and `sessionStorage` persistence of the active frame. Above the frames sits a tick scale (`rail-ticks`: a hairline every fifth of a frame, a 100%-tall major at frame pitch) with the numerals riding it; the tape flag hangs over the top-left corner of the frame in view and tracks it with a spring.

Trims hang on pins under the rail and in the pins section: a wire (`h-px`, edge-dim at 50 to 60%), a `Pin` per trim, the trim overlapping the pin by 0.25rem, 2 columns at base, 4 to 5 at `sm` / `lg`. Under the rail the trims carry the active product's first four feature lines as text, not stills, because exactly one screen vignette exists per product (confirmed in the finish review). In the pins section they alternate a 1.2 degree rotation; under the rail they swing once on re-hang (`swing`, 1.4s, alternating 5 / 4 / 3 / 2 degrees).

Breakpoints are Tailwind v4 defaults: `sm` 40rem, `md` 48rem, `lg` 64rem. `prefers-reduced-motion` disables the grain animation, the swing and the spring; the rail then jumps instead of smoothing.

## Elevation & Depth

Depth is material, not atmospheric. The page is flat ink with a grain layer; depth appears where one thing physically lies on another: a plate on the bench, tape on a sprocket, a window punched through a frame. There are no glows, no coloured shadows, no blur haloes anywhere on the site. The only blur is the navbar's 2px backdrop over its 95% ink.

### Shadow Vocabulary
- **Plate lift** (`box-shadow: 0 3px 8px -2px rgba(0,0,0,0.5)`): every plate at rest, all three tones. The shadow never changes on hover; hover is the tape tone, press is a 1px translate.
- **Window inset** (`box-shadow: inset 0 0 0 1px rgba(0,0,0,0.25)`, plus `inset 0 2px 10px rgba(0,0,0,0.35)` on the `Window` primitive): the punched edge of the white window. On rail frames and product frames only the hairline is used.
- **Active frame ring** (`box-shadow: 0 0 0 3px var(--color-ink), 0 0 0 5px var(--color-edge)`): the frame in view on the rail, a doubled key-line, not a shadow.
- **Tape drop** (`feDropShadow dy=3 stdDeviation=2.5 flood-opacity=0.55` inside the SVG): the tape flag's own shadow onto the rail; tape band uses `0 1px 2px rgba(0,0,0,0.45)`.
- **Rail focus** (`inset 0 0 0 3px var(--color-ink)`): keyboard focus on the scroller. Elsewhere focus is the global 2px orange outline at 3px offset.

### Named Rules
**The No Glow Rule.** Shadows are black, soft and short (8px blur or less) and only sit under things that are physically lifted: plates, tape, the pin's foot. Nothing emits light.

**The Grain Is the Atmosphere Rule.** The fixed `.grain` overlay (16% opacity, overlay blend, 220px tile, 1.2s stepped shift) and the coarser orange grain (`field-orange`, 160px tile) are the only texture. New surfaces inherit them by being ink or orange; they are never re-applied locally.

## Shapes

Hard corners everywhere. The world's radius token is 2px (`--radius` 2px, `lg` 3px, `xl` 4px) and in practice the site renders square: plates, windows, trims, cells, frames and the navbar burger are all 0 radius. The 2px step appears only on the grease-cross bars and the 3px step inside vignette panels. The one true circle is the plate hole (0.375rem, three per column) and the pin head.

Edges are perforated. Every transition between the ink field and an orange surface is a sprocket strip: 0.6 x 0.5rem square holes on a 1.25rem pitch (`sprocket-x`), ink-coloured when cut into orange, orange-coloured when cut into an ink frame. Trims carry a finer round perforation in edge at 40% (`perf-x` via `PerfEdge hole="edge"`, 0.625rem tall). Strip heights: 1rem on the rail and section borders, 0.75rem on rail frames, 0.625rem on trims and the navbar.

Recurring silhouettes: the punched 35mm frame (the `Mark`, `app/icon.svg`, and every rail frame), the folded tape strip with a torn foot (`TapeFlag`), the push pin, and the plate with hole columns. Lines are hairlines: 1px borders in spool or spool-light, an orange 1px rule under scene heads, a 1px orange/60 left border on provenance quotes.

## Components

### Buttons (Plates)
A plate is a punched metal tag: a 0.375rem hole column at each end, condensed caps text, hard corners, one soft shadow. Tactile and matter-of-fact.
- **Shape:** square (0 radius), 2.75rem tall at `md` with 2.25rem side padding; 3.5rem tall at `lg` with 3rem side padding. Holes are 3 circles per side, 0.25rem apart, 0.375rem in from the edge.
- **Primary:** orange face, ink text, ink holes. Request a demo everywhere on ink.
- **Secondary:** transparent face, 1px orange border, orange text, outlined holes. "Open frame 04", "Back to the rail".
- **Ink:** ink face, orange text, orange holes, 1px orange/60 border. Used on the orange field (the contact close) so the plate still reads as a plate on its own material.
- **Hover / Focus:** primary fills tape; secondary fills orange with ink text; ink brightens its border and shifts text to tape. 200ms ease-out on background, colour and transform. Press translates 1px down. Focus is the global orange outline.
- **Text links:** `label-caps` in edge-dim with an inline arrow icon, hover to orange (ink pages) or ink (orange pages). Footer and contact mail links are display-size orange, hover tape.

### Icons
Three arrows (left, right, down) at 1em, 1.5 stroke, square caps, drawn to match the mark. The hamburger is the same stroke idiom at 2px. No icon library ships; every icon is inline SVG in `primitives.tsx`.

### Windows
The only surface that is white. Punch background, ink text, inset hairline, 0.375 to 0.75rem padding; inside sits a `ScaledScreen` rendering a vignette at a 560 / 640 / 720px design width scaled to fit at 16:10. Every vignette prints a "Demo data" tag in its title bar and the window carries a `label-caps` caption "Illustrative screen with synthetic data" on product pages. Vignettes have their own interior chrome palette (`#0f1115` field, `#13161c` bar, `#171a20` panel, white/10 rules, status dots in green / amber / red / blue) which depicts the product UI and does not leak onto the site.

### Trims
Running copy's carrier. A bordered strip (1px spool-light) on char or ink, a fine edge perforation top and bottom at 40%, 0.625 x 0.75rem text padding, Barlow at 0.9 to 0.95rem `leading-snug`. On `ProductFrame` the trim grows to a full column with the frame name (title), platform label, summary, four grease-ticked feature lines, a provenance quote and a secondary plate. Hung trims sit under a `Pin` and overlap it by 0.25rem.

### Frames
- **Rail frame:** 15 / 17 / 19rem wide, ink, orange sprocket strips top and bottom (0.75rem), numeral in orange and the short line in `label-caps` on the first row, the window, then the name at 1.25rem caps. Active frame carries the doubled key-line ring; inactive frames sit at 95% opacity and lift to 100% on hover.
- **Product frame (`ProductFrame`):** a char article with 1.25rem orange sprocket strips top and bottom, the numeral printed on the top strip in a small orange tag, a 1.15fr / 1fr grid of window and trim that alternates sides down the page.
- **Cells:** the hairline grid (`gap-px border border-spool bg-spool`, ink cells at 1.75rem padding). Used for facts, "Runs with", input vectors, and prev / next navigation.

### State Marks
- **Tape flag:** 4 x 7.5rem SVG; woven tape pattern in tape and two lighter / darker tape steps, a fold band with a falling shadow, torn foot, the frame numeral in grease pencil. One per rail, over the frame in view, spring-tracked (`stiffness 260, damping 28`).
- **Grease tick:** 1.25rem filled hand-stroke in orange through `filter: url(#grease)` (fractal-noise displacement, scale 1.6). One per committed feature line.
- **Grease cross:** the same idiom crossed; in ink on the white strip of a deferred item. Also available as a CSS utility (`grease-cross`) with 3px edge bars at 32 degrees.
- **Tape band:** a small rotated (-1.5 degrees) strip of striped tape with the caption "committed", 0.75rem caps, on product-page state rows.
- **Pin:** 0.875 x 1.5rem SVG; radial-shaded orange head, grey shaft, a dark foot ellipse. Carries every hung trim and the footer's legal links.

### Navigation
Fixed ink/95 bar, 4rem tall, wordmark left (mark plus "STELLAR Infomatica" with the second word in weight 300), a `label-caps` tagline behind a hairline on `lg`, links in `label-caps` edge-dim with a transparent bottom border that turns orange on the current page and text that lifts to edge on hover, a primary plate at the end. A 0.625rem orange sprocket strip closes the bar. Below `md` the links collapse behind a square outlined burger into a stacked list with spool dividers and a full-width plate.

### Section Heads
`SceneHead`: the scene word in orange followed by the title in edge, an optional 60ch line in edge-dim, and a 1px orange rule under the whole row. An optional right slot takes controls.

### Footer
Opened by a 1rem orange sprocket strip; wordmark, a 42ch blurb, the support address at display size; four scene columns with numerals in spool-light that turn orange on hover; legal pages hung on pins from a wire; a `label-caps` meta row with the synthetic-data notice.

## Do's and Don'ts

### Do:
- **Do** put every product screen inside a punched white window with the inset hairline; the window is the only white on the site.
- **Do** carry running copy on a trim or inside a window; on the orange field use display, labels and plates only.
- **Do** separate ink from orange with a sprocket strip (`PerfEdge`), ink holes on orange and orange holes on ink frames.
- **Do** mark state with the shipped vocabulary: tape flag in view, grease tick committed, tape band committed on product pages, pin plus perforated trim deferred, grease cross with "not in this cut" for deferred items on the pins.
- **Do** set frame numbers as two tabular digits in Barlow Condensed on the sprocket strip or tick scale.
- **Do** keep plates square, with hole columns and the one plate shadow (`0 3px 8px -2px rgba(0,0,0,0.5)`); hover is the tape tone.
- **Do** build facts and lists on the hairline grid (`gap-px` on spool) rather than on cards.
- **Do** author new imagery as inline SVG in code; nothing rasterised ships, and `app/icon.svg` carries its own hand-authored note.
- **Do** print "Demo data" in the title bar of any new screen vignette and caption its window as illustrative.

### Don't:
- **Don't** add a glow, a coloured shadow, a blur halo or a gradient wash; shadows are black, short and only under lifted things.
- **Don't** use orange, green, amber or red as status colours on the site; status inside vignettes is the product's own UI and stays in the window.
- **Don't** introduce a third typeface, a serif, an italic, or a monospace outside a vignette depicting logs or IDs.
- **Don't** set Barlow running copy loose on the orange field, or set a paragraph in Barlow Condensed.
- **Don't** round corners beyond the 2px hairline; plates, windows, trims and frames are square.
- **Don't** build a hero image, an icon feature grid, a testimonial strip or a logo wall; the world refuses the healthcare-SaaS layout and the site publishes no customer logos or testimonials.
- **Don't** add a kicker or eyebrow above a headline; the only thing that precedes a headline is the scene word inside `SceneHead` or a `label-caps` back-link.
- **Don't** change frame size on narrow screens; drop the number of frames in view instead.
