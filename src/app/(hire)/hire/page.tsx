import type { Metadata } from "next";
import HirePage from "@/components/sections/HirePage";

const title = "Tie Love · Lead Product Designer · Founding Designer · AI Product Builder";
const description =
  "Lead Product Designer and AI Product Builder open to Principal Product Designer, Founding Designer, and AI Product Lead roles. Four production platforms designed and shipped solo, brand through deployment.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/hire",
  },
  openGraph: {
    title,
    description,
    url: "/hire",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Hire() {
  return (
    <main>
      <HirePage />
    </main>
  );
}
