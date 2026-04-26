import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyYouTubeSection from "@/components/sections/CaseStudyYouTubeSection";

export const metadata: Metadata = {
  title: "Taste of Alpharetta - made by tie.",
  description:
    "Web design and development for the city's flagship culinary festival - 60 restaurants, 40,000 attendees, one digital front door.",
};

export default function TasteOfAlpharetta() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="Come for the food. Stay for the community."
        tags={["Web Design", "Web Development"]}
        image="/projects/taste-of-alpharetta/iphone-full-square.png"
        imagePosition="top center"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A digital home for the city's flagship culinary festival - 60 restaurants, 40,000 attendees, one night downtown."
        description="Taste of Alpharetta has been running for nearly three decades and pulls the entire city together for one evening every May. The site is the festival's command center: it sells tickets, drives the TasteBucks digital currency, surfaces the lineup of 60+ restaurants, and gets people to the right entrance, parking lot, and stage on the night of the event."
        client="City of Alpharetta"
        industry="Events / Food & Beverage"
        timeline="6 Weeks"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        noBottomPadding
        images={[
          {
            src: "/projects/taste-of-alpharetta/event-menu.jpg",
            alt: "Taste of Alpharetta event menu",
            span: "wide",
            aspectRatio: "16/7",
          },
        ]}
      />

      <section style={{ padding: "0 1.25rem 0.75rem", backgroundColor: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1350, margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: "0.75rem", height: 480 }}>
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img src="/projects/taste-of-alpharetta/JTP_4702-scaled-e1716936138953.jpg" alt="Taste of Alpharetta festival crowd" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img src="/projects/taste-of-alpharetta/shop-2-scaled-e1716938659128.jpg" alt="Taste of Alpharetta app on phone" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="One site, three audiences, one busy night"
        body="The festival serves three groups at once - attendees deciding what to eat, restaurants needing exposure for their booth, and sponsors looking for visibility. Discovery was about mapping how each one uses the site and making sure no one had to dig for what they came for."
        body2="The hardest part was the day-of experience. Attendees were already on-site, on their phones, looking for the next thing - which meant the site had to load instantly on a packed downtown wifi connection and surface schedule, map, and TasteBucks info in two taps."
      />

      <CaseStudyYouTubeSection videoId="YHx8sy73q5A" aspectRatio="16/9" />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="Built for the planning weeks - and the night of the event"
        body="The site is structured around the festival journey: hype and ticketing in the lead-up, lineup and map content as the date approaches, and a mobile-first day-of experience with countdown, schedule, parking, and TasteBucks reload right at the top."
        body2="A digital TasteBucks system, restaurant directory, sponsor showcase, and FAQ all live in a CMS the city team can update themselves - so when the lineup changes the week of the event, no developer is needed."
        bgColor="var(--bg-secondary)"
      />

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/taste-of-alpharetta/taste-above-the-fold.png"
        desktopAlt="Taste of Alpharetta website"
      />

      {/* Brand collateral grid */}
      <CaseStudyImageGrid
        columns={3}
        images={[
          {
            src: "/projects/taste-of-alpharetta/toa-logo-color.png",
            alt: "Taste of Alpharetta horizontal logo",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#ffffff",
          },
          {
            src: "/projects/taste-of-alpharetta/event-photo.jpg",
            alt: "Festival evening photo",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/taste-of-alpharetta/toa-logo-white.png",
            alt: "Taste of Alpharetta vertical logo",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#0a2540",
          },
        ]}
      />
    </>
  );
}
