import type { Metadata } from "next";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import ClientRoster from "@/components/sections/ClientRoster";

export const metadata: Metadata = {
  title: "Work & Projects",
  description: "Explore my portfolio of custom web platforms, SaaS products, and premium websites built for scale.",
};

export default function Work() {
  return (
    <>
      <ClientRoster />
      <ProjectsGrid />
    </>
  );
}
