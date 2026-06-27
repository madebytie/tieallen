# Social Success Path — Case Study Deep Dive

**Client:** PorchLyte  
**Product:** Social Success Path — AI-driven course for real estate agents  
**Case study:** ❌ Does not exist  
**Live URL:** TBD — confirm with Tie  
**Status:** Client product — not a founder venture

---

## Strategic purpose

Social Success Path is the **client AI product** proof — shows Tie can deliver AI-native product design inside a client engagement, not only on founder ventures. This balances the portfolio: four solo-built products + one applied AI build for a paying client.

Best for Lead Product Designer and AI Product Lead roles where panels ask: "Have you shipped AI products for clients, or only your own?"

**Framing:** Client work with product depth — not a brand/website case study. Lead with AI course mechanics, agent coaching UX, and membership platform integration.

---

## Known context

| Item | Current state |
|------|---------------|
| Client name | PorchLyte |
| Product name | Social Success Path |
| Description | AI-driven course for real estate agents |
| Portfolio mention | `ClientRoster.tsx` — "PorchLyte · Membership Platform" only |
| Case study page | ❌ None |
| Assets | ❌ None in repo |
| Hire page | ❌ Not in `HIRE_CLIENT_WORK` or `HIRE_PRODUCTS` |

### Relationship to PorchLyte

PorchLyte appears to be a **membership platform** client. Social Success Path is likely a **product/course layer** on or alongside that platform — built for real estate agents with AI-driven curriculum, coaching, or progress tracking.

**Needs discovery with Tie:**
- Is Social Success Path a standalone product URL or a module inside PorchLyte?
- What did Tie own end-to-end vs collaborate on?
- Client approval for public case study?
- Any metrics, testimonials, or launch status?

---

## Proposed positioning (draft — validate with Tie)

### Problem
Real estate agents need social media presence and lead generation skills but lack time for traditional courses. Generic training doesn't adapt to their market, experience level, or progress.

### Solution
An AI-driven course that personalizes curriculum, coaches agents through social strategy, and tracks outcomes — built on PorchLyte's membership infrastructure.

### What Tie likely delivered (hypothesis — confirm)
- Product UX for course flow (modules, lessons, progress)
- AI coaching / tutoring interface design
- Brand alignment with PorchLyte ecosystem
- Full-stack implementation of course + AI features
- Possibly: agent-facing dashboard, content generation, practice scenarios

---

## Portfolio gap vs founder products

| Dimension | Founder products (4) | Social Success Path |
|-----------|---------------------|---------------------|
| Ownership | Solo founder, 0→1 | Client engagement |
| Narrative | "I built this company" | "I designed and built this for PorchLyte" |
| Hire proof | Ship velocity, vision | Stakeholder collaboration, vertical AI UX |
| Page location | `/work` + `/hire` products | `/work/social-success-path` + optional `HIRE_CLIENT_WORK` |
| Tone | Founder judgment, pivots | Client outcomes, problem → solution → delivery |

---

## Discovery checklist (blocking)

Before writing the case study, Tie needs to provide:

- [ ] **Live URL** — product access for audit and screenshots
- [ ] **Scope of work** — what Tie owned (brand, UX, AI, dev, all of the above?)
- [ ] **Timeline** — project duration and current status (live, beta, internal)
- [ ] **Client approval** — can we publish a public case study with PorchLyte name?
- [ ] **Testimonial** — quote from PorchLyte stakeholder? (fills `HIRE_TESTIMONIALS` placeholder)
- [ ] **AI specifics** — what does "AI-driven" mean in practice? (tutor, content gen, path personalization, chat coach?)
- [ ] **Target user** — solo agents, teams, brokerages?
- [ ] **Differentiation** — vs generic real estate coaching platforms?

---

## Live product audit

**Status:** Cannot audit until URL/access provided.

### Screenshots to capture (once access confirmed)

| Surface | Purpose | Priority |
|---------|---------|----------|
| Course home / dashboard | First-run agent experience | P0 |
| Lesson / module view | Content structure UX | P0 |
| AI coaching interaction | Core hire proof — AI in workflow | P0 |
| Progress / completion tracking | Product thinking | P1 |
| Onboarding flow | 0→1 user activation | P1 |
| Mobile view (if applicable) | Responsive design | P2 |
| Admin / content management (if Tie built it) | Platform depth | P2 |

Save to: `public/projects/social-success-path/`

---

## Narrative structure (draft page)

**Slug:** `/work/social-success-path`  
**File:** `src/app/(site)/work/social-success-path/page.tsx`

```
1. ProjectHero
   Title: [TBD — e.g. "AI coaching for real estate agents"]
   Tags: Product Design, UX, AI Integration, [Web Development if applicable]
   Image: course dashboard or AI coaching UI

2. CaseStudyIntro
   Headline: [TBD — outcome-focused]
   Description: AI-driven course on PorchLyte's membership platform
   Client: PorchLyte
   Industry: Real Estate / EdTech / Membership
   Timeline: [TBD]
   Services: [TBD — Product Design, UX, AI, Development]

3. Problem — Agents need social skills, not another PDF course
   Generic training doesn't adapt. Agents drop off. No feedback loop.

4. Approach — AI-native course design
   How the product personalizes path, coaches in context, tracks progress
   [Requires Tie input on actual AI mechanics]

5. Product design — Key UX decisions
   Course structure, AI touchpoints, progress UX, membership integration

6. CaseStudyImageGrid — course UI, AI coaching, progress views

7. AI integration — What "AI-driven" means here
   Not a chatbot sidebar — [specific mechanics from discovery]

8. Outcomes — Client outcomes (with approval)
   [Capability claims + any approved client results]

9. CaseStudyQuote — PorchLyte testimonial (if available)

10. CaseStudyDeviceShowcase — live URL (if public)

11. CallToAction → /hire or /contact
```

---

## Implementation checklist

### Discovery (Phase 0)
- [ ] Tie provides URL, scope, timeline, approval
- [ ] Audit live product
- [ ] Update this doc with confirmed facts (replace hypothesis sections)

### Assets
- [ ] Create `public/projects/social-success-path/`
- [ ] Capture screenshots per audit table
- [ ] Optional: demo video of AI coaching flow

### Build
- [ ] Create `src/app/(site)/work/social-success-path/page.tsx`
- [ ] Add metadata (title, description)
- [ ] Compose case study sections per narrative above

### Discovery surfaces
- [ ] Add to `ProjectsGrid.tsx` — tag as client AI product, not founder
- [ ] Consider `HIRE_CLIENT_WORK` entry (lead the client row — recent AI work)
- [ ] Update `ClientRoster.tsx` detail from "Membership Platform" to include Social Success Path
- [ ] Do NOT add to `HIRE_PRODUCTS` (founder products only) or `ventures/page.tsx`

### Hire funnel
- [ ] PorchLyte testimonial → `HIRE_TESTIMONIALS` if approved
- [ ] Resume bullet under client experience section

---

## Role mapping

| Hire role | What Social Success Path proves |
|-----------|--------------------------------|
| Lead Product Designer | Client AI product delivery, vertical UX (real estate) |
| AI Product Lead | Applied AI in education/coaching workflow |
| Principal Product Designer | End-to-end client product ownership |
| Founding Designer | Less primary — save founder products for FIR positioning |

---

## Priority

**P2** — after Scope Architect and Capsole rewrites (P0) and Vizon OS / LoreTorch deepening (P1).

Rationale: Founder products are the primary hire differentiator. Social Success Path strengthens the "client AI" angle but requires discovery input before any build work.

---

## Related docs

- [README.md](./README.md) — master tracker
- [hire-and-casetudy-upgrades.md](../Hire/hire-and-casetudy-upgrades.md) — client work slot in `HIRE_CLIENT_WORK`
