import type { Metadata } from "next";
import HirePage from "@/components/sections/HirePage";

export const metadata: Metadata = {
  title: "Product Designer — Open to Roles",
  description:
    "Tie Love — Product Designer & AI-Driven Developer. AI-native experiences, 0→1 product systems, and founder-led builds. Open to full-time roles.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Hire() {
  return (
    <main>
      <HirePage />
    </main>
  );
}
