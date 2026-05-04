# Scope Architect

## Overview
Scope Architect is a high-fidelity, AI-orchestrated SOW and technical roadmap generator designed for agencies and studios. It bridges the gap between vague discovery calls and granular, bankable technical contracts. By performing a recursive 3-pass expansion on requirements, it generates both an **Internal Technical Blueprint** for dev teams and a **Premium Client Proposal** for signature.

## The Problem
Scoping is the "Invisible Risk" of digital product development. Manual estimation is time-consuming, prone to error, and often misses technical edge cases. 
- **Margin Erosion:** Underestimated tasks lead to "death by a thousand small requests."
- **Trust Gaps:** Vague, lump-sum quotes build client skepticism and lead to difficult price negotiations.
- **Senior Resource Drain:** Creating a quality SOW often requires hours of senior engineering time that could be spent on billable work.

## The Solution
A "Senior Solutions Architect" in a box. Using **Gemini 3.1 Flash-Lite**, Scope Architect takes raw discovery notes and expands them into a comprehensive hierarchy of Modules, Features, and Atomic Tasks. It applies a proprietary calibration engine to calculate defensible budgets and timelines based on your specific studio's velocity and risk tolerance.

## Key Features
- **Dual-Perspective Output:** Toggle between a data-dense "Internal Blueprint" (Dev-focused, T-shirt sizing, risk scores) and a polished "Client Proposal" (Outcome-focused, branded, legal guardrails).
- **3-Pass AI Expansion:** Recursive decomposition of high-level goals into specific technical implementations and edge-case handling.
- **Base Architecture Presets:** "Anchor" projects with studio-standard modules (e.g., E-commerce, RBAC, SaaS) to ensure every quote starts with a rock-solid technical foundation.
- **Calibration Engine:** Reactive math that adjusts entire project budgets in real-time based on complexity sliders and team velocity multipliers.
- **Auto-Generated Guardrails:** Automatically injects technical exclusions and client assumptions based on the specific features being scoped.

## Value Proposition
- **Precision Turnaround:** Reduces SOW creation from days to minutes without sacrificing technical depth.
- **Margin Protection:** Identifies ~30% more tasks than manual scoping by proactively flagging technical dependencies.
- **Editorial Authority:** Delivers a level of professional transparency that elevates your studio's brand and justifies premium pricing.

## Technical Implementation
- **LLM Orchestration:** Built with the **Vercel AI SDK** and **Gemini 3.1 Flash-Lite** for structured technical decomposition.
- **Reactive UI:** Developed in **Next.js** with **Zustand** for real-time calibration of project math and **Framer Motion** for staggered architectural animations.
- **Context Injection:** Injects "Agency DNA" into the AI prompt to ensure technical suggestions align with your specific tech stack and coding standards.
- **Schema-First Logic:** Uses Zod-validated schemas to ensure AI output consistently maps to the complex `ScopeData` model used by the frontend.
