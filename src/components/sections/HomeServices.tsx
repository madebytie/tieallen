"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./home-services.module.css";

interface Service {
  number: string;
  label: string;
  description: string;
  href: string;
  image: string;
  imageHref: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    label: "Web Design",
    description: "We design beautiful, conversion-focused websites that make your brand impossible to forget — crafted down to every pixel, interaction, and scroll.",
    href: "/services/web-design",
    image: "/projects/bch-devcon/bch-desktop-1024x663.png",
    imageHref: "/work/bch-devcon",
  },
  {
    number: "02",
    label: "Development",
    description: "Custom-built websites and web apps engineered for speed, scale, and longevity — no templates, no shortcuts, just clean code that performs.",
    href: "/services/development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    imageHref: "/work/servco-wholesale",
  },
  {
    number: "03",
    label: "Branding",
    description: "Full brand identities built from the ground up — logo, colour system, typography, and every touchpoint your audience will ever see.",
    href: "/services/branding",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80",
    imageHref: "/work/expose-hair",
  },
  {
    number: "04",
    label: "CRM + Automation",
    description: "Smart backend systems that nurture leads, send the right message at the right time, and keep your pipeline full while you focus on the work.",
    href: "/services/crm-automation",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    imageHref: "/work/windward-tech-district",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ServiceRow({ service, isActive, onHover }: {
  service: Service;
  isActive: boolean;
  onHover: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current || !arrowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    arrowRef.current.style.left = `${e.clientX - rect.left}px`;
    arrowRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      ref={rowRef}
      className={`${styles.serviceRow} ${isActive ? styles.serviceRowActive : ""}`}
      onMouseEnter={() => { onHover(); setHovered(true); }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor arrow */}
      <div
        ref={arrowRef}
        className={`${styles.rowArrow} ${hovered ? styles.rowArrowVisible : ""}`}
        aria-hidden="true"
      >
        <ArrowIcon />
      </div>

      {/* Single row: number | title+description stacked | image */}
      <div className={styles.rowInner}>
        <span className={styles.serviceNumber}>{service.number}</span>

        {/* Title and description stacked — NO gap between them */}
        <Link href={service.href} className={styles.serviceContent}>
          <span className={styles.serviceName}>{service.label}</span>
          <span className={styles.serviceDescription}>{service.description}</span>
        </Link>

        {/* Notched image card — fades in when active */}
        <div className={styles.serviceImageCard}>
          {/* Actual image — clipped separately */}
          <div className={styles.serviceImageClip}>
            <img src={service.image} alt={service.label} className={styles.serviceImageImg} />
          </div>
          {/* Top-left accent notch */}
          <div className={styles.imageAccent} aria-hidden="true" />
          {/* Bottom-right CTA notch */}
          <div className={styles.imageCtaNotch}>
            <GooeyButton label="See Work" href={service.imageHref} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesFrame}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderLeft}>
            <span className={styles.servicesEyebrow}>Services</span>
            <h2 className={styles.servicesTitle}>my expertise</h2>
          </div>
          <p className={styles.servicesDesc}>
            With expertise in creating inspiring designs and effective digital
            strategies, we help brands find an authentic and memorable identity.
          </p>
        </div>

        <div
          className={styles.servicesList}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {SERVICES.map((service, i) => (
            <ServiceRow
              key={service.label}
              service={service}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
