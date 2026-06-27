# LoreTorch — Case Study Deep Dive

**Live product:** [loretorch.com](https://loretorch.com)  
**Case study:** `/work/loretorch`  
**Hire card:** `src/data/hire-portfolio.ts` → `HIRE_PRODUCTS[3]`  
**Status:** Launching now

---

## Strategic purpose

LoreTorch is the **interaction-heavy real-time UX** proof — one of the hardest product categories (virtual tabletop + AI game master) built end-to-end. It demonstrates designing for latency-sensitive, multiplayer, narrative-first experiences where AI is the core product layer, not a sidebar feature.

Best for Lead Product Designer, Founding Designer, and AI Product Lead roles where the panel asks about **complex state management and real-time AI**.

**Positioning line:** Meet Aris. Your personal AI Game Master.

---

## Live product audit

Reviewed against [loretorch.com](https://loretorch.com) (June 2026).

### Platform architecture (five integrated tools)

| Tool | Description | Screenshot priority |
|------|-------------|---------------------|
| **Aris (AI GM)** | Narrates, voices NPCs, tracks initiative, handles rolls, adapts in real time | P0 |
| **Virtual Tabletop** | Battle maps, fog of war, dynamic lighting, tokens, up to 6 players, real-time sync | P0 |
| **Character Builder** | Full 5E SRD, auto AC/saves/leveling, import from D&D Beyond | P1 |
| **Quest Builder** | AI quest generation from premise, branching narratives, encounter tuning | P1 |
| **The Foundry** | AI-generated spells, monsters, NPCs, races, classes, magic items, lore | P1 |

### Key product constraints (design proof)

- **Browser-based** — no installs
- **D&D 5E rules built in** — domain complexity
- **Solo or up to 6 players** — multiplayer state sync
- **Voice narration + speak your actions** — multimodal input
- **Session momentum** — GM can't wait for loading mid-combat

### Competitive frame

Roll20 et al. solved logistics (maps, dice, tokens). LoreTorch's wedge: **the GM experience** — narrative improvisation, prep reduction, world state tracking. Category gap no incumbent is building aggressively.

### Marketing site gaps (opportunity for case study)

Live site has "Screenshot / Video" placeholders on several platform sections — the case study can show **real captured UI** that the marketing site doesn't have yet. Portfolio becomes the richer product showcase.

---

## Current portfolio state

### `/work/loretorch` — ⚠️ Narrative ok, thin on product UI

**What's working:**
- Strong problem framing (digital tools killed narrative)
- Aris section explains AI GM architecture
- Development section mentions real-time state + lore ingestion
- Live iframe showcase → loretorch.com ✅
- `CallToAction` → `/hire` ✅
- Honest "launching now" positioning

**What's missing:**
- Only one image: hero (`/assets/loretorch-hero.png`) — likely marketing/brand, not product UI
- No screenshots of VTT, Aris session, Foundry, character builder, quest builder
- No video of Aris in action (voice, combat, improvisation)
- Five-tool platform structure from live site not reflected in page structure
- No multiplayer / real-time sync proof
- No "what this demonstrates in your team" section

**Source file:** `src/app/(site)/work/loretorch/page.tsx`

### `/hire` card — ✅ Good

Strong outcomes, external link to loretorch.com, hero image set. No video slot configured.

### Discovery surfaces

| Surface | Listed? |
|---------|---------|
| `ProjectsGrid.tsx` | ❌ |
| `FeaturedProjects.tsx` | ❌ |
| `ventures/page.tsx` | ✅ |
| `Header.tsx` nav | ✅ External link to loretorch.com |

### Assets

| Asset | Path | Status |
|-------|------|--------|
| Hero / brand image | `public/assets/loretorch-hero.png` | ✅ |
| Product screenshots | `public/projects/loretorch/` | ❌ Directory does not exist |
| Demo video | — | ❌ |

---

## Narrative structure (deepen target)

### Recommended page flow

```
[Keep: Hero, Intro, hero image grid, Problem section]

RESTRUCTURE: Five tools. One platform.
  Mirror live product architecture — one section per tool with screenshot:

  5a. Aris — AI Game Master
      Voice narration, speak your actions, memory & story, adaptive encounters
      Screenshot: Aris session UI or combat with narration

  5b. Virtual Tabletop
      Fog of war, dynamic lighting, real-time sync, initiative tracker
      Screenshot: battle map with tokens

  5c. Character Builder
      Full SRD, auto stats, import flow
      Screenshot: character sheet

  5d. Quest Builder
      AI generation from premise, branching acts
      Screenshot: quest structure view

  5e. The Foundry
      Spell/monster/NPC generation, library
      Screenshot: Foundry generation UI

[Keep: Product design narrative — narrative-first UX]
[Keep: AI — Aris architecture section — deepen with prompt chain / state detail]

NEW: Real-time & multiplayer
  Session state across 6 players, latency-sensitive combat UX
  What breaks if sync is slow — and how the product handles it

NEW: Development
  Browser-based stack, lore ingestion, responsive AI inference
  End-to-end: brand → marketing → app → Aris integration

[Keep: DeviceShowcase → loretorch.com]

NEW: What this demonstrates in your team
  Interaction-heavy AI UX, real-time product design, entertainment vertical 0→1

[Keep: Outcomes — category wedge]
CallToAction → /hire
```

### Optional: video section

`CaseStudyInViewVideo` or hire card video with Aris running a combat encounter or narrating a scene — high impact for AI Product Lead applications.

---

## Implementation checklist

### Assets
- [ ] Create `public/projects/loretorch/`
- [ ] Capture Aris GM session (narration + player actions visible)
- [ ] Capture VTT battle map (fog of war, lighting, tokens)
- [ ] Capture character builder with stat auto-calculation
- [ ] Capture quest builder with AI-generated structure
- [ ] Capture Foundry generation (spell or monster)
- [ ] Record Aris demo video (30–60s) for hire card / case study
- [ ] Consider moving hero from `/assets/` to `/projects/loretorch/` for consistency

### Page updates
- [ ] Add five-tool platform section with screenshots
- [ ] Add real-time / multiplayer section
- [ ] Add "What this demonstrates in your team"
- [ ] Expand Aris AI section with state/world-tracking detail
- [ ] Add `CaseStudyImageGrid` with 3–6 product screenshots

### Discovery
- [ ] Add to `ProjectsGrid.tsx`
- [ ] Consider `FeaturedProjects.tsx` (visually striking hero)

### Hire funnel
- [ ] Optional: set `video.src` in `hire-portfolio.ts`

---

## Role mapping

| Hire role | What LoreTorch proves |
|-----------|----------------------|
| Lead Product Designer | Complex interaction design, genre-specific UX depth |
| Founding Designer | Entertainment vertical 0→1, brand through production |
| AI Product Lead | AI as core experience layer (not feature checkbox) |
| Principal Product Designer | Real-time multiplayer + AI orchestration at product scale |

---

## Open questions for Tie

- [ ] Can we capture in-app screenshots from a live session or staging?
- [ ] Aris demo video — existing recording or need new capture?
- [ ] Any player/session metrics safe to reference? (Likely no — use capability claims)
- [ ] D&D Beyond import — highlight in case study or skip?

---

## Related docs

- [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md) §5
- [madebytie-positioning-report.md](../madebytie-positioning-report.md) — mentions LoreTorch soft launch
