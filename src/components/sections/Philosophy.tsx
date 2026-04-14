import styles from "./philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.philosophyInner}>
        <div className={styles.philosophyHeader}>
          <div className={styles.eyebrowWrapper}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>MY PHILOSOPHY</span>
          </div>
          <h2 className={styles.philosophyTitle}>Build to last.</h2>
        </div>
        
        <div className={styles.philosophyContent}>
          <p className={styles.philosophyText}>
            Founders come to me for the <strong>creative execution</strong> of their vision into <strong>real-life results</strong>. 
            I transform chaos into order and elevate great ideas into <strong>high impact brands</strong> and <strong>world class digital experiences</strong> driving realtime growth and ROI. 
            I build to last and believe you should too.
          </p>
        </div>
      </div>
    </section>
  );
}
