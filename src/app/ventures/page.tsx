import type { Metadata } from "next";
import { VenturesHero, VentureSection } from "@/components/sections/VenturesPage";
import CallToAction from "@/components/sections/CallToAction";
import styles from "@/components/sections/ventures-page.module.css";

export const metadata: Metadata = {
  title: "Ventures - made by tie.",
  description: "Major startups and platforms built by Tie Allen.",
};

const VENTURES = [
  {
    label: "Vizon OS",
    headline: "The Intelligent Workspace.",
    image: "/projects/vizon-os/tasks-kanban.png",
    body: "The operating system for modern business. Vizon OS unifies strategy, execution, and AI to provide a single source of truth for your entire operation.",
    primaryCTA: { label: "Visit Vizon OS", href: "https://vizonos.com", external: true },
    secondaryCTA: { label: "View Build Story", href: "/work/vizon-os" },
    info: [
      { label: "Status", value: "Live & Scaling" },
      { label: "Platform", value: "Business OS / CRM" },
    ],
  },
  {
    label: "LoreTorch",
    headline: "Infinite Worlds, AI-Powered.",
    image: "/assets/loretorch-hero.png",
    body: "Revolutionizing the virtual tabletop (VTT) space with Aris. We're building the future of digital engagement through rich lore and interactive AI-driven experiences.",
    primaryCTA: { label: "Launch App", href: "https://loretorch.com", external: true },
    secondaryCTA: { label: "View UX Case Study", href: "/work/loretorch" },
    info: [
      { label: "Status", value: "In Development" },
      { label: "Platform", value: "Storytelling / Narrative" },
    ],
  },
];

export default function VenturesPage() {
  return (
    <main>
      <VenturesHero />
      <div className={styles.divider} />
      {VENTURES.map((venture) => (
        <VentureSection key={venture.label} {...venture} />
      ))}
      <CallToAction 
        headline="Have a venture in mind?" 
        subheadline="Let's build the next big thing together."
        href="/start" 
      />
    </main>
  );
}
