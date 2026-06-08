import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyTestimonial from "@/components/sections/CaseStudyTestimonial";
import BrandGuideViewer from "@/components/sections/BrandGuideViewer";
import CaseStudyDeliverables from "@/components/sections/CaseStudyDeliverables";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Permissionless Ventures - Vizonos",
  description:
    "How I built a complete brand identity and one-page website for Bitmain's $50M crypto VC fund in 3 weeks.",
};

export default function PermissionlessVentures() {
  return (
    <>
      <ProjectHero
        title="BITMAIN's $50M Crypto VC Fund"
        tags={["Brand Identity", "Web Design"]}
        image="/projects/permissionless/hero-bg.png"
        video="/projects/permissionless/Screen-Recording-2019-09-22-at-8.09.23-PM.mov"
      />

      <CaseStudyIntro
        headline="A complete brand identity and web presence for Bitmain's $50 million permissionless blockchain venture fund - in 3 weeks"
        description="Permissionless Ventures is Bitmain's VC arm dedicated to funding permissionless blockchain projects. They needed a brand that could stand on its own at industry events while reflecting the credibility of one of the world's largest crypto companies behind it."
        client="Permissionless Ventures / Bitmain"
        industry="Crypto / Venture Capital / Blockchain"
        timeline="3 Weeks"
      />

      <CaseStudyDeliverables
        description="The full brand system covered logo design, an advanced style guide, corporate collateral including business cards, letterhead, and a master presentation deck. The website was a single scrolling page with custom vector graphics and scroll animation - fully responsive and launched in time for the SF Hackathon kickoff."
        categories={[
          {
            category: "Brand Identity",
            items: [
              "Logo",
              "Advanced Brand Style Guide",
              "Corporate Collateral (Business Cards, Letterhead, Master Presentation Deck)",
            ],
          },
          {
            category: "Website",
            items: [
              "One Page Scrolling Website",
              "Vector Graphics & Scroll Animation",
            ],
          },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="A $50M fund with no face"
        body="Bitmain had the capital and the conviction - what they didn't have was a brand. Permissionless Ventures needed a visual identity that could hold its own at blockchain conferences and in front of founders, while signaling both institutional credibility and a genuine commitment to the permissionless ethos. The runway was three weeks."
        images={["/projects/permissionless/permissionless-logo-1024x177.png"]}
        imageAlt="Permissionless Ventures logo"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/permissionless/pv-bcard-mockup.png",
            alt: "Permissionless Ventures business card mockup",
          },
          {
            src: "/projects/permissionless/permissionless-brandguide-logo.png",
            alt: "Permissionless Ventures logo design",
            display: "screenshot",
          },
        ]}
      />

      <BrandGuideViewer
        pages={Array.from({ length: 28 }, (_, i) => `/projects/permissionless/brand-guide/page-${String(i + 1).padStart(2, "0")}.png`)}
        bgColor="var(--bg-primary)"
      />

      <CaseStudyTestimonial
        quote="We received a lot of great comments and feedback on the branding during the kickoff SF Hackathon. You guys did a great job!"
        author="Vincent"
        role="Investment Director, Bitmain"
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/permissionless/one-pager-screenshot.png"
        desktopAlt="Permissionless Ventures one-page website"
        bgColor="var(--bg-secondary)"
        scrollable
      />



      <CaseStudyDeviceShowcase
        type="mobile"
        mobileImage="/projects/permissionless/Screen-Shot-2019-09-22-at-8.27.48-PM.png"
        mobileAlt="Permissionless Ventures mobile responsive mockup"
        bgColor="var(--bg-primary)"
      />


      <CallToAction />
    </>
  );
}
