import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Capsole - made by tie.",
  description:
    "Founder-led agency operating system — unifying scoping, client delivery, team workflows, and communication for creative studios.",
};

export default function CapsoleCaseStudy() {
  return (
    <>
      <ProjectHero
        title="The operating system for creative agencies."
        tags={["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"]}
        image="/projects/vizon-os/workflow.png"
      />

      <CaseStudyIntro
        headline="An agency OS that unifies how studios scope, deliver, and communicate — built from 18 years of running client work firsthand."
        description="Capsole is a founder-built product addressing a problem I've lived on every project: agencies stitch together Notion, spreadsheets, PM tools, and email — losing context, billable time, and client trust at every handoff. I designed Capsole as the system I wished existed when running a studio at startup velocity."
        client="Capsole (founder)"
        industry="Agency Operations / SaaS"
        timeline="In Development"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/vizon-os/workflow.png",
            alt: "Capsole workflow interface concept",
            span: "wide",
            aspectRatio: "16/8",
            display: "screenshot",
          },
        ]}
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Problem"
        heading="Agencies run on duct tape and hope"
        body="Client discovery happens in one tool. Scoping in another. Project execution in a third. Client updates in email. Invoicing somewhere else entirely. Context breaks at every seam — and studios pay for it in margin erosion, miscommunication, and senior time spent on coordination instead of craft."
        body2="After building Scope Architect to solve the scoping layer, Capsole extends that thinking across the full agency lifecycle — from first call to final delivery."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Product Design"
        heading="One system for how agencies actually work"
        body="The UX is designed around agency workflows, not generic project management. Client portals, internal delivery views, scoping integration, and team capacity — all sharing one data model so context never breaks between phases."
        body2="Brand and product identity follow the same architectural precision as Scope Architect: calm, confident, technical without being cold. Built to earn trust from agency principals who've been burned by tools that promise everything and deliver spreadsheets."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• AI Integration"
        heading="Intelligent workflows across the agency lifecycle"
        body="AI assists where agencies lose the most time: scoping decomposition, status synthesis, client communication drafts, and risk flagging on projects approaching scope creep. The AI layer reads across client, project, and team context — not isolated prompts."
        body2="Capsole shares DNA with Scope Architect's calibration engine and Vizon OS's unified workspace model — three products solving different layers of the same problem: context fragmentation in how modern teams operate."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Outcomes"
        heading="Less coordination overhead, more billable craft"
        body="Reduced context-switching between tools. Clearer client communication. Scoping that connects directly to delivery tracking. A system built by someone who has run the work, not observed it from a product management deck."
        body2="Capsole is in active development — the product thesis is validated by Scope Architect's scoping layer and nearly two decades of agency execution."
        bgColor="var(--bg-secondary)"
      />

      <CallToAction href="/hire" />
    </>
  );
}
