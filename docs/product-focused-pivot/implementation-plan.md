# Product-Focused Pivot — Implementation Plan

Mechanics for executing [content-updates.md](./content-updates.md). Speed-first:
screenshot-driven pages, reused copy, no long-form writing in v1.

---

## The minimal portfolio page template (v1, all six items)

Using existing components (`CaseStudyIntro`, `CaseStudyScreenGrid` /
`CaseStudyDeviceShowcase`, `CallToAction`):

1. Title + one-line positioning (founder products: lift verbatim from
   `src/data/hire-portfolio.ts`)
2. Status badge + live URL ("Launched 2026 · scopearchitect.com")
3. Screen grid — 6–10 screenshots. This IS the case study in v1.
4. Stack line (one row of pills)
5. CTA → /hire + /book

Nothing else. Depth passes come later per docs/case-studies/*.md; they do not
block liveness.

## Screenshot pipeline

- Playwright is installed locally (used by the resume generator). Capture
  scripts already in repo root: `capture-9-grid.mjs`, `capture-mobile.mjs`.
- **Claude can capture without Tie:** public marketing pages —
  scopearchitect.com, vizonos.com, capsole.io, loretorch.com (hero, feature
  sections, pricing).
- **Needs Tie (logged-in product UI — the money shots):**
  - Scope Architect: command center mid-run, scoping flow, task/token/PR views
  - Vizon OS: CRM, docs, messaging, agent/workflow builder (multi-tenant views)
  - Capsole: proposals, e-sign flow, client portal, PM views
  - LoreTorch: live table with Aris running a session, map + chat, world state
  - Convention: PNG, ~2560px wide, `public/projects/<slug>/` — drop them in and
    Claude wires everything.

## Work-grid edits (`src/components/sections/ProjectsGrid.tsx`)

- Vizon OS entry exists commented out (lines ~124–131) — uncomment, fix tags
  ("Multi-Tenant SaaS", "AI Agents", drop web-design framing).
- Add entries: Scope Architect, Capsole, LoreTorch, RE Success Path, Return To
  Radiance. Founder products prepended so they lead the grid.
- Card images: SA has command-center.png; Vizon has tasks-kanban.png; Capsole +
  LoreTorch + the two client products need captures first.

## Sequencing (each step shippable on its own)

| # | Step | Blocked on |
|---|------|-----------|
| 1 | Scope Architect page copy rewrite (kill pre-pivot narrative) | nothing — copy source exists |
| 2 | Grid: uncomment Vizon, add SA (both have card images) | nothing |
| 3 | Public marketing captures for all four products | nothing (Claude + playwright) |
| 4 | Product-UI captures | Tie (logged-in sessions) |
| 5 | Capsole page fix + LoreTorch screen grids + grid entries | step 4 |
| 6 | RE Success Path + Return To Radiance pages | Tie: names/URLs/assets/facts |
| 7 | /hire Capsole card image + Scope demo video slot | step 4 / video URL |
| 8 | P1 homepage + pricing card | react-to-render drafts |
| 9 | P2 services IA · P3 supporting pages | after P0/P1 live |

## Open questions for Tie

- [ ] "RE Success Path" = PorchLyte's "Social Success Path" in
      docs/case-studies/? Final public name? Live URL?
- [ ] Return To Radiance: client, what was built, live URL, assets?
- [ ] Client permission to show product UI for the two client products?
- [ ] Capsole live URL is capsole.io (per docs) — confirm it's presentable for
      public linking.
