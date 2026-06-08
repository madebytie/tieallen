"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  HIRE_POSITIONING,
  HIRE_LOCATION,
  HIRE_EXPERTISE,
  HIRE_STACK,
  HIRE_STATS,
  HIRE_PILLARS,
  HIRE_PRODUCTS,
  HIRE_CLIENT_WORK,
  HIRE_ROLES,
  HIRE_SECTIONS,
  type HireProduct,
} from "@/data/hire-portfolio";
import styles from "./hire-page.module.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const duration = 1800;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function RailNav({
  sections,
  activeSection,
}: {
  sections: typeof HIRE_SECTIONS;
  activeSection: string;
}) {
  const navRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [fixedPos, setFixedPos] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const mq = window.matchMedia("(min-width: 1101px)");

    const updatePinned = () => {
      if (!mq.matches) {
        setPinned(false);
        return;
      }

      const shouldPin = anchor.getBoundingClientRect().top <= 0;

      if (shouldPin) {
        const nav = navRef.current;
        if (nav) {
          setNavHeight(nav.offsetHeight);
          const rect = nav.getBoundingClientRect();
          setFixedPos({ left: rect.left, width: rect.width });
        }
      }

      setPinned(shouldPin);
    };

    updatePinned();
    window.addEventListener("scroll", updatePinned, { passive: true });
    window.addEventListener("resize", updatePinned);

    return () => {
      window.removeEventListener("scroll", updatePinned);
      window.removeEventListener("resize", updatePinned);
    };
  }, []);

  return (
    <>
      <div ref={anchorRef} className={styles.navAnchor} aria-hidden="true" />
      {pinned && <div className={styles.navPlaceholder} style={{ height: navHeight }} aria-hidden="true" />}
      <nav
        ref={navRef}
        className={`${styles.nav} ${pinned ? styles.navPinned : ""}`}
        style={pinned ? { left: fixedPos.left, width: fixedPos.width } : undefined}
        aria-label="Page sections"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`${styles.navLink} ${activeSection === s.id ? styles.navLinkActive : ""}`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}

function useScrollSpy(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return active;
}

function FeaturedProduct({ product }: { product: HireProduct }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={sectionRef}
      className={`${styles.featuredProduct} ${inView ? styles.featuredProductInView : ""}`}
    >
      <div
        className={`${styles.featuredBackdrop} ${inView ? styles.featuredBackdropInView : ""}`}
        aria-hidden="true"
      />
      <div className={styles.featuredInner}>
        <span className={styles.featuredLabel}>{product.label}</span>
        <h3 className={styles.featuredHeadline}>{product.headline}</h3>

        <div className={styles.featuredTop}>
          <div className={styles.featuredTopText}>
            <p className={styles.featuredBody}>{product.body}</p>
            <div className={styles.tagRow}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={product.href} className={styles.featuredImageWrap}>
            <Image
              src={product.image}
              alt={product.headline}
              fill
              className={styles.featuredImage}
              sizes="(max-width: 1100px) 100vw, 45vw"
            />
          </Link>
        </div>

        <div className={styles.outcomeGrid}>
          {product.outcomes.map((o) => (
            <div key={o.label} className={styles.outcomeCard}>
              <span className={styles.outcomeLabel}>{o.label}</span>
              <p className={styles.outcomeValue}>{o.value}</p>
            </div>
          ))}
        </div>

        <div className={styles.featuredFooter}>
          <div className={styles.ctaRow}>
            <Button label="View case study" href={product.href} size="sm" />
            {product.externalHref && (
              <Link
                href={product.externalHref}
                className={styles.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live product
                <ArrowIcon />
              </Link>
            )}
          </div>

          <div className={styles.infoList}>
            {product.info.map((item) => (
              <div key={item.label} className={styles.infoRow}>
                <span className={styles.infoNum}>{item.label}</span>
                <span className={styles.infoVal}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactProduct({ product }: { product: HireProduct }) {
  return (
    <Link href={product.href} className={styles.compactCard}>
      <div className={styles.compactImageWrap}>
        <Image
          src={product.image}
          alt={product.label}
          fill
          className={styles.compactImage}
          sizes="(max-width: 1100px) 100vw, 40vw"
        />
      </div>
      <span className={styles.compactLabel}>{product.label}</span>
      <h3 className={styles.compactHeadline}>{product.headline}</h3>
      <p className={styles.compactBody}>{product.body}</p>
      <div className={styles.compactOutcomes}>
        {product.outcomes.map((o) => (
          <div key={o.label} className={styles.compactOutcome}>
            <strong>{o.label}</strong>
            {o.value}
          </div>
        ))}
      </div>
    </Link>
  );
}

function ClientCard({
  project,
  wide,
}: {
  project: (typeof HIRE_CLIENT_WORK)[0];
  wide?: boolean;
}) {
  const content = (
    <>
      <div className={styles.clientImageWrap}>
        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            className={styles.clientImage}
            autoPlay
            muted
            loop
            playsInline
            ref={(el) => {
              if (el && project.videoSpeed) el.playbackRate = project.videoSpeed;
            }}
          />
        ) : (
          <div
            className={styles.clientImage}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>
      <div>
        <div className={styles.clientTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.clientTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.clientMeta}>{project.client}</p>
        <h3 className={styles.clientTitle}>{project.title}</h3>
        <p className={styles.clientOutcome}>{project.outcome}</p>
      </div>
    </>
  );

  return (
    <Link
      href={project.href}
      className={`${styles.clientCard} ${wide ? styles.clientCardWide : ""}`}
    >
      {content}
    </Link>
  );
}

function ExpertiseList({ compact }: { compact?: boolean }) {
  return (
    <div className={`${styles.railExpertise} ${compact ? styles.railExpertiseCompact : ""}`}>
      <span className={styles.railExpertiseLabel}>Expertise</span>
      <ul className={styles.railExpertiseList}>
        {HIRE_EXPERTISE.map((item) => (
          <li
            key={item.label}
            className={`${styles.railExpertiseItem} ${item.highlight ? styles.railExpertiseHighlight : ""}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IdentityBlock({ compact }: { compact?: boolean }) {
  const p = HIRE_POSITIONING;
  return (
    <>
      {!compact && (
        <div className={styles.photoWrap}>
          <Image src={p.photo} alt={p.name} fill className={styles.photo} sizes="360px" priority />
        </div>
      )}
      <div className={styles.railIdentity}>
        <span className={styles.statusPill}>
          <span className={styles.statusDot} aria-hidden="true" />
          {p.status}
        </span>
        <p className={`${styles.railName} ${compact ? styles.railNameCompact : ""}`}>{p.name}</p>
        <h1 className={`${styles.railTitle} ${compact ? styles.railTitleCompact : ""}`}>{p.title}</h1>
        {!compact && <p className={styles.railSubtitle}>{p.subtitle}</p>}
      </div>
    </>
  );
}

function StackSection() {
  return (
    <section id="stack" className={styles.section}>
      <span className={styles.eyebrow}>Tools & stack</span>
      <h2 className={styles.sectionTitle}>Design through deployment.</h2>
      <p className={styles.sectionBody}>
        I work across the full toolchain, from design systems to production infra and AI
        integration. Not just familiar with these tools; shipping with them daily.
      </p>
      <div className={styles.stackGrid}>
        {HIRE_STACK.map((group) => (
          <div key={group.category} className={styles.stackGroup}>
            <span className={styles.stackCategory}>{group.category}</span>
            <div className={styles.stackPills}>
              {group.items.map((item) => (
                <span key={item} className={styles.stackPill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaLinks() {
  const p = HIRE_POSITIONING;
  return (
    <div className={styles.railLinkRow}>
      <Link href={p.linkedin} className={styles.textLink} target="_blank" rel="noopener noreferrer">
        LinkedIn
        <ArrowIcon />
      </Link>
      <Link href={p.email} className={styles.textLink}>
        Email
        <ArrowIcon />
      </Link>
      <Link href={p.book} className={styles.textLink}>
        Book a call
        <ArrowIcon />
      </Link>
    </div>
  );
}

export default function HirePage() {
  const sectionIds = HIRE_SECTIONS.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds);

  const heavyProducts = HIRE_PRODUCTS.filter((p) => p.weight === "heavy");
  const compactProducts = HIRE_PRODUCTS.filter((p) => p.weight === "compact");

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {/* Identity rail — desktop */}
        <aside className={styles.rail} aria-label="Profile">
          <IdentityBlock />
          <ExpertiseList />
          <RailNav sections={HIRE_SECTIONS} activeSection={activeSection} />
          <div className={styles.railCtas}>
            <Button label="Let's talk" href={HIRE_POSITIONING.linkedin} target="_blank" size="sm" />
            <CtaLinks />
          </div>
        </aside>

        {/* Scrollable proof column */}
        <div className={styles.main}>
          {/* Mobile header */}
          <header className={styles.mobileHeader}>
            <div className={styles.mobilePhotoRow}>
              <Image
                src={HIRE_POSITIONING.photo}
                alt={HIRE_POSITIONING.name}
                width={88}
                height={110}
                className={styles.mobilePhoto}
              />
              <IdentityBlock compact />
            </div>
            <ExpertiseList compact />
            <CtaLinks />
          </header>

          {/* Overview */}
          <section id="overview" className={styles.section}>
            <span className={styles.eyebrow}>Executive brief</span>
            <h2 className={styles.sectionTitle}>{HIRE_POSITIONING.headline}</h2>
            <p className={styles.sectionBody}>{HIRE_POSITIONING.intro}</p>
            <div className={styles.locationRow}>
              {HIRE_LOCATION.map((item) => (
                <div key={item.label} className={styles.locationItem}>
                  <span className={styles.locationLabel}>{item.label}</span>
                  <span className={styles.locationValue}>{item.value}</span>
                </div>
              ))}
            </div>
            <div id="proof" className={styles.statsGrid}>
              {HIRE_STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>
                    <AnimatedStat value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <StackSection />

          {/* Roles — early signal for recruiters */}
          <section id="roles" className={styles.section}>
            <span className={styles.eyebrow}>Open to</span>
            <h2 className={styles.sectionTitle}>Roles I&apos;m targeting.</h2>
            <p className={styles.sectionBody}>
              Senior product design roles where I can own 0→1 systems, ship AI-native
              experiences, and drive outcomes, not just deliver screens.
            </p>
            <div className={styles.rolesList}>
              {HIRE_ROLES.map((role) => (
                <span key={role} className={styles.rolePill}>
                  {role}
                </span>
              ))}
            </div>
          </section>

          {/* Founder products */}
          <section id="products" className={styles.section}>
            <span className={styles.eyebrow}>Founder products</span>
            <h2 className={styles.sectionTitle}>
              Real products. Real users. My unfair advantage.
            </h2>
            <p className={styles.sectionBody}>
              Most candidates show mockups. I show live systems I conceived, designed,
              built, and launched, with AI woven into the core experience.
            </p>

            {heavyProducts.map((product) => (
              <FeaturedProduct key={product.slug} product={product} />
            ))}

            <div className={styles.compactGrid}>
              {compactProducts.map((product) => (
                <CompactProduct key={product.slug} product={product} />
              ))}
            </div>
          </section>

          {/* Client work */}
          <section id="client-work" className={styles.section}>
            <span className={styles.eyebrow}>Selected client work</span>
            <h2 className={styles.sectionTitle}>
              0→1 launches at startup speed.
            </h2>
            <p className={styles.sectionBody}>
              Client work reframed as business outcomes under extreme timelines
              for brands that needed to move.
            </p>
            <div className={styles.clientGrid}>
              <ClientCard project={HIRE_CLIENT_WORK[0]} wide />
              <ClientCard project={HIRE_CLIENT_WORK[1]} />
              <ClientCard project={HIRE_CLIENT_WORK[2]} />
            </div>
          </section>

          {/* Approach */}
          <section id="approach" className={styles.section}>
            <span className={styles.eyebrow}>How I think</span>
            <h2 className={styles.sectionTitle}>
              Product leadership, not task execution.
            </h2>
            <div className={styles.pillarGrid}>
              {HIRE_PILLARS.map((pillar) => (
                <div key={pillar.title} className={styles.pillarCard}>
                  <span className={styles.pillarValue}>{pillar.value}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className={styles.section}>
            <div className={styles.contactBlock}>
              <h3 className={styles.contactTitle}>
                Let&apos;s build something that moves the needle.
              </h3>
              <p className={styles.contactBody}>
                I&apos;d love to walk you through how I think about product, or
                review yours and share one improvement I&apos;d prioritize on day
                one.
              </p>
              <div className={styles.contactCtas}>
                <Button
                  label="Connect on LinkedIn"
                  href={HIRE_POSITIONING.linkedin}
                  target="_blank"
                  variant="light"
                />
                <Button label="Book a conversation" href={HIRE_POSITIONING.book} variant="light" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
