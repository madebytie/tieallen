# Vizon OS — Case Study Deep Dive

**Live product:** [vizonos.com](https://vizonos.com)  
**Case study:** `/work/vizon-os`  
**Hire card:** `src/data/hire-portfolio.ts` → `HIRE_PRODUCTS[1]`  
**Status:** Private beta · in use with client teams

---

## Strategic purpose

Vizon OS is the **enterprise platform proof** — the moonshot that shows multi-tenant SaaS design at scale, unified data models, and AI that reads across modules (not isolated prompts).

Best for Principal Product Designer, Lead Product Designer, and AI Product Lead roles where the panel will ask: "Can you design a real platform, not just a landing page?"

**Positioning line:** One intelligent workspace. The 10-to-1,000 output engine.

---

## Live product audit

Reviewed against [vizonos.com](https://vizonos.com) (June 2026).

### Three platform layers

| Layer | Modules | Case study depth needed |
|-------|---------|------------------------|
| **Strategy** | Moonshot, Masterplan, Discover / Innovate / Accelerate, Personas, Funnels, Brand, Campaigns, Goals | ⚠️ Mentioned in copy, light on screenshots |
| **Operations** | CRM (contacts, deals kanban, Stripe sync, sequences), Projects/Tasks, Docs (TipTap collab), Messaging | ⚠️ Partial — kanban, docs, workflow exist in assets |
| **Intelligence** | Vizon Nexus (context engine), Lenz AI, Agents, Workflows (multi-step AI nodes) | 🔴 Underrepresented on case study page |

### Core narrative from live site

- **Problem:** Strategy in one app, CRM in another, tasks scattered. AI is blind to all of it.
- **Solution:** Vizon Nexus — unified context engine. Lenz AI reads live data and executes work.
- **Proof points:** CRM wired to Masterplan and Personas; workflows trigger across modules; agents use Nexus for context.

### Modules to screenshot (priority)

| Module | Screenshot | Priority |
|--------|------------|----------|
| CRM deals kanban | New or existing | P0 |
| Tasks / sprints | `tasks-kanban.png` ✅ | Done |
| Docs collaborative editor | `docs-edit.png` ✅ | Done |
| Workflows canvas | `workflow.png` ✅ | Done |
| Lenz AI conversation / action | New | P0 |
| Messaging in context of project/deal | New | P1 |
| Strategy / Moonshot / Masterplan | New | P1 |
| Nexus / knowledge graph view | New | P1 |
| AI Agents deployment UI | New | P2 |
| Personas / funnel builder | P2 |

---

## Current portfolio state

### `/work/vizon-os` — ⚠️ Good skeleton, needs product depth

**What's working:**
- Clear founder narrative and problem framing
- Brand section with icon grid (8 module icons)
- Live iframe showcase (`CaseStudyDeviceShowcase` → vizonos.com)
- Three product UI screenshots in grid
- Honest "ongoing" timeline

**What's missing:**
- Intelligence layer (Lenz AI, agents, workflows) gets almost no dedicated section
- CRM, messaging, strategy modules mentioned in marketing copy but not shown as product UI
- No process artifacts (early flows, tradeoff decisions, IA evolution)
- Manifesto language ("10-to-1,000 output engine") without concrete module walkthrough
- No "what this demonstrates in your team" bridge section
- `CallToAction` goes to generic CTA, not `/hire`

**Source file:** `src/app/(site)/work/vizon-os/page.tsx`

### `/hire` card — ✅ Strong

Accurate multi-tenant positioning, three info bullets (Strategy / Operations / Intelligence), honest beta status. Image uses `tasks-kanban.png`.

### Discovery surfaces

| Surface | Listed? |
|---------|---------|
| `ProjectsGrid.tsx` | ❌ Commented out |
| `FeaturedProjects.tsx` | ❌ |
| `ventures/page.tsx` | ✅ Primary venture |
| `services/crm-automation` | ⚠️ Uses `workflow.png` as example |

### Assets

**Directory:** `public/projects/vizon-os/` (13 files)

| File | Use |
|------|-----|
| `tasks-kanban.png` | Hero, grid |
| `docs-edit.png` | Product grid |
| `workflow.png` | Product grid (also misused on Capsole page) |
| `discover.svg`, `innovate.svg`, `accelerate.svg` | Brand icon grid |
| `lenz-ai.svg`, `crm-icon.svg`, `tasks-icon.svg`, `docs-icon.svg`, `messaging-icon.svg` | Brand icon grid |
| `vizon-logo.svg` | Logo lockup |

**Missing:** Lenz AI UI, CRM pipeline, messaging, strategy suite, agents, Nexus screenshots.

---

## Narrative structure (deepen target)

### Recommended additions (keep existing sections, insert new ones)

```
[Keep existing: Hero, Intro, Discovery, Brand, Website showcase]

NEW: Strategy layer
  Moonshot → Masterplan → Goals. How strategy connects to daily execution.
  Screenshot: strategy suite or masterplan view

NEW: Operations layer — module walkthrough
  CRM: deals kanban, persona-linked deals, Stripe sync
  Projects: sprints, AI-generated sub-tasks
  Docs: TipTap collab, voice-powered drafting
  Messaging: decisions in context, not Slack silos
  CaseStudyImageGrid with 4 module screenshots

[Keep existing: SaaS product intro + 3-screenshot grid]

NEW: Intelligence layer
  Vizon Nexus as context engine
  Lenz AI: reads live data, executes (contract example from marketing site)
  Workflows: multi-step AI nodes, triggers across CRM/projects
  Agents: cognitive workforce deployment
  Screenshots + one concrete workflow example

NEW: Platform architecture (brief)
  Multi-tenant SaaS, unified data model, role-based access
  Real-time collab (TipTap), messaging (LiveKit), AI layer
  Built solo with AI-orchestrated development

NEW: What this demonstrates in your team
  Platform design at enterprise scope, AI-native module integration,
  design systems that scale across 15+ surfaces

[Keep: logo lockup]
CaseStudyDeviceShowcase → vizonos.com
CallToAction → /hire
```

### Language to soften

- Reduce repeated "10-to-1,000" manifesto phrasing — one mention max
- Replace abstract "cognitive operating system" with module names
- Keep status honest: private beta, in use with client teams

---

## Implementation checklist

### Assets
- [ ] Capture Lenz AI conversation with action completion
- [ ] Capture CRM deals kanban with persona/strategy context visible
- [ ] Capture messaging embedded in project/deal
- [ ] Capture strategy suite (Moonshot or Masterplan)
- [ ] Capture workflow builder with AI nodes
- [ ] Optional: early IA sketch or flow diagram (process artifact)

### Page updates
- [ ] Add Strategy layer section
- [ ] Add Operations module walkthrough with 4-screenshot grid
- [ ] Add Intelligence layer section (Nexus, Lenz, Workflows, Agents)
- [ ] Add platform architecture section (brief, technical)
- [ ] Add "What this demonstrates in your team"
- [ ] Change `CallToAction` href to `/hire`
- [ ] Soften manifesto language

### Discovery
- [ ] Uncomment / add to `ProjectsGrid.tsx`
- [ ] Consider `FeaturedProjects.tsx` slot

### Cross-project fix
- [ ] Stop using `workflow.png` on Capsole page once Capsole assets exist

---

## Role mapping

| Hire role | What Vizon OS proves |
|-----------|---------------------|
| Principal Product Designer | Platform-scale UX across 15+ modules, design system at SaaS depth |
| Lead Product Designer | Complex information architecture, module integration |
| AI Product Lead | Context-aware AI (Lenz), agents, workflow automation design |
| Founding Designer | Moonshot 0→1, solo ship of enterprise-grade product |

---

## Open questions for Tie

- [ ] Which client teams are in beta? (wording for case study — no names without approval)
- [ ] Can we screenshot beta product UI or only marketing site?
- [ ] Priority modules for screenshot pass (recommend: Lenz AI + CRM + Workflows)

---

## Related docs

- [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md) §4
- [capsole.md](./capsole.md) — shares unified workspace thesis
