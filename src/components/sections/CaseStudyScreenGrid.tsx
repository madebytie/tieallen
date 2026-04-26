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

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Derange against prev: every image must move to a different slot than it occupies in prev
function derange(prev: Image[]): Image[] {
  for (let attempt = 0; attempt < 200; attempt++) {
    const shuffled = fisherYates(prev);
    if (shuffled.every((img, i) => img.src !== prev[i].src)) return shuffled;
  }
  // guaranteed fallback: rotate by a random offset of 1..n-1
  const offset = 1 + Math.floor(Math.random() * (prev.length - 1));
  return [...prev.slice(offset), ...prev.slice(0, offset)];
}

export default function CaseStudyScreenGrid({ images }: CaseStudyScreenGridProps) {
  const [current, setCurrent] = useState<Image[]>(images);
  const [next, setNext] = useState<Image[] | null>(null);
  const [fading, setFading] = useState(false);
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Initial client-side shuffle after hydration
  useEffect(() => {
    const initial = fisherYates(images);
    setCurrent(initial);
    currentRef.current = initial;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tick = () => {
      const nextOrder = derange(currentRef.current);
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
