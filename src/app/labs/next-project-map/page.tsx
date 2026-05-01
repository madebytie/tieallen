import type { Metadata } from "next";
import {
  LabProjectHero,
  ContentSection,
  WorkflowSection,
  VideoSection,
  StructuralWrap,
  SectionDivider,
  DiagonalHatch,
  GitHubIcon,
} from "@/components/sections/LabProject";
import CallToAction from "@/components/sections/CallToAction";
import styles from "./project-map.module.css";

export const metadata: Metadata = {
  title: "NEXT Project Map - Labs - made by tie.",
  description:
    "Next.js Project Architecture Visualizer. A CLI tool that transforms abstract codebases into interactive, high-fidelity maps.",
};

/* ---- Perspectives Section (The Solution) ---- */
function PerspectivesSection() {
  const perspectives = [
    {
      title: "The Route Tree",
      body: "A high-level visualization of your Next.js file-system routing. Perfect for mapping out the user journey and layout nesting.",
    },
    {
      title: "The Dependency Graph",
      body: "A deep-dive into code relationships. Instantly see how a single change to a shared component ripples through your entire app.",
    },
    {
      title: "The Component Topology",
      body: "A structural look at your UI's \"physical\" layout. Understand the spatial relationship between layouts, pages, and their nested children.",
    },
    {
      title: "The Architecture Map",
      body: "The ultimate project blueprint. A shared source of truth for onboarding new developers and communicating project scale to stakeholders.",
    },
  ];

  return (
    <section className={styles.perspectivesSection}>
      <div className={styles.perspectivesHeader}>
        <span className={styles.sectionLabel}>The Solution</span>
        <h2 className={styles.perspectivesHeadline}>One Map. Four Perspectives.</h2>
        <p className={styles.perspectivesSubhead}>
          NEXT Project Map isn&apos;t just a diagram—it&apos;s a multi-dimensional view of your application&apos;s internal anatomy.
        </p>
      </div>
      <div className={styles.perspectivesGrid}>
        {perspectives.map((p) => (
          <div key={p.title} className={styles.perspectiveCard}>
            <h3 className={styles.perspectiveTitle}>{p.title}</h3>
            <p className={styles.perspectiveBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Problem section ---- */
function ProblemSection() {
  const problems = [
    {
      label: "01",
      title: "The Folder Maze",
      body: "File-system routing makes it impossible to see the app as a whole. You're navigating a tree, not a map.",
    },
    {
      label: "02",
      title: "RSC Boundary Tracking",
      body: "Knowing where Server Components end and Client Components begin is constant cognitive overhead — nothing surfaces it visually.",
    },
    {
      label: "03",
      title: "Onboarding Friction",
      body: "New developers spend days just understanding how components connect. There's no artifact you can hand them that shows it.",
    },
    {
      label: "04",
      title: "Invisible Complexity",
      body: "Clients rarely understand the architecture they're paying for. A folder tree doesn't communicate the work.",
    },
  ];

  return (
    <section className={styles.problemSection}>
      <div className={styles.problemHeader}>
        <span className={styles.sectionLabel}>The Problem</span>
        <h2 className={styles.problemHeadline}>
          As Next.js apps scale,<br />the mental model breaks.
        </h2>
      </div>
      <div className={styles.problemGrid}>
        {problems.map((p) => (
          <div key={p.label} className={styles.problemCard}>
            <span className={styles.problemNumber}>{p.label}</span>
            <h3 className={styles.problemTitle}>{p.title}</h3>
            <p className={styles.problemBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Features section ---- */
function FeaturesSection() {
  const features = [
    {
      title: "Framework-Aware Route Nodes",
      body: "Groups Next.js folder conventions — layout, page, loading, error — into logical nodes. The map reflects the app, not the filesystem.",
    },
    {
      title: "RSC Boundary Visualizer",
      body: "Detects \"use client\" directives and renders the transition between Server and Client environments as a clear visual boundary.",
    },
    {
      title: "Dependency Tracing",
      body: "Follows imports to show how components are shared across routes. Exposes hidden coupling before it becomes a maintenance problem.",
    },
    {
      title: "Interactive Focus Mode",
      body: "Hover or search to highlight a specific component. Everything else dims. Trace a data flow without losing it in the noise.",
    },
    {
      title: "Hot Spot Detection",
      body: "Highly-connected components get a visual indicator. See the critical parts of your architecture at a glance, not after a refactor.",
    },
    {
      title: "Dual-Theme Structural UI",
      body: "High-fidelity mapping available in both Blueprint Light and Tech-Noir Dark modes. A premium asset for any documentation suite.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresHeader}>
        <span className={styles.sectionLabel}>Technical Features</span>
        <h2 className={styles.featuresHeadline}>Engineered for clarity.</h2>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((f) => (
          <div key={f.title} className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureBody}>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Tech stack section ---- */
function TechSection() {
  const stack = [
    { label: "Engine", items: ["TypeScript", "Node.js", "ts-morph"] },
    { label: "UI", items: ["Vite", "React", "@xyflow/react", "Dagre"] },
    { label: "Distribution", items: ["CLI", "Local-first", "Private repo safe"] },
  ];

  return (
    <section className={styles.techSection}>
      <div className={styles.techHeader}>
        <span className={styles.sectionLabel}>Under the Hood</span>
        <h2 className={styles.techHeadline}>
          This isn&apos;t a folder-tree viewer.
        </h2>
        <p className={styles.techSubhead}>
          ts-morph gives the engine full access to the TypeScript AST — it
          actually reads and understands your code, not just the file names.
        </p>
      </div>
      <div className={styles.techGrid}>
        {stack.map((group) => (
          <div key={group.label} className={styles.techGroup}>
            <span className={styles.techGroupLabel}>{group.label}</span>
            <ul className={styles.techList}>
              {group.items.map((item) => (
                <li key={item} className={styles.techItem}>
                  <span className={styles.techDot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Roadmap section ---- */
function RoadmapSection() {
  const phases = [
    {
      version: "v1.0",
      status: "current" as const,
      title: "CLI for handoffs",
      body: "Portable CLI tool. Run it locally, generate the blueprint, hand it to a client or a new developer. No account required.",
    },
    {
      version: "v2.0",
      status: "planned" as const,
      title: "GitHub integration",
      body: "Connect a public repository and generate the map on-demand. Persistent links for sharing architecture docs.",
    },
    {
      version: "v3.0",
      status: "planned" as const,
      title: "VS Code deep-links",
      body: "Click any node in the map and jump directly to that file in your editor. The diagram becomes a navigation tool.",
    },
  ];

  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapHeader}>
        <span className={styles.sectionLabel}>Roadmap</span>
        <h2 className={styles.roadmapHeadline}>Where this is going.</h2>
      </div>
      <div className={styles.roadmapList}>
        {phases.map((phase, i) => (
          <div key={phase.version} className={`${styles.roadmapItem} ${i < phases.length - 1 ? styles.roadmapItemBorder : ""}`}>
            <div className={styles.roadmapMeta}>
              <span className={styles.roadmapVersion}>{phase.version}</span>
              <span className={`${styles.roadmapStatus} ${styles[`status_${phase.status}`]}`}>
                <span className={styles.roadmapDot} />
                {phase.status === "current" ? "In Progress" : "Planned"}
              </span>
            </div>
            <div className={styles.roadmapContent}>
              <h3 className={styles.roadmapTitle}>{phase.title}</h3>
              <p className={styles.roadmapBody}>{phase.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Page ---- */
export default function NextProjectMapPage() {
  return (
    <>
      {/* Hero */}
      <StructuralWrap fade="top">
        <LabProjectHero
          label="Labs"
          status="wip"
          title="NEXT Project Map"
          description={
            <>
              Next.js Project Architecture Visualizer. A CLI tool that reads your{" "}
              <strong>AST</strong> and generates an
              interactive blueprint of every route, component, and data dependency.
            </>
          }
          tags={["TypeScript", "React", "AST", "CLI", "React Flow"]}
        />
      </StructuralWrap>

      <SectionDivider />

      {/* Demo Video */}
      <StructuralWrap>
        <VideoSection
          src={null}
          caption="A multi-dimensional view of Next.js architecture: Dependency Graph, Architecture Map, Route Tree, and Component Topology."
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* Problem */}
      <StructuralWrap>
        <ProblemSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* Perspectives / The Solution */}
      <StructuralWrap>
        <PerspectivesSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* How it works — workflow */}
      <StructuralWrap>
        <WorkflowSection
          headline="How it works."
          steps={[
            {
              number: "Step 01",
              title: "Run the CLI",
              description:
                "Point the tool at your project root. No config file needed — it discovers your Next.js app automatically.",
            },
            {
              number: "Step 02",
              title: "Three-pass AST scan",
              description:
                "The engine walks the codebase: first for routes and layouts, then for component boundaries, then for cross-route import chains.",
            },
            {
              number: "Step 03",
              title: "Blueprint opens in browser",
              description:
                "A React Flow dashboard launches locally with the full interactive map. Zoom, filter, search, and trace — no account needed.",
            },
          ]}
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* Features */}
      <StructuralWrap>
        <FeaturesSection />
      </StructuralWrap>

      <SectionDivider />

      {/* Tech stack */}
      <StructuralWrap>
        <TechSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* Why */}
      <StructuralWrap>
        <ContentSection
          headline="Architecture as a Deliverable."
          body={
            <>
              Every handoff I&apos;ve done — to a client, to a new developer, to
              a stakeholder — runs into the same problem. The architecture exists,
              but it&apos;s invisible. You can walk someone through a folder
              structure, but it doesn&apos;t land. The app feels like a black box
              until they&apos;ve spent enough time inside it.
              <br />
              <br />
              <strong>NEXT Project Map</strong> makes the architecture a deliverable. The map is
              something you can open, share, and actually point at. It shows where
              the complexity lives, how data flows, and what depends on what —
              before anyone has to read a line of code.
              <br />
              <br />
              The AST approach matters here. A folder-tree viewer gives you names.
              This tool gives you relationships.
            </>
          }
          features={[
            {
              title: "Show clients what they're paying for",
              description:
                "A visual blueprint of the architecture is a tangible artifact. It turns abstract engineering work into something a client can see.",
            },
            {
              title: "Cut onboarding time",
              description:
                "A new developer can orient themselves in an hour instead of a week. The map answers the first dozen questions automatically.",
            },
            {
              title: "Catch coupling early",
              description:
                "Shared component dependencies are invisible until they cause a problem. The dependency trace makes them visible before they do.",
            },
            {
              title: "No infrastructure to run",
              description:
                "Local-first CLI. Nothing to deploy, no API keys, no cloud. The tool runs where your code already is.",
            },
          ]}
          ctaCard={{
            headline: "Need a custom build?",
            description: "I design and build high-end Next.js applications.",
            href: "/start-a-project",
          }}
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      {/* Roadmap */}
      <StructuralWrap fade="bottom">
        <RoadmapSection />
      </StructuralWrap>

      <CallToAction href="/labs" />
    </>
  );
}
