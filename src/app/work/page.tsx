import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function Work() {
  return (
    <>
      <div style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Work</h1>
        <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
          Selected projects and Case Studies.
        </p>
      </div>
      <ProjectsGrid />
    </>
  );
}
