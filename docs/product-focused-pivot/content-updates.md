# Product-Focused Pivot — Content Updates

Working outline for every content edit in the pivot. Execution mechanics live in
[implementation-plan.md](./implementation-plan.md). Strategy + decisions log:
[../Hire/hire-review-upgrades.md](../Hire/hire-review-upgrades.md) §6.
Per-product case-study detail: [../case-studies/](../case-studies/README.md).

**Direction (decided July 10):** product lead · strategy · shipping for you ·
AI-native tools and systems. Brand/web demoted from offers to capabilities.

**Speed rule:** screenshot-first everywhere. A portfolio page = short intro +
status + live link + screen grid + stack line. Reuse existing copy from
`src/data/hire-portfolio.ts` — do not write new long-form narrative for v1.

---

## P0 — Portfolio liveness (before anything else)

The proof has to be visible before the positioning changes. Current state of
the six priority items:

### Founder products

- [ ] **Scope Architect** — `/work` page EXISTS but tells the pre-pivot story
      (agency scoping → proposals). Worst offender: contradicts
      scopearchitect.com the moment someone clicks through.
      → Rewrite copy blocks from hire-portfolio.ts (mission control narrative,
      already correct there) · add product screenshots · **add to ProjectsGrid**
- [ ] **Vizon OS** — page is a good skeleton, 13 assets in repo.
      → Uncomment its ProjectsGrid entry (update tags: drop "Web Design"
      framing, use Multi-Tenant SaaS / AI Agents) · add more product UI shots
- [ ] **Capsole** — page BROKEN (currently shows Vizon screenshots), zero
      Capsole assets in repo. Live at capsole.io.
      → Capture real screenshots · replace images · add ProjectsGrid entry ·
      fill the empty /hire card image slot (long-standing open item)
- [ ] **LoreTorch** — page narrative fine, hero image only.
      → Capture product UI shots (VTT in action = the money shot) · add
      ProjectsGrid entry

### Client products (new pages — minimal screenshot-first template)

- [ ] **RE Success Path** — no page, no assets. Docs reference a PorchLyte
      product called "Social Success Path" (AI-driven course for real estate
      agents) — ❓ Tie: same product? confirm final name + live URL.
      Strategic value: the "client AI product" proof — answers "have you
      shipped AI for clients or only your own ventures?"
- [ ] **Return To Radiance** — zero repo presence. ❓ Tie: client, what was
      built, live URL, screenshots.

### Grid ordering

- [ ] Founder products lead the grid (top row), then RE Success Path / Return
      To Radiance, then existing client work. Product proof first, brand/web
      credibility second.

---

## P1 — Homepage (most of the perceived pivot)

- [ ] Hero: from web-design/branding framing → "I design, build, and ship
      complete products — strategy through production, AI-native by default"
      (draft copy TBD, react-to-render)
- [ ] Featured work: lead with the four founder products
- [ ] Keep: ClientRoster (trust layer), design system, overall structure

## P1 — Pricing / retainer card

Spec already locked in hire-review-upgrades.md §5:

- [ ] "Monthly Retainer" → **Product Partner** framing
- [ ] "Active tasks" counter → workstreams / engagement scope
- [ ] Chips: Logo/Funnels/Brand Assets → Product Strategy · 0→1 Product Design
      · Design Systems · AI-Native Features · Brand · Production Shipping
- [ ] "Updates every 48 hours" → weekly ship cadence / embedded Slack
- [ ] Keep "pause or cancel anytime"
- [ ] Anchor $12.5–15k/mo + replaces-two-hires math; optional ~$8–9k
      single-workstream on-ramp

## P2 — Services IA

- [ ] Restructure to three offers: **Fractional Product Partner** · **0→1
      Product Builds** · **AI-Native Systems for Your Business**
- [ ] crm-automation page content absorbs into AI-Native Systems
- [ ] branding / web-design / development pages: keep as SEO doors, reframe
      intros to funnel up-altitude ("brand and web inside a product
      partnership") — do not delete
- [ ] Services index page headline + narrative reframe

## P3 — Supporting pages

- [ ] /work metadata + ClientRoster heading copy (currently "custom web
      platforms… premium websites")
- [ ] /about — emphasis pass toward builder/product-partner story
- [ ] /start + /get-started funnel copy — qualify for product engagements
- [ ] Root layout metadata/OG description ("premium digital products" is close;
      sharpen to the product-partner language once homepage lands)

---

## Untouched

Design system · /hire (already tells this story) · case-study pages for
existing client work · ClientRoster component.
