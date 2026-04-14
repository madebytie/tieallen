# TieAllen.com Implementation Build-Out Plan

## 1. Project Philosophy
- **Aesthetic**: Premium, pristine, and clean **White Vibe** (no dark mode). Inspired by high-end solo design/dev retainers.
- **Brand Voice**: Exclusively "I / My / Me" (Tie Allen Love).
- **Styling**: Strictly clean, modular Vanilla CSS using CSS Modules for components. Absolutely no Tailwind, no Shadcn.
- **Target Audience**: Well-funded startups wanting full concept-to-scaling execution.

## 2. Directory Structure & App Routing
The Next.js 14 (App Router) project will follow a rigid, modular architecture:

```
src/
├── app/
│   ├── globals.css           # Global resets, color variables, typography defaults
│   ├── layout.tsx            # Global Layout containing Header, Footer, and Main content wrapper
│   ├── page.tsx              # Home Page (Single Core Page)
│   ├── get-started/
│   │   └── page.tsx          # Getting Started / Lead Capture with Vizonos CRM
│   └── work/
│       └── page.tsx          # Portfolio Route
├── components/               
│   ├── layout/               # Header.tsx, Footer.tsx, layout.module.css
│   ├── sections/             # Home page sections (Hero, Pricing, etc.)
│   └── ui/                   # Reusable primitive elements (Buttons, Inputs, Cards)
└── lib/                      # Utilities and Types
```

## 3. Execution Checklist

### Phase 1: Foundation (Currently Executing)
- [ ] Initialize `docs/implementation_plan.md`.
- [ ] Create `src/app/globals.css` with a pristine white design system (CSS variables).
- [ ] Create global `Header.tsx` and `Footer.tsx` with discrete CSS Modules (`layout.module.css`).
- [ ] Update `src/app/layout.tsx` to inject the Header and Footer globally.
- [ ] Scaffold empty Next.js App routes (`/work` and `/get-started`).

### Phase 2: Home Page Core Sections
- [ ] Hero Section (Focus on end-to-end execution).
- [ ] System & Capabilities.
- [ ] Portfolio Teaser.
- [ ] Pricing Tables for premium retainers.
- [ ] Thoughts / Experiments Grid.

### Phase 3: Getting Started & Vizonos Integration
- [ ] Build `/get-started` page structure.
- [ ] Set up the form container specifically for Vizonos embed or API.

### Phase 4: Portfolio Expansion
- [ ] Build `/work` page.
- [ ] Setup high-end image/case study gallery architecture.
