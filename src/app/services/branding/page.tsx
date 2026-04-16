import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import ProjectSlider from "@/components/sections/ProjectSlider";

export const metadata: Metadata = {
  title: "Branding - tieallen.",
  description: "Complete branding identity systems that help you launch with impact - logo, visual identity, and everything you need to compete.",
};

export default function BrandingPage() {
  return (
    <main>
      <ServicePageHero
        titleLines={[
          "Branding.",
          "Launch with impact",
          "and authority.",
        ]}
        boldLineIndex={0}
        align="left"
        primaryCta={{ label: "Learn more", href: "#capabilities", icon: "down" }}
      />
      <ServiceCapabilities
        id="capabilities"
        eyebrow="Branding"
        headline={`A brand that\nconnects and\ninspires action.`}
        subhead="Your brand is the interaction point between your product and your audience. I build complete identity systems that look professional at every touchpoint - consistent in look, feel, personality, and voice - so you can launch with confidence and scale faster."
        capabilities={[
          "Brand Strategy",
          "Logo Design",
          "Visual Identity",
          "Brand Guidelines",
          "Typography",
          "Color Palettes",
          "Brand Messaging",
          "Brand Collateral",
          "Social Media Kits",
        ]}
      />
      <ServiceImageSplit
        headline="Everything you need to launch and compete."
        body="I deliver a complete branding identity system - logo, colors, type, messaging, and any unique components your business requires. No gaps, no guesswork. You get all the essentials at launch and a foundation that grows with you."
        checkpoints={[
          "Complete identity system from day one",
          "Tailored to your specific launch needs",
        ]}
        cta={{ label: "Start your project", href: "/get-started" }}
        image={{ src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80", alt: "Brand identity work" }}
      />
      <ProjectSlider
        eyebrow="My Work"
        headline={`My favourite\nBranding Projects`}
        cta={{ label: "View my work", href: "/work" }}
        projects={[
          {
            title: "YULI",
            client: "YULI",
            year: "2024",
            tags: ["Branding"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
            href: "/work/yuli",
          },
          {
            title: "BCH Devcon",
            client: "BCH Devcon",
            year: "2024",
            tags: ["Branding"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
            href: "/work/bch-devcon",
          },
          {
            title: "Blue Divine Aesthetics",
            client: "Blue Divine Aesthetics",
            year: "2024",
            tags: ["Branding"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
            href: "/work/blue-divine-aesthetics",
          },
          {
            title: "CI² Aviation",
            client: "CI² Aviation",
            year: "2024",
            tags: ["Branding"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
            href: "/work/ci2-aviation",
          },
          {
            title: "Expose Hair",
            client: "Expose Hair",
            year: "2024",
            tags: ["Branding"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
            href: "/work/expose-hair",
          },
        ]}
      />
      <ServiceImageSplitReverse
        headline="Dialed in to your audience."
        body="Your brand is how people experience your product - I make sure it connects. Every detail is designed to grab attention, build trust, and inspire action. Consistent look and feel across every touchpoint so your audience gets a professionally built experience every time."
        checkpoints={[
          "Designed to connect with your audience",
          "Consistent across every touchpoint",
        ]}
        cta={{ label: "See my work", href: "/work" }}
        image={{ src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80", alt: "Brand design detail" }}
      />
    </main>
  );
}
