"use client";

import { useEffect, useRef } from "react";
import styles from "./word-cloud-reveal.module.css";

/*
 * WordCloudReveal — Flashlight word reveal effect.
 *
 * Words are laid out in clean, orderly rows filling the hero.
 * They are invisible until the cursor sweeps over, revealing
 * them with a thin, elegant outline — no rotation, no chaos.
 */

const ROWS = [
  ["Strategy", "Branding", "Web Design"],
  ["Development", "UI/UX", "SaaS", "SEO"],
  ["E-Commerce", "React", "Next.js"],
  ["Execution", "Launch", "Product", "Scale"],
  ["Identity", "Systems", "Growth", "Precision"],
  ["Creative", "Full-Stack", "Code", "Mobile"],
  ["Innovation", "Performance", "Analytics"],
  ["Conversion", "Startups", "Motion"],
  ["Vision", "Startup", "Enterprise", "Design"],
  ["Strategy", "Automation", "Architecture"],
];

export default function WordCloudReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--fx", `${x}px`);
      el.style.setProperty("--fy", `${y}px`);
      el.style.setProperty("--flashlight-on", "1");
    };

    const handleMouseLeave = () => {
      el.style.setProperty("--flashlight-on", "0");
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.wordCloud}>
      {/* The gradient background */}
      <div className={styles.gradientBg} />

      {/* Word layer — masked by the flashlight */}
      <div className={styles.wordLayer}>
        <div className={styles.wordGrid}>
          {ROWS.map((row, ri) => (
            <div key={ri} className={styles.wordRow}>
              {row.map((word, wi) => (
                <span key={wi} className={styles.word}>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
