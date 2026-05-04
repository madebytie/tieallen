import React from "react";

export interface MobileImage {
  src: string;
  alt: string;
}

interface MultiMobileShowcaseProps {
  images: MobileImage[];
  bgColor?: string;
  innerBgColor?: string;
}

export default function MultiMobileShowcase({
  images,
  bgColor = "transparent",
  innerBgColor = "#f4f4f5", // Light grey background
}: MultiMobileShowcaseProps) {
  return (
    <section
      style={{
        padding: "var(--section-padding, 4rem) 5%",
        backgroundColor: bgColor,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width, 1400px)",
          margin: "0 auto",
          backgroundColor: innerBgColor,
          borderRadius: "2rem",
          padding: "5rem 2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${images.length || 3}, minmax(260px, 1fr))`,
            gap: "2.5rem",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "390 / 844", // Standard modern mobile aspect ratio
                borderRadius: "2rem", // Rounded corners for the device
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)", // Soft, elevated shadow
                border: "8px solid #ffffff", // White device bezel
                backgroundColor: "#ffffff",
                transform: "none",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
