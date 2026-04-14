import HomeHero from "@/components/sections/HomeHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Introduction from "@/components/sections/Introduction";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <Introduction />
      <FeaturedProjects />
      <Pricing />
      <FAQ />
    </>
  );
}
