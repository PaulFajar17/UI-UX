import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Karya | Portofolio Kelompok 4",
  description: "Proyek UI/UX Kelompok 4: LENGANG (Wisata Government) dan Pendidikan.",
};

export default function KaryaPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
