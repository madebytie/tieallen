import styles from "./about-hero.module.css";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function AboutHero({
  title,
  subtitle,
  image,
}: AboutHeroProps) {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.aboutHeroFrame}>
        <div className={styles.aboutHeroCard}>
          <img
            src={image}
            alt=""
            className={styles.aboutHeroImage}
          />

          {/* Top white strip — full width */}
          <div className={styles.aboutHeroStrip} aria-hidden="true" />

          {/* Title tab — flipped to the RIGHT */}
          <div className={styles.aboutHeroTab}>
            <div className={styles.aboutHeroContent}>
              <h1 className={styles.aboutHeroTitle}>{title}</h1>
              <p className={styles.aboutHeroSubtitle}>{subtitle}</p>
            </div>
          </div>

          {/* Accent notch — flipped to the BOTTOM-LEFT */}
          <div className={styles.aboutHeroAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
