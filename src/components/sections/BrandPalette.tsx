import React from "react";

export interface ColorSwatch {
  name: string;
  value: string;
  hexLabel?: string;
}

interface BrandPaletteProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  colors: ColorSwatch[];
  bgColor?: string;
}

export default function BrandPalette({
  eyebrow,
  heading,
  description,
  colors,
  bgColor,
}: BrandPaletteProps) {
  return (
    <section
      style={{
        padding: "var(--section-padding, 6rem) 5%",
        backgroundColor: bgColor || "transparent",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width, 1200px)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {/* Header */}
        {(eyebrow || heading || description) && (
          <div style={{ maxWidth: "800px" }}>
            {eyebrow && (
              <span
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  opacity: 0.6,
                }}
              >
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  marginBottom: description ? "1.5rem" : 0,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                }}
              >
                {heading}
              </h2>
            )}
            {description && (
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  opacity: 0.8,
                  maxWidth: "600px",
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Colors Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
          }}
        >
          {colors.map((color, index) => {
            const isLight =
              color.value.toLowerCase().includes("fff") ||
              color.value.toLowerCase().includes("white") ||
              color.value.toLowerCase().includes("f3eee7");

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  aspectRatio: "1 / 1",
                  background: color.value,
                  padding: "1.5rem",
                  color: isLight ? "#000" : "#fff",
                  boxShadow: isLight
                    ? "inset 0 0 0 1px rgba(0,0,0,0.05)"
                    : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <span style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                    {color.name}
                  </span>
                  {color.hexLabel && (
                    <span
                      style={{
                        fontSize: "0.875rem",
                        opacity: isLight ? 0.6 : 0.8,
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                      }}
                    >
                      {color.hexLabel}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
