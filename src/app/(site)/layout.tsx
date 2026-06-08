import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/components/layout/layout.module.css";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="page-wrapper" className={styles.pageWrapper}>
      <Header />
      <div id="page-content" className={styles.pageContent}>
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
