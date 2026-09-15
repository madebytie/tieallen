import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Product Design - made by tie.",
  description:
    "Product design for 0→1 software: UX, UI, design systems, and the surfaces people actually use - including the websites that sit around the product.",
};

export default function ProductDesignPage() {
  return (
    <main>
      <ServicePageHero
        titleLines={[
          "Product Design.",
          "Interfaces, systems, and",
          "the surfaces that ship.",
        ]}
        boldLineIndex={0}
      />
      <ServiceCapabilities
        eyebrow="Product Design"
        headline={`Design that\nowns the whole\nproduct surface.`}
        subhead="I design products end to end: strategy, UX, UI, and the system that keeps it coherent as it grows. Marketing websites and landing pages still live here when they're part of the product, not a separate craft."
        capabilities={[
          "Product Strategy",
          "UX Design",
          "UI Design",
          "Design Systems",
          "Prototyping",
          "User Flows",
          "Websites",
          "Landing Pages",
          "Responsive Design",
        ]}
      />
      <ServiceImageSplit
        headline="Products designed to be used, not just launched."
        body="I map the problem, design the flows, and build the interface system the product actually ships with. Same precision that used to live in high-end websites, applied to software people live in every day."
        checkpoints={[
          "Strategy through high-fidelity UI",
          "Systems that hold up in production",
        ]}
        cta={{ label: "Start your project", href: "/start" }}
        image={{
          src: "/projects/scope-architect/command-center.png",
          alt: "Scope Architect command center product UI",
        }}
      />
      <ServiceBreakdown
        headline="Product design that carries through to production."
        subhead="Every engagement is built to ship: clear direction, usable flows, and an interface system your engineers (or I) can build against without translation loss."
        cta={{ label: "Get in touch today", href: "/start" }}
        items={[
          {
            title: "Product Strategy",
            description:
              "Positioning, problem framing, and the product direction that decides what we build first and what we leave out.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
              </svg>
            ),
          },
          {
            title: "UX Design",
            description:
              "Flows, information architecture, and interaction design so the product is obvious to use under real conditions.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M8 12s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            ),
          },
          {
            title: "UI Design",
            description:
              "High-fidelity interface design for the product itself: screens, states, and the visual language of the software.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            ),
          },
          {
            title: "Design Systems",
            description:
              "Component libraries and rules that keep the product consistent as features, screens, and people multiply.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="8" height="8" rx="1" />
                <rect x="14" y="2" width="8" height="8" rx="1" />
                <rect x="2" y="14" width="8" height="8" rx="1" />
                <rect x="14" y="14" width="8" height="8" rx="1" />
              </svg>
            ),
          },
          {
            title: "Websites & marketing surfaces",
            description:
              "The site around the product: launch pages, marketing websites, and landing pages designed as part of the same system.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            ),
          },
          {
            title: "Prototyping",
            description:
              "Clickable prototypes that pressure-test the product before engineering time gets spent on the wrong path.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            ),
          },
        ]}
      />
      <CallToAction href="/start" />
      <ServiceImageSplitReverse
        headline="One owner from first flow to shipped UI."
        body="No handoff theater. I design the product and, when you want it, I build it. That means the interface you approve is the one that goes live, without a translation layer in between."
        checkpoints={[
          "Design that is ready to build",
          "Same owner through production",
        ]}
        cta={{ label: "See my work", href: "/work" }}
        image={{
          src: "/projects/scope-architect/scope-task.png",
          alt: "Scope Architect product task view",
        }}
      />
    </main>
  );
}
