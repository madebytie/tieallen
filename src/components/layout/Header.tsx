import Link from "next/link";
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Tie Allen
        </Link>
        <div className={styles.links}>
          <Link href="/work" className={styles.link}>
            Work
          </Link>
          <Link href="/get-started" className={styles.cta}>
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
