"use client";

import { useRef, useState } from "react";
import styles from "./projects.module.css";

interface Project {
  title: string;
  client: string;
  year: string;
  tags: string[];
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "Building a premium wellness brand from scratch",
    client: "Healing Sauna",
    year: "2025",
    tags: ["Branding", "Website", "E-Commerce"],
    image: "/projects/project-1.jpg",
    href: "/work",
  },
  {
    title: "Designing an immersive tabletop experience",
    client: "Spell Quests",
    year: "2024",
    tags: ["Product Design", "Development", "AI"],
    image: "/projects/project-2.jpg",
    href: "/work",
  },
  {
    title: "Scaling a SaaS platform for modern teams",
    client: "Vizonos",
    year: "2024",
    tags: ["Strategy", "UI/UX", "Development"],
    image: "/projects/project-3.jpg",
    href: "/work",
  },
  {
    title: "Launching a direct-to-consumer product line",
    client: "Wellness Brand",
    year: "2023",
    tags: ["Branding", "Website", "Launch"],
    image: "/projects/project-4.jpg",
    href: "/work",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ProjectsGrid() {
  const leftCol = projects.filter((_, i) => i % 2 === 0);
  const rightCol = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsInner}>
        {/* Section Header */}
        <div className={styles.projectsHeader}>
          <span className={styles.projectsLabel}>
            <span className={styles.projectsLabelDot} />
            Selected Work
          </span>
          <h2 className={styles.projectsTitle}>
            Take a look at
            <br />
            my projects
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className={styles.projectsGrid}>
          <div className={styles.projectsColLeft}>
            {leftCol.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
          <div className={styles.projectsColRight}>
            {rightCol.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current || !arrowRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    arrowRef.current.style.left = `${x}px`;
    arrowRef.current.style.top = `${y}px`;
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={project.href} className={styles.projectCard}>
      <div
        ref={wrapperRef}
        className={styles.projectImageWrapper}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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

        {/* Arrow follows mouse */}
        <div
          ref={arrowRef}
          className={`${styles.projectArrow} ${
            isHovered ? styles.projectArrowVisible : ""
          }`}
        >
          <ArrowIcon />
        </div>

        {/* Tags — white notch overlay with gray pills */}
        <div className={styles.projectTagsWrapper}>
          <div className={styles.projectTags}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.projectTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info below image */}
      <div className={styles.projectMeta}>
        <span>{project.year}</span>
        <span className={styles.projectMetaDot} />
        <span>{project.client}</span>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </a>
  );
}
