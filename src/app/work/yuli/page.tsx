import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyQuote from "@/components/sections/CaseStudyQuote";

export const metadata: Metadata = {
  title: "YULI Salon & Aesthetics - Vizonos",
  description:
    "Brand-forward salon website for YULI Salon & Aesthetics - a Sandy Springs studio specializing in custom hair, color, and PMU services.",
};

export default function Yuli() {
  return (
    <>
      <ProjectHero
        title="Hair, Style & You"
        tags={["Brand Identity", "Web Design", "Web Development"]}
        image="/projects/yuli/yuli-lobby.png"
      />

      <CaseStudyIntro
        headline="A premium salon web presence for YULI, matching the feel of the studio itself"
        description="YULI Salon & Aesthetics is a Sandy Springs studio built around custom cuts, color, and PMU work delivered in a calm, light-filled space. The site needed to carry the same weight as the room - quiet luxury, service-led navigation, and a direct path to booking."
        client="YULI Salon & Aesthetics"
        industry="Beauty / Salon"
        timeline="3 Weeks"
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="A studio experience that had to translate on screen"
        body="Walk into YULI and the feel is immediate - natural light, gold accents, a stylist-owned space where every appointment is a one-on-one. The old web footprint didn't communicate any of that. The brief: a site that signals the same premium, personalized experience before a client ever books."
        images={["/projects/yuli/yuli-logo-gold.svg"]}
        imageAlt="YULI Salon & Aesthetics logo"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/yuli/yuli-lobby-2.png",
            alt: "YULI Salon interior",
            span: "wide",
            aspectRatio: "16/7",
          },
          {
            src: "/projects/yuli/hair-1.jpg",
            alt: "YULI stylist work - custom color",
          },
          {
            src: "/projects/yuli/hair-3.jpg",
            alt: "YULI stylist work - cut and style",
          },
          {
            src: "/projects/yuli/hair-6.jpg",
            alt: "YULI stylist work - color transformation",
          },
          {
            src: "/projects/yuli/hair-8.jpg",
            alt: "YULI stylist work - finished style",
          },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Deliverables"
        heading="Booking-first site with a full service menu"
        body="The build covered a responsive multi-page site with dedicated service areas for women's cut and color, men's services, hair extensions, PMU and aesthetics, and bridal and editorial work - plus an integrated booking path, policies and connection pages, and a gallery pulling directly from YULI's active Instagram presence."
        images={["/projects/yuli/hair-2.jpg", "/projects/yuli/hair-4.jpg", "/projects/yuli/hair-5.jpg", "/projects/yuli/hair-7.jpg"]}
        imageAlt="YULI salon work"
        imagePosition="left"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyQuote
        quote="I had the best experience at YULI Salon & Aesthetics! I went in for a haircut and gloss, and I couldn't be happier with the results. Yuliya did an amazing job - she truly brought my vision to life while adding her own creative ideas to make it even better."
        author="Hannah Peschel"
        role="Client"
        company="YULI Salon & Aesthetics"
        variant="light"
      />
    </>
  );
}
