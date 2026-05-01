"use client";

import { ReactNode, useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./lab-project.module.css";

/* ============================================
   STRUCTURAL LINE ELEMENTS
   Reusable layout primitives for the tech vibe
   ============================================ */

/* ============================================
   BEAKER ICON — animated, shared across labs
   ============================================ */

export function BeakerIcon() {
  const flaskPath = "M9.75 3.5 L9.75 9.818 C9.75 10.415 9.513 10.988 9.091 11.409 L4.2 16.3 C2.968 17.532 2.35 19.618 4.068 20.911 A48.309 48.309 0 0 0 12 22 A48.309 48.309 0 0 0 19.932 20.911 C21.65 19.618 21.032 17.532 19.8 16.3 L14.909 11.409 C14.487 10.988 14.25 10.415 14.25 9.818 L14.25 3.5 Z";
  return (
    <span className={styles.beaker} aria-hidden="true">
      <svg viewBox="0 0 24 30" fill="none" width="36" height="45" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="flaskClip">
            <path d="M9.75 11.5 L9.75 17.818 C9.75 18.415 9.513 18.988 9.091 19.409 L4.2 24.3 C2.968 25.532 2.35 27.618 4.068 28.911 A48.309 48.309 0 0 0 12 30 A48.309 48.309 0 0 0 19.932 28.911 C21.65 27.618 21.032 25.532 19.8 24.3 L14.909 19.409 C14.487 18.988 14.25 18.415 14.25 17.818 L14.25 11.5 Z" />
          </clipPath>
          <clipPath id="bubbleClip">
            <rect x="9.75" y="0" width="4.5" height="30" />
          </clipPath>
        </defs>
        <g transform="translate(0,8)">
          <g clipPath="url(#flaskClip)" transform="translate(0,-8)">
            <rect x="0" y="25" width="24" height="7" fill="var(--brand-orange)" />
            <path className={styles.liquidWave} d="M0 25 Q3 22.2 6 25 Q9 27.8 12 25 Q15 22.2 18 25 Q21 27.8 24 25 L24 32 L0 32 Z" fill="var(--brand-orange)" />
          </g>
          <path d={flaskPath} stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="8" y1="3.5" x2="16" y2="3.5" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" />
        </g>
        <g clipPath="url(#bubbleClip)">
          <circle className={styles.bubble1} cx="11" cy="24" r="0.9" fill="var(--brand-orange)" />
          <circle className={styles.bubble2} cx="13" cy="24" r="0.7" fill="var(--brand-orange)" />
          <circle className={styles.bubble3} cx="12" cy="24" r="1.0" fill="var(--brand-orange)" />
        </g>
      </svg>
    </span>
  );
}

/** Vertical guide lines at container edges */
export function StructuralWrap({
  children,
  fade,
}: {
  children: ReactNode;
  fade?: "top" | "bottom" | "both";
}) {
  const cls = [
    styles.structuralWrap,
    fade === "top" || fade === "both" ? styles.fadeTop : "",
    fade === "bottom" || fade === "both" ? styles.fadeBottom : "",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={cls}>{children}</div>;
}

/** Horizontal divider with corner dots */
export function SectionDivider() {
  return <div className={styles.sectionDivider} />;
}

/** Diagonal hatch transition between sections */
export function DiagonalHatch() {
  return (
    <div className={styles.diagonalHatch}>
      <div className={styles.diagonalHatchInner} />
    </div>
  );
}


/* ============================================
   ICONS
   ============================================ */

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function VercelIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
    >
      <path d="M24 22.525H0L12 .475L24 22.525Z" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="14"
      height="14"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="14"
      height="14"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}


/* ============================================
   COPY BUTTON
   Click to copy text to clipboard
   ============================================ */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={styles.copyBtn}
      aria-label="Copy to clipboard"
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}


/* ============================================
   LAB PROJECT HERO
   Centered, clean, with decorative geometry
   ============================================ */

interface LabProjectHeroProps {
  label: string;
  title: string;
  description: ReactNode;
  tags?: string[];
  command?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string; icon?: "github" };
  status?: "live" | "beta" | "wip";
}

const STATUS_LABELS = { live: "Live", beta: "Beta", wip: "In Progress" };

export function LabProjectHero({
  label,
  title,
  description,
  tags = [],
  command,
  primaryCTA,
  secondaryCTA,
  status,
}: LabProjectHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Decorative elements */}
      <div className={`${styles.heroCircle} ${styles.heroCircleTL}`} />
      <div className={`${styles.heroCircle} ${styles.heroCircleBR}`} />
      <div className={`${styles.heroCorner} ${styles.heroCornerTR}`} />
      <div className={`${styles.heroDots} ${styles.heroDotsTopLeft}`} />

      <div className={styles.heroInner}>
        {/* Row: Status pill — sits above the label, centered on its own */}
        {status && (
          <div className={`${styles.heroRow} ${styles.heroRowStatus}`}>
            <div className={`${styles.heroRowContent} ${styles.contentStatus}`}>
              <span className={`${styles.heroStatusBadge} ${styles[`heroStatus_${status}`]}`}>
                <span className={styles.heroStatusDot} />
                {STATUS_LABELS[status]}
              </span>
            </div>
          </div>
        )}

        {/* Row: Label */}
        <div className={`${styles.heroRow} ${styles.heroRowLabel}`}>
          <div className={`${styles.heroRowContent} ${styles.contentLabel}`}>
            <div className={styles.heroLabelRow}>
              <BeakerIcon />
              <span className={styles.heroLabel}>{label}</span>
            </div>
          </div>
        </div>

        {/* Row: Title */}
        <div className={`${styles.heroRow} ${styles.heroRowTitle}`}>
          <div className={`${styles.heroRowContent} ${styles.contentTitle}`}>
            <h1 className={styles.heroTitle}>{title}</h1>
          </div>
        </div>

        {/* Row: Description */}
        <div className={`${styles.heroRow} ${styles.heroRowDesc}`}>
          <div className={`${styles.heroRowContent} ${styles.contentDesc}`}>
            <p className={styles.heroDesc}>{description}</p>
          </div>
        </div>

        {/* Row: CTA Buttons & Command */}
        {(primaryCTA || secondaryCTA || command) && (
          <div className={`${styles.heroRow} ${styles.heroRowCTA}`}>
            <div className={`${styles.heroRowContent} ${styles.contentCta}`}>
              <div className={styles.heroCTAs}>
                {primaryCTA && (
                  <a
                    href={primaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.heroCTAPrimary}
                  >
                    {primaryCTA.label}
                  </a>
                )}
                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.heroCTASecondary}
                  >
                    {secondaryCTA.icon === "github" && (
                      <GitHubIcon className={styles.ctaIcon} />
                    )}
                    {secondaryCTA.label}
                  </a>
                )}
              </div>

              {command && (
                <div className={styles.heroCommandWrapper}>
                  <div className={styles.heroCommand}>
                    <span className={styles.codePrompt}>$</span>
                    <span>{command}</span>
                  </div>
                  <CopyButton text={command} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Row: Tags */}
        {tags.length > 0 && (
          <div className={`${styles.heroRow} ${styles.heroRowTags}`}>
            <div className={`${styles.heroRowContent} ${styles.contentTags}`}>
              <div className={styles.heroTags}>
                {tags.map(tag => (
                  <span key={tag} className={styles.heroTag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


/* ============================================
   FOUNDATION / "MADE BY TIE" SECTION
   ============================================ */

interface FoundationCard {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export function FoundationSection({
  headline = "Built with precision tooling.",
  badgeLabel = "made by tie",
  cards,
}: {
  headline?: string;
  badgeLabel?: string;
  cards: FoundationCard[];
}) {
  return (
    <section className={styles.foundationSection}>
      <h2 className={styles.foundationHeadline}>{headline}</h2>

      {/* Connector diagram */}
      <div className={styles.connectorDiagram}>
        <div className={`${styles.connectorLine} ${styles.connectorLineLeft}`} />
        <div className={`${styles.connectorLine} ${styles.connectorLineRight}`} />
        <div className={styles.badgePill}>{badgeLabel}</div>

        {/* Vertical lines down to cards */}
        <div className={`${styles.connectorVertical} ${styles.connectorV1}`} />
        <div className={`${styles.connectorVertical} ${styles.connectorV2}`} />
        <div className={`${styles.connectorVertical} ${styles.connectorV3}`} />

        {/* Dots at intersections */}
        <div className={`${styles.connectorDot} ${styles.connectorDotL}`} />
        <div className={`${styles.connectorDot} ${styles.connectorDotC}`} />
        <div className={`${styles.connectorDot} ${styles.connectorDotR}`} />
      </div>

      <div className={styles.featureCards}>
        {cards.map((card) => (
          <div key={card.title} className={styles.featureCard}>
            <div className={styles.featureCardIcon}>{card.icon}</div>
            <h3 className={styles.featureCardTitle}>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer">
                  {card.title} <span className={styles.featureCardArrow}>↗</span>
                </a>
              ) : (
                card.title
              )}
            </h3>
            <p className={styles.featureCardDesc}>{card.description}</p>
          </div>
        ))}
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
  steps,
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
              <CopyButton text={step.command} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ============================================
   CONTENT SECTION
   ============================================ */

interface FeatureCardItem {
  title: string;
  description: string;
}

interface CtaCardProps {
  headline: string;
  description: string;
  href: string;
}

interface ContentSectionProps {
  headline: string;
  body: ReactNode;
  features?: FeatureCardItem[];
  ctaCard?: CtaCardProps;
}

export function ContentSection({
  headline,
  body,
  features = [],
  ctaCard,
}: ContentSectionProps) {
  return (
    <section className={styles.contentSection}>
      <h2 className={styles.contentHeadline}>{headline}</h2>
      <div className={styles.contentBody}>{body}</div>
      {features.length > 0 && (
        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureNumber}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.featureCardHeading}>{f.title}</h3>
              <p className={styles.featureCardText}>{f.description}</p>
            </div>
          ))}

          {/* CTA card in the final grid slot */}
          {ctaCard && (
            <a
              href={ctaCard.href}
              className={styles.featureCtaCard}
            >
              <div className={styles.featureCtaDots} />
              <div className={styles.featureCtaContent}>
                <h3 className={styles.featureCtaHeadline}>{ctaCard.headline}</h3>
                <p className={styles.featureCtaDesc}>{ctaCard.description}</p>
              </div>
              <div className={styles.featureCtaArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          )}
        </div>
      )}
    </section>
  );
}


/* ============================================
   WORKFLOW FLOWCHART SECTION
   Visual step-by-step flow with connectors
   ============================================ */

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface WorkflowOutcome {
  title: string;
  description: string;
  icon: string;
}

export function WorkflowSection({
  headline = "How it works.",
  steps,
  outcomes,
}: {
  headline?: string;
  steps: WorkflowStep[];
  outcomes?: WorkflowOutcome[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedEls = section.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.workflowSection}>
      <h2 className={styles.workflowHeadline}>{headline}</h2>

      <div className={styles.workflowFlow} ref={sectionRef}>
        {steps.map((step, i) => (
          <div key={step.number} className={styles.workflowStepGroup}>
            {/* Connector line from previous step */}
            {i > 0 && (
              <div className={styles.workflowConnector} data-animate>
                <div className={styles.workflowConnectorLine} />
                <div className={styles.workflowConnectorArrow} />
              </div>
            )}

            <div className={styles.workflowCard} data-animate>
              <div className={styles.workflowCardBadge}>
                {step.icon && <span className={styles.workflowCardIcon}>{step.icon}</span>}
                <span className={styles.workflowCardNumber}>{step.number}</span>
              </div>
              <h3 className={styles.workflowCardTitle}>{step.title}</h3>
              <p className={styles.workflowCardDesc}>{step.description}</p>
            </div>
          </div>
        ))}

        {/* Fork into outcomes */}
        {outcomes && outcomes.length > 0 && (
          <>
            <div className={styles.workflowConnector} data-animate>
              <div className={styles.workflowConnectorLine} />
              <div className={styles.workflowConnectorArrow} />
            </div>

            <div className={styles.workflowFork} data-animate>
              <div className={styles.workflowForkLine} />
              <div className={styles.workflowOutcomes}>
                {outcomes.map((outcome) => (
                  <div key={outcome.title} className={styles.workflowOutcomeCard}>
                    <span className={styles.workflowOutcomeIcon}>
                      {outcome.icon === "github" ? <GitHubIcon className={styles.outcomeIconSvg} /> :
                       outcome.icon === "vercel" ? <VercelIcon className={styles.outcomeIconSvg} /> :
                       outcome.icon}
                    </span>
                    <h4 className={styles.workflowOutcomeTitle}>{outcome.title}</h4>
                    <p className={styles.workflowOutcomeDesc}>{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
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
  reverse = false,
}: {
  headline: string;
  body: ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
}) {
  return (
    <section className={styles.imageSplitSection}>
      <div
        className={styles.imageSplitGrid}
        style={{ direction: reverse ? "rtl" : "ltr" }}
      >
        <div style={{ direction: "ltr" }}>
          <h2 className={styles.contentHeadline}>{headline}</h2>
          <div className={styles.contentBody}>{body}</div>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}


/* ============================================
   VIDEO SECTION
   ============================================ */

export function VideoSection({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <section className={styles.videoSection}>
      {/* Row: Caption (now above) */}
      {caption && (
        <div className={styles.heroRow}>
          <div className={`${styles.heroRowContent} ${styles.videoCaptionContent}`}>
            <div className={styles.videoCaption}>{caption}</div>
          </div>
        </div>
      )}

      {/* Row: Video */}
      <div className={`${styles.heroRow} ${styles.videoBottomRow}`}>
        <div className={`${styles.heroRowContent} ${styles.videoRowContent}`}>
          <div className={styles.videoContainer}>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className={styles.videoElement}
            />
          </div>
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
    <svg
      className={styles.linkIcon}
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

export function LinksRow({
  links,
}: {
  links: { label: string; href: string; primary?: boolean; icon?: "github" }[];
}) {
  return (
    <section className={styles.linksSection}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkPill} ${link.primary ? styles.linkPrimary : styles.linkSecondary}`}
        >
          {link.icon === "github" && <GitHubIcon className={styles.ctaIcon} />}
          {link.label}
          {!link.icon && <ExternalIcon />}
        </a>
      ))}
    </section>
  );
}
