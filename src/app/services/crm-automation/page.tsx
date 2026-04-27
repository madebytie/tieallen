import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import ProjectSlider from "@/components/sections/ProjectSlider";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "CRM + Automation - made by tie.",
  description: "Smart CRM and marketing automation systems - powered by Vizon OS - that nurture leads, close deals, and run your business on autopilot.",
};

export default function CrmAutomationPage() {
  return (
    <main>
      <ServicePageHero
        titleLines={[
          "CRM + Automation.",
          "Turn your brand into",
          "a sales machine.",
        ]}
        boldLineIndex={0}
      />
      <ServiceCapabilities
        eyebrow="CRM + Automation"
        headline={`Systems that\nsell while\nyou sleep.`}
        subhead="Your brand and website are built - now they need to work for you. I set you up on Vizon OS, my custom Strategy + CRM platform, and build the backend systems, automations, and sales funnels that turn traffic into revenue on autopilot."
        capabilities={[
          "Vizon OS Setup",
          "Sales Funnels",
          "Email Marketing",
          "Marketing Automation",
          "CRM + Pipelines",
          "Lead Nurturing",
          "Customer Journeys",
          "Integrations",
          "Reporting + Analytics",
        ]}
      />
      <ServiceImageSplit
        headline="Your brand is live. Now make it work for you."
        body="A great website and brand only get you so far. I plug you into Vizon OS and build the systems behind the scenes - automated funnels, lead capture, email sequences, and sales pipelines - so every visitor is nurtured, tracked, and moved toward a sale without you lifting a finger."
        checkpoints={[
          "End-to-end systems built on Vizon OS",
          "Runs on autopilot so you can focus on growth",
        ]}
        cta={{ label: "Start your project", href: "/start" }}
        image={{ src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80", alt: "CRM and automation dashboards" }}
      />
      <ServiceBreakdown
        headline="Smart systems that turn traffic into revenue."
        subhead="Every setup is built around your business - from CRM and pipelines to automated funnels and email sequences that move leads forward without manual work."
        cta={{ label: "Get in touch today", href: "/start" }}
        items={[
          {
            title: "Vizon OS Setup",
            description: "I get you onboarded and fully configured on Vizon OS - my custom Strategy + CRM platform built to run your business.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
          },
          {
            title: "Sales Funnels",
            description: "End-to-end funnels that track and optimise every step of the customer journey - from first click to closed deal.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 9v7l-4-2v-5z"/></svg>,
          },
          {
            title: "Email Marketing",
            description: "Personalised emails and automated sequences that walk customers through your funnel, drive upsells, and keep them coming back.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
          },
          {
            title: "Marketing Automation",
            description: "Trigger-based campaigns that react to customer actions across your site and funnel - the right message at the right time, every time.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
          },
          {
            title: "CRM + Pipelines",
            description: "All your customer data, deals, and touchpoints organised inside Vizon OS - sales automation that keeps deals moving forward.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
          },
          {
            title: "Integrations",
            description: "Connect your stack - payments, calendars, forms, and more - so every tool talks to Vizon OS and your data stays in sync.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
          },
        ]}
      />
      {/* <ProjectSlider
        eyebrow="My Work"
        headline={`My favourite\nCRM + Automation Projects`}
        cta={{ label: "View my work", href: "/work" }}
        projects={[
          {
            title: "YULI",
            client: "YULI",
            year: "2024",
            tags: ["CRM + Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
            href: "/work/yuli",
          },
          {
            title: "BCH Devcon",
            client: "BCH Devcon",
            year: "2024",
            tags: ["CRM + Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
            href: "/work/bch-devcon",
          },
          {
            title: "Blue Divine Aesthetics",
            client: "Blue Divine Aesthetics",
            year: "2024",
            tags: ["CRM + Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
            href: "/work/blue-divine-aesthetics",
          },
          {
            title: "CI² Aviation",
            client: "CI² Aviation",
            year: "2024",
            tags: ["CRM + Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
            href: "/work/ci2-aviation",
          },
          {
            title: "Expose Hair",
            client: "Expose Hair",
            year: "2024",
            tags: ["CRM + Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
            href: "/work/expose-hair",
          },
        ]}
      /> */}
      <CallToAction href="/start" />
      <ServiceImageSplitReverse
        headline="Built to adapt, built to scale."
        body="The systems I build aren't set-and-forget - they learn from your customers and get smarter over time. As your business grows, Vizon OS and the automations around it scale with you, so you're never the bottleneck."
        checkpoints={[
          "Adapts as your audience grows",
          "Scales without adding complexity",
        ]}
        cta={{ label: "See my work", href: "/work" }}
        image={{ src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80", alt: "Automation workflow detail" }}
      />
    </main>
  );
}
