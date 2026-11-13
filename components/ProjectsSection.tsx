"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Landmark, GraduationCap } from "lucide-react";
import { projects } from "@/lib/data";

const icons = { wisata: Landmark, pendidikan: GraduationCap } as const;

export function ProjectsSection() {
  return (
    <section id="karya" className="pt-36 md:pt-44 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="mb-12"
        >
          <span className="chip bg-mint text-ink">Karya</span>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-extrabold tracking-tight text-ink">
            Portofolio kami
          </h1>
          <p className="mt-3 text-ink-soft text-lg max-w-xl">
            Proyek UI/UX yang kami kerjakan bersama di Figma. Klik untuk melihat detailnya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const Icon = icons[p.slug as keyof typeof icons] ?? Landmark;
            const done = p.status === "selesai";
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
                whileHover={{ rotate: 0, y: -6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 200, damping: 18, delay: i * 0.08 }}
              >
                <Link href={`/${p.slug}`} className="group block card-soft overflow-hidden h-full">
                  <div
                    className="relative h-56 border-b-2 border-ink flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.thumbs ? (
                      <div className="absolute inset-x-0 top-8 flex justify-center">
                        {p.thumbs.map((src, k) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={src}
                            src={src}
                            alt=""
                            className="w-28 h-52 object-cover object-top rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-transform duration-500 group-hover:-translate-y-2"
                            style={{
                              transform: `rotate(${(k - 1) * 8}deg) translateY(${k === 1 ? -6 : 10}px)`,
                              marginLeft: k ? -28 : 0,
                              zIndex: k === 1 ? 2 : 1,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        className="w-24 h-24 rounded-[28px] bg-paper border-2 border-ink flex items-center justify-center shadow-[4px_4px_0_0_var(--color-ink)]"
                        whileHover={{ rotate: -10, scale: 1.08 }}
                      >
                        <Icon size={44} className="text-ink" />
                      </motion.div>
                    )}
                    <span className={`chip absolute top-4 left-4 ${done ? "bg-sun" : "bg-paper"}`}>
                      {done ? "✓ Selesai" : (<><Clock size={12} /> Segera hadir</>)}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink-soft mb-1">{p.kicker}</p>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">{p.title}</h3>
                      <span className="shrink-0 w-11 h-11 rounded-full border-2 border-ink flex items-center justify-center transition-all duration-300 group-hover:bg-ink group-hover:text-cream group-hover:rotate-45">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                    <p className="mt-3 text-ink-soft leading-relaxed">{p.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
