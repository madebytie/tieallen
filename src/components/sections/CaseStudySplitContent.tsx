"use client";

import { useState, useEffect } from "react";
import styles from "./case-study-split-content.module.css";

interface CaseStudySplitContentProps {
  eyebrow?: string;
  heading: string;
  body: string;
  body2?: string;
  images?: string[];
  imageAlt?: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  layout?: "default" | "text-split";
}

export default function CaseStudySplitContent({
  eyebrow,
  heading,
  body,
  body2,
  images = [],
  imageAlt = "",
  imagePosition = "right",
  bgColor,
  layout = "default",
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

  if (layout === "text-split") {
    return (
      <section
        className={styles.splitSection}
        style={bgColor ? { backgroundColor: bgColor } : undefined}
      >
        <div className={styles.splitFrame}>
          <div className={styles.textSplitGrid}>
            <div className={styles.textSplitLeft}>
              {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
              <h2 className={styles.heading}>{heading}</h2>
            </div>
            <div className={styles.textSplitRight}>
              <p className={styles.body}>{body}</p>
              {body2 && <p className={styles.body}>{body2}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.splitSection}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.splitFrame}>
        <div className={`${styles.splitGrid} ${imageFirst ? styles.imageFirst : ""} ${images.length === 0 ? styles.singleColumn : ""}`}>
          {/* Text side */}
          <div className={styles.textSide}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.body}>{body}</p>
            {body2 && <p className={styles.body}>{body2}</p>}
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
