import HireChrome from "@/components/layout/HireChrome";
import styles from "@/components/layout/hire-layout.module.css";

export default function HireLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.hireLayout}>
      <HireChrome />
      {children}
    </div>
  );
}
