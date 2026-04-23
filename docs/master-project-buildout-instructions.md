# Portfolio Project Build-Out Guide

## Overview

Each project page lives at `/work/{slug}/page.tsx` and is built by composing reusable case study components in order. Assets go in `public/projects/{slug}/`. This document covers the component system, image conventions, and per-project build status.

---

## Component System

All case study components are in `src/components/sections/`. Compose them in sequence on each project page - no one-off markup.

### `<ProjectHero>`
Top-of-page hero with L-shaped white overlay. Always the first component.
```tsx
<ProjectHero
  title="Short project title (3-6 words)"
  tags={["Service Tag", "Service Tag"]}
  image="/projects/{slug}/hero-image.ext"
/>
```

### `<CaseStudyIntro>`
The meta bar below the hero - client, industry, duration, services. **This is the global reusable component.** Any design changes here propagate to all project pages automatically.
```tsx
<CaseStudyIntro
  headline="The long-form project headline (1-2 sentences)"
  description="2-3 sentence situation summary."
  client="Client Name"
  industry="Industry / Sub-industry"
  timeline="X Weeks"
  services={["Service One", "Service Two"]}
/>
```

### `<CaseStudySplitContent>`
Two-column text + image section. Supports auto-rotating image carousel when multiple images are passed.
```tsx
<CaseStudySplitContent
  eyebrow="• Section Label"
  heading="Section Heading"
  body="Body paragraph."
  images={["/projects/{slug}/image.ext"]}
  imageAlt="Description"
  imagePosition="right"   // "left" | "right"
  bgColor="var(--bg-secondary)"  // optional
/>
```

### `<CaseStudyImageGrid>`
Rounded-corner image grid. Two column modes. Supports wide-span items and a `"screenshot"` display mode for UI screenshots in a light grey framed box with blurred background.

**Standard grid item:**
```tsx
{ src: "/projects/{slug}/photo.jpg", alt: "Description" }
```

**Wide item (spans both columns):**
```tsx
{ src: "/projects/{slug}/banner.jpg", alt: "Description", span: "wide", aspectRatio: "16/7" }
```

**Screenshot item (UI screenshot in grey box with blur + frame):**
```tsx
{ src: "/projects/{slug}/screenshot.png", alt: "Description", display: "screenshot" }
```
Use `display: "screenshot"` when inserting a flat website/app screenshot rather than a photo or mockup. It renders the screenshot inside a light grey container with a blurred version behind it and a subtle browser-chrome-style frame over it - matching the layered effect in the reference designs.

```tsx
<CaseStudyImageGrid
  columns={2}  // 2 | 3
  images={[...]}
/>
```

### `<CaseStudyDeviceShowcase>`
Full-width browser chrome mockup (desktop) or mobile composite.
```tsx
<CaseStudyDeviceShowcase
  type="desktop"           // "desktop" | "mobile" | "both"
  desktopImage="/projects/{slug}/desktop-mockup.png"
  desktopAlt="Description"
  bgColor="var(--bg-secondary)"  // optional
/>
```

### `<CaseStudyQuote>`
Client testimonial. Use when a real quote is available.
```tsx
<CaseStudyQuote
  quote="Quote text."
  author="First Name"
  role="Title"
  company="Company"
  variant="light"  // "light" | "dark"
/>
```

---

## Image Conventions

| Use case | Convention |
|---|---|
| Hero background | Full bleed, high contrast. 1600px+ wide. |
| Grid photos | Real photography preferred. 4:3 or square. |
| Wide grid item | Banner/cover image. 16:7 aspect ratio. |
| Screenshot grid item | Use `display: "screenshot"` - flat screenshot, any ratio. |
| Desktop showcase | Pre-cropped to browser viewport, no extra chrome needed. 1024px wide min. |
| Mobile showcase | Pre-rendered in device frame as a single image. |

All assets saved to: `public/projects/{slug}/`

Naming: descriptive kebab-case. e.g. `homepage-screenshot.png`, `brand-identity-board.jpg`, `mobile-mockups.png`

---

## Standard Page Flow

A complete project page follows this sequence. Adapt as needed - not every section is required.

```
1. ProjectHero            — always first
2. CaseStudyIntro         — always second (global meta bar)
3. CaseStudySplitContent  — context / situation (bg-secondary)
4. CaseStudyImageGrid     — photo gallery or brand assets
5. CaseStudyDeviceShowcase — website/app desktop mockup
6. CaseStudySplitContent  — results / deliverables (bg-secondary)
7. CaseStudyDeviceShowcase — mobile mockup (optional)
8. CaseStudyQuote         — testimonial (if available)
```

---

## Adding a New Screenshot Item (Implementation Note)

The `display: "screenshot"` grid item type requires the following layered treatment in `CaseStudyImageGrid`:
- Light grey container background (`#f2f2f2` or similar)
- Blurred, scaled-up version of the same screenshot as the background layer
- The screenshot itself rendered at natural size, centered
- A thin inset frame/border over it (1px solid rgba white or light grey)
- Rounded corners on the outer container match the rest of the grid

This matches the "site hero screenshot in a square with blurred background + frame" pattern from the reference designs.

---

## Projects Build Status

### BCH Devcon (`/work/bch-devcon`)
**Status: Complete**
- Client: Bitmain
- Assets: `public/projects/bch-devcon/` (12 files)
- All sections built and live

---

### Blue Divine Aesthetics (`/work/blue-divine-aesthetics`)
**Status: Stub - needs content + assets**
- Client: Blue Divine Aesthetics
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### CI2 Aviation (`/work/ci2-aviation`)
**Status: Stub - needs content + assets**
- Client: CI2 Aviation
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### Expose Hair (`/work/expose-hair`)
**Status: Stub - needs content + assets**
- Client: Expose Hair
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### Jennings Brands (`/work/jennings-brands`)
**Status: Complete**
- Client: Jennings Brands (Casey + Kerri Walsh Jennings)
- Assets: `public/projects/jennings-brands/` (2 files: logo, website mockup)
- All sections built and live

---

### Permissionless Ventures (`/work/permissionless-ventures`)
**Status: Complete**
- Client: Permissionless Ventures / Bitmain
- Assets: `public/projects/permissionless/` (5 files: logo, brand guide, bcard mockup, website screenshots)
- All sections built and live

---

### Servco Wholesale (`/work/servco-wholesale`)
**Status: Stub - needs content + assets**
- Client: Servco Wholesale
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### Stanlok Precision Manufacturing (`/work/stanlok-precision-manufacturing`)
**Status: Stub - needs content + assets**
- Client: Stanlok Precision Manufacturing
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### Taste of Alpharetta (`/work/taste-of-alpharetta`)
**Status: Stub - needs content + assets**
- Client: Taste of Alpharetta
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### Windward Tech District (`/work/windward-tech-district`)
**Status: Complete**
- Client: Windward Tech District
- Assets: `public/projects/windward-tech-district/` (6 files: full-color logo, white logo, home page screenshot, 3 district photos)
- All sections built and live

---

### Wire and Wood Festival (`/work/wire-and-wood-festival`)
**Status: Stub - needs content + assets**
- Client: Wire and Wood Festival
- Assets needed: TBD - feed image links to extract
- Sections to build: TBD

---

### YULI Salon & Aesthetics (`/work/yuli`)
**Status: Complete**
- Client: YULI Salon & Aesthetics
- Assets: `public/projects/yuli/` (11 files: gold logo, 2 lobby photos, brand mark, 8 hair/stylist photos)
- All sections built and live (hero, intro, context split, image grid, deliverables split, quote)

---

## Workflow for Each Project

1. Get image links from Tie
2. Download images into `public/projects/{slug}/`
3. Update this doc: mark assets received, note file names
4. Build `page.tsx` following the standard flow above
5. Use `display: "screenshot"` for any flat UI screenshots in the grid
6. Mark status as Complete in this doc

---

## Design Reference Notes

- Rounded corners on all grid items - matches `--radius-lg` CSS variable
- Screenshot items: layered effect - blur behind + frame on top (see reference)
- `CaseStudyIntro` is the single source of truth for the meta bar design - edit the component, all pages update
- No Tailwind, no Shadcn - vanilla CSS modules only
- Color system: `--bg-primary` (white), `--bg-secondary` (light grey), `--text-primary`, `--text-secondary`
