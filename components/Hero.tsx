"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words = ["Kami", "merancang", "pengalaman", "digital", "yang", "jelas", "dan", "inklusif."];
const strip = ["Riset Pengguna", "Wireframe", "UI Design", "Prototyping", "Usability Test", "Figma", "Design System"];

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 overflow-x-clip">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="chip bg-sun mb-6"
        >
          Kelompok 4 · Fakultas Teknik · Universitas Negeri Malang
        </motion.span>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-ink">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 + i * 0.06 }}
              className={`inline-block mr-[0.25em] ${w === "inklusif." ? "text-coral" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-ink-soft max-w-xl mx-auto"
        >
          Empat mahasiswa, satu tim. Kenali anggota kami, lalu lihat karya UI/UX yang sudah kami selesaikan di Figma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a href="#tim" className="btn-pop">
            Kenalan dengan tim <ArrowDown size={18} />
          </a>
          <a href="/karya" className="btn-ghost">
            Lihat karya
          </a>
        </motion.div>
      </div>

      {/* pita berjalan */}
      <div className="mt-16 -rotate-2 border-y-2 border-ink bg-ink text-cream overflow-hidden">
        <div className="flex w-max animate-marquee py-3">
          {[...strip, ...strip].map((s, i) => (
            <span key={i} className="font-display text-lg font-semibold px-6 flex items-center gap-6">
              {s} <span className="text-sun">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
