import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CallToAction from "@/components/sections/CallToAction";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

export const metadata: Metadata = {
  title: "Blue Divine Aesthetics - made by tie.",
  description:
    "Web design and development for Buckhead's hidden gem of medical-grade aesthetic care - a luxury med spa serving multiethnic clientele since 2012.",
};

export default function BlueDivineAesthetics() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="Buckhead's hidden gem for medical grade skin care."
        tags={["Web Design", "Web Development"]}
        image="/projects/blue-divine-aesthetics/blue-divine-logo.png"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A premium digital experience for a luxury med spa with 12 years of trust and a roster of FDA-approved technologies."
        description="Blue Divine has been quietly building one of Buckhead's most loyal client lists since 2012 - specializing in medical-grade aesthetic care for multiethnic skin. The site needed to match the polish of the in-clinic experience: confident, calm, and educational, with treatment information and booking that converts on first visit."
        client="Blue Divine Aesthetics"
        industry="Medical Aesthetics"
        timeline="8 Weeks"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/blue-divine-aesthetics/blue-divine-logo.png",
            alt: "Blue Divine Aesthetics logo",
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
        heading="A loyal client base, a brand worth protecting"
        body="Blue Divine had a lot of advantages going in - a 12-year track record, a deep specialty in skin of color, and a roster of treatments most of their competitors don't carry. The site wasn't winning trust because of design, but it wasn't fully selling the depth of the practice either."
        body2="Discovery was about building a clear treatment taxonomy - skin, body, laser - and surfacing the signature offerings (NeoGen, CoolPeel, Aerolase, Cosmelan) so clients searching by treatment, not category, could find them in one click."
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="Educational depth, luxury feel, frictionless booking"
        body="The site is structured for two visitor types - the researcher comparing treatments and the loyal client booking their next appointment. Treatment pages run deep with technology, before/after, and indication detail. The booking flow is two taps from any page."
        body2="A members area, gift card system, ecommerce shop for pro skincare, and a constantly-updated specials module all live in a CMS the team can run themselves - no monthly support contract required."
        bgColor="var(--bg-secondary)"
      />

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://bluedivine.com/"
      />

      {/* Logo lockup */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/blue-divine-aesthetics/blue-divine-logo.png",
            alt: "Blue Divine logo on dark",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#0a2540",
          },
          {
            src: "/projects/blue-divine-aesthetics/blue-divine-logo.png",
            alt: "Blue Divine logo on light",
            aspectRatio: "4/3",
            display: "logo",
            bg: "#ffffff",
          },
        ]}
      />
      <CallToAction />
    </>
  );
}
