import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "LoreTorch - made by tie.",
  description:
    "Founder-led AI product for tabletop gaming — Aris, an AI game master and world-building engine. Product design, UX strategy, and full product build.",
};

export default function LoreTorchCaseStudy() {
  return (
    <>
      <ProjectHero
        title="Infinite worlds, AI-powered."
        tags={["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"]}
        image="/assets/loretorch-hero.png"
      />

      <CaseStudyIntro
        headline="A virtual tabletop platform built around Aris — an AI game master that brings the depth and spontaneity of a live GM into a digital product."
        description="LoreTorch is my venture in the VTT space. Existing tools handle maps, dice, and tokens well — but the soul of tabletop gaming is the game master. That experience was missing from digital products. I set out to design and build a platform where AI doesn't replace the GM — it becomes one."
        client="LoreTorch (founder)"
        industry="Tabletop Gaming / AI Entertainment"
        timeline="Ongoing"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/assets/loretorch-hero.png",
            alt: "LoreTorch platform hero",
            span: "wide",
            aspectRatio: "16/8",
          },
        ]}
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Problem"
        heading="Digital tools solved logistics — but killed the narrative"
        body="Roll20 and its competitors nailed the mechanical layer: maps, character sheets, dice rollers. But the reason people gather around a table isn't logistics — it's story, improvisation, and a GM who reads the room."
        body2="Prep time kills casual play. New players face steep learning curves. World state lives in scattered notes. I designed LoreTorch to collapse that friction — making rich narrative sessions accessible without sacrificing the depth experienced players expect."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Product Design"
        heading="Narrative-first UX for a genre that demands depth"
        body="The design challenge: high-fantasy narrative depth without overwhelming newcomers. Session setup, world state management, and player interaction flows were designed around how GMs actually think — lore layers, character arcs, environmental context — not feature checklists."
        body2="Every surface prioritizes clarity of narrative state: what's happening in the world, what the players know, what Aris is tracking behind the scenes. The UI stays fast and flexible because session momentum is everything — a GM can't wait for a loading screen mid-combat."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• AI — Aris"
        heading="An AI game master that improvises like a human"
        body="Aris reads lore documents, tracks world state across sessions, and improvises narrative responses in character. It's not a chatbot stapled onto a VTT — it's a core product layer designed to reduce prep time and increase session engagement."
        body2="The AI architecture handles context windows spanning campaign history, player choices, and environmental triggers. Aris can seed encounters, respond to unexpected player actions, and maintain narrative consistency across long-running campaigns — the work that traditionally burns hours of GM prep."
      />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Development"
        heading="Built end-to-end as a live product"
        body="LoreTorch ships at loretorch.com — a full product build, not a concept deck. Brand identity, marketing surfaces, core application UX, and the Aris AI integration layer were all designed and developed as one cohesive system."
        body2="The technical stack supports real-time session state, rich lore ingestion, and responsive AI inference — architected for the latency-sensitive moments that define tabletop play."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyDeviceShowcase type="desktop" desktopUrl="https://loretorch.com/" />

      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Outcomes"
        heading="A category wedge competitors aren't building"
        body="Faster onboarding into sessions. Richer narrative flow with less prep. A product positioned at the intersection of AI and entertainment that most VTT incumbents haven't pursued."
        body2="LoreTorch demonstrates how I approach AI product design: not as a feature checkbox, but as a core experience layer that changes what the product fundamentally enables."
      />

      <CallToAction href="/hire" />
    </>
  );
}
