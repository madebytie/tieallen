import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyTestimonial from "@/components/sections/CaseStudyTestimonial";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyScreenGrid from "@/components/sections/CaseStudyScreenGrid";
import CaseStudyDeliverables from "@/components/sections/CaseStudyDeliverables";

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
        image="/projects/yuli/lobby.png"
      />

      <CaseStudyIntro
        headline="A premium salon web presence for YULI, matching the feel of the studio itself"
        description="YULI Salon & Aesthetics is a Sandy Springs studio built around custom cuts, color, and PMU work delivered in a calm, light-filled space. The site needed to carry the same weight as the room - quiet luxury, service-led navigation, and a direct path to booking."
        client="YULI Salon & Aesthetics"
        industry="Beauty / Salon"
        timeline="3 Weeks"
      />

      <CaseStudyDeliverables
        description="I partnered with Yulia to translate her studio's physical aesthetic into a cohesive digital experience. The project covered everything from the initial strategy and content architecture to copywriting and the complete design and development of the full website."
        categories={[
          {
            category: "Strategy & Copy",
            items: [
              "Brand & Digital Strategy",
              "Content Architecture",
              "Website Copywriting",
            ],
          },
          {
            category: "Website & Systems",
            items: [
              "Custom Website Design",
              "Web Development",
              "Booking System Integration",
              "Dynamic Instagram Feed Integration",
            ],
          },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="A studio experience that had to translate on screen"
        body="Walk into YULI and the feel is immediate - natural light, gold accents, a stylist-owned space where every appointment is a one-on-one. The old web footprint didn't communicate any of that. The brief: a site that signals the same premium, personalized experience before a client ever books."
        layout="text-split"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyCarousel
        images={[
          { src: "/projects/yuli/hair-1.jpg", alt: "YULI salon team" },
          { src: "/projects/yuli/hair-2.jpg", alt: "YULI stylist portrait" },
          { src: "/projects/yuli/hair-3.jpg", alt: "YULI hair work" },
          { src: "/projects/yuli/hair-4.jpg", alt: "YULI hair work" },
          { src: "/projects/yuli/hair-5.jpg", alt: "YULI stylist portrait" },
          { src: "/projects/yuli/hair-6.jpg", alt: "YULI hair work" },
          { src: "/projects/yuli/hair-7.jpg", alt: "YULI hair work" },
          { src: "/projects/yuli/hair-8.jpg", alt: "YULI hair work" },
        ]}
      />

      {/* Salon space grid — left: tall reception shot, right: two stacked */}
      <section style={{ padding: "0 1.25rem 5rem", backgroundColor: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1350, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "390px 390px", gap: "0.75rem" }}>
          <div style={{ gridRow: "span 2", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img src="/projects/yuli/yuli-at-reception.jpg" alt="YULI reception" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </div>
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img src="/projects/yuli/salon-chairs.jpg" alt="YULI salon chairs" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img src="/projects/yuli/entire-salon.png" alt="YULI full salon view" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      <CaseStudyTestimonial
        quote="Tie completely captured the vision I had for YULI. The site feels like an extension of the salon itself - the luxury, the warmth, the attention to detail. Every page reflects exactly the experience I want clients to have before they ever walk through the door."
        author="Yulia"
        role="Owner"
        company="YULI Salon & Aesthetics"
      />

      <CaseStudySplitContent
        eyebrow="• Website"
        heading="Booking-first site with a full service menu"
        body="The build covered a responsive multi-page site with dedicated service areas for women's cut and color, men's services, hair extensions, PMU and aesthetics, and bridal and editorial work - plus an integrated booking path, policies and connection pages, and a gallery pulling directly from YULI's active Instagram presence."
        layout="text-split"
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://yulisalonaesthetics.com/"
      />

      <CaseStudyScreenGrid
        images={[
          { src: "/projects/yuli/website-image-1.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-2.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-3.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-4.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-5.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-6.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-7.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-8.png", alt: "YULI website" },
          { src: "/projects/yuli/website-image-9.png", alt: "YULI website" },
        ]}
      />
    </>
  );
}
