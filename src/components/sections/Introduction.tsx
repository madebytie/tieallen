"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./introduction.module.css";

function StarIcon({ starRef }: { starRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={starRef} className={styles.starIcon}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
        <path d="M 11.8 2 A 0.2 0.2 0 0 1 12.2 2 L 12.2 8.8 A 3 3 0 0 0 15.2 11.8 L 22 11.8 A 0.2 0.2 0 0 1 22 12.2 L 15.2 12.2 A 3 3 0 0 0 12.2 15.2 L 12.2 22 A 0.2 0.2 0 0 1 11.8 22 L 11.8 15.2 A 3 3 0 0 0 8.8 12.2 L 2 12.2 A 0.2 0.2 0 0 1 2 11.8 L 8.8 11.8 A 3 3 0 0 0 11.8 8.8 Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

export default function Introduction() {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (starRef.current) {
        // Grow star based on scroll position (start at scale 1, grow up to e.g. scale 1.5)
        // Adjust the multiplier to control the growth rate.
        const scale = 1 + (window.scrollY * 0.001); 
        starRef.current.style.transform = `scale(${Math.min(scale, 2.5)})`; // Cap at 2.5x to prevent it getting too big
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.introFrame} id="about">
      <div className={styles.introInner}>
        {/* Eyebrow */}
        <div className={styles.eyebrowWrapper}>
          <div className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>ABOUT ME</span>
          <div className={styles.eyebrowLine} />
        </div>

        {/* Large Statement */}
        <h2 className={styles.statement}>
          <span className={styles.statementBold}>I design and build premium brands, websites, applications and marketing funnels from end-to-end. </span>
          <span className={styles.statementMuted}>With over 18 years experience, I bring visions to life for founders and teams from ambitious startups, enterprise and moonshots.</span>
        </h2>

        {/* Separator Icon */}
        <div className={styles.starWrapper}>
          <StarIcon starRef={starRef} />
        </div>

        {/* Description Text */}
        <p className={styles.description}>
          As a designer, developer and marketer combined I bridge the gap between creative vision and technical execution. I combine high-end brand identity with custom architecture to launch applications that perform as beautifully as they look.
        </p>

        {/* Call to Action */}
        <div className={styles.ctaWrapper}>
          <Link href="#projects" className={styles.outlineButton}>
            SEE MY WORK
          </Link>
        </div>
      </div>
    </section>
  );
}
