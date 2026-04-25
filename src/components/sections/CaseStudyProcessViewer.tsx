"use client";

import styles from "./case-study-process-viewer.module.css";

interface ProcessSheet {
  src: string;
  label: string;
}

interface CaseStudyProcessViewerProps {
  sheets: ProcessSheet[];
  bgColor?: string;
}

export default function CaseStudyProcessViewer({
  sheets,
  bgColor,
}: CaseStudyProcessViewerProps) {
  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.frame}>
        <div className={styles.grid} style={{ "--count": sheets.length } as React.CSSProperties}>
          {sheets.map((sheet, i) => (
            <div key={i} className={styles.panel}>
              <p className={styles.label}>{sheet.label}</p>
              <div className={styles.scrollBox}>
                <img src={sheet.src} alt={sheet.label} className={styles.sheet} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
