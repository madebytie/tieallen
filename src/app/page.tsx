import HomeHero from "@/components/sections/HomeHero";
import Introduction from "@/components/sections/Introduction";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Introduction />
      <FeaturedProjects />
      <Pricing />
      <FAQ />
    </>
  );
}
