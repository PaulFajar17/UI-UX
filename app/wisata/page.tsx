import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Play, Sparkles } from "lucide-react";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LengangGallery } from "@/components/LengangGallery";
import { Reveal } from "@/components/Reveal";
import {
  LENGANG,
  lengangAI,
  lengangFeatures,
  lengangProblems,
  lengangStats,
  lengangStatus,
  lengangSteps,
  projects,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "LENGANG | Portofolio Kelompok 4",
  description:
    "Studi kasus UI/UX LENGANG: layanan informasi keramaian wisata alam dari pemerintah daerah untuk Kota Batu dan Kabupaten Malang.",
};

const project = projects.find((p) => p.slug === "wisata")!;
const GREEN = "#24563f";

function SectionTitle({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <Reveal className="mb-10">
      <span className="chip bg-[#d8eedf]">{kicker}</span>
      <h2 className="font-display mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink">{title}</h2>
      {body && <p className="mt-3 text-ink-soft text-lg max-w-2xl">{body}</p>}
    </Reveal>
  );
}

export default function WisataPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />

      {/* hero */}
      <section className="pt-32 md:pt-36 pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/karya" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink transition-colors">
            <ArrowLeft size={16} /> Kembali ke karya
          </Link>

          <Reveal className="mt-6">
            <div className="flex flex-wrap gap-2">
              <span className="chip bg-sun">✓ Proyek selesai</span>
              <span className="chip">{project.kicker}</span>
            </div>
            <h1 className="font-display mt-5 text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9]" style={{ color: GREEN }}>
              LENGANG
            </h1>
            <p className="mt-4 font-display text-xl md:text-2xl font-semibold text-ink max-w-3xl">
              Cari tempat wisata alam yang lebih tenang, sebelum berangkat.
            </p>
            <p className="mt-4 text-ink-soft text-lg max-w-3xl">{project.summary}</p>
            <p className="mt-3 text-sm text-ink-soft/80 max-w-3xl italic">{LENGANG.fullTitle}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={LENGANG.protoWisatawan} target="_blank" rel="noopener noreferrer" className="btn-pop">
                <Play size={16} /> Prototipe wisatawan
              </a>
              <a href={LENGANG.protoPemda} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Play size={16} /> Prototipe Pemda
              </a>
              <a href={LENGANG.figmaFile} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                File Figma <ExternalLink size={16} />
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {lengangStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="card-soft p-5 h-full">
                  <p className="font-display text-3xl md:text-4xl font-extrabold" style={{ color: GREEN }}>{s.value}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* masalah */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            kicker="Masalah"
            title="Baru tahu padat setelah sampai"
            body="Wisatawan sering baru tahu coban, sumber mata air, atau bumi perkemahan sedang padat setelah tiba di lokasi. Ada empat akar masalah:"
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {lengangProblems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card-soft p-6 h-full flex gap-4">
                  <span className="font-display text-3xl font-extrabold text-coral shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* galeri */}
      <section id="layar" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            kicker="Desain"
            title="Layar dari Figma"
            body="Tiga kelompok layar: alur awal, aplikasi wisatawan, dan sisi pemerintah daerah. Layar panjang bisa digulir di dalam bingkai HP. Geser kartu untuk pindah layar, atau coba langsung prototipe interaktifnya."
          />
          <Reveal>
            <LengangGallery />
          </Reveal>
        </div>
      </section>

      {/* status + AI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            kicker="Tourism Crowd Intelligence"
            title="Empat modul AI, satu status yang jujur"
            body="AI bekerja di balik antarmuka biasa tanpa chatbot. Ia menyarankan, manusia yang memutuskan. Setiap status memakai teks, ikon, dan warna sekaligus, lengkap dengan label sumber dan waktu pembaruan."
          />
          <Reveal className="mb-8 flex flex-wrap gap-2">
            {lengangStatus.map((s) => (
              <span
                key={s.label}
                className="rounded-full border-2 border-ink/80 px-4 py-1.5 text-sm font-bold"
                style={{ backgroundColor: s.color, color: s.ink }}
              >
                {s.label}
              </span>
            ))}
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lengangAI.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="card-soft p-6 h-full flex flex-col">
                  <span className="w-11 h-11 rounded-2xl border-2 border-ink flex items-center justify-center" style={{ backgroundColor: "#d8eedf" }}>
                    <Sparkles size={20} style={{ color: GREEN }} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">{m.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft flex-1">{m.body}</p>
                  <p className="mt-4 rounded-2xl bg-cream border border-ink/10 p-3 text-xs text-ink">“{m.example}”</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* fitur */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Fitur" title="12 fitur untuk dua sisi pengguna" />
          <Reveal className="flex flex-wrap gap-3">
            {lengangFeatures.map((f, i) => (
              <span
                key={f}
                className="rounded-full border-2 border-ink px-4 py-2 font-semibold text-ink bg-paper shadow-[3px_3px_0_0_var(--color-ink)]"
                style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
              >
                {f}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* alur pengguna */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            kicker="Alur pengguna"
            title="Dari wisatawan, ke AI, ke Dinas"
            body="Empat jalur: wisatawan, sistem AI, pengelola destinasi, dan Dinas Pariwisata. Garis putus-putus adalah aliran data antarperan."
          />
          <Reveal>
            <a href="/lengang/alur-pengguna.jpg" target="_blank" rel="noopener noreferrer" className="block card-soft p-3 overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lengang/alur-pengguna.jpg" alt="Diagram alur pengguna LENGANG" className="min-w-[760px] w-full rounded-2xl" />
            </a>
            <p className="mt-2 text-sm text-ink-soft">Klik diagram untuk melihat ukuran penuh.</p>
          </Reveal>
        </div>
      </section>

      {/* design thinking */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Metode" title="Design Thinking" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lengangSteps.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="card-soft p-5 h-full" style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
                  <span className="font-display text-sm font-bold text-ink-soft">0{i + 1}</span>
                  <h3 className="font-display mt-1 text-xl font-bold" style={{ color: GREEN }}>{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
