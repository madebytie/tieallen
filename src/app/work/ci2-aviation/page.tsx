import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudyYouTubeSection from "@/components/sections/CaseStudyYouTubeSection";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyVideoShowcase from "@/components/sections/CaseStudyVideoShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";

export const metadata: Metadata = {
  title: "CI² Aviation - Vizonos",
  description:
    "A decade-long partnership with CI² Aviation - an FAA and ATCA award-winning aerospace and IT firm. Two full website builds plus tradeshow, print, and collateral design.",
};

export default function CI2Aviation() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="Running 150+ National Airports & Air Traffic"
        tags={["Web Design", "Web Development", "Print Design", "Tradeshow Design"]}
        image="/projects/ci2-aviation/hero.jpg"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A decade-long partnership powering a trusted global aviation and IT firm"
        description="CI² Aviation is an FAA and ATCA award-winning, woman-owned aerospace and information technology company running air traffic control, airport operations, and mission-critical IT for government and private clients worldwide. Across a ten-year partnership I've delivered two full website builds, tradeshow booth design, federal proposal design, brochures, and internal corporate collateral - keeping the brand sharp as the business scaled across 150+ airports."
        client="CI² Aviation, Inc."
        industry="Aerospace / Aviation IT"
        timeline="10+ Year Partnership"
      />

      {/* Hero video - YouTube, autoplay when in view */}
      <CaseStudyYouTubeSection
        videoId="qbKFTc5v1q8"
        aspectRatio="16/9"
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="A site built to win contracts and recruit talent at the same time"
        body="The CI² website had to speak to two very different audiences at once - federal contracting officers evaluating a trusted provider for air traffic and airport operations, and aviation professionals weighing their next career move. The design had to feel authoritative enough for the DoD and FAA, and human enough that a controller or technician wants to apply."
        body2="I built the entire site end to end - information architecture, design, and development - structuring it around CI²'s four core service lines (Air Traffic Control, Airport Operations, Staffing & Recruitment, Financial & POS Solutions) with clear pathways into contracts, partners, and open roles. This is the second full site I've delivered for them across a long-running partnership."
      />

      {/* Website money shot - live iframe */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://ci2development.wpengine.com/"
      />

      {/* Bottom section video showcase - placeholder, swap when asset is ready */}
      <CaseStudyVideoShowcase
        src="/projects/ci2-aviation/home-bottom-section.mov"
      />

      {/* Website pages grid - animated 3x3 */}
      <CaseStudyScreenGrid
        images={[
          { src: "/projects/ci2-aviation/website-sections/screenshot-1.png", alt: "CI² website screenshot 1" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-2.png", alt: "CI² website screenshot 2" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-3.png", alt: "CI² website screenshot 3" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-4.png", alt: "CI² website screenshot 4" },
          { src: "/projects/ci2-aviation/website-sections/hero-image.png", alt: "CI² website hero" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-5.png", alt: "CI² website screenshot 5" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-6.png", alt: "CI² website screenshot 6" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-7.png", alt: "CI² website screenshot 7" },
          { src: "/projects/ci2-aviation/website-sections/screenshot-8.png", alt: "CI² website screenshot 8" },
        ]}
      />

      {/* Print & Collateral intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Print & Collateral"
        heading="Federal proposals, tradeshow presence, and the print suite that carries the brand offline"
        body="Winning federal contracts isn't just a website job - it's hundreds of pages of proposal design that has to be easy to evaluate, on-brand, and unmistakably CI². I've designed proposal covers and interior layouts, brochures, one-pagers, and internal corporate resources that reinforce the same authority and clarity the site delivers online."
        body2="The tradeshow floor is where CI² meets contracting officers, partners, and future hires face-to-face. I designed the booth backdrop and collateral suite to command the aisle - bold, legible at distance, and built around the core brand system so every touchpoint feels like one company."
      />

      {/* Proposal cover + brochure cover 2-col grid */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/ci2-aviation/proposal-cover.png",
            alt: "CI² federal proposal cover design",
            aspectRatio: "1/1",
          },
          {
            src: "/projects/ci2-aviation/brochure-cover.png",
            alt: "CI² 2022 corporate brochure cover",
            aspectRatio: "1/1",
          },
        ]}
      />

      {/* Tradeshow backdrop - wide/full */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/ci2-aviation/tradeshow-backdrop.png",
            alt: "CI² tradeshow booth backdrop",
            span: "wide",
            aspectRatio: "16/7",
          },
        ]}
      />
    </>
  );
}
