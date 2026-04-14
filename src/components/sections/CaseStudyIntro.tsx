import styles from "./case-study-intro.module.css";

interface CaseStudyIntroProps {
  headline: string;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  services?: string[];
}

export default function CaseStudyIntro({
  headline,
  description,
  client,
  industry,
  timeline,
  services = [],
}: CaseStudyIntroProps) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introFrame}>
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <h2 className={styles.introHeadline}>{headline}</h2>
            <p className={styles.introDescription}>{description}</p>
          </div>
          <div className={styles.introRight}>
            <div className={styles.metaGrid}>
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
            {services.length > 0 && (
              <div className={styles.servicesList}>
                {services.map((service) => (
                  <span key={service} className={styles.serviceTag}>
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
