import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

export const metadata: Metadata = {
  title: "Vizon OS - made by tie.",
  description:
    "Brand, marketing site, and SaaS product build for Vizon OS - the AI-powered strategy and CRM operating system. Built end-to-end as my own venture.",
};

export default function VizonOS() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="One intelligent workspace. The 10-to-1,000 output engine."
        tags={["Brand Identity", "Web Design", "SaaS Development"]}
        image="/projects/vizon-os/tasks-kanban.png"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A founder-led build of an AI-native operating system that unifies strategy, CRM, and project execution into a single intelligent workspace."
        description="Vizon OS is my company - the product I'd been wanting for the work I do every day, built from scratch and shipping to market. The brief was the hardest one I've ever taken on: design and engineer an enterprise-grade SaaS, build the brand it deserves, and launch a marketing site that earns trust on first scroll."
        client="Vizon OS (founder)"
        industry="SaaS / AI-Native Productivity"
        timeline="Ongoing"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/vizon-os/tasks-kanban.png",
            alt: "Vizon OS Tasks Kanban view",
            span: "wide",
            aspectRatio: "16/8",
          },
        ]}
      />

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="Building the tool I wished existed - then making it work for everyone else"
        body="The premise of Vizon is simple: small teams shouldn't need ten tools to operate. Strategy, CRM, projects, docs, and messaging all share the same underlying context - the people, deals, goals, and decisions that drive the business - so they should live in one shared brain."
        body2="Discovery was eighteen months of using a stitched-together stack myself, mapping where context kept breaking, and designing a single system where Lenz AI - the autonomous workforce layer - could read across everything and actually do the work, not just guess at it."
      />

      {/* Brand intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Brand"
        heading="An identity built for an AI-native category that doesn't fully exist yet"
        body="The brand had to position Vizon against the entire SaaS landscape - Salesforce, Notion, Asana, HubSpot - while feeling like it belongs to the next era. Calm, confident, technical without being cold. The wordmark, color system, and iconography were built to scale across product surfaces, marketing, and developer documentation."
        body2="Every component icon - CRM, Tasks, Docs, Messaging, Strategy - is part of a single visual language. The system is the brand: cohesive enough to feel inevitable, flexible enough to grow into the next ten modules."
        bgColor="var(--bg-secondary)"
      />

      {/* Brand icon grid */}
      <CaseStudyImageGrid
        columns={4}
        bgColor="var(--bg-secondary)"
        images={[
          {
            src: "/projects/vizon-os/discover.svg",
            alt: "Discover icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/innovate.svg",
            alt: "Innovate icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/accelerate.svg",
            alt: "Accelerate icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/lenz-ai.svg",
            alt: "Lenz AI icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/crm-icon.svg",
            alt: "CRM icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/tasks-icon.svg",
            alt: "Tasks icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/docs-icon.svg",
            alt: "Docs icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/messaging-icon.svg",
            alt: "Messaging icon",
            aspectRatio: "1/1",
            display: "logo",
            bg: "#0a0a0a",
          },
        ]}
      />

      {/* Marketing site intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="A marketing site built to earn trust before the first demo"
        body="The site has one job: convince a sceptical operator that this is the system they've been waiting for. It walks visitors from the problem (tool sprawl, broken context) through Vizon Nexus (the unified core) and Lenz AI (the autonomous worker), then dives into the product surfaces - CRM, Tasks, Docs, Messaging, Workflows."
        body2="Every section is built to defuse a specific objection - is this real, does it scale, can it replace what I have. The pages are heavy on real product UI, light on stock illustration."
      />

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://vizonos.com/"
      />

      {/* Product UI grid */}
      <CaseStudyImageGrid
        columns={3}
        images={[
          {
            src: "/projects/vizon-os/tasks-kanban.png",
            alt: "Vizon Tasks Kanban view",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/vizon-os/docs-edit.png",
            alt: "Vizon Docs collaborative editor",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/vizon-os/workflow.png",
            alt: "Vizon Workflows canvas",
            aspectRatio: "4/3",
          },
        ]}
      />

      {/* SaaS product intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Product"
        heading="A full SaaS platform, built from first principles"
        body="Vizon OS is the deepest engineering work I've done - a multi-tenant SaaS with a unified data model spanning strategy, CRM, projects, documents, messaging, and workflow automation. Built on a modern stack with real-time collaboration, role-based access, and an embedded AI layer (Lenz) that reads across the entire workspace to recommend, draft, and execute work."
        body2="Every module - the Kanban, the docs editor, the workflow canvas, the CRM pipelines - is built in-house, sharing one component system, one auth layer, and one knowledge graph. It's the long game: a platform that compounds in value as more of the team's work flows through it."
      />

      {/* Final logo lockup */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/vizon-os/vizon-logo.svg",
            alt: "Vizon OS logo on dark",
            aspectRatio: "16/9",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/vizon-os/lenz-ai.svg",
            alt: "Lenz AI mark on dark",
            aspectRatio: "16/9",
            display: "logo",
            bg: "#0a0a0a",
          },
        ]}
      />
    </>
  );
}
