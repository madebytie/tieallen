import styles from "./case-study-testimonial.module.css";

interface CaseStudyTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export default function CaseStudyTestimonial({
  quote,
  author,
  role,
  company,
  avatar,
}: CaseStudyTestimonialProps) {
  const attribution = [role, company].filter(Boolean).join(", ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.notch} aria-hidden="true">
          <div className={styles.notchCornerLeft} />
          <div className={styles.notchCornerRight} />
        </div>

        <div className={styles.body}>
          <h2 className={styles.label}>Client Feedback</h2>
          <p className={styles.quote}>{quote}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.attribution}>
            {avatar ? (
              <img src={avatar} alt={author} className={styles.avatar} />
            ) : (
              <div className={styles.avatarPlaceholder} aria-hidden="true" />
            )}
            <div className={styles.meta}>
              <span className={styles.author}>{author}</span>
              <span className={styles.role}>{attribution}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
