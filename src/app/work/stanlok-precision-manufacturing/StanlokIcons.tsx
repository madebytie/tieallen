"use client";

import { useEffect, useState } from "react";

const ANIMATED_ICONS = [
  {
    base: "/projects/stanlok-precision-manufacturing/icons/specialty-nut-navigation-icon2.png",
    hover: "/projects/stanlok-precision-manufacturing/icons/specialty-nut-navigation-icon-hover1.png",
    alt: "Specialty nut icon",
  },
  {
    base: "/projects/stanlok-precision-manufacturing/icons/straight-pin-navigation-icon1.png",
    hover: "/projects/stanlok-precision-manufacturing/icons/straight-pin-navigation-icon-hover1.png",
    alt: "Straight pin icon",
  },
  {
    base: "/projects/stanlok-precision-manufacturing/icons/taper-pin-navigation-icon1.png",
    hover: "/projects/stanlok-precision-manufacturing/icons/taper-pin-navigation-icon-hover1.png",
    alt: "Taper pin icon",
  },
  {
    base: "/projects/stanlok-precision-manufacturing/icons/machining-navigation-icon1.png",
    hover: "/projects/stanlok-precision-manufacturing/icons/machining-navigation-icon-hover1.png",
    alt: "Machining icon",
  },
];

const RAW_ICONS = [
  { src: "/projects/stanlok-precision-manufacturing/icons/micromitor-icon-moc.png", alt: "Micrometer icon" },
  { src: "/projects/stanlok-precision-manufacturing/icons/nut-icon.png", alt: "Nut icon" },
  { src: "/projects/stanlok-precision-manufacturing/icons/pin-icon-moc1.png", alt: "Pin icon" },
  { src: "/projects/stanlok-precision-manufacturing/icons/straight-pin-icon.png", alt: "Straight pin icon" },
];

const INTERVAL = 1800;
const FADE = 500;

function AnimatedIcon({ base, hover, alt }: { base: string; hover: string; alt: string }) {
  const [showHover, setShowHover] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowHover((v) => !v), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: 160, height: 160, flexShrink: 0 }}>
      <img
        src={base}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: showHover ? 0 : 1,
          transition: `opacity ${FADE}ms ease`,
        }}
      />
      <img
        src={hover}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: showHover ? 1 : 0,
          transition: `opacity ${FADE}ms ease`,
        }}
      />
    </div>
  );
}

export default function StanlokIcons() {
  return (
    <section style={{ padding: "0 1.25rem 5rem", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1350, margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>

        {/* Raw icons - 4-col grey box grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
          {RAW_ICONS.map((icon, i) => (
            <div key={i} style={{ backgroundColor: "#e8e8e8", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2.5rem", aspectRatio: "1/1" }}>
              <img src={icon.src} alt={icon.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>

        {/* Animated icons - crossfade between base and hover */}
        <div style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
          {ANIMATED_ICONS.map((icon, i) => (
            <AnimatedIcon key={i} {...icon} />
          ))}
        </div>

      </div>
    </section>
  );
}
