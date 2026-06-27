# Scope Architect — Case Study Deep Dive

**Live product:** [scopearchitect.com](https://scopearchitect.com)  
**Case study:** `/work/scope-architect`  
**Hire card:** `src/data/hire-portfolio.ts` → `HIRE_PRODUCTS[0]`  
**Status:** Launching now

---

## Strategic purpose

Scope Architect is the **lead hire proof** for AI Product Lead and Founding Designer roles. It demonstrates:

- Pivoting a product based on usage insight (agency scoping → agent orchestration)
- Designing dev tooling UX that technical hiring managers will actually open
- Shipping MCP integration, cloud sandboxes, token analytics, and BYOK — not mockups
- End-to-end ownership: brand, marketing site, product, platform

**Positioning line (use everywhere):** Mission control for building with AI.

---

## Live product audit

Reviewed against [scopearchitect.com](https://scopearchitect.com) (June 2026).

### Core value prop

Chat forgets. Scope Architect is the structured layer both human and agent build from — plan, context, memory, and live state in one place.

### Product surfaces to showcase in case study

| Surface | What it proves | Screenshot priority |
|---------|----------------|---------------------|
| **Scope Engine** | Idea → agent-ready plan in 15–60s; repo import grounds scope in real code | P0 |
| **Architect Chat** | Diffable change plans, inline scope refinement | P0 |
| **Command Center** | Real-time task status, human + agent activity, blockers | P0 |
| **MCP handoff** | `npx -y @scope-architect/mcp` — agent reads live plan | P0 |
| **Cloud Sandbox** | Dispatch task → Claude Code/Codex builds → PR | P1 |
| **Token Analytics** | Per-operation cost visibility | P1 |
| **Context Dashboard + Memory** | Durable context between sessions | P1 |
| **BYOK** | Multi-provider API key management | P2 |
| **Team Management** | Real-time collaboration on scope | P2 |
| **Preset Library** | Reusable module/feature presets | P2 |

### Competitive frame

Same category as Vercel Sandbox, agent platforms, and AI coding workflows — but with **scope as the shared source of truth** rather than ephemeral chat.

---

## Current portfolio state

### `/work/scope-architect` — 🔴 STALE, needs full rewrite

The page still describes the **pre-pivot product**:

- "Senior Solutions Architect in a box"
- Agency scoping, SOW generation, dual-perspective client proposals
- Gemini 3-pass expansion for **defensible contracts**
- Calibration engine for **agency margins**

This directly contradicts [scopearchitect.com](https://scopearchitect.com). A hiring manager who clicks through will lose trust immediately.

**Source file:** `src/app/(site)/work/scope-architect/page.tsx`

### `/hire` card — ✅ Correct

`hire-portfolio.ts` has the right positioning: MCP handoff, cloud sandboxes, command center, BYOK. Outcomes use capability language.

**Gaps:**
- `video.src` is empty — demo video slot hidden
- Only one image: `/labs/scope-architect/featured.png`

### Discovery surfaces

| Surface | Listed? |
|---------|---------|
| `ProjectsGrid.tsx` | ❌ |
| `FeaturedProjects.tsx` | ❌ |
| `ventures/page.tsx` | ❌ |
| `LabsPage.tsx` | ✅ links to `/labs/scope-architect` |

### Assets

| Asset | Path | Status |
|-------|------|--------|
| Featured screenshot | `public/labs/scope-architect/featured.png` | ✅ Exists (may be old UI — verify against live product) |
| Product screenshots | `public/projects/scope-architect/` | ❌ Directory does not exist |
| Demo video | — | ❌ Not captured |

---

## Narrative structure (rewrite target)

### Recommended page flow

```
1. ProjectHero
   Title: "Mission control for building with AI."
   Tags: Product Design, UX, AI Orchestration, Full-Stack Development

2. CaseStudyIntro
   Headline: Scope it, hand it to your agent, stay in command.
   Client: Scope Architect (founder)
   Industry: Developer Tools / AI Agent Infrastructure
   Timeline: Ongoing · Launching now

3. Problem — Context loss in AI-assisted development
   Chat forgets. Sessions drift. You fly blind while agents build.
   The thread breaks between idea and shipped code.

4. Opportunity — Scope as shared source of truth
   A structured layer both human and agent build from.
   Not a document that dies after kickoff.

5. [NEW] What changed and why — The pivot (hiring asset)
   V1 productized agency scoping (SOWs, proposals, calibration).
   Usage taught me the durable problem was agent context and control.
   Repositioned Scope Architect; agency lifecycle features became Capsole.
   One short section — product judgment, not apology.

6. Product design — Idea-to-scope flow
   Dump idea / import repo → modules → pre-scope → tasks with acceptance criteria
   Architect Chat with diffable plans
   Command Center UX: one view of every task, human and agent

7. AI orchestration — Platform layer
   Structured scoping engine, Zod-validated schemas
   MCP handoff (@scope-architect/mcp)
   Cloud sandbox execution → PR
   Context dashboard, memory management, BYOK, token analytics

8. CaseStudyImageGrid — Command Center, scope engine, MCP config, token dashboard

9. Outcomes — Capability claims only
   Idea to agent-ready plan in minutes
   Three handoff paths: MCP, prompt copy, cloud sandbox
   Build at AI speed without losing control

10. What this demonstrates in your team
    How I'd apply agent orchestration UX, structured AI output, and
    design-to-engineering velocity in a product org.

11. CaseStudyDeviceShowcase → https://scopearchitect.com

12. CallToAction → /hire
```

### Sections to remove from current page

- Agency margin / SOW / client proposal framing
- "Dual-perspective UX — one engine, two audiences" (moved to Capsole)
- Calibration engine for studio velocity (Capsole / old Scope v1)

---

## Implementation checklist

### Assets
- [ ] Create `public/projects/scope-architect/`
- [ ] Capture scope engine flow (idea dump → modules → pre-scope)
- [ ] Capture Command Center with live task statuses
- [ ] Capture MCP config panel / JSON example
- [ ] Capture token analytics dashboard
- [ ] Capture cloud sandbox → PR flow
- [ ] Verify `featured.png` matches current UI or re-capture
- [ ] Record demo video → set `hire-portfolio.ts` `video.src`

### Page rewrite
- [ ] Rewrite `src/app/(site)/work/scope-architect/page.tsx` per narrative above
- [ ] Update `metadata.description` to match new positioning
- [ ] Add pivot section ("What changed and why")
- [ ] Add "What this demonstrates in your team" section
- [ ] Replace all agency-scoping copy

### Discovery
- [ ] Add to `ProjectsGrid.tsx` (top of grid or dedicated "Products" section)
- [ ] Consider homepage `FeaturedProjects.tsx` slot while launch is news
- [ ] Add to `ventures/page.tsx`

### Hire funnel
- [ ] Demo video on `/hire` product card
- [ ] Ensure resume bullets match scopearchitect.com (not old scoping copy)

---

## Role mapping

| Hire role | What Scope Architect proves |
|-----------|----------------------------|
| AI Product Lead | Agent orchestration product from zero, MCP/sandbox integration |
| Founding Designer | 0→1 ownership across brand, product, platform |
| Principal Product Designer | Complex platform UX, pivot judgment, technical depth |
| Lead Product Designer | Dev tooling UX, structured AI output design |

---

## Related docs

- [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md) §3
- [scope_architect.md](../Labs/scope_architect.md) — **outdated** (pre-pivot); do not use for case study copy
- [capsole.md](./capsole.md) — inherited agency OS narrative from Scope v1
