"use client";

import styles from "./love-hero.module.css";

interface LoveHeroProps {
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string;
  overlay?: boolean;
}

export default function LoveHero({
  title,
  subtitle,
  image,
  objectPosition = "center center",
  overlay = true,
}: LoveHeroProps) {
  return (
    <section className={styles.loveHero}>
      <div className={styles.loveHeroFrame}>
        <div className={styles.loveHeroCard}>
          <img
            src={image}
            alt=""
            className={styles.loveHeroImage}
            style={{ objectPosition }}
          />

          {overlay && <div className={styles.overlay} />}

          {/* Top white strip + title tab — hidden when no title */}
          {title && (
            <>
              <div className={styles.loveHeroStrip} aria-hidden="true" />
              <div className={styles.loveHeroTab}>
                <div className={styles.loveHeroContent}>
                  <h1 className={styles.loveHeroTitle}>{title}</h1>
                  {subtitle && <p className={styles.loveHeroSubtitle}>{subtitle}</p>}
                </div>
              </div>
            </>
          )}

          {/* Accent notch: Bottom-left */}
          {title && <div className={styles.loveHeroAccent} aria-hidden="true" />}
        </div>
      </div>
    </section>
  );
}
