# Hire Page + Case Study Upgrade Plan

Consolidated plan from the external AI review (June 2026), corrected against the current
state of the products and the live /hire page. Work through top to bottom — items are
ordered by impact on getting paid, not by effort.

---

## 0. Corrections to the review (read before acting on it)

The review's strategy is mostly right. Three things in it are wrong or dangerous:

1. **All of its Scope Architect material describes the pre-pivot product** (agency
   scoping → proposals → defensible pricing). Scope Architect is now **mission control
   for building with AI**: idea → agent-ready plan → MCP handoff → cloud sandbox
   execution → context/token/PR tracking, with BYOK. Any resume bullet or case study
   using the old framing contradicts scopearchitect.com the moment a hiring manager
   opens it. The agency OS story (proposals, e-sign, PM, client portal) belongs to
   **Capsole** now.
2. **Its resume draft has no employment history and no dates.** A resume that is all
   founder products + skills dies at ATS parsing and reads as "never been hired" to a
   recruiter. It needs a chronological EXPERIENCE section with employer/role/dates,
   even if most of it is "Founder & Principal, made by tie — 2008–present."
3. **"Add 1 simple metric anywhere" needs the honesty filter.** No product has users.
   Metrics must be capability/design claims ("one system in place of five tools",
   "idea to agent-ready plan in minutes") — never adoption claims. This rule is
   already applied on /hire; hold the resume and case studies to it too.

What the review got right (endorsed): the "why me for YOU" translation layer,
founder→team language balancing, explicit metrics where honest, 2–3 high-quality
applications/day with one product insight each, and messaging founders/heads of
product directly.

---

## 1. Hire page (/hire) — small edits, mostly shipped

- [x] Executive Brief closing line added (June 11): *"Inside a team, that's what I
  bring: founder-level ownership that ships faster, cuts design-to-engineering
  friction, and puts AI-native features into production."*
- [x] "Built Solo, Designed for Teams" pillar (already covers shift #2)
- [x] Honest status badges + capability-style outcomes (already covers shift #3)
- [ ] Optional language sweep: pillar 1 says "no handoffs" — consider pairing
  ownership language with collaboration ("led product direction", "built systems
  that scale across teams") per the review. Low priority; the new pillar already
  counterweights it.
- [ ] Still open from the previous round: testimonial quotes, Capsole screenshot,
  resume PDF file, Scope demo video URL, recent client project slot.

Note: the review's headline suggestion ("Lead Product Designer | AI-Native Products |
0→1 & Scalable Systems") is a **LinkedIn headline**, not a page change. The rail
title stays as is.

---

## 2. Résumé (`/public/tie-love-resume.pdf`) — BLOCKING, highest priority

The review's draft is a good skeleton. Corrected structure:

1. **Header** — Tie Love · Lead Product Designer | AI-Native Products | 0→1 Systems ·
   Boise, ID · open to remote/relocation · madebytie.com/hire · LinkedIn · email
2. **Executive summary** — keep the review's version but swap its closing line for the
   team-value line now on /hire. Voice rules apply: first person, no "passionate /
   synergy / leverage."
3. **Selected impact** (5 bullets max, honesty-filtered):
   - Built and launched 4 production platforms as a solo founder — brand through deployment
   - Designed an agent-orchestration platform (idea → agent-ready plan in minutes, MCP handoff, cloud sandboxes)
   - Designed multi-tenant SaaS consolidating CRM, docs, messaging, and strategy into one system
   - 169+ projects delivered across startups, venture-backed teams, and global brands
   - ~~"Reduced product scoping from days to minutes"~~ → only if reframed as the OLD product's capability; safer to drop
4. **EXPERIENCE — chronological with dates.** `[PLACEHOLDER: Tie's employment
   history — employers/clients, titles, dates, 1–2 outcomes each]`. Founder products
   fold in under "Founder & Principal, made by tie (YYYY–present)" as sub-bullets.
5. **Founder product experience** — four products, one line + 2 bullets each.
   **Scope Architect bullets must be rewritten** to the new positioning (see §3 beats).
   Capsole gets the agency OS bullets (scoping, proposals, e-sign, PM, client portal).
6. **Tools & technology** — keep review's list (matches /hire stack)
7. **Target roles + links** — match /hire exactly: Principal PD, Lead PD, Founding
   Designer, AI Product Lead, Founder in Residence. (The review's draft re-added
   "AI Product Designer" and dropped FIR — keep consistent with the page.)

Format: one page, single column, ATS-parseable (no tables/columns/icons), PDF with
real text. Build as HTML → print-to-PDF so it stays in the design system.

**Blocking input: employment history with dates.**

---

## 3. Scope Architect case study (/work/scope-architect) — full rewrite

The review's case study skeleton is genuinely good — keep it, replace the content:

**Skeleton (keep):** Overview → Problem → Opportunity → Approach (3 parts) → Key
product decisions → Outcome → What this demonstrates → How I'd apply this in your
team → Next step.

**New content beats:**
- Problem: AI coding sessions lose context, drift silently, leave you flying blind.
  Chat forgets; the thread breaks between idea and shipped code.
- Opportunity: a structured layer both human and agent build from — scope as the
  shared source of truth, not a document that dies after kickoff.
- Approach 1 (Product design): idea-to-scope flow (dump an idea or import a repo),
  shared command center UX, execution views for every task/token/PR.
- Approach 2 (AI orchestration): structured scoping engine, Zod-validated schemas,
  recursive expansion — outputs an agent can execute, not prose.
- Approach 3 (Platform): MCP handoff, cloud sandbox execution, context/memory
  management, BYOK, token analytics.
- **The pivot is an asset — tell it.** "V1 productized agency scoping. Usage taught
  me the durable problem was agent context/control, so I repositioned the product;
  the agency features became Capsole." That is product judgment — exactly what a
  Lead/Principal panel probes for. One short "What changed and why" section.
- Keep the review's "How I would apply this in your team" section — it's the
  strongest differentiator in the draft. Keep "What this demonstrates."

---

## 4. Vizon OS case study (/work/vizon-os) — concretize

The review's draft is structurally fine but too abstract for a skeptical design lead
("cognitive operating system", "scale thinking, not just output" — manifesto language
with no artifacts).

- Keep: Role/Scope/Focus header block, Problem → Solution → Product thinking →
  Design execution → Outcome flow.
- Cut: the "Why this matters" manifesto section; soften "cognitive OS" to one mention.
- Add: concrete modules (CRM, projects, TipTap collaborative docs, LiveKit
  messaging/voice/video, Nexus context engine, Lenz AI, agents, workflow rules),
  real screenshots per module, and at least one process artifact (early flow, a
  decision that changed, a tradeoff).
- Status honesty: private beta, in use with client teams — capability claims only.

---

## 5. Capsole + LoreTorch case studies — same treatment

- **Capsole** now owns the agency OS narrative: 18 years of agency operations
  productized + inherited the v1 Scope Architect features (scoping → proposals →
  e-sign → PM → client portal). Story: deep domain expertise.
  - Still broken: /work/capsole uses Vizon screenshots (`/projects/vizon-os/workflow.png`).
    Needs real Capsole assets before any application goes out.
- **LoreTorch**: story is interaction-heavy real-time UX (live multiplayer state, AI
  game master). Apply the same skeleton. Launching now — link the live site.

---

## 6. LinkedIn — consistency pass

- Headline: `Lead Product Designer | AI-Native Products | 0→1 & Scalable Systems`
- About: use the review's "I design products that think" draft as a base, with fixes:
  - Remove "Senior" from open-to roles (level inconsistency with the page; don't
    undercut Lead/Principal positioning).
  - Name all four products with honest statuses; lead with the Scope Architect
    launch while it's news.
  - End with a pointer to madebytie.com/hire and the walkthrough offer.
- Featured section: /hire link + Scope Architect launch post.
- Experience entries must match whatever the resume says (recruiters cross-check).

---

## 7. Daily outreach system (endorsed from the review, adjusted for zero runway)

- 2–3 high-fit applications per day, each with **one specific product insight** about
  the company's actual product.
- Message founders / heads of product directly; lead with:
  *"I've built and shipped multiple AI-native products and noticed an opportunity in
  your [product area]…"*
- **Every application also offers the fractional version** — contract converts to
  cash in weeks; FTE takes months.
- Scope Architect launch content (Show HN, Product Hunt, X build-in-public thread)
  runs in parallel — the audience for the product and the audience that hires are
  the same people.

---

## 8. Sequencing

| When | Do |
|---|---|
| Now | Tie sends employment history → resume drafted same day |
| Now | Scope launch posts go out (launch is live — don't wait on the rest) |
| Day 1–2 | Resume PDF shipped to /public + LinkedIn consistency pass |
| Day 2–4 | Scope Architect case study rewrite (new positioning + pivot story) |
| Day 4–7 | Vizon OS case study concretized; Capsole assets captured + case study fix |
| Ongoing | 2–3 applications/day with fractional offer + direct founder messages |
| When ready | Testimonials, demo video URL, recent client project → fill /hire placeholders |

## Master placeholder list

| Item | Where | Status |
|---|---|---|
| Employment history w/ dates | resume §2 | **blocking, from Tie** |
| `/public/tie-love-resume.pdf` | linked 3× on /hire | 404 until uploaded |
| Capsole screenshots | /hire card + /work/capsole | none exist in repo |
| 2 testimonial quotes | HIRE_TESTIMONIALS | visible placeholders |
| Scope demo video URL | hire-portfolio.ts `video.src` | slot hidden until set |
| Recent client project | HIRE_CLIENT_WORK comment | optional |
