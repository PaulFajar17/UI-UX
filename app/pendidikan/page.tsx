import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pendidikan | Portofolio Kelompok 4",
  description: "Proyek UI/UX Pendidikan, segera hadir.",
};

export default function PendidikanPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />

      <section className="flex-1 flex items-center pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 w-full text-center">
          <ComingSoon />
          <span className="chip bg-paper mt-10">
            <Clock size={12} /> Segera hadir
          </span>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-extrabold tracking-tight text-ink">Pendidikan</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-lg mx-auto">
            Proyek ini belum dimulai. Halaman ini akan diisi dengan desain UI/UX setelah prosesnya berjalan.
          </p>
          <Link href="/karya" className="btn-ghost mt-8">
            <ArrowLeft size={18} /> Kembali ke karya
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
