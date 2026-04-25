"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./case-study-video-showcase.module.css";

interface CaseStudyVideoShowcaseProps {
  src: string;
  posterSrc?: string;
}

export default function CaseStudyVideoShowcase({ src, posterSrc }: CaseStudyVideoShowcaseProps) {
  const fgRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [poster, setPoster] = useState<string | undefined>(posterSrc);

  // Extract first frame as blurred bg if no posterSrc provided
  useEffect(() => {
    if (posterSrc) return;
    const video = document.createElement("video");
    video.src = src;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.currentTime = 0.1;
    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      canvas.getContext("2d")?.drawImage(video, 0, 0);
      setPoster(canvas.toDataURL("image/jpeg", 0.8));
    }, { once: true });
    video.load();
  }, [src, posterSrc]);

  // Intersection observer for fg video
  useEffect(() => {
    const video = fgRef.current;
    if (!video) return;
    video.playbackRate = 0.66;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wasVisible) {
            wasVisible = true;
            video.currentTime = 0;
            video.play().catch(() => {});
          } else if (!entry.isIntersecting) {
            wasVisible = false;
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        {poster && <img src={poster} aria-hidden className={styles.bgImg} alt="" />}
        <div className={styles.bgOverlay} />
        <div className={styles.card}>
          <video
            ref={fgRef}
            src={src}
            className={styles.fgVideo}
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
