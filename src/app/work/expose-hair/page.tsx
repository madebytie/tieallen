import type { Metadata } from "next";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudyIntro from "@/components/sections/CaseStudyIntro";
import CaseStudySplitContent from "@/components/sections/CaseStudySplitContent";
import CaseStudyImageGrid from "@/components/sections/CaseStudyImageGrid";
import CaseStudyDeviceShowcase from "@/components/sections/CaseStudyDeviceShowcase";

export const metadata: Metadata = {
  title: "Expose Hair Salon - made by tie.",
  description:
    "A premium digital home for Cebu City's leading hair salon. Web design and development for Expose Hair Salon.",
};

export default function ExposeHair() {
  return (
    <>
      {/* Hero */}
      <ProjectHero
        title="Cebu's leading hair salon, online."
        tags={["Web Design", "Web Development"]}
        image="/projects/expose-hair/salon-1.jpg"
      />

      {/* Intro */}
      <CaseStudyIntro
        headline="A polished web presence that matches the precision of the salon floor."
        description="Expose Hair Salon is a premium hair destination in the heart of Cebu City - precision cutting, fashion coloring, and treatments led by a husband-and-wife team of master stylists. The site needed to feel as refined as the in-salon experience: a digital extension of the brand that booked clients before they walked through the door."
        client="Expose Hair Salon"
        industry="Beauty / Hair Salon"
        timeline="6 Weeks"
      />

      {/* Wide hero image */}
      <CaseStudyImageGrid
        columns={2}
        images={[
          {
            src: "/projects/expose-hair/salon-2.jpg",
            alt: "Expose Hair Salon interior",
            span: "wide",
            aspectRatio: "16/7",
          },
        ]}
      />

      {/* Discovery */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Discovery"
        heading="Built around the people who make the salon great"
        body="The brief started with the team. Margie and Stephan Zenz built Expose around a single belief - that great hair starts with a great consultation - and the site had to lead with that same human focus. Stylist profiles, services, and the in-salon experience all needed equal weight."
        body2="Research surfaced the moments that mattered: the booking decision, the first-time consultation, and the trust built before a client ever sits in the chair. Every section was structured around moving visitors through that journey."
      />

      {/* Website intro */}
      <CaseStudySplitContent
        layout="text-split"
        eyebrow="• Website"
        heading="A site that mirrors the salon experience - clean, considered, premium."
        body="The site is built around three priorities: showcase the team, communicate the services, and make booking effortless. Generous photography, calm typography, and a confident color palette let the salon's craft do the talking."
        body2="Every page is fully responsive and tuned for the mobile-first audience that drives 80% of beauty bookings - fast load times, clear CTAs, and a tap-to-book flow that turns interest into appointments."
        bgColor="var(--bg-secondary)"
      />

      {/* Live website showcase */}
      <CaseStudyDeviceShowcase
        type="desktop"
        desktopUrl="https://exposehairsalon.ph/"
      />

      {/* Salon photography grid */}
      <CaseStudyImageGrid
        columns={3}
        images={[
          {
            src: "/projects/expose-hair/team-photo.jpg",
            alt: "Expose Hair Salon team",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/expose-hair/salon-3.jpg",
            alt: "Salon interior",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/expose-hair/salon-photo.jpg",
            alt: "Stylist at work",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/expose-hair/margie.jpg",
            alt: "Margie Zenz, master stylist",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/expose-hair/stephan.jpg",
            alt: "Stephan Zenz, master stylist",
            aspectRatio: "4/3",
          },
          {
            src: "/projects/expose-hair/salon-1.jpg",
            alt: "Salon detail",
            aspectRatio: "4/3",
          },
        ]}
      />
    </>
  );
}
