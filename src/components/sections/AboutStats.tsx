"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./about-stats.module.css";

interface StatProps {
  number: number;
  suffix?: string;
  label: string;
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, value]);

  return (
    <span ref={countRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsInner}>
        <div className={styles.statsGrid}>
          {/* Projects */}
          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <AnimatedNumber value={199} suffix="+" />
            </div>
            <span className={styles.statLabel}>Successful projects Delivered</span>
          </div>

          {/* Industries */}
          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <AnimatedNumber value={15} suffix="+" />
            </div>
            <span className={styles.statLabel}>Industries Served</span>
          </div>

          {/* Experience */}
          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <AnimatedNumber value={18} suffix="Y" />
            </div>
            <span className={styles.statLabel}>Oldest Client Relationship</span>
          </div>
        </div>
      </div>
    </section>
  );
}
