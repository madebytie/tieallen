import styles from "./case-study-image-grid.module.css";

interface GridImage {
  src: string;
  alt: string;
  span?: "wide" | "full";
  aspectRatio?: string;
  display?: "screenshot" | "logo" | "video";
  bg?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  small?: boolean;
  padding?: string;
}

interface CaseStudyImageGridProps {
  images: GridImage[];
  columns?: 2 | 3 | 4 | 5;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
  bgColor?: string;
}

export default function CaseStudyImageGrid({
  images,
  columns = 2,
  noTopPadding = false,
  noBottomPadding = false,
  bgColor,
}: CaseStudyImageGridProps) {
  const sectionStyle: React.CSSProperties = {};
  if (noTopPadding) sectionStyle.paddingTop = 0;
  if (noBottomPadding) sectionStyle.paddingBottom = "0.75rem";
  if (bgColor) sectionStyle.backgroundColor = bgColor;
  return (
    <section
      className={styles.gridSection}
      style={Object.keys(sectionStyle).length ? sectionStyle : undefined}
    >
      <div className={styles.gridFrame}>
        <div
          className={styles.grid}
          style={{ "--columns": columns } as React.CSSProperties}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${styles.gridItem}${img.display === "screenshot" ? ` ${styles.screenshotItem}` : ""}${img.display === "logo" ? ` ${styles.logoItem}` : ""}${img.small ? ` ${styles.smallItem}` : ""}`}
              style={{
                gridColumn:
                  img.span === "full"
                    ? "1 / -1"
                    : img.span === "wide"
                      ? "span 2"
                      : undefined,
                aspectRatio:
                  img.display === "logo" && !img.aspectRatio
                    ? undefined
                    : (img.aspectRatio ?? "4/3"),
                backgroundColor: img.bg ?? undefined,
                padding:
                  img.padding ?? (img.display === "logo" ? "15%" : undefined),
              }}
            >
              {img.display === "screenshot" ? (
                <>
                  <img
                    src={img.src}
                    alt=""
                    className={styles.screenshotBlur}
                    aria-hidden="true"
                  />
                  <div className={styles.screenshotInner}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={styles.screenshotImage}
                      style={{
                        objectFit: img.objectFit,
                        objectPosition: img.objectPosition,
                      }}
                    />
                    <div className={styles.screenshotFrame} />
                  </div>
                </>
              ) : img.display === "logo" ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.logoImage}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
              ) : img.display === "video" ? (
                <video
                  src={img.src}
                  className={styles.gridImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.gridImage}
                  style={{
                    objectPosition: img.objectPosition ?? "center",
                    objectFit: img.objectFit ?? "cover",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
