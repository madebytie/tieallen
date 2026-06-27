# Capsole — Case Study Deep Dive

**Live product:** [capsole.io](https://capsole.io) · [Pricing](https://capsole.io/pricing)  
**Case study:** `/work/capsole`  
**Hire card:** `src/data/hire-portfolio.ts` → `HIRE_PRODUCTS[2]`  
**Status:** Private beta (verify public launch timing with Tie)

---

## Strategic purpose

Capsole is the **domain expertise productized** proof — 18 years of agency operations turned into a full client lifecycle OS. It shows Tie can design for a specific vertical (creative agencies) with depth no generic PM tool has.

Best for Lead Product Designer, Founding Designer, and Principal PD roles where the panel values **knowing the user's workflow cold**.

**Positioning line:** The operating system for creative agencies. Discovery to signed proposal in minutes.

---

## Live product audit

Reviewed against [capsole.io/pricing](https://capsole.io/pricing) (June 2026).

### Product definition

Capsole is the agency OS: turn discovery notes into scoped projects, client-ready proposals, e-signatures, and invoices — from first call to final payment.

### Pricing tiers (context for case study — not copy-paste)

| Plan | Price | Key limits |
|------|-------|--------------|
| Solo | $49/mo | 10 scope generations, 75 AI Architect credits, 1 seat |
| Studio | $149/mo | 50 scopes, 300 credits, 5 seats |
| Agency | $399/mo | Unlimited scopes*, 1,000 credits, 15 seats, white-label |

*Fair use policy applies above ~250 scopes/mo.

### Features included in every plan (showcase these)

| Feature | Hire proof |
|---------|------------|
| **AI Architect / Scope Generations** | AI-native scoping (inherited from Scope Architect v1) |
| **Proposal Designer** | Purpose-built editor for scopes and proposals |
| **eSign & Proposal Finalization** | Client signature in-platform |
| **Invoicing & Payments** | Billing in the flow |
| **PDF export & shareable link** | Client deliverable polish |
| **Realtime collaborative editing** | Multiplayer scope/proposal editing |
| **Custom branding** | White-label on Agency tier |
| **Agency DNA** | Rates, effort constants, tech stack encoded once |

### ROI framing from live site

- Manual scoping + proposal: ~40 hrs/mo → Architect: ~6 hrs/mo (85% time savings claim on marketing site)
- Use as **design/capability context**, not adoption proof

### Relationship to Scope Architect

```
Scope Architect v1 (agency scoping) ──pivot──► Scope Architect (dev/agent OS)
                         │
                         └──► Capsole (agency OS — full lifecycle)
```

Capsole owns: scoping → proposals → e-sign → invoicing → PM → client portals.  
Scope Architect owns: idea → agent plan → MCP → sandboxes → command center.

**Never mix these narratives on either case study page.**

---

## Current portfolio state

### `/work/capsole` — 🔴 BROKEN

**Critical issue:** Hero and image grid use `/projects/vizon-os/workflow.png` — a Vizon OS screenshot labeled as "Capsole workflow interface concept."

A hiring manager who notices this loses all credibility. This is the highest-priority visual fix in the entire portfolio.

**Copy assessment:**
- Problem framing (agency duct tape) is ✅ correct
- Product design section is ⚠️ generic — no specific Capsole UI references
- AI integration section is ⚠️ abstract
- Timeline says "In Development" — may need update if product is further along
- No live `CaseStudyDeviceShowcase` to capsole.io
- No pricing/product screenshots
- `CallToAction` → `/hire` ✅

**Source file:** `src/app/(site)/work/capsole/page.tsx`

### `/hire` card — 🔴 Empty image

`hire-portfolio.ts` has `image: ""` — renders a visible placeholder slot on `/hire`. Comment in code: "no Capsole screenshot exists in the repo."

### Discovery surfaces

| Surface | Listed? |
|---------|---------|
| `ProjectsGrid.tsx` | ❌ |
| `FeaturedProjects.tsx` | ❌ |
| `ventures/page.tsx` | ❌ |
| Header nav | ❌ |

### Assets

| Asset | Path | Status |
|-------|------|--------|
| Any Capsole screenshot | `public/projects/capsole/` | 🔴 **Directory does not exist** |
| Misused Vizon asset | `workflow.png` on Capsole page | 🔴 Remove immediately when Capsole assets land |

---

## Narrative structure (rewrite target)

### Recommended page flow

```
1. ProjectHero
   Title: "The operating system for creative agencies."
   Image: REAL Capsole product UI (proposal or scope view)
   Tags: Product Design, UX, Agency Operations, AI Integration

2. CaseStudyIntro
   Headline: Discovery to signed proposal in minutes.
   Client: Capsole (founder)
   Industry: Agency Operations / SaaS
   Timeline: Private beta · [confirm with Tie]

3. Problem — Agencies run on duct tape
   Notion + spreadsheets + PM tools + email. Context breaks at every handoff.
   Billable time lost to coordination.

4. Origin — Productized from 18 years of agency work
   Built the scoping layer first (Scope Architect v1).
   Learned the full lifecycle needed one system — that became Capsole.
   Short lineage section, not a full Scope Architect retread.

5. Product design — Agency-native UX
   Client portals vs internal delivery views
   Proposal designer (not generic docs)
   Scoping → proposal → e-sign as one continuous flow
   Agency DNA: rates, stack, effort constants

6. AI integration — AI Architect
   Discovery notes → scoped project structure
   Agency DNA injection into generation
   BYOK for unlimited AI on Studio/Agency plans
   Not isolated prompts — reads client + project context

7. CaseStudyImageGrid — 4–6 real screenshots:
   - Scope generation / AI Architect
   - Proposal designer
   - eSign flow
   - Invoicing
   - Collaborative editing
   - Custom branding / white-label

8. Platform — Full lifecycle in one data model
   Scoping connects to proposals, e-sign, delivery, invoicing
   Real-time collab (TipTap), team seats, client-facing links
   Shares technical patterns with Vizon OS (unified workspace thesis)

9. Outcomes — Capability claims
   One system from discovery call to signed proposal
   Flat-rate plans, full-featured from day one
   Built by someone who ran the work

10. What this demonstrates in your team
    Vertical SaaS design, domain-driven UX, AI productized into workflow

11. CaseStudyDeviceShowcase → https://capsole.io

12. CallToAction → /hire
```

---

## Implementation checklist

### Assets (BLOCKING — do before any application goes out)
- [ ] Create `public/projects/capsole/`
- [ ] Capture AI Architect / scope generation UI
- [ ] Capture Proposal Designer
- [ ] Capture eSign / proposal finalization flow
- [ ] Capture invoicing & payments view
- [ ] Capture Agency DNA settings
- [ ] Capture collaborative editing (multiplayer scope)
- [ ] Capture custom branding / white-label preview
- [ ] Optional: pricing page as marketing proof (separate from product UI)

### Page rewrite
- [ ] Replace ALL Vizon assets with Capsole screenshots
- [ ] Rewrite hero image path
- [ ] Add live `CaseStudyDeviceShowcase` → capsole.io
- [ ] Add origin/lineage section (Scope v1 → Capsole)
- [ ] Add concrete product sections per narrative above
- [ ] Update timeline/status with Tie
- [ ] Add "What this demonstrates in your team"

### Hire funnel
- [ ] Set `hire-portfolio.ts` `image` to real Capsole screenshot
- [ ] Verify resume bullets describe Capsole (agency OS), not Scope Architect

### Discovery
- [ ] Add to `ProjectsGrid.tsx`
- [ ] Add to `ventures/page.tsx`
- [ ] Consider homepage featured slot

---

## Role mapping

| Hire role | What Capsole proves |
|-----------|---------------------|
| Lead Product Designer | Vertical SaaS UX, complex workflow design |
| Founding Designer | 0→1 from lived domain expertise |
| Principal Product Designer | Full lifecycle product thinking, client + internal dual UX |
| AI Product Lead | AI Architect integration into real business workflow |

---

## Open questions for Tie

- [ ] Beta vs public launch — correct status badge?
- [ ] Can we show pricing page content in case study or product UI only?
- [ ] Any pilot agencies willing to be referenced (even anonymously)?
- [ ] Demo account for screenshot capture?

---

## Related docs

- [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md) §5
- [scope-architect.md](./scope-architect.md) — pivot source; do not duplicate agency narrative there
