import Link from "next/link";
import { HIRE_POSITIONING } from "@/data/hire-portfolio";
import headerStyles from "./header.module.css";
import styles from "./hire-chrome.module.css";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function HireChrome() {
  const p = HIRE_POSITIONING;

  return (
    <header className={styles.hireChrome}>
      <Link href="/" className={headerStyles.logo}>
        <span className={headerStyles.logoBold}>tie</span>
        <span className={headerStyles.logoPeriod}>.</span>
      </Link>
      <nav className={styles.nav} aria-label="Hire page">
        <Link href={p.portfolio} className={styles.navLink}>
          Portfolio
        </Link>
        <Link
          href={p.linkedin}
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link href={p.email} className={styles.navLink}>
          Email
        </Link>
        <Link href={p.book} className={styles.navLink}>
          Book call
        </Link>
        <Link
          href={p.x}
          className={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <XIcon />
        </Link>
      </nav>
    </header>
  );
}
