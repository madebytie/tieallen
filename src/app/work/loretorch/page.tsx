import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "LoreTorch Case Study - made by tie.",
  description: "Revolutionizing the virtual tabletop (VTT) space with Aris. A deep dive into the UX and technology behind LoreTorch.",
};

export default function LoreTorchCaseStudy() {
  return (
    <>
      <ProjectHero
        title="Infinite Worlds, AI-Powered. The LoreTorch Experience."
        tags={["Product Design", "UX/UI", "AI Strategy"]}
        image="/assets/loretorch-hero.png"
      />

      <CaseStudyIntro
        headline="Crafting the future of digital engagement through rich lore and interactive AI-driven experiences."
        description="LoreTorch is a venture focused on the tabletop gaming space, specifically building Aris—an AI-powered game master and world-building engine. This case study explores the challenges of designing for high-fantasy narrative depth while maintaining the speed and flexibility of a modern digital tool."
        client="LoreTorch (founder)"
        industry="Tabletop Gaming / AI"
        timeline="Ongoing"
      />

      <section style={{ padding: "8rem 1.25rem", textAlign: "center", backgroundColor: "var(--bg-secondary)" }}>
        <h2 style={{ fontFamily: "var(--font-logo)", fontSize: "3rem", marginBottom: "2rem" }}>Case study coming soon.</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-muted)" }}>
          I'm currently documenting the full build process for LoreTorch and Aris. Check back soon for the deep dive into the UX and technical architecture.
        </p>
      </section>

      <CallToAction />
    </>
  );
}
