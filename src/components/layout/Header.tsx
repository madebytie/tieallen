"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dotPhase, setDotPhase] = useState<"idle" | "rolling" | "landed">(
    "idle"
  );
  const [animKey, setAnimKey] = useState(0);
  const rollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const landTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const periodRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [dotVars, setDotVars] = useState<React.CSSProperties>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoHover = useCallback(() => {
    if (!periodRef.current || !ctaRef.current) return;

    // Clear any existing timeouts to restart the animation
    if (rollTimeoutRef.current) clearTimeout(rollTimeoutRef.current);
    if (landTimeoutRef.current) clearTimeout(landTimeoutRef.current);

    const periodRect = periodRef.current.getBoundingClientRect();
    const ctaRect = ctaRef.current.getBoundingClientRect();

    const startX = periodRect.left + periodRect.width / 2 - 5; // center minus half dot size
    const startY = periodRect.top + periodRect.height / 2 - 5;
    const travelX =
      ctaRect.left + ctaRect.width / 2 - (periodRect.left + periodRect.width / 2);

    setDotVars({
      "--dot-x": `${startX}px`,
      "--dot-y": `${startY}px`,
      "--dot-travel": `${travelX}px`,
    } as React.CSSProperties);

    // Increment key to force React to remount elements and restart CSS animations
    setAnimKey((prev) => prev + 1);
    
    // Phase 1: bounce the period + start rolling dot
    setDotPhase("rolling");

    // Phase 2: dot lands → period bounces again
    rollTimeoutRef.current = setTimeout(() => {
      setDotPhase("landed");
      // Phase 3: back to idle
      landTimeoutRef.current = setTimeout(() => {
        setDotPhase("idle");
      }, 1000);
    }, 2500);
  }, []);

  const outerClasses = [
    styles.headerOuter,
    scrolled ? styles.headerOuterScrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerClasses = [
    styles.header,
    scrolled ? styles.headerScrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

  const periodClasses = [
    styles.logoPeriod,
    dotPhase === "rolling" ? styles.logoPeriodBounce : "",
    dotPhase === "landed" ? styles.logoPeriodLand : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={outerClasses}>
        <header className={headerClasses}>
          <nav className={styles.nav}>
            {/* Logo */}
            <Link
              href="/"
              className={styles.logo}
              onMouseEnter={handleLogoHover}
            >
              <span className={styles.logoThin}>tie</span>
              <span className={styles.logoBold}>allen</span>
              <span className={periodClasses} ref={periodRef} key={`period-${animKey}`}>
                .
              </span>
            </Link>

            {/* Navigation */}
            <div className={styles.links}>
              <Link href="#services" className={styles.link}>
                Services
              </Link>
              <Link href="/work" className={styles.link}>
                Work
              </Link>
              <Link href="#system" className={styles.link}>
                System
              </Link>
              <Link href="#about" className={styles.link}>
                About
              </Link>
            </div>

            {/* CTA */}
            <div ref={ctaRef}>
              <GooeyButton label="Hire Tie" href="/get-started" />
            </div>
          </nav>
        </header>

        {/* Rolling dot — inside header stacking context */}
        {dotPhase === "rolling" && (
          <div className={styles.rollingDot} style={dotVars} key={`dot-${animKey}`} />
        )}
      </div>

      {/* Spacer to offset fixed header */}
      <div className={styles.headerSpacer} />
    </>
  );
}

