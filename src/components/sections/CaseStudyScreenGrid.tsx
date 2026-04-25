"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./case-study-screen-grid.module.css";

interface Image {
  src: string;
  alt: string;
}

interface CaseStudyScreenGridProps {
  images: Image[];
}

const INTERVAL = 2500;
const FADE = 600;

// Generate a derangement — a permutation where nothing stays in its original index
function derange(arr: Image[], prev: Image[]): Image[] {
  const n = arr.length;
  // map src -> current index in prev
  const prevIdx = new Map(prev.map((img, i) => [img.src, i]));

  for (let attempt = 0; attempt < 100; attempt++) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    const isDerangement = shuffled.every((img, i) => prevIdx.get(img.src) !== i);
    if (isDerangement) return shuffled;
  }
  // fallback: rotate by 1
  return [...arr.slice(1), arr[0]];
}

export default function CaseStudyScreenGrid({ images }: CaseStudyScreenGridProps) {
  const [current, setCurrent] = useState<Image[]>(() => [...images].sort(() => Math.random() - 0.5));
  const [next, setNext] = useState<Image[] | null>(null);
  const [fading, setFading] = useState(false);
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const tick = () => {
      const nextOrder = derange(images, currentRef.current);
      setNext(nextOrder);
      setFading(true);

      setTimeout(() => {
        setCurrent(nextOrder);
        currentRef.current = nextOrder;
        setNext(null);
        setFading(false);
      }, FADE);
    };

    const interval = setInterval(tick, INTERVAL);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <div className={styles.grid}>
          {current.map((img, i) => (
            <div key={i} className={styles.cell}>
              {next && (
                <img
                  src={next[i].src}
                  alt={next[i].alt}
                  className={styles.image}
                  style={{ opacity: 1, zIndex: 1 }}
                />
              )}
              <img
                src={img.src}
                alt={img.alt}
                className={styles.image}
                style={{
                  opacity: fading ? 0 : 1,
                  transition: fading ? `opacity ${FADE}ms ease` : "none",
                  zIndex: 2,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
