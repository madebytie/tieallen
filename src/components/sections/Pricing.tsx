import type { ReactNode } from "react";
import styles from "./pricing.module.css";

interface PricingTier {
  exclusive?: boolean;
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: ReactNode;
}

function FoundationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 12h6" />
    </svg>
  );
}

function RetainerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M4.2 4.2l2.1 2.1" />
      <path d="M17.7 17.7l2.1 2.1" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.2 19.8l2.1-2.1" />
      <path d="M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

const tiers: PricingTier[] = [
  {
    title: "Custom Project Buildout",
    price: "$10k+",
    priceSuffix: "one-time",
    description:
      "The essential first step. We architect your brand, design standard-setting interfaces, and build a high-performance web platform from the ground up.",
    features: [
      "Standard-setting UI/UX design",
      "Premium web development",
      "Comprehensive brand identity",
      "Technical SEO & performance",
      "Dedicated project management",
    ],
    ctaLabel: "Book a discovery call",
    ctaHref: "/get-started",
    icon: <FoundationIcon />,
  },
  {
    exclusive: true,
    title: "Unlimited Design & Dev Retainer",
    price: "$5k",
    priceSuffix: "/ month",
    description:
      "Available exclusively to partners who have completed a Foundation project. An entire premium design and development department at your fingertips.",
    features: [
      "Unlimited requests (one at a time)",
      "Deliverables every few days",
      "Continuous feature development",
      "Conversion rate optimization",
      "Ongoing brand asset creation",
      "Pause or cancel anytime",
    ],
    ctaLabel: "Apply for retainer",
    ctaHref: "/get-started",
    icon: <RetainerIcon />,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className={styles.pricingFrame} id="pricing">
      <div className={styles.pricing}>
        <div className={styles.pricingHeader}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.pricingTitle}>
            <span className={styles.pricingTitleBold}>Straightforward</span>
            <span className={styles.pricingTitleAccent}>pricing.</span>
          </h2>
          <p className={styles.pricingSubtitle}>
            Start with a custom buildout. Long-term partners unlock ongoing
            design and development on an exclusive monthly retainer.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className={`${styles.card} ${tier.exclusive ? styles.cardExclusive : styles.cardFoundation}`}
            >
                <div className={styles.cardBody}>
                  {/* Notch cutout + concave ears rounding the inside corners */}
                  <div className={styles.notchCutout} aria-hidden="true" />
                  <div className={`${styles.notchEar} ${styles.notchEarBottomLeft}`} aria-hidden="true" />
                  <div className={`${styles.notchEar} ${styles.notchEarTopRight}`} aria-hidden="true" />
                  <div className={styles.iconSquare}>{tier.icon}</div>

                  {tier.exclusive && (
                    <span className={styles.exclusiveBadge}>Exclusive</span>
                  )}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{tier.title}</h3>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>{tier.price}</span>
                      {tier.priceSuffix && (
                        <span className={styles.priceSuffix}>{tier.priceSuffix}</span>
                      )}
                    </div>
                    <p className={styles.cardDescription}>{tier.description}</p>
                  </div>

                  <div className={styles.divider} aria-hidden="true" />

                  <ul className={styles.featureList}>
                    {tier.features.map((feature) => (
                      <li key={feature} className={styles.feature}>
                        <span className={styles.featureIcon}>
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={tier.ctaHref} className={styles.cta}>
                    <span>{tier.ctaLabel}</span>
                    <ArrowIcon />
                  </a>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
