import styles from "./layout.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; {year} Tie Allen Love. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
