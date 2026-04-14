import HomeHero from "@/components/sections/HomeHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Introduction from "@/components/sections/Introduction";
import HomeFeaturedTestimonial from "@/components/sections/HomeFeaturedTestimonial";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <Introduction />
      <HomeFeaturedTestimonial />
      <FeaturedProjects />
      <Pricing />
      <FAQ />
    </>
  );
}
