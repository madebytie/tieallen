"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./labs.module.css";

export function LabsHero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Labs.
      </h1>
      <p className={styles.heroBody}>
        Experimental tools, open-source libraries, and technical prototypes built to solve specific problems and push the boundaries of what's possible on the web.
      </p>
    </div>
  );
}

interface LabsProject {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  npm?: string;
  github?: string;
}

const labsProjects: LabsProject[] = [
  {
    title: "Next Inline Editor",
    description: "A powerful, lightweight inline editor for Next.js applications. Edit your content directly on the page with zero configuration.",
    tags: ["Next.js", "React", "Open Source"],
    image: "/assets/open-source-hero.png",
    href: "/labs/next-inline-editor",
    npm: "https://www.npmjs.com/package/next-inline-editor",
  },
];

export function LabsGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridInner}>
        {labsProjects.map((project, i) => (
          <LabsCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function LabsCard({ project }: { project: LabsProject }) {
  return (
    <Link href={project.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <div className={styles.cardTags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
    </Link>
  );
}
