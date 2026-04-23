import GooeyButton from "@/components/ui/GooeyButton";
import WordCloudReveal from "@/components/ui/WordCloudReveal";
import styles from "./home-hero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.homeHero}>
      <div className={styles.homeHeroFrame}>
        <div className={styles.homeHeroCard}>
          {/* Gradient background with interactive word reveal */}
          <div className={styles.homeHeroImage} aria-hidden="true">
            <WordCloudReveal />
          </div>

          {/* Stepped white overlay with headline */}
          <div className={styles.homeHeroOverlay}>
            {/* Corner notches for overlay */}
            <div className={`${styles.overlayCorner} ${styles.overlayBottomLeft}`} aria-hidden="true" />
            <div className={`${styles.overlayCorner} ${styles.overlayTopRight}`} aria-hidden="true" />

            <h1 className={styles.homeHeroTitle}>
              <span className={`${styles.titleLine} ${styles.titleLineBold}`}>Concept to scale.</span>
              <span className={styles.titleLine}>Design for where you're going.</span>
              <span className={styles.titleLine}>Systems that take you there.</span>
            </h1>

            {/* Buttons */}
            <div className={styles.homeHeroButtons}>
              <GooeyButton label="See my work" href="/work" />
              <a href="/get-started" className={styles.textButton}>
                Start your project
                <svg className={styles.textButtonArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accent notch - bottom-right */}
          <div className={styles.homeHeroAccent} aria-hidden="true">
            {/* Corner notches for accent */}
            <div className={`${styles.accentCorner} ${styles.accentTopRight}`} aria-hidden="true" />
            <div className={`${styles.accentCorner} ${styles.accentBottomLeft}`} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
