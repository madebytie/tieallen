import styles from "./case-study-device-showcase.module.css";

interface CaseStudyDeviceShowcaseProps {
  type: "desktop" | "mobile" | "both";
  desktopImage?: string;
  desktopAlt?: string;
  mobileImage?: string;
  mobileAlt?: string;
  bgColor?: string;
  scrollable?: boolean;
}

export default function CaseStudyDeviceShowcase({
  type,
  desktopImage,
  desktopAlt = "",
  mobileImage,
  mobileAlt = "",
  bgColor,
  scrollable = false,
}: CaseStudyDeviceShowcaseProps) {
  return (
    <section
      className={styles.showcaseSection}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={styles.showcaseFrame}>
        {(type === "desktop" || type === "both") && desktopImage && (
          <div className={styles.desktopMockup}>
            <div className={styles.browserChrome}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
            </div>
            <div className={scrollable ? styles.browserScreenScrollable : styles.browserScreen}>
              <img src={desktopImage} alt={desktopAlt} className={styles.desktopImage} />
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
