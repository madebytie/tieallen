import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyQuote from "@/components/sections/CaseStudyQuote";

export const metadata: Metadata = {
  title: "Jennings Brands - Vizonos",
  description:
    "How I rebuilt the Jennings Brands ecommerce site for an Olympic gold medalist's utilitarian sports gear startup - on a 4-week clock.",
};

export default function JenningsBrands() {
  return (
    <>
      <ProjectHero
        title="Olympic-Founded Sports Gear Startup"
        tags={["eCommerce", "Web Design", "Growth & Automation"]}
        image="/projects/jennings-brands/jennings-brands-website-mockup.png"
      />

      <CaseStudyIntro
        headline="A complete ecommerce overhaul for Jennings Brands - the utilitarian sports gear line founded by Olympic gold medalist Kerri Walsh Jennings and beach volleyball legend Casey Jennings"
        description="Casey and Kerri set out to build a product line that lived at the intersection of functional, fashionable, and affordable. Their initial Shopify store had taken them out of the gate, but it was holding the brand back. They needed a site that matched the level the founders themselves represented - and they needed it fast."
        client="Jennings Brands"
        industry="eCommerce / Lifestyle / Sports Gear"
        timeline="4 Weeks"
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="From a starter Shopify store to a full ecommerce engine"
        body="The team came in with a working but limited Shopify setup that didn't reflect the caliber of the founders or the quality of the products. The brief was a complete overhaul - migrate the storefront off Shopify and onto WooCommerce, lift the design and product presentation to match the brand, and stitch in the marketing and analytics infrastructure they didn't have yet. All inside a four-week launch window."
        images={["/projects/jennings-brands/j5-logo-tm-blue.png"]}
        imageAlt="Jennings Brands logo"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/jennings-brands/jennings-brands-website-mockup.png"
        desktopAlt="Jennings Brands ecommerce website"
        bgColor="var(--bg-secondary)"
      />

      <CaseStudySplitContent
        eyebrow="• Deliverables"
        heading="Storefront, sales engine, and growth stack - shipped ahead of schedule"
        body="Beyond the new ecommerce site itself, the buildout included custom product photography, a full Shopify-to-WooCommerce migration, an abandoned cart followup sequence, a list-building system, personalized email marketing automation, and retargeting ads. Analytics and social integration were wired in from day one. The whole stack went live mobile-ready and ahead of the four-week deadline."
        imagePosition="left"
        bgColor="var(--bg-primary)"
      />

      <CaseStudyQuote
        quote="Jennings Brands needed a complete website overhaul and of course we needed it done yesterday. We decided to go with Tie based on his experience and his promise to execute within our timeline. In addition to a friendly, professional website, we also got the other 'must have' components like analytic tools, social media integration and ecommerce - all mobile ready and ahead of schedule. I would have Tie do my next website in a heartbeat. Thanks for the knowledge, attention to detail and execution!"
        author="Greg Jones"
        role="Co-Founder"
        company="Jennings Brands"
        variant="dark"
      />
    </>
  );
}
