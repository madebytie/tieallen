import AboutHero from "@/components/sections/AboutHero";
import AboutStats from "@/components/sections/AboutStats";
import Philosophy from "@/components/sections/Philosophy";
import AboutGlobal from "@/components/sections/AboutGlobal";

export default function AboutPage() {
  return (
    <main>
      <AboutHero 
        title="I design and build for where you’re going"
        subtitle="...and help make sure you get there too. I'm here with you for the long run."
        image="/assets/Gemini_Generated_Image_x80i5lx80i5lx80i.jpeg"
      />

      <AboutStats />
      
      <Philosophy />

      <AboutGlobal />
    </main>
  );
}
