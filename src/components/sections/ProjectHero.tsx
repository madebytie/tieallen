"use client";

import { useEffect, useRef } from "react";
import styles from "./project-hero.module.css";

interface ProjectHeroProps {
  title: string;
  tags?: string[];
  image: string;
  video?: string;
}

export default function ProjectHero({
  title,
  tags = [],
  image,
  video,
}: ProjectHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.playbackRate = 0.33;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.projectHero}>
      <div className={styles.projectHeroFrame}>
        <div className={styles.projectHeroCard}>
          {video ? (
            <video
              ref={videoRef}
              src={video}
              poster={image}
              muted
              playsInline
              className={styles.projectHeroImage}
            />
          ) : (
            <img
              src={image}
              alt=""
              className={styles.projectHeroImage}
            />
          )}

          {/* Top white strip - full width */}
          <div className={styles.projectHeroStrip} aria-hidden="true" />

          {/* Title tab - hangs down on the left, the title's 2nd line lives in the overhang */}
          <div className={styles.projectHeroTab}>
            <h1 className={styles.projectHeroTitle}>{title}</h1>
          </div>

          {/* Tag pills - top-right of the strip */}
          <div className={styles.projectHeroTags}>
            {tags && tags.map((tag) => (
              <span key={tag} className={styles.projectHeroTag}>{tag}</span>
            ))}
          </div>

          {/* Accent notch - bottom-right */}
          <div className={styles.projectHeroAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
