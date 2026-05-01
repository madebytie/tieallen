"use client";

import Link from "next/link";
import styles from "./labs.module.css";
import { StructuralWrap, SectionDivider, DiagonalHatch, GitHubIcon, BeakerIcon } from "./LabProject";

/* ---- Hero ---- */

export function LabsHero() {
  return (
    <>
      <StructuralWrap fade="top">
        <section className={styles.hero}>
          {/* Decorative elements */}
          <div className={`${styles.heroCorner} ${styles.heroCornerTR}`} />
          <div className={`${styles.heroDots} ${styles.heroDotsTopRight}`} />

          <div className={styles.heroInner}>
            {/* Row: Label */}
            <div className={`${styles.heroRow} ${styles.heroRowLabel}`}>
              <div className={`${styles.heroRowContent} ${styles.contentLabel}`}>
                <span className={styles.heroLabel}>Labs</span>
              </div>
            </div>

            {/* Row: Title */}
            <div className={`${styles.heroRow} ${styles.heroRowTitle}`}>
              <div className={`${styles.heroRowContent} ${styles.contentTitle}`}>
                <h1 className={styles.heroTitle}>Tools &amp;<br />Experiments</h1>
              </div>
            </div>

            {/* Row: Description */}
            <div className={`${styles.heroRow} ${styles.heroRowDesc}`}>
              <div className={`${styles.heroRowContent} ${styles.contentDesc}`}>
                <p className={styles.heroDesc}>
                  Experimental tools, open-source libraries, and technical prototypes built to solve specific problems and push the boundaries of what&apos;s possible on the web.
                </p>
              </div>
            </div>
          </div>
        </section>
      </StructuralWrap>
      <SectionDivider />
    </>
  );
}

/* ---- Data ---- */

interface LabsProject {
  label: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  href: string;
  npm?: string;
  github?: string;
  command?: string;
  status: "live" | "beta" | "wip";
}

const labsProjects: LabsProject[] = [
  {
    label: "01",
    title: "Next Inline Editor",
    description: "Zero-config inline content editor for NEXT.js sites backed by GitHub. Edit text and images directly on your live pages.",
    longDescription: "A powerful, lightweight inline editor that lets clients update content without a CMS. Every edit commits directly to GitHub — no admin panel, no database, no rebuilds.",
    tags: ["NEXT.js", "React", "Open Source", "npm"],
    image: "/labs/next-inline-edit/edit-fields.png",
    href: "/labs/next-inline-editor",
    npm: "https://www.npmjs.com/package/next-inline-editor",
    github: "https://github.com/madebytie/next-inline-editor",
    command: "npm install next-inline-editor",
    status: "live",
  },
  {
    label: "02",
    title: "NEXT Project Map",
    description: "Next.js Project Architecture Visualizer. A CLI tool that transforms abstract codebases into interactive, high-fidelity maps.",
    longDescription: "Generate a multi-dimensional view of your project's internal anatomy: Dependency Graphs, Architecture Maps, Route Trees, and Component Topologies. Built with AST parsing for absolute precision.",
    tags: ["TypeScript", "React", "AST", "CLI"],
    image: "/labs/next-project-map/next-project-map-featured-gif.mov",
    href: "/labs/next-project-map",
    npm: "https://www.npmjs.com/package/next-project-map",
    github: "https://github.com/madebytie/next-project-map",
    status: "wip",
  },
];

/* ---- Grid ---- */

export function LabsGrid() {
  return (
    <section className={styles.gridSection}>
      {labsProjects.map((project, i) => (
        <div key={i}>
          <LabCard project={project} isLast={i === labsProjects.length - 1} />
          {i < labsProjects.length - 1 && (
            <>
              <DiagonalHatch />
              <SectionDivider />
            </>
          )}
        </div>
      ))}
    </section>
  );
}

/* ---- Card ---- */

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
    </svg>
  );
}

const STATUS_LABELS: Record<LabsProject["status"], string> = {
  live: "Live",
  beta: "Beta",
  wip: "In Progress",
};

function LabCard({ project, isLast }: { project: LabsProject; isLast?: boolean }) {
  return (
    <>
      <StructuralWrap fade={isLast ? "bottom" : undefined}>
        {/* Section padding — the card floats inside here */}
        <div className={styles.cardSection}>
          <div className={styles.card}>
            {/* Top meta row */}
            <div className={styles.cardMetaRow}>
              <div className={styles.cardMetaLeft}>
                <BeakerIcon />
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className={`${styles.statusBadge} ${styles[`status_${project.status}`]}`}>
                <span className={styles.statusDot} />
                {STATUS_LABELS[project.status]}
              </span>
            </div>

            {/* Main content area */}
            <div className={styles.cardBody}>
              <div className={styles.cardText}>
                <Link href={project.href} className={styles.cardTitleLink}>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                </Link>
                <p className={styles.cardDesc}>{project.description}</p>
                {project.longDescription && (
                  <p className={styles.cardLongDesc}>{project.longDescription}</p>
                )}

                {project.command && (
                  <div className={styles.cardCommand}>
                    <span className={styles.codePrompt}>$</span>
                    <span className={styles.codeText}>{project.command}</span>
                  </div>
                )}

                <div className={styles.cardLinks}>
                  <Link href={project.href} className={styles.cardLinkPrimary}>
                    View project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </Link>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLinkSecondary}>
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                  {project.npm && (
                    <a href={project.npm} target="_blank" rel="noopener noreferrer" className={styles.cardLinkSecondary}>
                      <NpmIcon />
                      npm
                    </a>
                  )}
                </div>
              </div>

              {/* Image column — floating notched image */}
              <div className={styles.cardImageCol}>
                {/* Notch overlay container sits outside overflow:hidden */}
                <div className={styles.cardImageFrame}>
                  <Link href={project.href} className={styles.cardImageWrap} tabIndex={-1} aria-hidden="true">
                    {project.image.endsWith('.mov') || project.image.endsWith('.mp4') ? (
                      <video 
                        src={project.image} 
                        className={styles.cardImage} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      />
                    ) : (
                      <img src={project.image} alt={project.title} className={styles.cardImage} />
                    )}
                  </Link>
                  {/* Bottom-right notch — outside overflow:hidden so it isn't clipped */}
                  <div className={styles.notchBR} aria-hidden="true">
                    <div className={`${styles.notchCorner} ${styles.notchBRTop}`} />
                    <div className={`${styles.notchCorner} ${styles.notchBRLeft}`} />
                  </div>
                  {/* Top-left notch */}
                  <div className={styles.notchTL} aria-hidden="true">
                    <div className={`${styles.notchCorner} ${styles.notchTLBottom}`} />
                    <div className={`${styles.notchCorner} ${styles.notchTLRight}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StructuralWrap>
      <SectionDivider />
    </>
  );
}
