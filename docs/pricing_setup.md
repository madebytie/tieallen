# Pricing Section Setup & Content Guide

This document outlines the content, structure, and design strategy for the new Pricing section to be implemented on the homepage, directly above the FAQ section.

## 1. Strategy Overview
The pricing model is moving away from multiple tiers to a highly premium, two-step "Partnership Path" approach. This filters out low-budget clients and forms a high-value recurring relationship.
- **Phase 1:** High-ticket, one-time project to establish the baseline (brand & web).
- **Phase 2:** Monthly retainer available **only** to clients who completed Phase 1.

## 2. Component Structure
Instead of a crowded 3-column table, use a clean, **Two-Card Layout** or a **Journey Timeline** style. The design should utilize the site's existing dark mode, glassmorphism, and gradient/glow aesthetics to feel state-of-the-art.

---

## 3. Pricing Cards Content

### Card 1: The Foundation
*This is the entry point.*

- **Badge/Eyebrow:** Step 1
- **Title:** Custom Project Buildout
- **Price:** Starting at $10,000+
- **Subtitle / Description:** The essential first step. We architect your brand, design standard-setting interfaces, and build a high-performance web platform from the ground up.
- **Included Features:**
  - Standard-setting UI/UX Design
  - Premium Web Development
  - Comprehensive Brand Identity
  - Technical SEO & Performance Optimization
  - Dedicated Project Management
- **Call to Action (Button):** Book a Discovery Call

### Card 2: The Growth Retainer
*This is the recurring backend offer, visually styled to look like an exclusive add-on.*

- **Badge/Eyebrow:** Step 2 (Exclusive)
- **Title:** Unlimited Design & Dev Retainer
- **Price:** $5,000 / month
- **Subtitle / Description:** Available exclusively to partners who have completed a Foundation project. Get an entire premium design and development department at your fingertips.
- **Included Features:**
  - Unlimited Requests (One at a time)
  - Deliverables every few days
  - Continuous Feature Development
  - Conversion Rate Optimization
  - Ongoing Brand Asset Creation
  - Pause or cancel anytime
- **Call to Action (Button):** Apply for Retainer

---

## 4. Implementation Notes for Developer AI
- **Location:** Inject `<Pricing />` in `src/app/page.tsx` between the `<FeaturedProjects />` and `<FAQ />` components.
- **Aesthetic Guidelines:** 
  - Ensure the cards don't feel generic. Use subtle border gradients, backdrop-filter (glassmorphism), and dark/vibrant color palettes matched to the rest of the site (like the home hero or project grid).
  - Add micro-animations (e.g., slight lift and glow on hover) to make the cards feel interactive.
- **Typography:** Ensure large, striking typography for the `$10k+` and `$5k/m` prices to make them the focal points. Use appropriate semantic HTML (`<section>`, `<h2>`, `<ul>` for features).
- **Responsiveness:** Cards should stack cleanly on mobile (`flex-col`) with appropriate padding and spacing, scaling up to a side-by-side or staggered layout on desktop (`md:flex-row` or CSS Grid).
