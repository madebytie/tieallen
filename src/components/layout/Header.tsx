"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./header.module.css";

const SERVICES = [
  { href: "/services/web-design", label: "Web Design", desc: "Beautiful sites that convert" },
  { href: "/services/development", label: "Development", desc: "Custom builds, built to scale" },
  { href: "/services/branding", label: "Branding", desc: "Brands you're proud of" },
  { href: "/services/crm-automation", label: "CRM + Automation", desc: "Systems that work while you sleep" },
];

const ABOUT = [
  { href: "/about", label: "About Me", desc: "The person behind the work" },
  { href: "/love", label: "Wall of Love", desc: "Client testimonials" },
];

function ArrowIcon() {
  return (
    <svg className={styles.dropdownArrow} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="3" y1="11" x2="11" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="5,3 11,3 11,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}
    >
      <polyline points="4,6 8,10 12,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dotPhase, setDotPhase] = useState<"idle" | "rolling" | "landed">("idle");
  const [animKey, setAnimKey] = useState(0);
  const [openMenu, setOpenMenu] = useState<"services" | "about" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "about" | null>(null);

  const rollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const landTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [dotVars, setDotVars] = useState<React.CSSProperties>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!openMenu) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideServices = servicesRef.current?.contains(target);
      const insideAbout = aboutRef.current?.contains(target);
      if (!insideServices && !insideAbout) {
        setOpenMenu(null);
        document.body.classList.remove("nav-open");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openMenu]);

  const openDropdown = (menu: "services" | "about") => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(menu);
    document.body.classList.add("nav-open");
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      document.body.classList.remove("nav-open");
    }, 150);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const handleLogoHover = useCallback(() => {
    if (!periodRef.current || !ctaRef.current) return;
    if (rollTimeoutRef.current) clearTimeout(rollTimeoutRef.current);
    if (landTimeoutRef.current) clearTimeout(landTimeoutRef.current);

    const periodRect = periodRef.current.getBoundingClientRect();
    const ctaRect = ctaRef.current.getBoundingClientRect();
    const startX = periodRect.left + periodRect.width / 2 - 5;
    const startY = periodRect.top + periodRect.height / 2 - 5;
    const travelX = ctaRect.left + ctaRect.width / 2 - (periodRect.left + periodRect.width / 2);

    setDotVars({
      "--dot-x": `${startX}px`,
      "--dot-y": `${startY}px`,
      "--dot-travel": `${travelX}px`,
    } as React.CSSProperties);

    setAnimKey((prev) => prev + 1);
    setDotPhase("rolling");
    rollTimeoutRef.current = setTimeout(() => {
      setDotPhase("landed");
      landTimeoutRef.current = setTimeout(() => setDotPhase("idle"), 1000);
    }, 2500);
  }, []);

  const outerClasses = [styles.headerOuter, scrolled ? styles.headerOuterScrolled : ""].filter(Boolean).join(" ");
  const headerClasses = [styles.header, scrolled ? styles.headerScrolled : ""].filter(Boolean).join(" ");
  const periodClasses = [
    styles.logoPeriod,
    dotPhase === "rolling" ? styles.logoPeriodBounce : "",
    dotPhase === "landed" ? styles.logoPeriodLand : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <div className={outerClasses}>
        <div
          className={styles.blurBacking}
          aria-hidden="true"
          style={scrolled ? {
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          } : undefined}
        />
        {dotPhase === "rolling" && (
          <div className={styles.rollingDot} style={dotVars} key={`dot-${animKey}`} />
        )}
        <header className={headerClasses}>
          <nav className={styles.nav}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onMouseEnter={handleLogoHover}>
              <span className={styles.logoBold}>tie</span>
              <span className={periodClasses} ref={periodRef} key={`period-${animKey}`}>.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.links}>
              {/* Services dropdown */}
              <div
                className={styles.navItem}
                ref={servicesRef}
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href="/services"
                  className={[styles.link, styles.navToggle, openMenu === "services" ? styles.linkActive : ""].filter(Boolean).join(" ")}
                  aria-expanded={openMenu === "services"}
                  aria-haspopup="true"
                  onClick={() => { setOpenMenu(null); document.body.classList.remove("nav-open"); }}
                >
                  Services
                </Link>
                <div
                  className={[styles.dropdown, openMenu === "services" ? styles.dropdownOpen : ""].filter(Boolean).join(" ")}
                  role="menu"
                >
                  <ul className={styles.dropdownList}>
                    {SERVICES.map((s) => (
                      <li key={s.href} role="none">
                        <Link href={s.href} className={styles.dropdownItem} role="menuitem" onClick={() => { setOpenMenu(null); document.body.classList.remove("nav-open"); }}>
                          <span className={styles.dropdownItemInner}>
                            <span className={styles.dropdownLabel}>{s.label}</span>
                            <ArrowIcon />
                          </span>
                          <span className={styles.dropdownDesc}>{s.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.dropdownSide}>
                    <Link href="/services" className={styles.dropdownSideCard} onClick={() => { setOpenMenu(null); document.body.classList.remove("nav-open"); }}>
                      <div className={styles.dropdownSideText}>
                        <span className={styles.dropdownSideTitle}>View all Services</span>
                        <span className={styles.dropdownSideDesc}>We don&apos;t stop there, check out all the services we offer here.</span>
                      </div>
                      <div className={styles.dropdownSideImage} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/work" className={styles.link}>Work</Link>

              {/* About dropdown */}
              <div
                className={styles.navItem}
                ref={aboutRef}
                onMouseEnter={() => openDropdown("about")}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={[styles.link, styles.navToggle, openMenu === "about" ? styles.linkActive : ""].filter(Boolean).join(" ")}
                  aria-expanded={openMenu === "about"}
                  aria-haspopup="true"
                  onClick={() => openMenu === "about" ? (setOpenMenu(null), document.body.classList.remove("nav-open")) : openDropdown("about")}
                >
                  About
                </button>
                <div
                  className={[styles.dropdown, styles.dropdownNarrow, openMenu === "about" ? styles.dropdownOpen : ""].filter(Boolean).join(" ")}
                  role="menu"
                >
                  <ul className={styles.dropdownList}>
                    {ABOUT.map((a) => (
                      <li key={a.href} role="none">
                        <Link href={a.href} className={styles.dropdownItem} role="menuitem" onClick={() => { setOpenMenu(null); document.body.classList.remove("nav-open"); }}>
                          <span className={styles.dropdownItemInner}>
                            <span className={styles.dropdownLabel}>{a.label}</span>
                            <ArrowIcon />
                          </span>
                          <span className={styles.dropdownDesc}>{a.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Desktop CTA */}
            <div ref={ctaRef} className={styles.desktopCta} style={{ position: "relative", zIndex: 10 }}>
              <GooeyButton label="Hire Tie" href="/get-started" />
            </div>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile drawer */}
      <div className={[styles.mobileDrawer, mobileOpen ? styles.mobileDrawerOpen : ""].filter(Boolean).join(" ")} aria-hidden={!mobileOpen}>
        <div className={styles.mobileDrawerInner}>

          {/* Services accordion */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileSectionToggle}
              onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
              aria-expanded={mobileExpanded === "services"}
            >
              <span>Services</span>
              <ChevronIcon open={mobileExpanded === "services"} />
            </button>
            <div className={[styles.mobileAccordion, mobileExpanded === "services" ? styles.mobileAccordionOpen : ""].filter(Boolean).join(" ")}>
              <div className={styles.mobileAccordionInner}>
                <ul className={styles.dropdownList}>
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className={styles.dropdownItem} onClick={closeMobile}>
                        <span className={styles.dropdownItemInner}>
                          <span className={styles.dropdownLabel}>{s.label}</span>
                          <ArrowIcon />
                        </span>
                        <span className={styles.dropdownDesc}>{s.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className={styles.dropdownSideCard} onClick={closeMobile} style={{ marginTop: "0.5rem" }}>
                  <div className={styles.dropdownSideText}>
                    <span className={styles.dropdownSideTitle}>View all Services</span>
                    <span className={styles.dropdownSideDesc}>Check out everything we offer.</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/work" className={styles.mobileLink} onClick={closeMobile}>Work</Link>

          {/* About accordion */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileSectionToggle}
              onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
              aria-expanded={mobileExpanded === "about"}
            >
              <span>About</span>
              <ChevronIcon open={mobileExpanded === "about"} />
            </button>
            <div className={[styles.mobileAccordion, mobileExpanded === "about" ? styles.mobileAccordionOpen : ""].filter(Boolean).join(" ")}>
              <div className={styles.mobileAccordionInner}>
                <ul className={styles.dropdownList}>
                  {ABOUT.map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className={styles.dropdownItem} onClick={closeMobile}>
                        <span className={styles.dropdownItemInner}>
                          <span className={styles.dropdownLabel}>{a.label}</span>
                          <ArrowIcon />
                        </span>
                        <span className={styles.dropdownDesc}>{a.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          <div className={styles.mobileCta}>
            <GooeyButton label="Hire Tie" href="/get-started" />
          </div>
        </div>
      </div>

      <div className={styles.headerSpacer} />
    </>
  );
}
