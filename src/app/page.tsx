import HomeHero from "@/components/sections/HomeHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Introduction from "@/components/sections/Introduction";
import HomeServices from "@/components/sections/HomeServices";
import HomeFeaturedTestimonial from "@/components/sections/HomeFeaturedTestimonial";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Pricing from "@/components/sections/Pricing";
import ClientRoster from "@/components/sections/ClientRoster";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <Introduction />
      <FeaturedProjects />
      <ClientRoster />
      <HomeFeaturedTestimonial />
      <HomeServices />
      <Pricing />
      <FAQ />
    </>
  );
}
