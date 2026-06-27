# Case Study Master Tracker

**Goal:** Position Tie for full-time roles listed on [/hire](https://madebytie.com/hire) — Principal Product Designer, Lead Product Designer, Founding Designer, AI Product Lead, Founder in Residence.

**Strategic shift:** The portfolio is strong on brand and web design client work. The gap is proof of **end-to-end AI-native product ownership** — brand, marketing site, product UX, platform architecture, and production deployment as a solo builder.

---

## Portfolio tiers

| Tier | Purpose | Audience |
|------|---------|----------|
| **Founder products** (4) | Primary hire proof — show 0→1 product design + AI integration + ship velocity | Hiring managers, founders, design leads |
| **Client AI product** (1) | Secondary proof — applied AI product work inside a client engagement | Same + shows client/stakeholder collaboration |
| **Client brand/web** (existing) | Credibility and range — 169+ projects, enterprise velocity | Recruiters scanning breadth |

Founder products should lead on `/hire`, `/work` (new section or top of grid), homepage featured work, and outbound applications. Client brand work stays as supporting proof.

---

## Status matrix

| Case study | Live product | `/work` page | `/hire` card | Work grid | Assets | Priority |
|------------|--------------|--------------|--------------|-----------|--------|----------|
| [Scope Architect](./scope-architect.md) | [scopearchitect.com](https://scopearchitect.com) | ⚠️ **Stale** — old agency-scoping narrative | ✅ Correct (agent orchestration) | ❌ Not listed | ⚠️ 1 screenshot, no video | **P0** |
| [Vizon OS](./vizon-os.md) | [vizonos.com](https://vizonos.com) | ⚠️ Good skeleton, needs product depth | ✅ Strong | ❌ Commented out | ⚠️ Partial (13 files) | **P1** |
| [Capsole](./capsole.md) | [capsole.io](https://capsole.io) | 🔴 **Broken** — uses Vizon screenshots | 🔴 Empty image slot | ❌ Not listed | 🔴 None in repo | **P0** |
| [LoreTorch](./loretorch.md) | [loretorch.com](https://loretorch.com) | ⚠️ Narrative ok, thin on product UI | ✅ Good | ❌ Not listed | ⚠️ Hero only | **P1** |
| [Social Success Path](./social-success-path.md) | TBD (PorchLyte client) | ❌ Does not exist | ❌ Not listed | ❌ Not listed | ❌ None | **P2** |

**Legend:** ✅ Done · ⚠️ Partial · 🔴 Blocked · ❌ Missing

---

## Product lineage (important for narrative)

```
Scope Architect v1 (agency scoping → proposals)
        │
        ├── PIVOT → Scope Architect (mission control for building with AI)
        │           scopearchitect.com — MCP, sandboxes, command center
        │
        └── INHERITED → Capsole (agency OS)
                        capsole.io — scoping, proposals, e-sign, invoicing, PM
```

Vizon OS is the parallel moonshot: multi-tenant business OS (CRM + docs + messaging + AI agents). All four share the same thesis — **context fragmentation** — solved at different layers.

Telling the Scope Architect pivot in the case study is a hiring asset, not a liability. It demonstrates product judgment.

---

## Implementation phases

### Phase 0 — Asset capture (blocking)

Before rewriting copy, capture real product screenshots from live apps. No placeholder cross-wiring (Capsole ≠ Vizon).

| Product | Capture list | Save to |
|---------|--------------|---------|
| Scope Architect | Scope engine, Command Center, MCP config, token analytics, cloud sandbox PR flow | `public/projects/scope-architect/` |
| Vizon OS | CRM kanban, docs editor, messaging, workflows, Lenz AI, Nexus/strategy modules | `public/projects/vizon-os/` (expand) |
| Capsole | Pricing-adjacent product UI: scope generation, proposal designer, e-sign, invoicing, Agency DNA | `public/projects/capsole/` |
| LoreTorch | Aris GM, VTT battle map, character builder, quest builder, Foundry | `public/projects/loretorch/` |
| Social Success Path | Course UI, AI coaching flows, agent dashboard (confirm URLs with Tie) | `public/projects/social-success-path/` |

Optional: demo videos (Scope Architect preview, LoreTorch Aris session) → set `video.src` in `hire-portfolio.ts`.

### Phase 1 — Case study rewrites (P0)

1. **Scope Architect** — Full rewrite to match [scopearchitect.com](https://scopearchitect.com). Include pivot story. See [scope-architect.md](./scope-architect.md).
2. **Capsole** — Full rewrite with real assets. Own the agency OS narrative. See [capsole.md](./capsole.md).

### Phase 2 — Deepen existing pages (P1)

3. **Vizon OS** — Add module-specific sections, AI/agent depth, process artifacts. See [vizon-os.md](./vizon-os.md).
4. **LoreTorch** — Add product UI grids, Aris/VTT/Foundry sections. See [loretorch.md](./loretorch.md).

### Phase 3 — Portfolio surfacing (P1)

Wire founder products into discovery surfaces:

- [ ] `ProjectsGrid.tsx` — add founder product section or pin 4 products at top of `/work`
- [ ] `FeaturedProjects.tsx` — swap or supplement with 2–3 founder products on homepage
- [ ] `ventures/page.tsx` — add Scope Architect + Capsole (currently only Vizon + LoreTorch)
- [ ] Uncomment Vizon OS in `ProjectsGrid` once case studies are hire-ready
- [ ] `sitemap.xml` / metadata pass on all product pages

### Phase 4 — Client AI product (P2)

5. **Social Success Path** — New case study for PorchLyte. Framed as client AI product build, not founder venture. See [social-success-path.md](./social-success-path.md).

### Phase 5 — Hire funnel polish (ongoing)

Cross-cutting items from [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md):

- [ ] Resume PDF at `/public/tie-love-resume.pdf` (file exists but verify content matches product positioning)
- [ ] Scope Architect demo video URL → `hire-portfolio.ts`
- [ ] Capsole screenshot → `hire-portfolio.ts` `image` field
- [ ] Replace testimonial placeholders in `HIRE_TESTIMONIALS`
- [ ] Consider Social Success Path in `HIRE_CLIENT_WORK` once case study ships

---

## Case study page standard

All product case studies should follow this structure (adapt per product). Full component reference: [master-project-buildout-instructions.md](../master-project-buildout-instructions.md).

```
1. ProjectHero
2. CaseStudyIntro (client, industry, timeline, services)
3. Problem — what broke before this product existed
4. Opportunity / pivot (founder products) — why now, what changed
5. Product design — key UX decisions, screenshots
6. AI integration — not a feature bullet; core experience layer
7. Platform / technical — architecture decisions hiring managers probe
8. Outcomes — capability claims only (honesty filter)
9. What this demonstrates for a team — bridge to hire roles
10. CaseStudyDeviceShowcase (live product URL)
11. CallToAction → /hire
```

### Honesty filter (non-negotiable)

- No fake user/adoption metrics
- Status badges must match reality: "Launching now", "Private beta", "In use with clients"
- Capability claims are fine: "idea to agent-ready plan in minutes", "one system in place of five tools"
- Never imply traction you don't have

---

## What each product proves (hire role mapping)

| Product | Primary proof | Best for roles |
|---------|---------------|----------------|
| Scope Architect | Agent orchestration, dev tooling UX, MCP/sandbox integration | AI Product Lead, Founding Designer, Principal PD |
| Vizon OS | Multi-tenant SaaS, unified data model, enterprise platform design | Principal PD, Lead PD, AI Product Lead |
| Capsole | Domain expertise productized, full client lifecycle UX | Lead PD, Founding Designer |
| LoreTorch | Real-time multiplayer, interaction-heavy AI UX, entertainment | Lead PD, Founding Designer, AI Product Lead |
| Social Success Path | Client AI product delivery, vertical SaaS/course UX | Lead PD, AI Product Lead |

---

## Deep dive documents

| Document | Product | Status |
|----------|---------|--------|
| [scope-architect.md](./scope-architect.md) | Scope Architect | Audit + implementation plan |
| [vizon-os.md](./vizon-os.md) | Vizon OS | Audit + implementation plan |
| [capsole.md](./capsole.md) | Capsole | Audit + implementation plan |
| [loretorch.md](./loretorch.md) | LoreTorch | Audit + implementation plan |
| [social-success-path.md](./social-success-path.md) | Social Success Path (PorchLyte) | Audit + implementation plan |

---

## Sequencing recommendation

| When | Action |
|------|--------|
| **Now** | Tie captures Capsole + Scope Architect screenshots (P0 blockers) |
| **Week 1** | Rewrite Scope Architect + Capsole case studies; fix hire card assets |
| **Week 2** | Deepen Vizon OS + LoreTorch; add products to `/work` grid |
| **Week 3** | Social Success Path discovery (URLs, scope, client approval) + new page |
| **Ongoing** | 2–3 targeted applications/day referencing specific product proof |

---

## Open inputs from Tie

- [ ] Employment history with dates (blocking resume — see hire-and-casetudy-upgrades.md)
- [ ] Social Success Path: live URL, product access, client approval for case study
- [ ] Capsole beta status: public launch vs private beta wording
- [ ] Vizon OS: which client teams are in beta (for careful wording)
- [ ] Demo video assets for Scope Architect / LoreTorch
- [ ] Testimonial contacts (PorchLyte, Bitmain follow-up, etc.)
