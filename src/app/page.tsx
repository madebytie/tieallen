import HomeHero from "@/components/sections/HomeHero";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProjects />
      <Pricing />
      <FAQ />
    </>
  );
}
