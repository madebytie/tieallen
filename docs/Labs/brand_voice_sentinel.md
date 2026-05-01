# Brand Voice Sentinel

## Overview
A CMS-agnostic script or Next.js component where you define a specific "Brand Persona". As clients write or edit content on their site, an AI analyzes the text in real-time, highlighting deviations from the brand voice and suggesting premium alternatives.

## The Problem
Agencies spend weeks crafting perfect, high-end editorial copy for a client's launch. Months later, the client logs into the CMS and replaces it with generic, salesy, or off-brand copy, ruining the premium feel of the site.

## The Solution
An "editorial guardrail" that sits inside the CMS or within inline editors (like `next-inline-editor`). It gently guides the client back to the brand's established tone.

## Key Features
- **Customizable Brand Personas:** Define tone instructions via a simple JSON config (e.g., "Tone: Luxury, minimal, authoritative. Avoid exclamation points. Avoid words like 'cheap' or 'deal'").
- **Real-time Linting:** Underlines text that violates the guidelines, similar to Grammarly.
- **AI-Powered Rewrites:** A one-click button to "Make this sound more like us," which uses an LLM to rewrite the client's raw thought into on-brand copy.
- **Platform Agnostic:** Can be packaged as a standalone script for Webflow/Wordpress, or a React component for custom builds.

## Value Proposition
- **For Clients:** Empowers them to write their own content without fear of breaking the brand's premium image.
- **For Developers/Agencies:** Protects your portfolio pieces from degrading over time. Can be sold as an ongoing "Brand Protection" retainer feature.

## Technical Implementation (Draft)
- A lightweight client-side script that monitors `contenteditable` divs or textareas.
- Debounced calls to a Vercel AI SDK route.
- Use a fast LLM (like GPT-4o-mini or Gemini Flash) with a system prompt primed by the specific Brand Persona configuration.
- Render UI overlays for suggestions using floating-ui.
