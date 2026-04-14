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
    title: "Custom Project",
    price: "$10k+",
    priceSuffix: "one-time",
    description:
      "I will build exactly what you want and beyond. There pretty much no limits. Brand design, UI/UX, high-end web design and custom platforms from the ground up.",
    features: [
      "Full project lifecycle strategy",
      "High-end Design & Branding",
      "Advanced UI & UX",
      "Custom full-stack development",
      "Technical SEO & optimization",
      "CRM, Funnels & Automation",
    ],
    ctaLabel: "Book a discovery call",
    ctaHref: "/get-started",
    icon: <FoundationIcon />,
  },
  {
    exclusive: true,
    title: "Unlimited Retainer",
    price: "$5k+",
    priceSuffix: "/ month",
    description:
      "Available exclusively to partners who have completed a Foundation project. Like having an entire premium design and development department at your fingertips.",
    features: [
      "One request at a time",
      "Deliverable every 2-3 days",
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
        {/* Top Notch UI */}
        <div className={styles.topNotch} aria-hidden="true" />

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

                  <div className={styles.titleArea}>
                    <h3 className={styles.cardTitle}>
                      {tier.title.split(' ').map((word, i) => (
                        <span key={i}>{word}</span>
                      ))}
                    </h3>
                  </div>

                  <div className={styles.cardHeader}>
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
