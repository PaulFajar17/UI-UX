"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

/** Ajakan di beranda menuju halaman Karya. */
export function KaryaCTA() {
  const thumbs = projects.flatMap((p) => p.thumbs ?? []);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
        >
          <Link
            href="/karya"
            className="group card-soft overflow-hidden grid md:grid-cols-[1fr_auto] items-center gap-8 p-8 md:p-10 bg-ink text-cream"
          >
            <div>
              <span className="chip bg-sun">Karya</span>
              <h2 className="font-display mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                Lihat portofolio kami
              </h2>
              <p className="mt-3 text-cream/70 max-w-md">
                {projects.length} proyek UI/UX: {projects.map((p) => p.title).join(" dan ")}.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-sun">
                Buka halaman karya
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="hidden md:flex justify-center pr-4">
              {thumbs.map((src, k) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-28 h-52 object-cover object-top rounded-2xl border-2 border-cream/80 transition-transform duration-500 group-hover:-translate-y-2"
                  style={{
                    transform: `rotate(${(k - 1) * 8}deg) translateY(${k === 1 ? -6 : 10}px)`,
                    marginLeft: k ? -28 : 0,
                    zIndex: k === 1 ? 2 : 1,
                  }}
                />
              ))}
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
