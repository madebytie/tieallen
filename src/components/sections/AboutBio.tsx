import Image from "next/image";
import GooeyButton from "@/components/ui/GooeyButton";
import styles from "./about-bio.module.css";

export default function AboutBio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left - text */}
        <div className={styles.content}>
          <h2 className={styles.headline}>
            I am a founder and craftsman building at the intersection of AI, systems, and design.
          </h2>
          <p className={styles.body}>
            When I’m not scaling <a href="https://vizonos.com" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Vizon OS</a> or 
            crafting worlds in <a href="https://loretorch.com" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>LoreTorch</a>, 
            I’m helping ambitious brands reach their next level.
          </p>

          <div className={styles.ctaWrap}>
            <GooeyButton label="About Me" href="/about" />
          </div>
        </div>

        {/* Right - image with bottom-left notch + right-center notch */}
        <div className={styles.imageWrap}>
          <Image
            src="/assets/tie-sitting-infront-logo.png"
            alt="Tie Allen"
            fill
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 40vw"
          />
          {/* Bottom-left accent notch */}
          <div className={styles.accent} aria-hidden="true">
            <div className={`${styles.accentCorner} ${styles.accentTopLeft}`} />
            <div className={`${styles.accentCorner} ${styles.accentBottomRight}`} />
          </div>
          {/* Right-center accent notch */}
          <div className={styles.accentRight} aria-hidden="true">
            <div className={`${styles.accentRightCorner} ${styles.accentRightTop}`} />
            <div className={`${styles.accentRightCorner} ${styles.accentRightBottom}`} />
          </div>
        </div>

      </div>
    </section>
  );
}
