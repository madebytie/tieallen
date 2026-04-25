import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";

export const metadata: Metadata = {
  title: "Stanlok Precision Manufacturing - Vizonos",
  description:
    "Website for Stanlok Corporation - a precision manufacturer of custom nuts, pins, and machined parts trusted by moon missions, military aircraft programs, and American industry.",
};

export default function StanlokPrecisionManufacturing() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="Precision Parts Trusted by Moon Missions & Military Aircraft"
        tags={["Web Design", "Web Development"]}
        image="/projects/stanlok-precision-manufacturing/building.jpg"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="Positioning a decades-old precision manufacturer for the projects that actually need them"
        description="Stanlok Corporation has spent decades machining custom nuts, pins, and precision components for American industry - from moon mission hardware to military aircraft programs to the specialty parts other shops won't touch. The site needed to pull that legacy forward: a clear product taxonomy, fast RFQ pathways, and a presence authoritative enough for aerospace and defense buyers evaluating a long-tail supplier."
        client="Stanlok Corporation"
        industry="Precision Manufacturing / Aerospace & Defense"
        timeline="Full Website Build"
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="A product-led site that gets buyers from landing page to RFQ in a few clicks"
        body="Stanlok's catalog is deep and highly technical - specialty nuts, straight pins, taper pins, custom CNC Swiss machining, assembly, distribution, packaging - and the people evaluating it are engineers on deadline. The site had to make that catalog scannable, give each product line its own visual identity, and route every path back to a quote request."
        body2="I built the full site end to end, structuring it around the four core product categories with hero-driven product pages, an RFQ-first contact flow, and rendered product backgrounds that separate each category at a glance. The brand system - deep navy, signal red, and technical typography - signals precision without leaning on stock industrial clichés."
      />

      {/* Website money shot - live iframe */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://stanlok.com/"
      />

      {/* Website pages grid - animated 3x3 */}
      <CaseStudyScreenGrid
        images={[
          { src: "/projects/stanlok-precision-manufacturing/slider-hero.jpg", alt: "Stanlok hero slider" },
          { src: "/projects/stanlok-precision-manufacturing/machining-bg.jpg", alt: "Precision machining product background" },
          { src: "/projects/stanlok-precision-manufacturing/nut-bg.jpg", alt: "Specialty nut product background" },
          { src: "/projects/stanlok-precision-manufacturing/taper-pin-bg.jpg", alt: "Taper pin product background" },
          { src: "/projects/stanlok-precision-manufacturing/building.jpg", alt: "Stanlok facility exterior" },
          { src: "/projects/stanlok-precision-manufacturing/straight-pin-bg.jpg", alt: "Straight pin product background" },
          { src: "/projects/stanlok-precision-manufacturing/machining-bg.jpg", alt: "Precision machining product background" },
          { src: "/projects/stanlok-precision-manufacturing/nut-bg.jpg", alt: "Specialty nut product background" },
          { src: "/projects/stanlok-precision-manufacturing/taper-pin-bg.jpg", alt: "Taper pin product background" },
        ]}
      />

      {/* Custom Icons intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Custom Icons"
        heading="A custom icon system for every product line and service"
        body="Stanlok's catalog spans specialty nuts, straight pins, taper pins, machining, assembly, engineering, packaging, and distribution - each a distinct offering that deserved its own visual shorthand. Stock icons wouldn't cut it, so I drew a full custom set where every mark echoes the actual part or process it represents."
        body2="The icons work as navigation, as product category markers, and as punctuation throughout the marketing system - tying the site, collateral, and print deliverables into one visual language."
      />

      {/* Custom Icons 4-col grid */}
      <CaseStudyImageGrid
        columns={4}
        images={[
          { src: "/projects/stanlok-precision-manufacturing/icons/specialty-nut-navigation-icon2.png", alt: "Specialty nut icon", display: "logo" },
          { src: "/projects/stanlok-precision-manufacturing/icons/straight-pin-navigation-icon1.png", alt: "Straight pin icon", display: "logo" },
          { src: "/projects/stanlok-precision-manufacturing/icons/taper-pin-navigation-icon1.png", alt: "Taper pin icon", display: "logo" },
          { src: "/projects/stanlok-precision-manufacturing/icons/machining-navigation-icon1.png", alt: "Machining icon", display: "logo" },
        ]}
      />
    </>
  );
}
