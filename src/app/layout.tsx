import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GooeyFilter } from "@/components/ui/GooeyButton";
import styles from "@/components/layout/layout.module.css";

export const metadata: Metadata = {
  title: "Tie Allen Love | Concept to Scale",
  description:
    "I design, build, and scale premium digital products — from concept through launch and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GooeyFilter />
        <div id="page-wrapper" className={styles.pageWrapper}>
          <Header />
          <div id="page-content" className={styles.pageContent}>
            <main className={styles.mainContent}>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

