import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Scope Architect - made by tie.",
  description:
    "Founder-led AI product that transforms vague discovery notes into bankable SOWs and technical roadmaps — brand, UX, and full-stack development.",
};

export default function ScopeArchitectCaseStudy() {
  return (
    <>
      <ProjectHero
        title="A Senior Solutions Architect in a box."
        tags={["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"]}
        image="/labs/scope-architect/featured.png"
      />

      <CaseStudyIntro
        headline="An AI-orchestrated scoping engine that turns raw discovery into defensible contracts — protecting agency margins and building client trust from day zero."
        description="Scope Architect is a founder-built product born from 18 years of running client work. Scoping is where margins die — senior time gets burned, edge cases get missed, and vague quotes erode trust. I designed and built a system that uses recursive AI expansion to do the heavy lifting, with a calibration engine that makes every quote transparent and bankable."
        client="Scope Architect (founder)"
        industry="Agency Tools / AI Productivity"
        timeline="Ongoing"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Problem"
        heading="Scoping is the invisible risk of every digital project"
        body="Every agency owner knows the feeling: a discovery call goes perfectly, then scoping drags on for days. You're guessing at complexity while protecting your team's time and the client's budget. Underestimated tasks become unbilled changes. Vague lump-sum quotes build skepticism."
        body2="Manual scoping misses the dark matter of development — state management, error states, infrastructure debt. Senior engineers spend hours on SOWs instead of billable work. I built Scope Architect because I lived this problem on every project for nearly two decades."
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/labs/scope-architect/featured.png",
            alt: "Scope Architect interface",
            span: "wide",
            aspectRatio: "16/8",
            display: "screenshot",
          },
        ]}
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Product Design"
        heading="Dual-perspective UX — one engine, two audiences"
        body="The core design insight: developers and clients need completely different views of the same project. The Internal Blueprint is data-dense — T-shirt sizing, risk scores, technical debt flags. The Client Proposal is outcome-focused — translating 'Middleware Setup' into 'Secure Access & Authentication' for stakeholders who don't speak engineering."
        body2="A minimalist, grid-based UI mirrors architectural blueprints — high-contrast monochrome with targeted accenting. The calibration engine lets studios adjust complexity sliders and velocity multipliers in real time, rippling budget and timeline math across the entire project map instantly."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• AI Integration"
        heading="3-pass recursive expansion with Gemini"
        body="Raw discovery notes — call transcripts, bulleted requirements, messy stakeholder input — go in unformatted. Gemini 3.1 Flash-Lite performs a recursive 3-pass expansion: high-level goals become modules, modules become features, features become atomic tasks with edge-case handling."
        body2="Context-aware 'Agency DNA' injects your studio's tech stack and delivery standards into the AI's logic. Zod-validated schemas ensure output consistently maps to the ScopeData model. The result: ~30% more tasks identified than manual scoping, with dependencies flagged before they become margin erosion."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Development"
        heading="Built for speed and structured output"
        body="Next.js 15, TypeScript, Tailwind CSS on the frontend. Zustand + Immer for reactive project math. Framer Motion for staggered architectural animations that give visual feedback as the calibration engine ripples through budgets."
        body2="Vercel AI SDK orchestrates Gemini with schema-first logic. Base architecture presets anchor projects with studio-standard modules — E-commerce, RBAC, SaaS — so every quote starts with a solid foundation. Auto-generated guardrails inject technical exclusions and client assumptions based on scoped features."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Outcomes"
        heading="From days of scoping to minutes of calibration"
        body="Reduced SOW creation from days to minutes without sacrificing technical depth. Studios get senior engineering time back — up to 80% reduction in scoping overhead. Every quote becomes defensible, transparent, and built on a rock-solid technical foundation."
        body2="It's not just a tool for creating SOWs — it's a tool for establishing authority from day zero. Margin protection, client trust, and standardized delivery DNA on every project."
      />

      <CallToAction href="/hire" />
    </>
  );
}
