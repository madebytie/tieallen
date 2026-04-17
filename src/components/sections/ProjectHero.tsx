import styles from "./project-hero.module.css";

interface ProjectHeroProps {
  title: string;
  tags?: string[];
  image: string;
}

export default function ProjectHero({
  title,
  tags = [],
  image,
}: ProjectHeroProps) {
  return (
    <section className={styles.projectHero}>
      <div className={styles.projectHeroFrame}>
        <div className={styles.projectHeroCard}>
          <img
            src={image}
            alt=""
            className={styles.projectHeroImage}
          />

          {/* Top white strip - full width */}
          <div className={styles.projectHeroStrip} aria-hidden="true" />

          {/* Title tab - hangs down on the left, the title's 2nd line lives in the overhang */}
          <div className={styles.projectHeroTab}>
            <h1 className={styles.projectHeroTitle}>{title}</h1>
          </div>

          {/* Tag pills - top-right of the strip */}
          <div className={styles.projectHeroTags}>
            {tags && tags.map((tag) => (
              <span key={tag} className={styles.projectHeroTag}>{tag}</span>
            ))}
          </div>

          {/* Accent notch - bottom-right */}
          <div className={styles.projectHeroAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
