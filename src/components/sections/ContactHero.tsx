import styles from "./contact-hero.module.css";

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Contact
          </span>
          <h1 className={styles.heroTitle}>
            Let&apos;s build something
            <br />
            exceptional
            <span className={styles.accentCircle}>
              <ArrowDownIcon />
            </span>
          </h1>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.photoCard}>
            <img
              src="/assets/Gemini_Generated_Image_x80i5lx80i5lx80i.jpeg"
              alt="Tie Allen"
              className={styles.photoImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
