import type { Metadata } from "next";
import {
  LabProjectHero,
  StepsSection,
  ContentSection,
  ImageSplitSection,
  WorkflowSection,
  VideoSection,
  LinksRow,
  StructuralWrap,
  SectionDivider,
  DiagonalHatch,
} from "@/components/sections/LabProject";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "NEXT.js Inline Editor - Labs - made by tie.",
  description:
    "Zero-config inline content editor for NEXT.js sites backed by GitHub. Edit text and images directly on your live pages.",
};

export default function NextInlineEditorV2() {
  return (
    <>
      {/* ---- Hero with structural lines ---- */}
      <StructuralWrap>
      <LabProjectHero
          label="Labs"
          title="NEXT.js Inline Editor"
          description={
            <>
              Zero-config inline content editor for{" "}
              <strong>NEXT.js sites</strong> backed by GitHub. Edit text and
              images directly on your live pages.
            </>
          }
          tags={["NEXT.js", "React", "Open Source", "npm"]}
          command="npm install next-inline-editor"
          primaryCTA={{
            label: "View on NPM",
            href: "https://www.npmjs.com/package/next-inline-editor",
          }}
          secondaryCTA={{
            label: "View on GitHub",
            href: "https://github.com/madebytie/next-inline-editor",
            icon: "github",
          }}
        />
      </StructuralWrap>

      {/* ---- Divider ---- */}
      <SectionDivider />

      {/* ---- Demo Video ---- */}
      <StructuralWrap>
        <VideoSection
          src="/labs/next-inline-edit/next-inline-edit-demo.mp4"
          caption="Demo of editing directly on a live NEXT.js page."
        />
      </StructuralWrap>

      {/* ---- Diagonal hatch transition ---- */}
      <DiagonalHatch />
      <SectionDivider />

      {/* ---- Steps ---- */}
      <StructuralWrap>
        <StepsSection
          headline="Get started in seconds."
          steps={[
            {
              title: "Install the package",
              comment: "Install via npm",
              command: "npm install next-inline-editor",
            },
            {
              title: "Run the setup CLI",
              comment: "Automated configuration",
              command: "npx next-inline-editor",
            },
          ]}
        />
      </StructuralWrap>

      {/* ---- How it works - Workflow Flowchart ---- */}
      <StructuralWrap>
        <WorkflowSection
          headline="How it works."
          steps={[
            {
              number: "Step 01",
              title: "Log in as admin",
              description:
                "Navigate to /admin/login and authenticate. The edit toolbar activates across the entire site.",
            },
            {
              number: "Step 02",
              title: "Browse & edit in place",
              description:
                "Visit any page on your live site. Click directly on text or images wrapped in editor components - changes appear instantly in real time.",
            },
            {
              number: "Step 03",
              title: "Save & Publish",
              description:
                "Hit the publish button. Your edits are committed to GitHub, which automatically triggers a new production build and deployment.",
            },
          ]}
          outcomes={[
            {
              title: "Commits to GitHub",
              description:
                "Changes are pushed directly to your repository via the GitHub Contents API. Full version history, zero infrastructure.",
              icon: "github",
            },
            {
              title: "Deploys to Vercel",
              description:
                "The GitHub commit initiates a fresh production build on Vercel. Your updates go live globally in minutes.",
              icon: "vercel",
            },
          ]}
        />
      </StructuralWrap>

      {/* ---- Diagonal hatch transition ---- */}
      <DiagonalHatch />
      <SectionDivider />

      {/* ---- Why I built this ---- */}
      <StructuralWrap>
        <ContentSection
          headline="Why I built this."
          body={
            <>
              I needed a clean, simple way for clients and collaborators to make
              minor content and image updates to custom websites I build with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEXT.js
              </a>
              . Traditional handoffs often mean training clients on a bulky CMS,
              setting up content models, and configuring preview
              deployments - which is overkill for most sites.
              <br />
              <br />
              Next Inline Editor offers a super user-friendly alternative. Simply
              log in and browse the front-end of the live website. Click directly
              on the text or images you want to change, and hit save. The changes
              commit back to GitHub automatically and go live instantly. No CMS.
              No admin panel. No rebuilds. It&apos;s 100% true WYSIWYG editing,
              right on the live site.
            </>
          }
          features={[
            {
              title: "Click-to-edit on any text element",
              description:
                "Wrap any text in an EditableText component. Click to edit, type your changes, and save - all inline.",
            },
            {
              title: "Inline image replacement",
              description:
                "Swap out images directly on the page. Upload a new file and it commits to your repo instantly.",
            },
            {
              title: "GitHub-backed persistence",
              description:
                "Every edit is a real commit to your repository. Full version history, diffs, and rollback built in.",
            },
            {
              title: "Minimal configuration needed",
              description:
                "Run the CLI, add your env vars, and wrap your components. No CMS, no database, no admin panel.",
            },
            {
              title: "Works with App Router & Pages Router",
              description:
                "Fully compatible with both NEXT.js routing paradigms. ISR and on-demand revalidation supported out of the box.",
            },
          ]}
          ctaCard={{
            headline: "Need a custom build?",
            description: "I design and build high-end NEXT.js websites and custom applications.",
            href: "/start-a-project",
          }}
        />
      </StructuralWrap>


      {/* ---- Links ---- */}
      <LinksRow
        links={[
          {
            label: "View on NPM",
            href: "https://www.npmjs.com/package/next-inline-editor",
            primary: true,
          },
          {
            label: "View on GitHub",
            href: "https://github.com/madebytie/next-inline-editor",
            icon: "github",
          },
        ]}
      />

      <CallToAction href="/labs" />
    </>
  );
}
