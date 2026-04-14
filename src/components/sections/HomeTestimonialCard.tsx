"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./home-testimonial-card.module.css";

const IMAGES = [
  "/projects/bch-devcon/IMG_3254.jpg",
  "/projects/bch-devcon/IMG_3255.jpg",
  "/projects/bch-devcon/IMG_3256.jpg",
  "/projects/bch-devcon/IMG_3257.jpg",
  "/projects/bch-devcon/IMG_3258.jpg",
];

interface HomeTestimonialCardProps {
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string;
  overlay?: boolean;
}

export default function HomeTestimonialCard({
  title,
  subtitle,
  objectPosition = "center center",
  overlay = true,
}: HomeTestimonialCardProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.loveHero}>
      <div className={styles.loveHeroFrame}>
        <div className={styles.loveHeroCard}>
          <img
            src={IMAGES[current]}
            alt=""
            className={styles.loveHeroImage}
            style={{ objectPosition }}
          />

          {overlay && <div className={styles.overlay} />}

          {/* Top white strip */}
          <div className={styles.loveHeroStrip} aria-hidden="true" />

          {/* Title tab: Right-aligned */}
          <div className={styles.loveHeroTab}>
            <div className={styles.loveHeroContent}>
              <img src="/projects/bch-devcon/bch-devcon-logo_3.png" alt="BCH Devcon" className={styles.loveHeroLogo} />
              {subtitle && <p className={styles.loveHeroSubtitle}>{subtitle}</p>}
            </div>
          </div>

          {/* Accent notch: Bottom-left */}
          <div className={styles.loveHeroAccent} aria-hidden="true" />

          {/* CTA notch: Bottom-right */}
          <div className={styles.ctaNotch}>
            <GooeyButton label="Full Case Study" href="/work/bch-devcon" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
