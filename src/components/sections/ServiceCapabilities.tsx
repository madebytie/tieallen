import styles from "./service-capabilities.module.css";

type ServiceCapabilitiesProps = {
  eyebrow: string;
  headline: string;
  subhead?: string;
  capabilities: string[];
};

export default function ServiceCapabilities({
  eyebrow,
  headline,
  subhead,
  capabilities,
}: ServiceCapabilitiesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — editorial headline */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.headline}>{headline}</h2>
          {subhead && <p className={styles.subhead}>{subhead}</p>}
        </div>

        {/* Right — capabilities grid */}
        <div className={styles.right}>
          <p className={styles.listLabel}>Capabilities</p>
          <div className={styles.grid}>
            {capabilities.map((item) => (
              <div key={item} className={styles.gridItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
