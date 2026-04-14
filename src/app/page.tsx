import FAQ from "@/components/sections/FAQ";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function Home() {
  return (
    <>
      <div style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Concept to Scale.</h1>
        <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
          I execute premium projects from pristine design to robust development.
          [Hero Section coming next]
        </p>
      </div>

      <ProjectsGrid />
      <FAQ />
    </>
  );
}
