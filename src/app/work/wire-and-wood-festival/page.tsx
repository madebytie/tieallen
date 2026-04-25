import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

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
        image="/projects/wire-and-wood-festival/headliner.jpg"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="The digital home for Alpharetta's Wire & Wood Songwriters Festival - free, two days, every original song with a story behind it."
        description="Wire & Wood is the cornerstone of Alpharetta Music City - a two-day, multi-stage songwriters festival that takes over downtown every October. The site is where fans find the lineup, plan their two days, and dig into the stories behind the songs. It also has to win the trust of the next year's headliner."
        client="City of Alpharetta"
        industry="Events / Music"
        timeline="6 Weeks"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/wire-and-wood-festival/headliner.jpg",
            alt: "Wire & Wood headliner lineup",
            span: "wide",
            aspectRatio: "16/7",
          },
        ]}
      />

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="A festival built on stories, not just sets"
        body="Wire & Wood is different from a typical music festival - the format is built around songwriters telling the story behind each track before they play it. That intimacy had to live on the site. Every artist needed room for a bio, a quote, and the songs they're known for, not just a name on a poster."
        body2="On the practical side, the site had to handle five core jobs: announce the lineup, publish the schedule, plot the stages on a downtown map, recruit sponsors, and accept band submissions for next year. Each one had its own audience and its own conversion."
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

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://wireandwoodalpharetta.com/"
      />

      {/* Brand collateral grid */}
      <CaseStudyImageGrid
        columns={3}
        images={[
          {
            src: "/projects/wire-and-wood-festival/ww-logo.png",
            alt: "Wire & Wood logo",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#0a0a0a",
          },
          {
            src: "/projects/wire-and-wood-festival/headliner.jpg",
            alt: "Wire & Wood headliner combo graphic",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/wire-and-wood-festival/music-city-logo.png",
            alt: "Alpharetta Music City",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#ffffff",
          },
        ]}
      />
    </>
  );
}
