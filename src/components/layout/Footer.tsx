"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./footer.module.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [isBouncing, setIsBouncing] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleLogoHover = useCallback(() => {
    setAnimKey((prev) => prev + 1);
    setIsBouncing(true);
    // Optional: reset after animation duration
    setTimeout(() => setIsBouncing(false), 800);
  }, []);

  const periodClasses = [
    styles.brandPeriod,
    isBouncing ? styles.logoPeriodBounce : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.footerFrame}>
      <footer className={styles.footer}>
        <div className={styles.topNotch} aria-hidden="true" />
        <div className={styles.leftNotch} aria-hidden="true" />

        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerCta}>
              <h2 className={styles.footerCtaHeading}>
                Want to
                <br />
                work with me?
              </h2>
              <GooeyButton label="Hire Tie" href="/get-started" />
            </div>

            <div className={styles.footerRight}>
              <div className={styles.footerSocials}>
                {["Instagram", "X", "YouTube", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className={styles.socialLink}
                    aria-label={social}
                  >
                    {social === "Instagram" && <InstagramIcon />}
                    {social === "X" && <XIcon />}
                    {social === "YouTube" && <YouTubeIcon />}
                    {social === "LinkedIn" && <LinkedInIcon />}
                  </a>
                ))}
              </div>
              <div className={styles.footerNote}>
                <span>Crafting</span>
                <span>Since 2008</span>
              </div>
            </div>
          </div>



          <div className={styles.footerBrand} onMouseEnter={handleLogoHover}>
            <div className={styles.brandText}>
              <span className={styles.brandThin}>tie</span>
              <span className={styles.brandBold}>allen</span>
              <span className={periodClasses} key={animKey}>
                .
              </span>
            </div>
          </div>

          <div className={styles.footerMeta}>
            <p className={styles.footerCopyright}>
              &copy; {year} Tie Allen Love. All Rights Reserved.
              <span className={styles.metaDivider}>•</span>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
