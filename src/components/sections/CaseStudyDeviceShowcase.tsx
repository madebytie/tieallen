"use client";

import { useRef, useEffect } from "react";
import styles from "./case-study-device-showcase.module.css";

interface CaseStudyDeviceShowcaseProps {
  type: "desktop" | "mobile" | "both";
  desktopImage?: string;
  desktopAlt?: string;
  desktopUrl?: string;
  mobileImage?: string;
  mobileAlt?: string;
  bgColor?: string;
  scrollable?: boolean;
  floating?: boolean;
}

export default function CaseStudyDeviceShowcase({
  type,
  desktopImage,
  desktopAlt = "",
  desktopUrl,
  mobileImage,
  mobileAlt = "",
  bgColor,
  scrollable = false,
  floating = false,
}: CaseStudyDeviceShowcaseProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const el = screenRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const updateScale = () => {
      if (window.innerWidth <= 900) {
        const containerWidth = container.offsetWidth;
        const desktopWidth = 1360;
        const scale = containerWidth / desktopWidth;
        container.style.setProperty("--iframe-scale", scale.toString());
      } else {
        container.style.removeProperty("--iframe-scale");
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    if (!scrollable || desktopUrl) return;

    const speed = 0.6; // px per frame
    const tick = () => {
      if (!pausedRef.current) {
        el.scrollTop += speed;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
          el.scrollTop = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const pause = () => {
      pausedRef.current = true;
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 2000);
    };

    el.addEventListener("scroll", pause, { passive: true });
    el.addEventListener("mouseenter", () => { pausedRef.current = true; });
    el.addEventListener("mouseleave", () => { pausedRef.current = false; });

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", updateScale);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(pauseTimerRef.current);
      el.removeEventListener("scroll", pause);
    };
  }, [scrollable, desktopUrl]);

  return (
    <section
      className={`${styles.showcaseSection} ${floating ? styles.floating : ""}`}
      style={bgColor && !floating ? { backgroundColor: bgColor } : undefined}
    >
      <div className={`${styles.showcaseFrame} ${floating ? styles.floatingFrame : ""}`}>
        {(type === "desktop" || type === "both") && (desktopImage || desktopUrl) && (
          <div ref={containerRef} className={`${styles.desktopMockup} ${floating ? styles.floatingMockup : ""}`}>
            {!floating && (
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                {desktopUrl && (
                  <div className={styles.browserUrl}>{desktopUrl.replace(/^https?:\/\//, "")}</div>
                )}
              </div>
            )}
            <div
              ref={screenRef}
              className={desktopUrl ? styles.browserScreenIframe : scrollable ? styles.browserScreenScrollable : styles.browserScreen}
            >
              {desktopUrl ? (
                <iframe
                  src={desktopUrl}
                  className={styles.desktopIframe}
                  title="Website preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <img src={desktopImage} alt={desktopAlt} className={styles.desktopImage} />
              )}
            </div>
          </div>
        )}

        {(type === "mobile" || type === "both") && mobileImage && (
          <div className={styles.mobileShowcase}>
            <img src={mobileImage} alt={mobileAlt} className={styles.mobileComposite} />
          </div>
        )}
      </div>
    </section>
  );
}
