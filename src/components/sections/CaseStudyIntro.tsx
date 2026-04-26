import styles from "./case-study-intro.module.css";

interface CaseStudyIntroProps {
  headline: string;
  description: string;
  description2?: string;
  client: string;
  industry: string;
  timeline: string;
}

export default function CaseStudyIntro({
  headline,
  description,
  description2,
  client,
  industry,
  timeline,
}: CaseStudyIntroProps) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introFrame}>
        <div className={styles.introGrid}>
          <h2 className={styles.introHeadline}>{headline}</h2>

          <div className={styles.introRight}>
            <p className={styles.introDescription}>{description}</p>
            {description2 && <p className={styles.introDescription}>{description2}</p>}

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>{industry}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>{timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
