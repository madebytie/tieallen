# Next.js Cartographer

## Overview
An open-source tool that reads a Next.js `app` or `pages` directory and automatically generates a beautiful, interactive node-based visual map of the routing tree, components, and data flow.

## The Problem
As Next.js applications scale, the file-system-based routing and deep component trees can become incredibly difficult to conceptualize, both for new developers joining a project and for non-technical stakeholders trying to understand the scope of an application.

## The Solution
A two-phase approach to project visualization:
1.  **Phase 1: Local CLI (`npx next-cartographer`)**. A zero-config tool that scans the local project and generates a portable, interactive HTML dashboard. Perfect for private agency work.
2.  **Phase 2: Hosted Service (`cartographer.dev`)**. A web platform where users can drop a public GitHub URL to instantly generate and share a live architecture map.

## Key Features
- **Next.js Framework Awareness:** Intelligently groups folder-based routes, identifying `layout.tsx`, `page.tsx`, `loading.tsx`, and `error.tsx` as a single logical route node.
- **The "use client" Boundary:** Visually highlights the transition between Server Components and Client Components—the most critical architectural detail in modern Next.js.
- **Dependency Mapping:** Analyzes imports to draw edges between pages and the custom components they consume.
- **Metadata & Config Inspection:** Hover over a node to see its `generateMetadata` exports, middleware interactions, or `runtime` configurations.
- **Deep-Link to Code:** In the local CLI version, clicking a node opens that specific file in VS Code (`vscode://` protocol).

## Roadmap
### v1.0: The Portable CLI
- **Scraper:** Node.js script using `fs` and `ts-morph` to generate a project JSON.
- **Visualizer:** A pre-built React application (using React Flow) that consumes the JSON.
- **Export:** Command to generate a self-contained `cartographer-report.html` for client handoff.

### v2.0: The Global Visualizer (Hosted)
- **GitHub Integration:** Paste a URL to trigger a server-side clone and scan.
- **Social Sharing:** Unique, persistent URLs for architecture maps of public open-source repos.
- **Team Collaboration:** Ability for multiple users to annotate the map in real-time.

## Value Proposition
- **For Clients:** Provides a tangible "map" of what they are paying for. It turns abstract code into a premium design asset that builds trust.
- **For Developers/Agencies:** Acts as living documentation. Instantly onboard new hires, identify bottlenecks, and plan architectural changes visually.

## Technical Implementation (Draft)
- **Engine:** `ts-morph` for AST parsing and dependency tracking.
- **UI:** `React Flow` for the node-based interactive canvas.
- **Styling:** High-end "Structural-Tech" aesthetic matching the `madebytie` portfolio (monochromatic palette, clean technical lines, structural dots, and minimal typographic focus). The map should feel like a blueprint or a sophisticated technical drawing rather than a standard UI.
