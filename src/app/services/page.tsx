import type { Metadata } from "next";
import { ServicesHero, ServiceSection } from "@/components/sections/ServicesPage";
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80",
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
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=80",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
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
    </main>
  );
}
