import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";
import CaseStudyTestimonial from "@/components/sections/CaseStudyTestimonial";
import CaseStudyDeliverables from "@/components/sections/CaseStudyDeliverables";
import ServiceBreakdown from "@/components/sections/ServiceBreakdown";

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
        image="/projects/jennings-brands/j5-volleyball.jpg"
        imagePosition="bottom left"
      />

      <CaseStudyIntro
        headline="Ecommerce overhaul for an Olympian founded sports gear brand"
        description="Casey and Kerri set out to build a product line that lived at the intersection of functional, fashionable, and affordable. Their initial Shopify store had taken them out of the gate, but it was holding the brand back."
        client="Jennings Brands"
        industry="Sports Gear eCommerce"
        timeline="4 Weeks"
      />

      <CaseStudyDeliverables
        description="The founders needed a site that matched the level they themselves represented. The brief was clear: migrate to WooCommerce, lift the design to match the brand, and wire in the marketing infrastructure they didn't have yet. All inside a four-week launch window."
        categories={[
          {
            category: "Website",
            items: [
              "eCommerce Website",
              "Transition from Shopify to WooCommerce",
              "Product Marketing & Sales Strategy",
              "Product Photography",
            ],
          },
          {
            category: "Automation / Growth",
            items: [
              "Abandoned Cart Followup Sequence",
              "List Building System",
              "Personalized Email Marketing / Automation",
              "Retargeting Ads",
            ],
          },
        ]}
      />

      <CaseStudySplitContent
        eyebrow="• Context"
        heading="From a starter Shopify store to a full ecommerce engine"
        body="The team came in with a working but limited Shopify setup that didn't reflect the caliber of the founders or the quality of the products. The brief was a complete overhaul - migrate the storefront off Shopify and onto WooCommerce, lift the design and product presentation to match the brand, and stitch in the marketing and analytics infrastructure they didn't have yet. All inside a four-week launch window."
        images={["/projects/jennings-brands/j5-logo-tm-blue.png"]}
        imageAlt="Jennings Brands logo"
        imagePosition="right"
        bgColor="var(--bg-secondary)"
        smallLogo
      />

      <section style={{ backgroundColor: "var(--bg-secondary)", padding: "2rem 1.25rem 5rem" }}>
        <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {/* Top row: 3 images */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              <img
                src="/projects/jennings-brands/jennings-2.png"
                alt="Jennings Brands product shot 1"
                style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
              />
              <img
                src="/projects/jennings-brands/jennings-3.png"
                alt="Jennings Brands product shot 2"
                style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
              />
              <img
                src="/projects/jennings-brands/jennings-4.png"
                alt="Jennings Brands product shot 3"
                style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
              />
            </div>
            {/* Bottom row: wide image 75% + jennings-5 25% */}
            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "1.5rem" }}>
              <img
                src="/projects/jennings-brands/jennings-6.png"
                alt="Jennings Brands wide shot"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "350px",
                  objectFit: "cover",
                  objectPosition: "center center",
                  borderRadius: "16px",
                  display: "block",
                }}
              />
              <img
                src="/projects/jennings-brands/red-carpet.jpg"
                alt="Jennings Brands red carpet"
                style={{ width: "100%", height: "100%", maxHeight: "350px", objectFit: "cover", borderRadius: "12px", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <CaseStudyTestimonial
        quote="Jennings Brands needed a complete website overhaul and of course we needed it done yesterday. We decided to go with Tie based on his experience and his promise to execute within our timeline. In addition to a friendly, professional website, we also got the other 'must have' components like analytic tools, social media integration and ecommerce - all mobile ready and ahead of schedule. I would have Tie do my next website in a heartbeat. Thanks for the knowledge, attention to detail and execution!"
        author="Greg Jones"
        role="Co-Founder, Jennings Brands"
      />

      <CaseStudySplitContent
        eyebrow="• Website"
        heading="Storefront, sales engine, and growth stack - shipped ahead of schedule"
        body="Beyond the new ecommerce site itself, the buildout included custom product photography, a full Shopify-to-WooCommerce migration, an abandoned cart followup sequence, a list-building system, personalized email marketing automation, and retargeting ads. Analytics and social integration were wired in from day one. The whole stack went live mobile-ready and ahead of the four-week deadline."
        layout="text-split"
        bgColor="var(--bg-primary)"
      />

      <CaseStudyDeviceShowcase
        type="desktop"
        desktopImage="/projects/jennings-brands/jennings-brands-website-mockup.png"
        desktopAlt="Jennings Brands ecommerce website"
        floating
      />

      <div style={{ height: "6rem" }} />
    </>
  );
}
