import type { ReactNode } from "react";
import GooeyButton from "@/components/ui/GooeyButton";
import WordCloudReveal from "@/components/ui/WordCloudReveal";
import styles from "./service-page-hero.module.css";

type ServicePageHeroProps = {
  titleLines: ReactNode[];
  boldLineIndex?: number;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function ServicePageHero({
  titleLines,
  boldLineIndex = 0,
  primaryCta = { label: "See my work", href: "/work" },
  secondaryCta = { label: "Start your project", href: "/get-started" },
}: ServicePageHeroProps) {
  return (
    <section className={styles.servicePageHero}>
      <div className={styles.servicePageHeroFrame}>
        {/* Bottom-left concave corner of the top-left step */}
        <div className={styles.stepCornerBottomLeft} aria-hidden="true" />
        <div className={styles.servicePageHeroCard}>
          {/* Gradient background with interactive word reveal */}
          <div className={styles.servicePageHeroImage} aria-hidden="true">
            <WordCloudReveal />
          </div>

          {/* Top-centered stepped white overlay with headline */}
          <div className={styles.servicePageHeroOverlay}>
            {/* Corner notches — overlay top edge meets card top edge on both sides */}
            <div className={`${styles.overlayCorner} ${styles.overlayTopLeft}`} aria-hidden="true" />
            <div className={`${styles.overlayCorner} ${styles.overlayTopRight}`} aria-hidden="true" />

            <h1 className={styles.servicePageHeroTitle}>
              {titleLines.map((line, i) => (
                <span
                  key={i}
                  className={`${styles.titleLine} ${i === boldLineIndex ? styles.titleLineBold : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Buttons */}
            <div className={styles.servicePageHeroButtons}>
              <GooeyButton label={primaryCta.label} href={primaryCta.href} />
              <a href={secondaryCta.href} className={styles.textButton}>
                {secondaryCta.label}
                <svg className={styles.textButtonArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accent notch — bottom-right */}
          <div className={styles.servicePageHeroAccent} aria-hidden="true">
            <div className={`${styles.accentCorner} ${styles.accentTopRight}`} aria-hidden="true" />
            <div className={`${styles.accentCorner} ${styles.accentBottomLeft}`} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
