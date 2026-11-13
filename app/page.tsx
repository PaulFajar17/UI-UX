import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TeamSection } from "@/components/TeamSection";
import { KaryaCTA } from "@/components/KaryaCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />
      <Hero />
      <TeamSection />
      <KaryaCTA />
      <Footer />
    </main>
  );
}
