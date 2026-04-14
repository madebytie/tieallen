import styles from "./case-study-quote.module.css";

interface CaseStudyQuoteProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  variant?: "light" | "dark";
}

export default function CaseStudyQuote({
  quote,
  author,
  role,
  company,
  variant = "light",
}: CaseStudyQuoteProps) {
  const attribution = [role, company].filter(Boolean).join(", ");

  return (
    <section className={styles.quoteSection} data-variant={variant}>
      <div className={styles.quoteFrame}>
        <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
        <blockquote className={styles.quoteText}>{quote}</blockquote>
        <p className={styles.quoteAttribution}>
          &mdash; {author}{attribution ? `, ${attribution}` : ""}
        </p>
      </div>
    </section>
  );
}
