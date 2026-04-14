import styles from "./case-study-image-grid.module.css";

interface GridImage {
  src: string;
  alt: string;
  span?: "wide";
  aspectRatio?: string;
}

interface CaseStudyImageGridProps {
  images: GridImage[];
  columns?: 2 | 3;
}

export default function CaseStudyImageGrid({
  images,
  columns = 2,
}: CaseStudyImageGridProps) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridFrame}>
        <div
          className={styles.grid}
          style={{ "--columns": columns } as React.CSSProperties}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.gridItem}
              style={{
                gridColumn: img.span === "wide" ? "span 2" : undefined,
                aspectRatio: img.aspectRatio ?? "4/3",
              }}
            >
              <img src={img.src} alt={img.alt} className={styles.gridImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
