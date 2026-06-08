import type { Metadata } from "next";
import { LabsHero, LabsGrid } from "@/components/sections/LabsPage";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Labs - made by tie.",
  description: "Experimental tools, open-source libraries, and technical prototypes by Tie Allen.",
};

export default function LabsPage() {
  return (
    <main>
      <LabsHero />
      <LabsGrid />
      <CallToAction href="/start" />
    </main>
  );
}
