import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import StanlokIcons from "./StanlokIcons";

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
        video="/projects/stanlok-precision-manufacturing/home-scroll.mov"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="Positioning a decades-old precision manufacturer for the projects that actually need them"
        description="Stanlok Corporation has spent decades machining custom nuts, pins, and precision components for American industry - from moon mission hardware to military aircraft programs to the specialty parts other shops won't touch. The site needed to pull that legacy forward: a clear product taxonomy, fast RFQ pathways, and a presence authoritative enough for aerospace and defense buyers evaluating a long-tail supplier."
        client="Stanlok"
        industry="Precision Manufacturing"
        timeline="6 Weeks"
      />

      <CaseStudyImageGrid
        columns={4}
        images={[
          { src: "/projects/stanlok-precision-manufacturing/special-pattern-nuts.jpg", alt: "Special pattern nuts", aspectRatio: "4/3" },
          { src: "/projects/stanlok-precision-manufacturing/special-shapes-nut.jpg", alt: "Special shape nut", aspectRatio: "4/3" },
          { src: "/projects/stanlok-precision-manufacturing/special-threads-nut.jpg", alt: "Special thread nut", aspectRatio: "4/3" },
          { src: "/projects/stanlok-precision-manufacturing/cad.png", alt: "Stanlok CAD model", aspectRatio: "4/3" },
        ]}
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

      <CaseStudyScreenGrid
        images={[
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-1.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-2.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-3.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-4.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-5.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-6.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-7.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/stanlok-screenshot-8.png", alt: "Stanlok website" },
          { src: "/projects/stanlok-precision-manufacturing/CiZO5CGvD6Z_y-PYEadstL1N496ZkDQqoq77ZW6ucGk.jpg", alt: "Stanlok precision part render" },
        ]}
      />

      <CaseStudyCarousel
        slideWidth="32vw"
        slideHeight={400}
        images={[
          { src: "/projects/stanlok-precision-manufacturing/IMG_20141229_084252.jpg", alt: "Stanlok facility" },
          { src: "/projects/stanlok-precision-manufacturing/IMG_20170830_115617.jpg", alt: "Stanlok facility" },
          { src: "/projects/stanlok-precision-manufacturing/IMG_20170219_125353.jpg", alt: "Stanlok facility" },
          { src: "/projects/stanlok-precision-manufacturing/unspecified-copy.jpg", alt: "Stanlok CNC machine" },
          { src: "/projects/stanlok-precision-manufacturing/IMG_20141217_154528.jpg", alt: "Stanlok facility" },
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

      <StanlokIcons />
      <div style={{ height: "5rem" }} />
    </>
  );
}
