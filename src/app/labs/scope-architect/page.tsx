import type { Metadata } from "next";
import {
  LabProjectHero,
  ContentSection,
  WorkflowSection,
  VideoSection,
  StructuralWrap,
  SectionDivider,
  DiagonalHatch,
} from "@/components/sections/LabProject";
import CallToAction from "@/components/sections/CallToAction";
import styles from "./scope-architect.module.css";

export const metadata: Metadata = {
  title: "Scope Architect - Labs - made by tie.",
  description:
    "Intelligent SOW & Technical Roadmap Generator. Transforms discovery notes into bankable, high-fidelity project maps.",
};

/* ---- Problem section ---- */
function ProblemSection() {
  const problems = [
    {
      label: "01",
      title: "The Invisible Risk",
      body: "Scoping is where margins die. Underestimating complex tasks leads to erosion of project profit and studio stress.",
    },
    {
      label: "02",
      title: "Trust Gaps",
      body: "Vague, lump-sum quotes build client skepticism. Stakeholders want to see exactly what they are paying for.",
    },
    {
      label: "03",
      title: "Senior Resource Drain",
      body: "Creating a quality SOW often requires hours of senior engineering time—time that should be spent on execution.",
    },
    {
      label: "04",
      title: "Missing Edge Cases",
      body: "Manual scoping often misses the 'dark matter' of development: state management, error states, and infrastructure debt.",
    },
  ];

  return (
    <section className={styles.problemSection}>
      <div className={styles.problemHeader}>
        <span className={styles.sectionLabel}>The Problem</span>
        <h2 className={styles.problemHeadline}>
          Scoping is the hardest part<br />of the project lifecycle.
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

/* ---- Perspectives Section (The Solution) ---- */
function PerspectivesSection() {
  const perspectives = [
    {
      title: "The Internal Blueprint",
      body: "A high-density technical breakdown for engineering teams. Includes T-shirt sizing, risk scores, and technical debt flagging.",
    },
    {
      title: "The Client Proposal",
      body: "A polished, outcome-focused deliverable. Translates 'Middleware Setup' into 'Secure Access & Authentication' for stakeholders.",
    },
    {
      title: "AI Task Expansion",
      body: "Gemini 3.1 Flash-Lite performs a 3-pass expansion on requirements, identifying hidden dependencies and edge cases automatically.",
    },
    {
      title: "Calibration Engine",
      body: "A reactive math engine that adjusts budgets and timelines in real-time based on your studio's specific velocity and risk tolerance.",
    },
  ];

  return (
    <section className={styles.perspectivesSection}>
      <div className={styles.perspectivesHeader}>
        <span className={styles.sectionLabel}>The Solution</span>
        <h2 className={styles.perspectivesHeadline}>Intelligent Scoping.</h2>
        <p className={styles.perspectivesSubhead}>
          Scope Architect is a "Senior Solutions Architect" in a box, designed to bridge the gap between vague discovery and bankable contracts.
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

/* ---- Features section ---- */
function FeaturesSection() {
  const features = [
    {
      title: "Base Architecture Presets",
      body: "'Anchor' projects with studio-standard modules (e.g., E-commerce, RBAC, SaaS) to ensure every quote starts with a solid foundation.",
    },
    {
      title: "Auto-Generated Guardrails",
      body: "Automatically injects technical exclusions and client assumptions based on the specific features being scoped.",
    },
    {
      title: "Structural Precision UI",
      body: "A minimalist, grid-based layout mirroring architectural blueprints. High-contrast monochrome with targeted accenting.",
    },
    {
      title: "Context-Aware DNA",
      body: "Injects your studio's tech stack and delivery standards directly into the AI's logic for hyper-relevant technical breakdowns.",
    },
    {
      title: "Staggered Animations",
      body: "Framer Motion count-up animations provide visual feedback as the calibration engine ripples through the project math.",
    },
    {
      title: "Exportable Proposals",
      body: "Generate high-end web-link proposals or structural JSON/PDF exports for internal handoffs and documentation.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresHeader}>
        <span className={styles.sectionLabel}>Technical Intelligence</span>
        <h2 className={styles.featuresHeadline}>Engineered for precision.</h2>
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
    { label: "Core", items: ["Next.js 15", "TypeScript", "Tailwind CSS"] },
    { label: "Intelligence", items: ["Gemini 3.1 Flash-Lite", "Vercel AI SDK", "3-Pass Recursive Prompting"] },
    { label: "State & Math", items: ["Zustand", "Immer", "Reactive Math Engine"] },
  ];

  return (
    <section className={styles.techSection}>
      <div className={styles.techHeader}>
        <span className={styles.sectionLabel}>Under the Hood</span>
        <h2 className={styles.techHeadline}>
          A high-fidelity technical stack.
        </h2>
        <p className={styles.techSubhead}>
          Built for speed and structured output, leveraging the latest in AI orchestration to ensure deterministic technical breakdowns.
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

/* ---- Page ---- */
export default function ScopeArchitectPage() {
  return (
    <>
      <StructuralWrap fade="top">
        <LabProjectHero
          label="Labs"
          status="internal"
          title="Scope Architect"
          description={
            <>
              Intelligent SOW & Technical Roadmap Generator. Transforms vague
              discovery notes into <strong>bankable</strong>, high-fidelity project
              maps using AI-orchestrated logic.
            </>
          }
          tags={["Gemini 3.1", "AI SDK", "Next.js", "Zustand", "Framer Motion"]}
        />
      </StructuralWrap>

      <SectionDivider />

      {/* Placeholder for Video/Demo */}
      <StructuralWrap>
        <VideoSection
          src={null}
          caption="Transforming raw discovery notes into a granular, multi-tier Project Map in seconds."
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <StructuralWrap>
        <ProblemSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <StructuralWrap>
        <PerspectivesSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <StructuralWrap>
        <WorkflowSection
          headline="How it works."
          steps={[
            {
              number: "Step 01",
              title: "Ingest Discovery",
              description:
                "Drop raw call transcripts or bulleted notes directly into the architect. No formatting required.",
            },
            {
              number: "Step 02",
              title: "AI Decomposition",
              description:
                "Gemini performs a 3-pass recursive expansion, mapping requirements to modules, features, and atomic tasks.",
            },
            {
              number: "Step 03",
              title: "Calibrate & Export",
              description:
                "Adjust the complexity sliders and studio velocity. Instantly export an Internal Blueprint or a Client Proposal.",
            },
          ]}
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <StructuralWrap>
        <FeaturesSection />
      </StructuralWrap>

      <SectionDivider />

      <StructuralWrap>
        <TechSection />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <StructuralWrap>
        <ContentSection
          headline="The end of the vague estimate."
          body={
            <>
              Every agency owner knows the feeling of a discovery call that goes perfectly, 
              only for the scoping phase to drag on for days. You're trying to guess at 
              complexity while protecting your team's time and your client's budget.
              <br />
              <br />
              <strong>Scope Architect</strong> turns that guessing game into an architectural 
              process. By using AI to do the "heavy lifting" of decomposition, you can focus 
              on the strategic calibration. It ensures that every quote you send is 
              defensible, transparent, and built on a rock-solid technical foundation.
              <br />
              <br />
              It's not just a tool for creating SOWs—it's a tool for establishing authority 
              from day zero.
            </>
          }
          features={[
            {
              title: "Eliminate margin erosion",
              description:
                "Identify hidden technical dependencies before they become unbilled changes in production.",
            },
            {
              title: "Build client trust",
              description:
                "Deliver a level of transparency that justifies premium pricing and separates you from the competition.",
            },
            {
              title: "Senior time back",
              description:
                "Reduce senior engineering time spent on scoping by up to 80% through automated task expansion.",
            },
            {
              title: "Standardized delivery",
              description:
                "Ensure every project starts with your studio's specific architectural DNA and guardrails.",
            },
          ]}
          ctaCard={{
            headline: "Want to talk architecture?",
            description: "I help agencies build high-fidelity technical systems.",
            href: "/start-a-project",
          }}
        />
      </StructuralWrap>

      <DiagonalHatch />
      <SectionDivider />

      <CallToAction href="/labs" />
    </>
  );
}
