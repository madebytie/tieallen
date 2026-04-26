"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./case-study-youtube-section.module.css";

interface CaseStudyYouTubeSectionProps {
  videoId: string;
  aspectRatio?: string;
  bgColor?: string;
}

export default function CaseStudyYouTubeSection({
  videoId,
  aspectRatio = "16/9",
  bgColor,
}: CaseStudyYouTubeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    autoplay: inView ? "1" : "0",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videoId,
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    enablejsapi: "1",
  });

  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.frame} ref={sectionRef}>
        <div className={styles.wrapper} style={{ aspectRatio }}>
          {hasEntered && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
              className={styles.iframe}
              title="Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
          <div className={styles.overlay} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
