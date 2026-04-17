import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";
import ServiceImageSplit from "@/components/sections/ServiceImageSplit";
import ServiceImageSplitReverse from "@/components/sections/ServiceImageSplitReverse";
import ProjectSlider from "@/components/sections/ProjectSlider";

export const metadata: Metadata = {
  title: "Development - tieallen.",
  description: "Custom web and platform development — bespoke web apps, ecommerce, and membership sites built for performance, scale, and growth.",
};

export default function DevelopmentPage() {
  return (
    <main>
      <ServicePageHero
        titleLines={[
          "Development.",
          "Custom software,",
          "crafted end-to-end.",
        ]}
        boldLineIndex={0}
      />
      <ServiceCapabilities
        eyebrow="Development"
        headline={`Bespoke builds,\nbuilt for how\nyou work.`}
        subhead="I build custom web apps, ecommerce stores, and membership platforms from the ground up. Boutique, hand-crafted software tailored to your business — no templates, no shortcuts, no compromises."
        capabilities={[
          "Custom Web Apps",
          "eCommerce Platforms",
          "Membership Sites",
          "SaaS Products",
          "Web Development",
          "API Development",
          "Integrations",
          "Performance",
          "Hosting + Deployment",
        ]}
      />
      <ServiceImageSplit
        headline="Software built around your business — not the other way around."
        body="Off-the-shelf tools force you to work how they work. I build custom platforms that fit your exact process, your audience, and your goals. Every line of code is written with intention — clean, fast, and built to last."
        checkpoints={[
          "Tailored to your exact requirements",
          "Built on modern, scalable foundations",
        ]}
        cta={{ label: "Start your project", href: "/get-started" }}
        image={{ src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80", alt: "Custom development work" }}
      />
      <ProjectSlider
        eyebrow="My Work"
        headline={`My favourite\nDevelopment Projects`}
        cta={{ label: "View my work", href: "/work" }}
        projects={[
          {
            title: "YULI",
            client: "YULI",
            year: "2024",
            tags: ["Development"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
            href: "/work/yuli",
          },
          {
            title: "BCH Devcon",
            client: "BCH Devcon",
            year: "2024",
            tags: ["Development"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
            href: "/work/bch-devcon",
          },
          {
            title: "Blue Divine Aesthetics",
            client: "Blue Divine Aesthetics",
            year: "2024",
            tags: ["Development"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
            href: "/work/blue-divine-aesthetics",
          },
          {
            title: "CI² Aviation",
            client: "CI² Aviation",
            year: "2024",
            tags: ["Development"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
            href: "/work/ci2-aviation",
          },
          {
            title: "Expose Hair",
            client: "Expose Hair",
            year: "2024",
            tags: ["Development"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
            href: "/work/expose-hair",
          },
        ]}
      />
      <ServiceBreakdown
        headline="Custom platforms, built to your spec."
        subhead="From web apps to ecommerce stores to membership platforms — I build bespoke software that fits your business exactly, with no bloat and no compromises."
        cta={{ label: "Get in touch today", href: "/get-started" }}
        items={[
          {
            title: "Custom Web Apps",
            description: "Tailored web applications built around your workflows — dashboards, tools, and platforms that solve real problems.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
          },
          {
            title: "eCommerce Platforms",
            description: "Custom stores designed to sell — beautiful product experiences, fast checkout, and complete control over every detail.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
          },
          {
            title: "Membership Sites",
            description: "Gated content, subscriptions, and community platforms — built to engage your audience and generate recurring revenue.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
          },
          {
            title: "SaaS Products",
            description: "End-to-end SaaS builds — from first prototype to production — with clean architecture ready to scale with your users.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a6 6 0 0 0-11.74-2A4 4 0 0 0 3 16h15a4 4 0 0 0 0-6z"/></svg>,
          },
          {
            title: "API + Integrations",
            description: "Custom APIs and third-party integrations that connect your platform to the tools your business depends on.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
          },
          {
            title: "Performance + Hosting",
            description: "Fast, secure, and reliable — from deployment pipelines to CDN setup, your platform runs smoothly under real-world load.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>,
          },
        ]}
      />
      <ServiceImageSplitReverse
        headline="Boutique builds, crafted by one hand."
        body="No offshore teams, no handoffs, no middlemen — every project is built by me personally, end-to-end. UX, UI, architecture, build — a direct line to the person shaping it at every step, so the final product reflects the care of a true craftsman."
        checkpoints={[
          "Built by me end-to-end, start to finish",
          "Direct collaboration, no middlemen",
        ]}
        cta={{ label: "See my work", href: "/work" }}
        image={{ src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80", alt: "Development craft detail" }}
      />
    </main>
  );
}
