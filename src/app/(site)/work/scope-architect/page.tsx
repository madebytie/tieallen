import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Scope Architect - made by tie.",
  description:
    "Founder-led AI product — mission control for building with AI. Brand, marketing site, product UX, MCP handoff, cloud sandboxes, and command center. Built end-to-end.",
};

export default function ScopeArchitectCaseStudy() {
  return (
    <>
      <ProjectHero
        title="Mission control for building with AI."
        tags={[
          "Product Design",
          "UX Strategy",
          "AI Orchestration",
          "Full-Stack Development",
        ]}
        image="/projects/scope-architect/scope-output.png"
      />

      <CaseStudyIntro
        headline="Scope it, hand it to your agent, and stay in command as the build moves."
        description="Scope Architect is a founder-built platform I designed and shipped end to end — brand, marketing site, product UX, and the orchestration layer underneath. It turns a raw idea into an agent-ready plan, hands work to coding agents over MCP or cloud sandboxes, and keeps every task, token, and PR visible in a shared Command Center."
        client="Scope Architect (founder)"
        industry="Developer Tools / AI Agent Infrastructure"
        timeline="Launching now"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/scope-architect/scope-output.png",
            alt: "Scope Architect scope output showing modules, features, and atomic tasks",
            span: "wide",
            aspectRatio: "16/8",
            display: "screenshot",
          },
        ]}
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Problem"
        heading="AI coding sessions lose context, drift silently, and leave you flying blind"
        body="Chat forgets everything the moment the session ends. The thread breaks between the idea and the shipped code. You re-explain the project every time you open a new tab. Agents build out of sight — and you find out about bad decisions after the merge."
        body2="The durable problem isn't writing code faster. It's keeping a structured plan, shared context, and live execution state in one place — for you and your agent."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Pivot"
        heading="V1 productized agency scoping. Usage taught me where the real problem lived."
        body="The first version of Scope Architect turned discovery notes into scoped projects and client proposals — the workflow I'd run for eighteen years of agency work. That product became Capsole, the agency operating system."
        body2="What stuck was the structured scope itself: the layer both human and agent could build from. I repositioned Scope Architect as mission control for building with AI — scope engine, MCP handoff, cloud sandboxes, and a Command Center that surfaces every task, token, and PR as the build moves."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Scope Engine"
        heading="From a raw idea to an agent-ready plan in minutes"
        body="Dump messy notes or a full brief. Import a Git repo so the scope grounds in your real stack. The engine assembles modules, features, and atomic tasks — each with acceptance criteria — before a single line of code is written."
        body2="Architect Chat lets you refine the scope in conversation: preview diffable change plans and apply them in one click. Three scope modes — project, module, feature — so you can zoom in or out without losing the thread."
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/scope-architect/what-are-you-scoping.png",
            alt: "Scope Architect idea input — dump notes or shape through guided discovery",
            display: "screenshot",
          },
          {
            src: "/projects/scope-architect/configure-and-finalize.png",
            alt: "Configure and finalize pre-scope before task generation",
            display: "screenshot",
          },
          {
            src: "/projects/scope-architect/scope-task.png",
            alt: "Atomic task detail with acceptance criteria and sizing",
            display: "screenshot",
          },
          {
            src: "/projects/scope-architect/track-modules.png",
            alt: "Track progress across modules, features, and tasks",
            display: "screenshot",
          },
        ]}
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Command Center"
        heading="One view of every task — human and agent"
        body="Hand off via MCP, copy a task-ready prompt, or dispatch to a cloud sandbox. All three paths read the same live plan. Statuses, blockers, comments, and agent activity update in real time — nothing happens out of sight."
        body2="When an agent hits an edge case, it flags the task, comments in the workspace, and pauses until you unblock it. Token usage and spend are tracked per operation so you stay in control at AI speed."
        bgColor="var(--bg-secondary)"
        images={["/projects/scope-architect/command-center.png"]}
        imageAlt="Scope Architect Command Center showing live task execution"
        imagePosition="right"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Platform"
        heading="MCP handoff, cloud sandboxes, context that persists"
        body="Connect once with @scope-architect/mcp — your agent reads the live plan and writes back as it builds. Dispatch a task to a dedicated cloud sandbox; Claude Code or Codex builds it and opens a PR with no local setup."
        body2="Context blocks and durable memory keep the project brain between sessions. BYOK across Anthropic, OpenAI, Google, xAI, and DeepSeek. Builder profiles, preset libraries, GitHub grounding, and token analytics — all behind one workspace."
        images={["/projects/scope-architect/cloud-run.png"]}
        imageAlt="Cloud sandbox run dispatching a task to Claude Code with PR output"
        imagePosition="left"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Brand & Marketing"
        heading="A marketing site built to earn trust from technical buyers"
        body="The site walks builders from the problem — context loss, flying blind — through the Scope Engine, Command Center, and platform layer. Bento grids and coded UI mockups show real product surfaces, not stock illustration."
        body2="Every section defuses a specific objection: is this real, does it work with my stack, can I stay in command. The visual language is calm and technical — architectural precision without cold enterprise blandness."
      />

      <CaseStudyImageGrid
        columns={2}
        bgColor="var(--bg-secondary)"
        images={[
          {
            src: "/projects/scope-architect/marketing-full-page.png",
            alt: "Scope Architect marketing site — hero, bento feature grid, and platform sections",
            span: "wide",
            aspectRatio: "9/20",
            objectFit: "contain",
          },
        ]}
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://scopearchitect.com"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Outcomes"
        heading="Build at AI speed without losing the thread"
        body="A raw idea becomes an agent-ready plan in minutes. Three handoff paths — MCP, prompt copy, cloud sandbox — all read from the same source of truth. The workspace stays in command, not the chat window."
        body2="Launching now at scopearchitect.com. This is the product I'd point a hiring manager to when they ask what I ship solo — brand through production, with AI orchestration that technical reviewers can actually evaluate."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• For your team"
        heading="What this demonstrates in a product org"
        body="I design agent-native UX where structured output matters — scopes agents can execute, not prose that dies in a doc. I ship dev tooling that technical buyers trust on first scroll."
        body2="Inside a team I bring the same ownership: close to engineering, fast on AI-native features, and direct about tradeoffs. Ask me to walk through Scope Architect on a live project — that's the interview."
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/scope-architect/scope-architect-logo.svg",
            alt: "Scope Architect logo",
            aspectRatio: "16/9",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/scope-architect/command-center.png",
            alt: "Scope Architect Command Center",
            display: "screenshot",
          },
        ]}
      />

      <CallToAction href="/hire" />
    </>
  );
}
