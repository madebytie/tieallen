# Scope Architect
**Intelligent SOW & Technical Roadmap Generator**

## Overview
Scope Architect is a high-fidelity tool designed to bridge the gap between vague client conversations and bankable technical contracts. It transforms high-level requirements into a granular, multi-tier Project Map, providing both an **Internal Blueprint** for development teams and a **Premium Proposal** for client sign-off.

---

## The Core Problem
Scoping is the "Invisible Risk" of software development.
- **For Agencies:** Underestimating tasks leads to margin erosion and "death by a thousand small requests."
- **For Clients:** Vague quotes build distrust. Clients want to see *what* they are paying for, not just a lump sum.
- **The Process:** Manual scoping takes days of senior engineering time, often resulting in inconsistent data and missed edge cases.

## The Solution
An AI-orchestrated wizard that acts as a "Senior Solutions Architect." By leveraging **Gemini 3.1 Flash-Lite**, it performs deep logical expansion on requirements, identifying hidden technical dependencies and generating standardized legal guardrails automatically.

---

## Key Features & Intelligence

### 1. The Dual-Perspective Output
The tool generates two distinct deliverables from a single scoping session:
- **The Internal Blueprint:** A raw, technical breakdown for engineers. Includes T-shirt sizing (S/M/L/XL), risk scores, specific technical debt considerations, and "Developer-Hours" estimates.
- **The Client Proposal:** A high-end, outcome-focused document. It translates "JWT Setup & Middleware" into "Secure User Authentication & Access Control." Includes polished branding, terms of service, and clear milestone scheduling.

### 2. AI Task Expansion (The Brain)
- **Deep Decomposition:** Input "E-commerce Checkout" -> Expansion into "Stateful Cart Management, Tax Calculation API Integration, Stripe Elements Bridge, Guest vs. Authenticated flows."
- **Edge Case Detection:** AI identifies missing requirements (e.g., "You requested a Blog, but haven't specified a CMS or SEO metadata strategy").

### 3. The Calibration Engine (The Math)
A proprietary estimation logic that calculates cost and time based on three variables:
- **Agency Baseline:** Your standard hourly rate.
- **Team Velocity:** A multiplier based on historical speed (e.g., "Senior Team" vs. "Junior Team").
- **Project Complexity:** A 1-5 scale that adjusts the "Buffer" for high-risk technical unknowns.

### 4. Scope Creep Protection
- **Auto-Generated Exclusions:** If "Third-party Integrations" are selected, it auto-injects "Excludes custom API development for non-documented endpoints."
- **Assumption Mapping:** Standardizes the "What we need from you" list (e.g., "Client to provide all high-res assets within 5 business days").

### 5. Base Architecture Presets
Instead of starting from zero, the tool allows you to "Anchor" the project with standardized modules:
- **Module Presets:** Quick-selectors for `E-commerce`, `User Auth / RBAC`, `SaaS / Multi-tenant`, `Content-heavy / CMS`, `API-First Headless`.
- **Structural Anchors:** Each preset injects a "Golden Standard" set of foundational tasks that the AI is forbidden from removing, but encouraged to expand upon based on your discovery notes.
- **Custom Presets:** Ability to save your own "Studio Standards" (e.g., your specific "Next.js Boilerplate" tasks) to be included in every project.

---

## User Journey & Workflow

1. **The Discovery Input (Hybrid):** 
    - **Raw Dump:** Input notes from a client call (transcript or bullets).
    - **Standardized Presets:** Quick-select common modules to force AI expansion (e.g., `[ ] E-commerce`, `[ ] User Auth`, `[ ] Stripe Integration`, `[ ] Multi-tenant SaaS`).
2. **The Expansion Step:** The tool (**Gemini 3.1 Flash-Lite**) generates a draft hierarchy of Modules -> Features -> Tasks.
3. **The Calibration Step:** Adjust the "Complexity" slider and "Effort Levels" for each module.
4. **The Review Step:** Toggle "Internal Only" or "Visible to Client" for specific line items.
5. **The Export:** Generate a stunning web-link proposal or a structural JSON/PDF for internal handoffs.

---

## Technical Architecture & Data Flow

### 1. AI Prompt Strategy (The Solutions Architect)
The system uses a highly structured "Role-Based" prompt architecture to ensure deterministic, high-quality technical breakdowns:
- **The Persona:** Acts as a "Senior Solutions Architect & Agency Principal." The AI is instructed to be skeptical of vague requirements and to proactively identify technical risks.
- **Context Injection:** Injects user-defined "Agency DNA" (preferred tech stack, e.g., "Next.js, Tailwind, Supabase") so the AI doesn't suggest irrelevant architectures.
- **Recursive Expansion Logic:** 
    - **Pass 1:** Identify top-level "Modules" (e.g., Auth, CMS, Payments).
    - **Pass 2:** Decompose Modules into "Features" with both technical and business value descriptions.
    - **Pass 3:** Generate "Atomic Tasks" with estimated T-shirt sizing (XS - XL).
- **Forced Schema:** Utilizing **Gemini 3.1 Flash-Lite**'s structured output to return a `ScopeData` object containing `modules[]`, `globalExclusions[]`, and `standardAssumptions[]`. Each node contains a `technicalDesc` (internal) and a `valueDesc` (client-facing).

### 2. Data Flow Pipeline
1. **Raw Ingest:** Next.js Server Action captures the "Discovery Dump" (can be transcript text or bullet points).
2. **AI Orchestration:** Vercel AI SDK handles the stream from **Gemini 3.1 Flash-Lite**.
3. **The Normalizer:** A utility function that maps the AI's "T-shirt sizes" to the user's specific "Hour Constants" (e.g., S = 4hrs, M = 8hrs, etc.).
4. **Local Store:** Data is cached in Zustand with `persist` middleware, enabling offline drafting and "auto-save" functionality.
5. **The Calibration Ripple:** A reactive math engine. When the "Complexity" slider moves from 1.0 to 1.2, every task's estimated time and cost update in the UI with a Framer Motion "staggered count-up" animation.

---

## UI/UX Design Philosophy

### Aesthetic: "Structural Precision"
- **Grid-Based Layout:** A strict 12-column architectural grid mirroring blueprints.
- **Monochrome Foundation:** High-contrast blacks and whites with a single accent color (Architectural Orange) for interactive states.
- **The "Dual-View" Toggle:** A persistent global switch to swap the entire UI between "Internal Blueprint" (Dev-focused, high data density) and "Client Proposal" (Polished, spacious, outcome-focused).

### 1. The Blueprint Workspace
- **The Tree View:** A nested, collapsible list of the entire scope. 
- **Action Icons:** 
    - `[Eye Icon]` Toggle visibility for Client Proposal.
    - `[Shield Icon]` Flag as "High Risk" (adds a 20% individual buffer).
    - `[Trash Icon]` Remove from scope.
- **The "Client/Internal" Split Screen:** A side-by-side mode where you can see the technical task on the left and the polished "Value Statement" on the right.

### 2. The Calibration Sidebar
- **Dynamic Stats:** Real-time counters for "Total Hours," "Total Price," and "Estimated Timeline."
- **Variable Sliders:** 
    - `Velocity:` Adjusts based on team seniority.
    - `Risk Buffer:` Adds a percentage to the entire project for "The Unknown."
    - `Discount/Premium:` Manual adjustment for strategic pricing.

### 3. The Export Lab
- **Live Preview:** A mobile-responsive iframe showing the "Client Proposal" exactly as they will see it.
- **Theme Toggles:** Instantly swap the proposal between "Modern Dark," "Classic Print," and "High-Contrast Blueprint" themes.

---

## Value Proposition
- **Turnaround Time:** Reduces SOW creation from 48 hours to 15 minutes.
- **Accuracy:** Identifies ~30% more tasks than manual scoping, protecting project margins.
- **Brand Authority:** Delivers a level of professional transparency that separates you from "cheap" competitors.
