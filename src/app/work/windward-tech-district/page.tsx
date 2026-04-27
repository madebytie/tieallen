import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyVideoSection from "@/components/sections/CaseStudyVideoSection";
import CaseStudySlideshow from "@/components/sections/CaseStudySlideshow";
import CaseStudyInViewVideo from "@/components/sections/CaseStudyInViewVideo";
import CaseStudyVideoShowcase from "@/components/sections/CaseStudyVideoShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import mosaicStyles from "./HistoryMosaic.module.css";

export const metadata: Metadata = {
  title: "Windward Tech District - Vizonos",
  description:
    "Brand identity and one-page scrolling website for Windward Tech District, positioning Alpharetta as the tech hub of the south - launched in 4 weeks.",
};

export default function WindwardTechDistrict() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="The Tech Hub of The South"
        tags={["Brand Identity", "Web Design", "Web Development"]}
        image="/projects/windward-tech-district/culture-screenshot.png"
        video="/projects/windward-tech-district/home-page-animated-section.mov"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A brand and web presence positioning Alpharetta's Windward as the tech hub of the south - launched in 4 weeks"
        description="Windward Tech District needed an identity and a launch site that could rally developers, employers, and city stakeholders around a single story: this corridor is where the south's tech economy lives. Everything had to be ready in a month."
        client="City of Alpharetta"
        industry="Technology / City Development"
        timeline="4 Weeks"
      />

      {/* Hero video */}
      <CaseStudyVideoSection
        src="/projects/windward-tech-district/windward-hero-video.mov"
        aspectRatio="16/9"
      />

      {/* Discovery intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="Deep research into understanding the district's rich history and full potential"
        body="Before any design work, I dug into Windward's history, economic data, and live/work lifestyle. The corridor has one of the densest concentrations of tech employers in the southeast - but no shared story. Research surfaced the narrative: a walkable, amenity-rich district where talent wants to be, not just work."
        body2="That story had to be grounded in real data - tenant density, infrastructure investment, greenway access, proximity to talent pipelines - before it could become a brand."
      />

      {/* Discovery images - aerial full width */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/windward-tech-district/district-aerial.jpg",
            alt: "Windward Tech District aerial view",
            span: "wide",
            aspectRatio: "16/7",
          },
        ]}
      />

      {/* Discovery images - history mosaic */}
      <section className={mosaicStyles.mosaic}>
        <div className={mosaicStyles.frame}>
          <div className={mosaicStyles.left}>
            {[
              { src: "/projects/windward-tech-district/history/Building-Lake-Windward-Early-1980s-1536x2048.jpg", alt: "Lake Windward building, early 1980s" },
              { src: "/projects/windward-tech-district/history/Building-Lake-Windward2-Early-1980s-1536x2048.jpg", alt: "Lake Windward building 2, early 1980s" },
              { src: "/projects/windward-tech-district/history/Mobil-Land-Windward-1554x2048.jpg", alt: "Mobil Land Windward" },
              { src: "/projects/windward-tech-district/history/Windward-Master-Plan-Picture-2048x1386.jpg", alt: "Windward master plan" },
            ].map((img, i) => (
              <div key={i} className={mosaicStyles.cell}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={i === 3 ? mosaicStyles.cellImgZoomRight : mosaicStyles.cellImg}
                />
              </div>
            ))}
          </div>
          <div className={mosaicStyles.right}>
            <img
              src="/projects/windward-tech-district/history/Screen-Shot-2022-03-19-at-4.45.49-PM.png"
              alt="Windward district overview"
              className={mosaicStyles.rightImg}
            />
          </div>
        </div>
      </section>

      {/* Animated homepage section video */}
      <CaseStudyInViewVideo
        src="/projects/windward-tech-district/home-page-animated-section.mov"
        aspectRatio="2778/1574"
      />

      {/* Brand intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Brand"
        heading="Logo, identity, and a style guide built by committee"
        body="The brand process involved multiple logo directions, stakeholder presentations, and a committee vote to align city, developer, and employer voices on a single mark. The result is an identity that feels authoritative enough for city government and energetic enough for a tech corridor."
        body2="Blue, light blue, and green emerged as the favored palette - bold enough to own a color story, clean enough to work across signage, digital, and print. Every direction was pressure-tested against the brief: tech-forward, never cold."
        bgColor="var(--bg-secondary)"
      />

      {/* Logo exploration slideshow */}
      <CaseStudySlideshow
        title="Brand Development"
        bgColor="var(--bg-secondary)"
        images={[
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-1.png", alt: "Logo concepts — wind gust W mark" },
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-2.png", alt: "Logo concepts — globe W mark" },
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-3.png", alt: "Logo concepts — parkway W mark" },
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-4.png", alt: "Logo concepts — round 3 directions" },
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-5.png", alt: "Logo concepts — finalists" },
          { src: "/projects/windward-tech-district/logo-process/logo-mockups-6.png", alt: "Logo concepts — final refinements" },
        ]}
      />

      {/* Final logo lockups */}
      <CaseStudyImageGrid
        columns={3}
        images={[
          {
            src: "/projects/windward-tech-district/wtd-full-logo.svg",
            alt: "Windward Tech District full logo",
            aspectRatio: "998/694",
            span: "wide",
            display: "logo",
            bg: "#ffffff",
          },
          {
            src: "/projects/windward-tech-district/logo-process/brand-colors.png",
            alt: "Windward Tech District brand colors",
            aspectRatio: "998/694",
            small: true,
          },
        ]}
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="Built to pitch, built to last. Live in four weeks."
        body="The site needed to work as a pitch deck and a public destination at the same time. Custom vector graphics and scroll-driven animation tell the Windward story from district overview to tenant benefits - fully responsive and mobile optimized."
        body2="Every section was designed to persuade a different audience - the developer looking for a headquarters, the talent weighing a move, the city stakeholder tracking ROI. One site, one story."
      />

      {/* Website money shot */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://windwardtechdistrict.com/"
      />

      {/* Website bottom section video showcase */}
      <CaseStudyVideoShowcase
        src="/projects/windward-tech-district/home-bottom-section.mov"
      />

      {/* Website pages grid */}
      <CaseStudyScreenGrid
        images={[
          { src: "/projects/windward-tech-district/website-sections/screenshot-1.png", alt: "Windward website screenshot 1" },
          { src: "/projects/windward-tech-district/website-sections/screenshot-2.png", alt: "Windward website screenshot 2" },
          { src: "/projects/windward-tech-district/website-sections/screenshot-3.png", alt: "Windward website screenshot 3" },
          { src: "/projects/windward-tech-district/website-sections/screenshot-4.png", alt: "Windward website screenshot 4" },
          { src: "/projects/windward-tech-district/website-sections/hero-image.png", alt: "Windward website hero" },
          { src: "/projects/windward-tech-district/website-sections/screenshot-5.png", alt: "Windward website screenshot 5" },
          { src: "/projects/windward-tech-district/website-sections/section-3.jpg", alt: "Windward website section 3" },
          { src: "/projects/windward-tech-district/website-sections/section-5.jpg", alt: "Windward website section 5" },
          { src: "/projects/windward-tech-district/website-sections/section-8.jpg", alt: "Windward website section 8" },
        ]}
      />
    </>
  );
}
