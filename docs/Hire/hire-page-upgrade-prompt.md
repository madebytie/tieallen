# PROMPT: Upgrade madebytie.com/hire for senior design-leadership hiring

## Context

This is my hiring page at `madebytie.com/hire`. I'm Tie Love, a Lead Product Designer / AI Product Builder targeting roles like **Principal/Lead Product Designer, Founding Designer, AI Product Lead, and Founder in Residence** at companies like Vercel, Linear, Anthropic, and AI-native startups.

The page is good but has specific issues that will cost me with hiring managers and recruiters. Your job is to fix every item below. The audience is two-layered: (1) recruiters and ATS/AI scrapers who give the page 60–90 seconds or parse it programmatically, and (2) senior design hiring managers who are professionally skeptical and will notice craft details.

**Hard rule: NEVER fabricate metrics, user counts, client names, or testimonial quotes. Where real data is needed, insert a clearly visible placeholder like `[METRIC: # of signups]` or `[TESTIMONIAL: client name + quote]` and compile a list of all placeholders for me to fill in at the end. Ship structure, not fiction.**

---

## P0 — Bugs and technical fixes (must ship before launch)

1. **Wrong screenshot on Capsole card.** The Capsole featured image currently points to `/projects/vizon-os/workflow.png` — a Vizon screenshot on the Capsole case study. Replace with an actual Capsole product screenshot. If no Capsole asset exists in the repo, flag it and use a placeholder slot — do not leave the Vizon image.

2. **Stat counters render as zeros without JS.** The hero stats ("4 founder products / 169+ projects / 18Y") are count-up animations that output `0`, `0+`, `0Y` in raw HTML. Recruiter tools, link previews, and AI agents scraping the page see a candidate claiming zero experience. Server-render the final values in the markup (SSR/SSG), then progressively enhance with the count-up animation on the client. The no-JS and crawler-visible state must show the real numbers.

3. **SEO/meta is sabotaging discoverability.**
   - `meta robots` is currently `noindex, nofollow`. Change to `index, follow` (confirm with me if this was intentional, but default to indexable).
   - The canonical URL points to `tieallen.com` while the page lives on `madebytie.com`. Pick ONE canonical domain (default: `madebytie.com`), make canonical, OG URL, and sitemap consistent, and 301-redirect the other domain.
   - Update the meta title/description to include target role keywords: "Lead Product Designer," "Founding Designer," "AI Product Builder."

---

## P1 — Positioning and copy fixes

4. **Cut the anti-interview stance down to ONE instance.** "Not algorithm puzzles" / "Portfolio Over Puzzles" / "Skip the take-home" currently appears 3+ times (hero, "How I Think" pillar, footer CTA). Repeated, it reads defensive and anti-process. Keep ONE confident version in the footer CTA only. Rewrite:
   - Hero brief: remove "not algorithm puzzles." End on the strength claim instead.
   - "How I Think" third pillar: replace "Portfolio Over Puzzles" with a **collaboration pillar** (see item 5).

5. **Directly answer the "solo founder — can he collaborate?" doubt.** This is the #1 objection a hiring panel will have and the page never addresses it. Add a third "How I Think" pillar (replacing Portfolio Over Puzzles) along the lines of: *"Built solo, designed for teams"* — covering: 18 years of client/stakeholder collaboration, comfort giving and receiving direct design critique, working with PMs/engineers, and that founder ownership means I've sat on every side of the table (PM, eng, design, support). Write it confident, not apologetic. Keep my voice: short, declarative, no corporate filler.

6. **Add real numbers to every Outcome block.** All four case-study Outcome cells are qualitative ("days to minutes," "faster session prep"). Restructure each Outcome cell to lead with 1–2 concrete metrics using placeholders:
   - Scope Architect: `[METRIC: scoping time before/after]`, `[METRIC: # proposals generated or # users]`
   - Vizon OS: `[METRIC: # tools replaced / # active workspaces or tenants]`
   - Capsole: `[METRIC: # proposals/e-signs processed or pilot agencies]`
   - LoreTorch: `[METRIC: # sessions run / registered players]`
   - If a product has no user traction yet, the Outcome should say "Live in production" + capability proof rather than implying user adoption. Also soften the section header "Real products. Real users." to a claim every product can back — e.g. "Real products. In production." — unless I supply user numbers.

7. **Differentiate the four case studies.** All four currently wear identical tag chips (Brand · Product Design · Platform Design · AI-Orchestrated Build), which flattens them. Keep a small shared badge if needed, but give each card ONE unique lead-positioning line stating what it uniquely proves:
   - **Scope Architect** → "Dev tooling + agent infrastructure" (cloud VM sandboxes, OAuth-connected Codex — the same product category as Vercel Sandbox / agent platforms)
   - **Vizon OS** → "Multi-tenant enterprise scope" (CRM, docs, messaging, AI agents in one data model)
   - **Capsole** → "Deep domain expertise" (18 years of agency work productized)
   - **LoreTorch** → "Interaction-heavy real-time UX" (live multiplayer state, AI game master)

8. **Update the "Roles I'm targeting" chips** to: Principal Product Designer, Lead Product Designer, Founding Designer, AI Product Lead, **Founder in Residence**. Add one sentence under the chips noting openness to design-led founding roles where 0→1 ownership is the job.

9. **Compress and reframe the client work section.** The featured client projects are 2018–2019 crypto work, which dates the "startup speed" claim. Compress to a tighter strip (smaller cards or a single row), reframe the section header to emphasize the track record ("18 years of 0→1 client launches") rather than recency, and add a slot for `[RECENT CLIENT PROJECT]` if I provide one. Founder products stay the hero; client work is supporting evidence.

---

## P2 — Additions

10. **Testimonials section.** Add a short social-proof band (2–3 quotes max, name + role + company) between Founder Products and Client Work. Use `[TESTIMONIAL]` placeholders — do not invent quotes. Design it quiet and credible: plain text, small attribution, no star ratings or carousel.

11. **Scope Architect demo video slot.** I'm producing an end-to-end demo video. Add a video embed slot at the top of the Scope Architect case study (poster image + play, lazy-loaded, no autoplay with sound). Wire it so I can drop in a Mux/YouTube/self-hosted URL.

12. **Resume download.** Add a "Download résumé (PDF)" link in the sidebar contact block and footer CTA, pointing to `/tie-love-resume.pdf` (file to come). Mark as placeholder until the file exists.

13. **Recruiter-skim pass.** Audit the page assuming a 90-second skim: the hero brief, stats, roles chips, and the four product headlines must carry the full story on their own. Tighten any copy that requires reading body paragraphs to understand. Target: a recruiter who reads ONLY headings and chips can accurately describe me.

---

## Constraints

- Preserve the existing visual system: typography, color, spacing, card structure, sticky sidebar. This is a copy/structure/technical upgrade, NOT a redesign.
- Keep my voice: first person, short declarative sentences, confident, zero corporate filler ("passionate," "synergy," "leverage" are banned).
- All images need descriptive alt text (currently inconsistent).
- Page must remain fully legible with JS disabled (relates to item 2 — check for other client-only content while you're in there).
- Run a final pass for typos and grammar across the whole page.

## Deliverables

1. All P0 items fixed.
2. All P1/P2 items implemented with placeholders where real data is required.
3. A final summary listing: (a) every `[PLACEHOLDER]` I need to fill, (b) any items you couldn't complete and why, (c) before/after of every copy change for my review before deploy.
