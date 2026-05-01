"use client";

import { ReactNode } from "react";
import Image from "next/image";
import styles from "./lab-project.module.css";

/* ============================================
   LAB PROJECT HERO
   Left-side notch with headline, centered
   vertically against a 65% width image.
   ============================================ */

interface LabProjectHeroProps {
  label: string;
  title: string;
  description: string;
  tags?: string[];
  image: string;
}

export function LabProjectHero({
  label,
  title,
  description,
  tags = [],
  image,
}: LabProjectHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroFrame}>
        <div className={styles.heroCard}>
          {/* Image - right 65% */}
          <div className={styles.heroImageWrap}>
            <Image
              src={image}
              alt=""
              fill
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 65vw"
              priority
            />
          </div>

          {/* Left notch - headline area */}
          <div className={styles.heroNotch}>
            <span className={styles.heroLabel}>{label}</span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroDesc}>{description}</p>
            {tags.length > 0 && (
              <div className={styles.heroTags}>
                {tags.map(tag => (
                  <span key={tag} className={styles.heroTag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================
   STEPS SECTION
   ============================================ */

interface Step {
  title: string;
  command: string;
  comment?: string;
}

export function StepsSection({
  headline = "Get started",
  steps
}: {
  headline?: string;
  steps: Step[];
}) {
  return (
    <section className={styles.stepsSection}>
      <h2 className={styles.stepsHeadline}>{headline}</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step, i) => (
          <div key={i} className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>Step {i + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>
            <div className={styles.codeBlock}>
              <code>
                {step.comment && (
                  <>
                    <span className={styles.codeComment}># {step.comment}</span>
                    {"\n"}
                  </>
                )}
                <span className={styles.codePrompt}>$ </span>
                <span className={styles.codeCommand}>{step.command}</span>
              </code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ============================================
   INSTALL BLOCK (Deprecated in favor of StepsSection)
   ============================================ */


/* ============================================
   CONTENT SECTION
   ============================================ */

interface ContentSectionProps {
  headline: string;
  body: ReactNode;
  features?: string[];
}

export function ContentSection({
  headline,
  body,
  features = [],
}: ContentSectionProps) {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentGrid}>
        <div>
          <h2 className={styles.contentHeadline}>{headline}</h2>
          <p className={styles.contentBody}>{body}</p>
        </div>
        {features.length > 0 && (
          <div className={styles.featureList}>
            {features.map((f, i) => (
              <div key={f} className={styles.featureItem}>
                <span className={styles.featureNumber}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.featureLabel}>{f}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


/* ============================================
   IMAGE SPLIT SECTION
   ============================================ */

export function ImageSplitSection({
  headline,
  body,
  image,
  imageAlt = "",
  reverse = false
}: {
  headline: string;
  body: ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
}) {
  return (
    <section className={styles.imageSplitSection}>
      <div className={styles.imageSplitGrid} style={{ direction: reverse ? 'rtl' : 'ltr' }}>
        <div style={{ direction: 'ltr' }}>
          <h2 className={styles.contentHeadline}>{headline}</h2>
          <p className={styles.contentBody}>{body}</p>
        </div>
        <div className={styles.imageWrapWithNotch}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={styles.heroImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className={styles.accentNotch} />
        </div>
      </div>
    </section>
  );
}


/* ============================================
   LINKS ROW
   ============================================ */

function ExternalIcon() {
  return (
    <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface LinksRowProps {
  links: { label: string; href: string; primary?: boolean }[];
}

export function LinksRow({ links }: LinksRowProps) {
  return (
    <section className={styles.linksSection}>
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkPill} ${link.primary ? styles.linkPrimary : styles.linkSecondary}`}
        >
          {link.label}
          <ExternalIcon />
        </a>
      ))}
    </section>
  );
}
