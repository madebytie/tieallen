import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import CaseStudyVideoShowcase from "@/components/sections/CaseStudyVideoShowcase";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CaseStudyDeliverables from "@/components/sections/CaseStudyDeliverables";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Wire & Wood Festival - made by tie.",
  description:
    "Web design and development for Alpharetta's Wire & Wood Songwriters Festival - a free, two-day celebration of original music in downtown Alpharetta.",
};

export default function WireAndWoodFestival() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="A festival of songwriters, on stage and online."
        tags={["Web Design", "Web Development"]}
        image="/projects/wire-and-wood-festival/Wood-Wire-Festival-118-1-1.jpg"
        imagePosition="bottom center"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="The digital home for Alpharetta's Wire & Wood Songwriters Festival - free, two days, every original song with a story behind it."
        description="Wire & Wood is the cornerstone of Alpharetta Music City - a two-day, multi-stage songwriters festival that takes over downtown every October. The site is where fans find the lineup, plan their two days, and dig into the stories behind the songs. It also has to win the trust of the next year's headliner."
        client="City of Alpharetta"
        industry="Events / Music"
        timeline="6 Weeks"
      />

      <CaseStudyDeliverables
        description="I built the digital home for the festival, translating the intimacy of songwriter stories into a premium online experience. The site handles lineup announcements, schedules, stage mapping, and custom submission portals for bands and sponsors."
        categories={[
          {
            category: "Strategy & Copy",
            items: [
              "Event Digital Strategy",
              "Artist Storytelling & Copywriting",
              "Content Architecture",
            ],
          },
          {
            category: "Website & Systems",
            items: [
              "Custom Festival Website",
              "Artist Roster & Schedule Architecture",
              "Vendor & Band Submission Portals",
              "Sponsor & Stage Mapping",
            ],
          },
        ]}
      />

      <CaseStudyVideoShowcase
        imageSrc="/projects/wire-and-wood-festival/wireandwood-hero.png"
        imageAlt="Wire & Wood Festival"
      />

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="A festival built on stories, not just sets"
        body="Wire & Wood is different from a typical music festival - the format is built around songwriters telling the story behind each track before they play it. That intimacy had to live on the site. Every artist needed room for a bio, a quote, and the songs they're known for, not just a name on a poster."
        body2="On the practical side, the site had to handle five core jobs: announce the lineup, publish the schedule, plot the stages on a downtown map, recruit sponsors, and accept band submissions for next year. Each one had its own audience and its own conversion."
      />

      <CaseStudyCarousel
        slideWidth="34vw"
        slideHeight={420}
        images={[
          { src: "/projects/wire-and-wood-festival/Wood-Wire-Festival-127.jpg", alt: "Wire & Wood Festival" },
          { src: "/projects/wire-and-wood-festival/Wood-Wire-Festival-118-1-1.jpg", alt: "Wire & Wood Festival" },
          { src: "/projects/wire-and-wood-festival/DSCF2248-scaled.jpg", alt: "Wire & Wood Festival" },
          { src: "/projects/wire-and-wood-festival/49533864948_cbb3ca0709_k.jpg", alt: "Wire & Wood Festival" },
          { src: "/projects/wire-and-wood-festival/main-stage-photo.png", alt: "Wire & Wood main stage" },
        ]}
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="Free admission, premium presentation"
        body="The festival is free - so the site has to feel like a premium music brand, not a city event page. Big editorial photography, dark moody color, and bold lineup typography do the heavy lifting. Every artist gets a dedicated card, every stage gets a map pin, every sponsor gets the visibility their dollars bought."
        body2="Mobile is the hero use case - the site is built so attendees can plan their two days on the couch and navigate them on the move, with schedule, map, and lineup all one tap away."
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/wire-and-wood-festival/wireandwood-hero.png"
        desktopAlt="Wire & Wood Festival website"
      />

      <CaseStudyScreenGrid
        images={[
          { src: "/projects/wire-and-wood-festival/wirewood-screenshot-1.png", alt: "Wire & Wood website" },
          { src: "/projects/wire-and-wood-festival/wirewood-screenshot-2.png", alt: "Wire & Wood website" },
          { src: "/projects/wire-and-wood-festival/wirewood-screenshot-3.png", alt: "Wire & Wood website" },
          { src: "/projects/wire-and-wood-festival/wirewood-screenshot-4.png", alt: "Wire & Wood website" },
          { src: "/projects/wire-and-wood-festival/wirewood-screenshot-5.png", alt: "Wire & Wood website" },
          { src: "/projects/wire-and-wood-festival/49533864948_cbb3ca0709_k.jpg", alt: "Wire & Wood Festival" },
          { src: "/projects/wire-and-wood-festival/wireandwood-hero.png", alt: "Wire & Wood Festival hero" },
          { src: "/projects/wire-and-wood-festival/main-stage-photo.png", alt: "Wire & Wood main stage" },
          { src: "/projects/wire-and-wood-festival/Wood-Wire-Festival-118-1-1.jpg", alt: "Wire & Wood Festival" },
        ]}
      />

      <CallToAction />
    </>
  );
}
