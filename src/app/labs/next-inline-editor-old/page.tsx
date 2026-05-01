import type { Metadata } from "next";
import { LabProjectHeroOld, StepsSectionOld, ContentSectionOld, ImageSplitSectionOld, LinksRowOld } from "@/components/sections/LabProjectOld";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "NEXT.js Inline Editor (Legacy) - Labs - made by tie.",
  description: "Zero-config inline content editor for Next.js sites backed by GitHub. Edit text and images directly on your live pages.",
};

export default function NextInlineEditorOld() {
  return (
    <>
      <LabProjectHeroOld
        label="Labs"
        title="NEXT.js Inline Editor (Legacy)"
        description="Zero-config inline content editor for Next.js sites backed by GitHub. Edit text and images directly on your live pages."
        tags={["Next.js", "React", "Open Source", "npm"]}
        image="/assets/next-inline-edit.png"
      />

      <StepsSectionOld
        headline="Get started in seconds."
        steps={[
          {
            title: "Install the package",
            comment: "Install via npm",
            command: "npm install next-inline-editor"
          },
          {
            title: "Run the setup CLI",
            comment: "Automated configuration",
            command: "npx next-inline-editor"
          }
        ]}
      />

      <ContentSectionOld
        headline="Why I built this."
        body={
          <>
            I needed a clean, simple way for clients and collaborators to make minor content and image updates to custom websites I build with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Next.js</a>. Traditional handoffs often mean training clients on a bulky CMS, setting up content models, and configuring preview deployments—which is overkill for most sites.
            <br /><br />
            Next Inline Editor offers a super user-friendly alternative. Simply log in and browse the front-end of the live website. Click directly on the text or images you want to change, and hit save. The changes commit back to GitHub automatically and go live instantly. No CMS. No admin panel. No rebuilds. It’s 100% true WYSIWYG editing, right on the live site.
          </>
        }
        features={[
          "Click-to-edit on any text element",
          "Inline image replacement",
          "GitHub-backed persistence",
          "Zero configuration needed",
          "Works with App Router & Pages Router",
          "MIT Licensed",
          "Legacy Design System",
        ]}
      />

      <ImageSplitSectionOld
        headline="How it works."
        body="Wrap any text or image in the editor component. When an authenticated user clicks on the element, it becomes editable in place. On save, the component fires a server action that commits the change directly to your GitHub repository. The page updates instantly with no rebuild required — changes flow through ISR or on-demand revalidation."
        image="/assets/edit-fields.png"
        imageAlt="Next Inline Editor editing interface"
      />

      <LinksRowOld
        links={[
          { label: "View on NPM", href: "https://www.npmjs.com/package/next-inline-editor", primary: true },
          { label: "View on GitHub", href: "https://github.com/madebytie/next-inline-editor" },
        ]}
      />

      <CallToAction href="/labs" />
    </>
  );
}
