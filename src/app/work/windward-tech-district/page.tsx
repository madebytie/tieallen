import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

export const metadata: Metadata = {
  title: "Windward Tech District - Vizonos",
  description:
    "Brand identity and one-page scrolling website for Windward Tech District, positioning Alpharetta as the tech hub of the south - launched in 4 weeks.",
};

export default function WindwardTechDistrict() {
  return (
    <>
      <ProjectHero
        title="The Tech Hub of The South"
        tags={["Brand Identity", "Web Design", "Web Development"]}
        image="/projects/windward-tech-district/district-edison.jpg"
      />

      <CaseStudyIntro
        headline="A brand and web presence positioning Alpharetta's Windward as the tech hub of the south - launched in 4 weeks"
        description="Windward Tech District needed an identity and a launch site that could rally developers, employers, and city stakeholders around a single story: this corridor is where the south's tech economy lives. Everything had to be ready in a month."
        client="Windward Tech District"
        industry="Technology / City Development"
        timeline="4 Weeks"
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="A district with no shared story"
        body="Windward is one of the densest concentrations of tech employers in the southeast - but it didn't have a unified brand or a place on the web to send prospective tenants, partners, and talent. The task was to build both from scratch, fast enough to support an active outreach push already underway."
        images={["/projects/windward-tech-district/wtd-full-logo.svg"]}
        imageAlt="Windward Tech District logo"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/windward-tech-district/district-greenway.jpg",
            alt: "Windward Tech District greenway",
          },
          {
            src: "/projects/windward-tech-district/district-jekyll.jpg",
            alt: "Windward Tech District campus architecture",
          },
        ]}
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/windward-tech-district/wtd-home-page.png"
        desktopAlt="Windward Tech District one-page website"
        bgColor="var(--bg-secondary)"
        scrollable
      />

      <CaseStudySplitContent
        eyebrow="• Deliverables"
        heading="Brand and site, shipped in four weeks"
        body="The work covered brand strategy, logo, and a full style guide, plus a one-page scrolling website with custom vector graphics and scroll-driven animation. Fully responsive and mobile optimized, the site launched on schedule as the district's public face."
        imagePosition="left"
        bgColor="var(--bg-secondary)"
      />
    </>
  );
}
