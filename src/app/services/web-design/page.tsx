import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
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
        headline="I create a website you're proud of, and want to show off."
        body="Your website is the first thing people see. It should reflect exactly who you are - polished, purposeful, and built to convert. I design every detail around your brand and your audience, so it doesn't just look great, it works."
        checkpoints={[
          "Designed around your brand & goals",
          "Built to convert the right audience",
        ]}
        cta={{ label: "Start your project", href: "/get-started" }}
        image={{ src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80", alt: "Web design work" }}
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
