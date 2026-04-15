import type { ReactNode } from "react";
import styles from "./services-page.module.css";

export function ServicesHero() {
  return (
    <div className={styles.hero}>
      <span className={styles.heroEyebrow}>Services</span>
      <h1 className={styles.heroTitle}>What I do.</h1>
      <p className={styles.heroBody}>
        I build brands, websites, and growth systems that work together — each
        one designed to make your business impossible to ignore.
      </p>
    </div>
  );
}

interface ServiceSectionProps {
  headline: string;
  subhead: string;
  body: string;
  children?: ReactNode;
}

export function ServiceSection({ headline, subhead, body, children }: ServiceSectionProps) {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.serviceHeadline}>{headline}</h2>
      <p className={styles.serviceSubhead}>{subhead}</p>
      <p className={styles.serviceBody}>{body}</p>
      {children}
    </section>
  );
}

export function BrandingDetail() {
  return (
    <div className={styles.brandingDetail}>
      <div className={styles.brandingSplit}>
        {/* Notched placeholder image */}
        <div className={styles.brandingImageCard}>
          <div className={styles.brandingImageClip}>
            <div className={styles.brandingImageText}>
              <span className={styles.brandingImageWord}>Epic Logo</span>
              <span className={styles.brandingImagePlus}>+</span>
              <span className={styles.brandingImageWord}>Identity System</span>
              <span className={styles.brandingImagePlus}>+</span>
              <span className={styles.brandingImageWord}>Tone + Voice</span>
            </div>
          </div>
          <div className={styles.brandingImageNotch} aria-hidden="true" />
        </div>

        {/* Launch statement */}
        <div className={styles.brandingStatement}>
          <h3 className={styles.brandingStatementTitle}>Launch with impact&nbsp;&amp; authority.</h3>
          <p className={styles.brandingStatementBody}>
            A brand isn't just a logo — it's the first impression, the gut feeling, and the reason
            someone chooses you over the next option. I build complete identity systems that give
            ambitious founders the visual authority to compete from day one and the consistency to
            scale without looking thrown together.
          </p>
          <p className={styles.brandingStatementBody}>
            Every deliverable is built around your story, your audience, and where you're going —
            not templates, not trends.
          </p>
        </div>
      </div>

      {/* Three feature cards */}
      <div className={styles.brandingCards}>
        <div className={styles.brandingCard}>
          <h4 className={styles.brandingCardTitle}>Consistency</h4>
          <p className={styles.brandingCardBody}>
            A professionally built brand looks and feels the same at every touchpoint — from your
            website to your pitch deck to your Instagram. That consistency is what builds trust
            faster than any ad spend.
          </p>
        </div>
        <div className={styles.brandingCard}>
          <h4 className={styles.brandingCardTitle}>All the essentials</h4>
          <p className={styles.brandingCardBody}>
            Logo suite, colour system, typography, brand guidelines, tone of voice — everything
            you need to show up with confidence at launch and hand off to any designer or developer
            down the line without starting from scratch.
          </p>
        </div>
        <div className={styles.brandingCard}>
          <h4 className={styles.brandingCardTitle}>Dialled in</h4>
          <p className={styles.brandingCardBody}>
            Your brand is the point of contact between you and your audience. I make sure it
            speaks to the right people, earns their attention, and moves them toward action —
            every single time they see it.
          </p>
        </div>
      </div>
    </div>
  );
}
