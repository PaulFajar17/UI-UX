import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      
      {/* Spacer for floating navbar */}
      <div className="h-24"></div>
      
      <WorkSection />
      <AboutSection />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
