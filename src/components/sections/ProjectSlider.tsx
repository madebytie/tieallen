"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./projects.module.css";
import sliderStyles from "./project-slider.module.css";

interface Project {
  title: string;
  client: string;
  year: string;
  tags: string[];
  image: string;
  href: string;
}

type ProjectSliderProps = {
  eyebrow?: string;
  headline: string;
  projects: Project[];
  cta?: { label: string; href: string };
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ProjectCard({ project, hideMeta }: { project: Project; hideMeta?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current || !arrowRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    arrowRef.current.style.left = `${e.clientX - rect.left}px`;
    arrowRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <a href={project.href} className={`${styles.projectCard} ${sliderStyles.card}`}>
      <div
        ref={wrapperRef}
        className={styles.projectImageWrapper}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.projectImageClip}>
          <div
            className={styles.projectImage}
            style={{
              backgroundColor: "#d4d4d4",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div ref={arrowRef} className={`${styles.projectArrow} ${isHovered ? styles.projectArrowVisible : ""}`}>
          <ArrowIcon />
        </div>

        <div className={styles.projectTagsWrapper}>
          <div className={styles.projectTags}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.projectTag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {!hideMeta && (
        <div className={styles.projectMeta}>
          <span>{project.year}</span>
          <span className={styles.projectMetaDot} />
          <span>{project.client}</span>
        </div>
      )}
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </a>
  );
}

export default function ProjectSlider({ eyebrow, headline, projects, cta }: ProjectSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.setPointerCapture(e.pointerId);
    setDragging(true);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    setDragging(false);
  }, []);

  // Arrow navigation — scroll by one card width
  const scroll = useCallback((dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>(`.${sliderStyles.card}`);
    const cardWidth = card ? card.offsetWidth + 24 : 400; // 24 = gap
    trackRef.current.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  }, []);

  return (
    <section className={sliderStyles.section}>
      <div className={sliderStyles.inner}>
        {/* Header */}
        <div className={sliderStyles.header}>
          <div className={sliderStyles.headerLeft}>
            {eyebrow && (
              <span className={sliderStyles.eyebrow}>
                <span className={sliderStyles.eyebrowDot} />
                {eyebrow}
              </span>
            )}
            <h2 className={sliderStyles.headline}>{headline}</h2>
          </div>
          {cta && (
            <a href={cta.href} className={sliderStyles.ctaLink}>
              {cta.label}
              <svg className={sliderStyles.ctaArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className={`${sliderStyles.track} ${dragging ? sliderStyles.dragging : ""}`}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} hideMeta />
          ))}
        </div>

        {/* Arrows */}
        <div className={sliderStyles.arrows}>
          <button
            className={sliderStyles.arrow}
            onClick={() => scroll("prev")}
            aria-label="Previous projects"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            className={sliderStyles.arrow}
            onClick={() => scroll("next")}
            aria-label="Next projects"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
