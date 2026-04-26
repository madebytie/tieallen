"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./case-study-carousel.module.css";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CaseStudyCarouselProps {
  images: CarouselImage[];
  slideWidth?: string;
  slideHeight?: number;
}

export default function CaseStudyCarousel({ images, slideWidth = "44vw", slideHeight = 560 }: CaseStudyCarouselProps) {
  const count = images.length;
  const repeated = [...images, ...images, ...images];
  const [current, setCurrent] = useState(count);
  const trackRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  const scrollToIndex = useCallback((index: number, smooth: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    if (!slide) return;
    const trackCenter = track.offsetWidth / 2;
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    track.scrollTo({ left: slideCenter - trackCenter, behavior: smooth ? "smooth" : "instant" });
  }, []);

  useEffect(() => {
    scrollToIndex(count, false);
  }, [count, scrollToIndex]);

  const goTo = useCallback((next: number) => {
    if (isJumping.current) return;
    setCurrent(next);
    scrollToIndex(next, true);

    setTimeout(() => {
      isJumping.current = true;
      if (next < count) {
        const adjusted = next + count;
        setCurrent(adjusted);
        scrollToIndex(adjusted, false);
      } else if (next >= count * 2) {
        const adjusted = next - count;
        setCurrent(adjusted);
        scrollToIndex(adjusted, false);
      }
      isJumping.current = false;
    }, 400);
  }, [count, scrollToIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.track} ref={trackRef}>
          {repeated.map((img, i) => (
            <div key={i} className={styles.slide} style={{ width: slideWidth, minWidth: slideWidth, height: slideHeight }}>
              <img src={img.src} alt={img.alt} className={styles.image} />
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={() => goTo(current - 1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button className={styles.arrow} onClick={() => goTo(current + 1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
