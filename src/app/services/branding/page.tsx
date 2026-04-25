import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import ProjectSlider from "@/components/sections/ProjectSlider";

export const metadata: Metadata = {
  title: "Branding - made by tie.",
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
      />
      <ServiceCapabilities
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
        cta={{ label: "Start your project", href: "/start" }}
        image={{ src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80", alt: "Brand identity work" }}
      />
      <ServiceBreakdown
        headline="Branding that helps you launch with impact and authority."
        subhead="Every brand I build is crafted from the ground up - strategy first, then identity, then every asset you need to show up consistently across every touchpoint."
        cta={{ label: "Get in touch today", href: "/start" }}
        items={[
          {
            title: "Brand Strategy",
            description: "Positioning, messaging, and a clear direction that separates you from the competition.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>,
          },
          {
            title: "Logo Design",
            description: "A distinctive mark built for versatility - works at any size, in any context.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
          },
          {
            title: "Visual Identity",
            description: "Color palette, typography, and graphic elements that make your brand instantly recognisable.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
          },
          {
            title: "Brand Guidelines",
            description: "A complete rulebook so your brand stays consistent whether it's you or an entire team.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
          },
          {
            title: "Brand Collateral",
            description: "Business cards, pitch decks, social kits, and any printed or digital assets your launch requires.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
          },
          {
            title: "Brand Messaging",
            description: "Taglines, tone of voice, and copy frameworks that communicate who you are with clarity.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
          },
        ]}
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
