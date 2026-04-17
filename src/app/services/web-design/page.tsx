import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import ProjectSlider from "@/components/sections/ProjectSlider";

export const metadata: Metadata = {
  title: "Web Design - tieallen.",
  description: "Beautiful, conversion-focused websites that deliver your business to a wider audience.",
};

export default function WebDesignPage() {
  return (
    <main>
      <ServicePageHero
        titleLines={[
          "Web Design.",
          "Beautiful, conversion-focused",
          "websites that deliver.",
        ]}
        boldLineIndex={0}
      />
      <ServiceCapabilities
        eyebrow="Web Design"
        headline={`Design that\nworks as hard\nas you do.`}
        subhead="Every pixel has a purpose. I design websites that look exceptional and convert - built around your audience, your goals, and where you're headed."
        capabilities={[
          "Website Design",
          "Landing Pages",
          "eCommerce",
          "UX Design",
          "Responsive Design",
          "Wireframing",
          "Design Systems",
          "Prototyping",
          "Strategy",
        ]}
      />
      <ServiceImageSplit
        headline="Premium websites that bring your business to life."
        body="Your website is the first thing people see. It should reflect exactly who you are - polished, purposeful, and built to convert. I design every detail around your brand and your audience, so it doesn't just look great, it performs at the highest level."
        checkpoints={[
          "Designed around your brand & mission",
          "Built to convert the right audience",
        ]}
        cta={{ label: "Start your project", href: "/get-started" }}
        image={{ src: "/projects/yuli/yuli-lobby-2.png", alt: "YULI luxury salon lobby" }}
      />
      <ProjectSlider
        eyebrow="My Work"
        headline={`My favourite\nWeb Design Projects`}
        cta={{ label: "View my work", href: "/work" }}
        projects={[
          {
            title: "YULI",
            client: "YULI",
            year: "2024",
            tags: ["Web Design"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
            href: "/work/yuli",
          },
          {
            title: "BCH Devcon",
            client: "BCH Devcon",
            year: "2024",
            tags: ["Web Design"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
            href: "/work/bch-devcon",
          },
          {
            title: "Blue Divine Aesthetics",
            client: "Blue Divine Aesthetics",
            year: "2024",
            tags: ["Web Design"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
            href: "/work/blue-divine-aesthetics",
          },
          {
            title: "CI² Aviation",
            client: "CI² Aviation",
            year: "2024",
            tags: ["Web Design"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
            href: "/work/ci2-aviation",
          },
          {
            title: "Expose Hair",
            client: "Expose Hair",
            year: "2024",
            tags: ["Web Design"],
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
            href: "/work/expose-hair",
          },
        ]}
      />
      <ServiceBreakdown
        headline="Web design that converts visitors into customers."
        subhead="Every site I build is designed with a clear purpose - to represent your brand at its best and turn the right visitors into paying customers."
        cta={{ label: "Get in touch today", href: "/get-started" }}
        items={[
          {
            title: "Website Design",
            description: "Custom, conversion-focused designs built around your brand, audience, and goals - not a template.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
          },
          {
            title: "Landing Pages",
            description: "High-converting pages built to capture leads, sell products, or drive a single focused action.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4M5 11l7-7 7 7"/></svg>,
          },
          {
            title: "eCommerce",
            description: "Online stores designed to make buying effortless - beautiful product pages, smooth checkout, more sales.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
          },
          {
            title: "UX Design",
            description: "Intuitive flows and thoughtful interactions that make your site easy and enjoyable to use.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
          },
          {
            title: "Responsive Design",
            description: "Pixel-perfect on every device - desktop, tablet, and mobile - without compromising the experience.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
          },
          {
            title: "Design Systems",
            description: "Scalable component libraries and style guides that keep your product consistent as it grows.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>,
          },
        ]}
      />
      <ServiceImageSplitReverse
        headline="Every detail designed with intention."
        body="From layout to micro-interactions, nothing is left to chance. I sweat the details so your visitors feel the difference - a site that's smooth, intuitive, and impossible to leave."
        checkpoints={[
          "Pixel-perfect execution",
          "Smooth interactions & animations",
        ]}
        cta={{ label: "See my work", href: "/work" }}
        image={{ src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80", alt: "Web design detail" }}
      />
    </main>
  );
}
