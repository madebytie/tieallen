"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./call-to-action.module.css";

const TOP_TEXT = "Start your project.";
const BOTTOM_TEXT = "Let's build greatness.";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function MarqueeRows({ orange = false }: { orange?: boolean }) {
  const repeats = 8;
  const topPhrase = Array(repeats).fill(TOP_TEXT).join("    ");
  const bottomPhrase = Array(repeats).fill(BOTTOM_TEXT).join("    ");

  return (
    <>
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackLeft}>
          <span className={orange ? styles.marqueeTextOrange : styles.marqueeText}>{topPhrase}</span>
          <span className={orange ? styles.marqueeTextOrange : styles.marqueeText} aria-hidden="true">{topPhrase}</span>
        </div>
      </div>
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackRight}>
          <span className={orange ? styles.marqueeTextOrange : styles.marqueeText}>{bottomPhrase}</span>
          <span className={orange ? styles.marqueeTextOrange : styles.marqueeText} aria-hidden="true">{bottomPhrase}</span>
        </div>
      </div>
    </>
  );
}

export default function CallToAction({ href = "/start" }: { href?: string }) {
  const sectionRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (arrowRef.current) {
      arrowRef.current.style.left = `${x}px`;
      arrowRef.current.style.top = `${y}px`;
    }

    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--mx", `${x}px`);
      spotlightRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  return (
    <section className={styles.wrapper}>
      <Link
        href={href}
        ref={sectionRef}
        className={styles.inner}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Base black layer */}
        <MarqueeRows />

        {/* Orange spotlight layer */}
        <div
          ref={spotlightRef}
          className={`${styles.spotlightLayer} ${hovered ? styles.spotlightLayerVisible : ""}`}
        >
          <MarqueeRows orange />
        </div>

        {/* Circle arrow - follows cursor */}
        <div
          ref={arrowRef}
          className={`${styles.cursorArrow} ${hovered ? styles.cursorArrowVisible : ""}`}
        >
          <ArrowIcon />
        </div>
      </Link>
    </section>
  );
}
