import type { Metadata } from "next";
import { ServicesHero, ServiceSection, BrandingDetail } from "@/components/sections/ServicesPage";
import styles from "@/components/sections/services-page.module.css";

export const metadata: Metadata = {
  title: "Services — tieallen.",
  description: "Web design, development, branding, funnels, and CRM automation.",
};

const SERVICES = [
  {
    headline: "Design",
    subhead: "Pixel-perfect visuals crafted to match your brand values and convert the right people.",
    body: "I design beautiful, conversion-focused websites and brand systems that make your business impossible to forget — down to every pixel, interaction, and scroll.",
  },
  {
    headline: "Development",
    subhead: "Custom-built websites and web apps engineered for speed, scale, and longevity.",
    body: "No templates, no shortcuts. I build on modern architecture that performs today and grows with you tomorrow — from landing pages to full web applications.",
  },
  {
    headline: "Branding",
    subhead: "Full brand identities built from the ground up, covering every touchpoint your audience sees.",
    body: "Logo, colour system, typography, tone of voice — every visual element built around a clear strategy for who you are and who you're for.",
  },
  {
    headline: "Funnels",
    subhead: "High-converting sales funnels that take visitors from cold to customer.",
    body: "Strategy, copy, and design working in lockstep. I map your customer journey and build every step to reduce friction and maximise conversion.",
  },
  {
    headline: "Automation",
    subhead: "Smart systems that nurture leads and keep your pipeline full while you focus on the work.",
    body: "CRM setup, email sequences, and automation workflows that send the right message at the right time — so your business keeps moving even when you're not watching.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      {SERVICES.map((service) => (
        <div key={service.headline}>
          <div className={styles.divider} />
          <ServiceSection {...service}>
            {service.headline === "Branding" && <BrandingDetail />}
          </ServiceSection>
        </div>
      ))}
    </main>
  );
}
