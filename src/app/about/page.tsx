import AboutHero from "@/components/sections/AboutHero";
import AboutStats from "@/components/sections/AboutStats";
import Philosophy from "@/components/sections/Philosophy";
import AboutGlobal from "@/components/sections/AboutGlobal";
import CallToAction from "@/components/sections/CallToAction";

export default function AboutPage() {
  return (
    <main>
      <AboutHero 
        title="I design and build for where you’re going"
        subtitle="...and help make sure you get there too. I'm here with you for the long run."
        image="/assets/tie-office-wall.png"
      />

      <AboutStats />
      
      <Philosophy />

      <CallToAction href="/start" />

      <AboutGlobal />
    </main>
  );
}
