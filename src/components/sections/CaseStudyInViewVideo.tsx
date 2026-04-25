"use client";

import { useEffect, useRef } from "react";
import styles from "./case-study-in-view-video.module.css";

interface CaseStudyInViewVideoProps {
  src: string;
  aspectRatio?: string;
  bgColor?: string;
}

export default function CaseStudyInViewVideo({
  src,
  aspectRatio = "16/9",
  bgColor,
}: CaseStudyInViewVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.33;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.frame}>
        <div className={styles.wrapper}>
          <video
            ref={videoRef}
            src={src}
            className={styles.video}
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
