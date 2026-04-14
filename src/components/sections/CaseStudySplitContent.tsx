"use client";

import { useState, useEffect } from "react";
import styles from "./case-study-split-content.module.css";

interface CaseStudySplitContentProps {
  eyebrow?: string;
  heading: string;
  body: string;
  images?: string[];
  imageAlt?: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
}

export default function CaseStudySplitContent({
  eyebrow,
  heading,
  body,
  images = [],
  imageAlt = "",
  imagePosition = "right",
  bgColor,
}: CaseStudySplitContentProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const imageFirst = imagePosition === "left";

  return (
    <section
      className={styles.splitSection}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.splitFrame}>
        <div className={`${styles.splitGrid} ${imageFirst ? styles.imageFirst : ""}`}>
          {/* Text side */}
          <div className={styles.textSide}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.body}>{body}</p>
          </div>

          {/* Image side */}
          {images.length > 0 && (
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <img
                  src={images[current]}
                  alt={imageAlt}
                  className={styles.image}
                />
                {images.length > 1 && (
                  <div className={styles.dots}>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
