import type { Metadata } from "next";
import HirePage from "@/components/sections/HirePage";

export const metadata: Metadata = {
  title: "Lead Product Designer — Open to Roles",
  description:
    "Tie Love — Lead Product Designer and AI Product Builder. Four production-grade platforms shipped solo. Brand, product design, platform design, and AI-orchestrated development. Open to full-time roles.",
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
