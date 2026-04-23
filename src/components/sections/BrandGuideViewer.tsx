"use client";

import { useState } from "react";
import styles from "./brand-guide-viewer.module.css";

interface BrandGuideViewerProps {
  pages: string[];
  bgColor?: string;
}

export default function BrandGuideViewer({ pages, bgColor }: BrandGuideViewerProps) {
  const spreadCount = Math.ceil(pages.length / 2);
  const [spread, setSpread] = useState(0);

  const leftPage = pages[spread * 2];
  const rightPage = pages[spread * 2 + 1];

  const prev = () => setSpread((s) => Math.max(0, s - 1));
  const next = () => setSpread((s) => Math.min(spreadCount - 1, s + 1));

  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.spread}>
          <div className={styles.page}>
            <img src={leftPage} alt={`Brand guide page ${spread * 2 + 1}`} className={styles.pageImage} />
          </div>
          {rightPage && (
            <div className={styles.page}>
              <img src={rightPage} alt={`Brand guide page ${spread * 2 + 2}`} className={styles.pageImage} />
            </div>
          )}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.arrow}
            onClick={prev}
            disabled={spread === 0}
            aria-label="Previous spread"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <span className={styles.counter}>
            {spread * 2 + 1}&thinsp;—&thinsp;{Math.min(spread * 2 + 2, pages.length)} <span className={styles.counterOf}>of {pages.length}</span>
          </span>

          <button
            className={styles.arrow}
            onClick={next}
            disabled={spread === spreadCount - 1}
            aria-label="Next spread"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
