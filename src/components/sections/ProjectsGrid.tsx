"use client";

import { useRef, useState } from "react";
import styles from "./projects.module.css";

interface Project {
  title: string;
  client: string;
  year: string;
  tags: string[];
  image: string;
  imagePosition?: string;
  imageSize?: string;
  video?: string;
  videoSpeed?: number;
  href: string;
}

const projects: Project[] = [
  {
    title: "Windward Tech District",
    client: "Windward Tech District",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/windward-tech-district/culture-screenshot.png",
    video: "/projects/windward-tech-district/home-page-animated-section.mov",
    videoSpeed: 0.33,
    href: "/work/windward-tech-district",
  },
  {
    title: "BCH Devcon",
    client: "BCH Devcon",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/bch-devcon/bchdevcon-eventbrite-cover.jpg",
    href: "/work/bch-devcon",
  },
  {
    title: "CI² Aviation",
    client: "CI² Aviation",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/ci2-aviation/airplane-1.webp",
    href: "/work/ci2-aviation",
  },
  {
    title: "Permissionless Ventures",
    client: "Permissionless Ventures",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/permissionless/hero-bg.png",
    video: "/projects/permissionless/Screen-Recording-2019-09-22-at-8.09.23-PM.mov",
    href: "/work/permissionless-ventures",
  },
  {
    title: "YULI",
    client: "YULI Salon & Aesthetics",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "Web Development"],
    image: "/projects/yuli/lobby.png",
    href: "/work/yuli",
  },
  {
    title: "Jennings Brands",
    client: "Jennings Brands",
    year: "2024",
    tags: ["eCommerce", "Web Design", "Growth & Automation"],
    image: "/projects/jennings-brands/j5-volleyball.jpg",
    imagePosition: "bottom left",
    imageSize: "160%",
    href: "/work/jennings-brands",
  },
  {
    title: "Expose Hair",
    client: "Expose Hair Salon",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/expose-hair/tigi-slider-1.jpg",
    href: "/work/expose-hair",
  },
  // {
  //   title: "Servco Wholesale",
  //   client: "Servco Marketing",
  //   year: "2024",
  //   tags: ["Brand Identity", "Web Design", "Web Development"],
  //   image: "/projects/servco-wholesale/servco-logo.png",
  //   href: "/work/servco-wholesale",
  // },
  {
    title: "Stanlok Precision Manufacturing",
    client: "Stanlok Precision Manufacturing",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/stanlok-precision-manufacturing/building.jpg",
    href: "/work/stanlok-precision-manufacturing",
  },
  {
    title: "Taste of Alpharetta",
    client: "City of Alpharetta",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/taste-of-alpharetta/event-photo.jpg",
    href: "/work/taste-of-alpharetta",
  },
  {
    title: "Wire & Wood Festival",
    client: "City of Alpharetta",
    year: "2024",
    tags: ["Web Design", "Web Development"],
    image: "/projects/wire-and-wood-festival/headliner.jpg",
    href: "/work/wire-and-wood-festival",
  },
  {
    title: "Vizon OS",
    client: "Vizon OS",
    year: "2026",
    tags: ["Brand Identity", "Web Design", "SaaS Development"],
    image: "/projects/vizon-os/tasks-kanban.png",
    href: "/work/vizon-os",
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
            some projects
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
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              className={styles.projectImage}
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              ref={(el) => { if (el && project.videoSpeed) el.playbackRate = project.videoSpeed; }}
            />
          ) : (
            <div
              className={styles.projectImage}
              style={{
                backgroundColor: "#d4d4d4",
                backgroundImage: `url(${project.image})`,
                backgroundSize: project.imageSize ?? "cover",
                backgroundPosition: project.imagePosition ?? "center",
              }}
            />
          )}
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

        {/* Tags - white notch overlay with gray pills */}
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
