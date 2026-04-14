import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/components/layout/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tie Allen Love | Concept to Scale",
  description: "Complete design, development, and scaling strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={styles.pageWrapper}>
          <Header />
          <main className={styles.mainContent}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
