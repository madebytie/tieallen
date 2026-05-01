# NEXT Project Map
### Next.js Project Architecture Visualizer

**NEXT Project Map** is a technical visualization engine that transforms abstract Next.js codebases into interactive, high-fidelity maps. It treats project architecture not just as a developer utility, but as a premium design asset for agencies and high-end engineering teams.

---

## The Vision
In large-scale Next.js applications, the mental model of the project often fragments. **NEXT Project Map** provides a "unified blueprint," allowing teams to see the entire application anatomy—from route hierarchies to component dependency chains—on a single interactive canvas.

---

## One Map, Four Perspectives
To serve the entire engineering team, the visualizer provides four distinct ways to understand a project:

1.  **The Route Tree:** A high-level visualization of your Next.js file-system routing. Perfect for mapping out the user journey and layout nesting.
2.  **The Dependency Graph:** A deep-dive into code relationships. Instantly see how a single change to a shared component ripples through your entire app.
3.  **The Component Topology:** A structural look at your UI's "physical" layout. Understand the spatial relationship between layouts, pages, and their nested children.
4.  **The Architecture Map:** The ultimate project blueprint. A shared source of truth for onboarding new developers and communicating project scale to stakeholders.

---

## Key Features
- **Framework-Aware Mapping:** Intelligently groups Next.js folder conventions (`layout`, `page`, `loading`, `error`) into logical Route Nodes.
- **RSC Visualizer:** Real-time detection of `"use client"` boundaries, visually highlighting the transition between Server and Client environments.
- **Interactive Focus Mode:** Dynamic highlighting that dims the rest of the map to trace specific data flows on hover or search.
- **"Hot Spot" Detection:** Visual glow indicators for highly-connected components, identifying the most critical parts of the architecture.
- **Dual-Theme Support:** High-fidelity "Structural-Tech" aesthetic available in both Blueprint Light and Tech-Noir Dark modes.

---

## Technical Implementation
- **Scraper Engine:** Built with Node.js and `ts-morph` for deep AST (Abstract Syntax Tree) parsing of the source code.
- **Visualizer UI:** A high-performance React application utilizing `@xyflow/react` and Dagre for intelligent graph layout.
- **Security:** Local-first CLI distribution ensures your proprietary source code never leaves your machine.
