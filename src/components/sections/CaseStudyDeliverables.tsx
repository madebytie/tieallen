import styles from "./case-study-deliverables.module.css";

interface DeliverableCategory {
  category: string;
  items: string[];
}

interface CaseStudyDeliverablesProps {
  categories: DeliverableCategory[];
  description?: string;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="var(--brand-orange)" />
      <path d="M4.5 8.5l2.5 2.5 4.5-5.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudyDeliverables({ categories, description }: CaseStudyDeliverablesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.notch} aria-hidden="true">
          <div className={styles.notchCornerLeft} />
          <div className={styles.notchCornerRight} />
        </div>
        <div className={styles.left}>
          <span className={styles.eyebrow}>• Deliverables</span>
          <h2 className={styles.heading}>What was included</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.right}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.category}>
              <h3 className={styles.categoryTitle}>{cat.category}</h3>
              <ul className={styles.list}>
                {cat.items.map((item, j) => (
                  <li key={j} className={styles.item}>
                    <span className={styles.icon}><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
