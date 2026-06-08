import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyTestimonial from "@/components/sections/CaseStudyTestimonial";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CaseStudyDeliverables from "@/components/sections/CaseStudyDeliverables";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "BCH Devcon - Vizonos",
  description:
    "How I launched a fully branded global Bitcoin Cash hackathon series for Bitmain in just 2 weeks.",
};

export default function BCHDevcon() {
  return (
    <>
      <ProjectHero
        title="Global Bitcoin Hackathon Series"
        tags={["Brand Identity", "Web Design", "Growth & Automation"]}
        image="/projects/bch-devcon/bch-event-badge.png"
        imagePosition="top center"
      />

      <CaseStudyIntro
        headline="A global Bitcoin Cash Hackathon Series by the Crypto Mining giant, Bitmain"
        description="Bitmain's VC fund needed to launch a global hackathon series at SF Blockchain Week starting from zero. No branding, no website, no social media presence - not even a finalized name. Just a two-week runway and a global ambition."
        client="Bitmain"
        industry="Crypto / Blockchain / Event"
        timeline="2 Weeks"
      />

      <CaseStudyDeliverables
        description="I delivered a complete brand identity system, a fully functional website, and the growth automation needed to kickstart their event—all designed, built, and launched inside a two-week window."
        categories={[
          {
            category: "Brand Identity",
            items: [
              "Logo",
              "Brand Style Guide",
              "Event Ticket",
              "Twitter Profile Design",
              "EventBrite Cover Design",
              "Event T-Shirt Design & Swag",
            ],
          },
          {
            category: "Website",
            items: [
              "One Page Scrolling Website",
              "Vector Graphics & Scroll Animation",
            ],
          },
          {
            category: "Growth & Automation",
            items: [
              "Digital Influencer Event Invite (for inviting Crypto Influencers via social media)",
            ],
          },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="From zero to launch in 14 days"
        body="Bitmain needed to launch an entire event brand at SF Blockchain Week with no branding, no website, no social media, and no name - with just a two-week runway and the expectation that it would look like months of planning had gone into it."
        images={["/projects/bch-devcon/bch-devcon-event.png"]}
        imageAlt="BCH Devcon branding design"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
        narrowImage
      />

      <CaseStudyCarousel
        images={[
          { src: "/projects/bch-devcon/IMG_3254.jpg", alt: "BCH Devcon event" },
          { src: "/projects/bch-devcon/IMG_3257.jpg", alt: "BCH Devcon event" },
          { src: "/projects/bch-devcon/IMG_3255.jpg", alt: "BCH Devcon event" },
          { src: "/projects/bch-devcon/IMG_3256.jpg", alt: "BCH Devcon event" },
          { src: "/projects/bch-devcon/IMG_3258.jpg", alt: "BCH Devcon event" },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Brand Identity"
        heading="A cohesive brand built to last"
        body="I delivered a complete brand identity system: logo, style guide, event ticket design, social media templates, and merchandise - all consistent across every touchpoint of the event. The result looked like months of planning had gone into it."
        layout="text-split"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          { src: "/projects/bch-devcon/congruency-2.png", alt: "BCH Devcon branding", span: "wide", aspectRatio: "4/3", objectFit: "contain" },
        ]}
      />

      <CaseStudyTestimonial
        quote="We were launching at San Francisco Blockchain Week starting at zero and needed everything ready within 2 weeks. We received a lot of great comments and feedback on the branding during the kickoff SF Hackathon. You guys did a great job!"
        author="Vincent"
        role="Investment Director, Bitmain"
      />

      <CaseStudySplitContent
        eyebrow="• Website"
        heading="A site ready for a global audience"
        body="The website launched alongside the brand - fully designed and built inside the same two-week window. It covered event details, hackathon tracks, prizes, and speaker information, and served as the primary destination for a global developer audience."
        layout="text-split"
        bgColor="var(--bg-primary)"
      />

      <CaseStudyImageGrid
        columns={2}
        images={[
          { src: "/projects/bch-devcon/bch-desktop-1024x663.png", alt: "BCH Devcon website desktop view", span: "wide", aspectRatio: "16/7", objectFit: "contain" },
        ]}
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/bch-devcon/bchdevcon-website.png"
        desktopAlt="BCH Devcon website full page"
        scrollable
      />

      <CaseStudyDeviceShowcase
        type="mobile"
        mobileImage="/projects/bch-devcon/bch-devcon-mobile-mockups.png"
        mobileAlt="BCH Devcon mobile website mockups"
        bgColor="var(--bg-primary)"
      />

      <CallToAction />
    </>
  );
}
