"use client";

import { useRef } from "react";
import styles from "./case-study-slideshow.module.css";

interface SlideshowImage {
  src: string;
  alt: string;
}

interface CaseStudySlideshowProps {
  images: SlideshowImage[];
  title?: string;
  bgColor?: string;
}

export default function CaseStudySlideshow({ images, title, bgColor }: CaseStudySlideshowProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.slide}`) as HTMLElement;
    if (!card) return;
    const amount = card.offsetWidth + 12;
    track.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            {title && <p className={styles.title}>{title}</p>}
            <p className={styles.subtitle}>- rough draft concepts and ideas</p>
          </div>
          <div className={styles.controls}>
            <button className={styles.arrow} onClick={() => scroll("prev")} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button className={styles.arrow} onClick={() => scroll("next")} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.track} ref={trackRef}>
          {images.map((img, i) => (
            <div key={i} className={styles.slide}>
              <img src={img.src} alt={img.alt} className={styles.image} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
