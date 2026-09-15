import type { Metadata } from "next";
import {
  ServicesHero,
  ServiceSection,
} from "@/components/sections/ServicesPage";
import CallToAction from "@/components/sections/CallToAction";
import StartupVelocity from "@/components/sections/StartupVelocity";
import Pricing from "@/components/sections/Pricing";
import styles from "@/components/sections/services-page.module.css";

export const metadata: Metadata = {
  title: "Services - made by tie.",
  description:
    "Product design, development, branding, and systems that ship.",
};

const SERVICES = [
  {
    headline: "Product Design",
    href: "/services/product-design",
    body: "0→1 product UX, interface systems, and the surfaces people actually use. Strategy through high-fidelity design, ready to ship.",
    capabilities: [
      "Product Strategy",
      "UX Design",
      "UI Design",
      "Design Systems",
      "Websites",
      "Prototyping",
    ],
    image: "/projects/scope-architect/command-center.png",
  },
  {
    headline: "Development",
    href: "/services/development",
    body: "Production platforms and product engineering. SaaS, internal tools, and the systems that take a designed product live.",
    capabilities: [
      "SaaS Products",
      "Custom Web Apps",
      "Full-stack Systems",
      "APIs + Integrations",
      "eCommerce Platforms",
      "Performance",
    ],
    image: "/assets/development.png",
  },
  {
    headline: "Branding",
    href: "/services/branding",
    body: "High-impact brand identities built from the ground up. Logo, color, type, and visual systems designed for consistency and market authority.",
    capabilities: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Typography",
      "Color Palettes",
      "Brand Collateral",
    ],
    image: "/projects/permissionless/pv-bcard-mockup.png",
  },
  {
    headline: "Automation",
    href: "/services/crm-automation",
    body: "Intelligent systems and smart funnels that drive revenue in the background. Automated follow-ups, lead nurturing, and pipelines designed to convert.",
    capabilities: [
      "Vizon OS Setup",
      "Sales Funnels",
      "Email Marketing",
      "Marketing Automation",
      "CRM + Pipelines",
      "Lead Nurturing",
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
      <StartupVelocity />
      <Pricing />
      <CallToAction href="/start" />
    </main>
  );
}
