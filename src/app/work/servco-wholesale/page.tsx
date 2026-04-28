import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CallToAction from "@/components/sections/CallToAction";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

export const metadata: Metadata = {
  title: "Servco Wholesale - made by tie.",
  description:
    "Brand identity and B2B ecommerce experience for the leading wholesale warehouse equipment provider. In business since 1987.",
};

export default function ServcoWholesale() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="The leading wholesale warehouse equipment provider."
        tags={["Brand Identity", "Web Design", "Web Development"]}
        image="/projects/servco-wholesale/servco-logo.png"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A 35-year-old wholesale operation, finally with a brand and a digital home that matches its reputation."
        description="Servco has been moving forks, dock equipment, and pallet trucks across the country since 1987 - same-day shipping, real human support, and a customer base that doesn't go anywhere else. The brand and site needed to communicate that quiet authority while making it dead simple for warehouse buyers to find, spec, and order."
        client="Servco Marketing"
        industry="B2B / Material Handling"
        timeline="8 Weeks"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/servco-wholesale/servco-logo.png",
            alt: "Servco brand mark",
            span: "wide",
            aspectRatio: "16/7",
            display: "logo",
            bg: "#0a2540",
          },
        ]}
      />

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="Three decades of trust, no brand to show for it"
        body="Servco's reputation precedes them - operations managers and warehouse buyers know the name. But the brand was a relic: a tired logo, no system, and a website that felt like a 90s product catalog. Discovery was about pulling out what's already great and giving it a modern visual language."
        body2="I sat with the team, dug into how their customers actually shop - usually by part class, not category - and uncovered the six benefits that win every deal: same-day shipping, freight rates, technical support, and a real person on the phone. Those became the spine of the brand."
      />

      {/* Brand intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Brand"
        heading="A modern industrial mark for a 35-year-old operation"
        body="The new identity leans into the no-nonsense character of the business - bold typography, an industrial blue palette, and a wordmark that holds up on a forklift, a quote sheet, or a tradeshow banner. Confident, durable, and built to age well."
        body2="The system covers everything Servco needs day to day - product templates, freight quote layouts, customer collateral, and email signatures - so the brand stays consistent whether it's me building it or the team rolling it out."
        bgColor="var(--bg-secondary)"
      />

      {/* Logo lockup */}
      <CaseStudyImageGrid
        columns={2}
        bgColor="var(--bg-secondary)"
        images={[
          {
            src: "/projects/servco-wholesale/servco-logo.png",
            alt: "Servco logo on dark background",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#0a2540",
          },
          {
            src: "/projects/servco-wholesale/servco-logo.png",
            alt: "Servco logo on light background",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#ffffff",
          },
        ]}
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="A B2B catalog that respects the buyer's time"
        body="Warehouse buyers don't browse - they search by class, spec, and price. The site is structured around how they actually shop: clean product taxonomy, instant filtering, freight-friendly product pages, and a quote request flow that takes seconds instead of minutes."
        body2="Every page is mobile-tuned for the dock floor, fast-loading on warehouse wifi, and built so the team can add new product lines without touching code."
      />

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://servcomarketing.com/"
      />
      <CallToAction />
    </>
  );
}
