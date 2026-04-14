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

const featuredProjects: Project[] = [
  {
    title: "BCH Devcon - A Global Bitcoin Hackathon Series",
    client: "BITMAIN",
    year: "2024",
    tags: ["Web Design", "Branding", "Event", "Web Development"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
    href: "/work/bch-devcon",
  },
  {
    title: "Running 150+ National Airports & Air Traffic Control",
    client: "CI² Aviation",
    year: "2024",
    tags: ["Enterprise", "Web Development", "Branding", "Web Design"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
    href: "/work/ci2-aviation",
  },
  {
    title: "Windward Tech District, the tech hub of the south",
    client: "City of Alpharetta",
    year: "2024",
    tags: ["Branding", "Web Design", "City Project", "Web Development"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
    href: "/work/windward-tech-district",
  },
  {
    title: "Permissionless Ventures - Crypto Focused VC Fund",
    client: "BITMAIN",
    year: "2024",
    tags: ["Web Development", "Branding", "Enterprise", "Web Design"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
    href: "/work/permissionless-ventures",
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

export default function FeaturedProjects() {
  const leftCol = featuredProjects.filter((_, i) => i % 2 === 0);
  const rightCol = featuredProjects.filter((_, i) => i % 2 !== 0);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsInner}>
        {/* Section Header */}
        <div className={styles.projectsHeader}>
          <span className={styles.projectsLabel}>
            <span className={styles.projectsLabelDot} />
            Featured Work
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
        <span>{project.client}</span>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </a>
  );
}
