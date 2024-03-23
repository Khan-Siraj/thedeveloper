
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Skills from "@/app/ui/skills";
import Contact from "@/app/ui/contact";
export default function Home() {
  return (
    <main className="w-full h-screen BG-1">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
