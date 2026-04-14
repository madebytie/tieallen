"use client";

import styles from "./logo-marquee.module.css";

const logoData = [
  { src: "/assets/logos/9fb657e9-e6c0-43ff-895c-9c21e8aaaebb.png", scale: 0.45 }, /* IPG - Scaled way down, very heavy */
  { src: "/assets/logos/BD_2024Logo.png", scale: 0.75 }, 
  { src: "/assets/logos/bchdevcon-event-logo-grey.png", scale: 0.65 },
  { src: "/assets/logos/ci2-full-logo-blue-vector-1.svg", scale: 0.8 }, /* CI2 - Boosted up */
  { src: "/assets/logos/header-original-logo.png", scale: 0.45 }, /* Stanlok */
  { src: "/assets/logos/permissionless-logo-grey.png", scale: 0.8 },
  { src: "/assets/logos/quest-for-life-logo-grey.png", scale: 1.3 },
  { src: "/assets/logos/wtd-full-logo-white-v1-1.svg", scale: 0.8 },
];

export default function LogoMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {logoData.map((logo, index) => (
            <div key={index} className={styles.logoBlock}>
              <img 
                src={logo.src} 
                alt="Client Logo" 
                className={styles.logoImage} 
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </div>
        {/* Duplicate content for seamless loop */}
        <div className={styles.marqueeContent} aria-hidden="true">
          {logoData.map((logo, index) => (
            <div key={`dup-${index}`} className={styles.logoBlock}>
              <img 
                src={logo.src} 
                alt="Client Logo" 
                className={styles.logoImage} 
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
