import type { Metadata } from "next";
import { ServicesHero, ServiceSection } from "@/components/sections/ServicesPage";
import CallToAction from "@/components/sections/CallToAction";
import styles from "@/components/sections/services-page.module.css";

export const metadata: Metadata = {
  title: "Services - made by tie.",
  description: "Web design, development, branding, funnels, and CRM automation.",
};

const SERVICES = [
  {
    headline: "Web Design",
    href: "/services/web-design",
    body: "Beautiful, conversion-focused websites designed for high-impact.",
    capabilities: [
      "Brand Identity",
      "Web Design",
      "eCommerce",
      "Landing Pages",
      "Graphic Design",
    ],
    image: "/projects/windward-tech-district/culture-screenshot.png",
  },
  {
    headline: "Development",
    href: "/services/development",
    body: "Custom-built websites and web apps built for speed, scale, and longevity - no templates, no shortcuts.",
    capabilities: [
      "Custom Web Apps",
      "eCommerce Platforms",
      "Membership Sites",
      "SaaS Products",
      "Integrations",
    ],
    image: "/assets/development.png",
  },
  {
    headline: "Branding",
    href: "/services/branding",
    body: "Full brand identities built from the ground up, covering every touchpoint your audience sees.",
    capabilities: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Brand Messaging",
    ],
    image: "/projects/permissionless/pv-bcard-mockup.png",
  },
  {
    headline: "Automation",
    href: "/services/crm-automation",
    body: "Smart systems - powered by Vizon OS - that nurture leads and keep your pipeline full on autopilot.",
    capabilities: [
      "Vizon OS Setup",
      "Sales Funnels",
      "Email Marketing",
      "Marketing Automation",
      "CRM + Pipelines",
    ],
    image: "/assets/crm-v1.webp",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <div className={styles.divider} />
      {SERVICES.map((service) => (
        <ServiceSection key={service.headline} {...service} />
      ))}
      <CallToAction href="/start" />
    </main>
  );
}
