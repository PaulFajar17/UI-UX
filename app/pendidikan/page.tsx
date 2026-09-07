import Link from "next/link";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function PendidikanPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4">
        <div className="max-w-3xl w-full glass-card p-10 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Proyek Pendidikan</h1>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Halaman ini adalah placeholder untuk studi kasus proyek Pendidikan. 
            Platform e-learning interaktif dengan gamifikasi untuk meningkatkan minat belajar siswa sekolah dasar.
          </p>
          
          <Link href="/#work" className="inline-flex items-center gap-2 glass-button px-6 py-3 text-white font-medium">
            <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
