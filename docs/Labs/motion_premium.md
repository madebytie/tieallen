# Motion Premium

## Overview
A curated npm package of animation primitives (CSS/Framer Motion) specifically tuned for luxury, high-end web aesthetics.

## The Problem
Most popular animation libraries out there (like Animate.css or standard Framer Motion presets) default to bouncy, snappy, and fast transitions. These look great for SaaS startups but look cheap and out of place on luxury, editorial, or high-end agency websites.

## The Solution
A highly opinionated library that strips away the bounce and focuses entirely on elegance: slow easing, smooth cubic-bezier curves, typographic reveals, and subtle parallax.

## Key Features
- **Zero-Bounce Easing:** Custom spring physics and cubic-bezier curves designed to feel "heavy" and deliberate.
- **Typographic Staggers:** Beautiful character-by-character or word-by-word reveal animations tailored for large serif or sleek sans-serif headlines.
- **Image Parallax & Scaling:** "Ken Burns" style slow zooms and elegant image mask reveals.
- **Page Transitions:** Drop-in Next.js App Router page transitions that feel like flipping pages in a high-end magazine.
- **Accessibility First:** Automatically respects `prefers-reduced-motion` without extra configuration.

## Value Proposition
- **For Clients:** Ensures their website feels expensive, premium, and distinct from template-based competitors.
- **For Developers/Agencies:** Saves hours of tweaking bezier curves. Provides a plug-and-play solution to instantly elevate the perceived value of a build.

## Technical Implementation (Draft)
- Built on top of `framer-motion` for React environments.
- Expose simple wrapper components (e.g., `<FadeUpPremium>`, `<TextReveal>`).
- Strict internal design tokens for timing (e.g., `duration: 0.8`, `ease: [0.16, 1, 0.3, 1]`).
- Small bundle size, avoiding bloated features not relevant to luxury design.
