"use client";

import styles from "./case-study-video-section.module.css";

interface CaseStudyVideoSectionProps {
  src: string;
  aspectRatio?: string;
  bgColor?: string;
}

export default function CaseStudyVideoSection({
  src,
  aspectRatio = "16/9",
  bgColor,
}: CaseStudyVideoSectionProps) {
  return (
    <section
      className={styles.videoSection}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.videoFrame}>
        <div className={styles.videoWrapper} style={{ aspectRatio }}>
          <video
          className={styles.video}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
        </div>
      </div>
    </section>
  );
}
