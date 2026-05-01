import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "I'm a digital product designer and developer. I build custom web platforms and tools for the long run.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
