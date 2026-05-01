import styles from "./about-hero.module.css";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  image: string;
  small?: boolean;
  objectPosition?: string;
  overlay?: boolean;
}

export default function AboutHero({
  title,
  subtitle,
  image,
  small = false,
  objectPosition = "100% 25%",
  overlay = false,
}: AboutHeroProps) {
  return (
    <section className={`${styles.aboutHero} ${small ? styles.aboutHeroSmall : ""}`}>
      <div className={styles.aboutHeroFrame}>
        <div className={styles.aboutHeroCard}>
          <img
            src={image}
            alt=""
            className={styles.aboutHeroImage}
            style={{ objectPosition }}
            data-edit-image="hero.image"
          />

          {overlay && <div className={styles.overlay} />}

          {/* Top white strip - full width */}
          <div className={styles.aboutHeroStrip} aria-hidden="true" />

          {/* Title tab - flipped to the RIGHT */}
          <div className={styles.aboutHeroTab}>
            <div className={styles.aboutHeroContent}>
              <h1 className={styles.aboutHeroTitle} data-edit="hero.title">{title}</h1>
              <p className={styles.aboutHeroSubtitle} data-edit="hero.subtitle">{subtitle}</p>
            </div>
          </div>

          {/* Accent notch - flipped to the BOTTOM-LEFT */}
          <div className={styles.aboutHeroAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
