"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Factory } from "lucide-react";

export function WorkSection() {
  const works = [
    {
      title: "Pendidikan",
      description: "Platform e-learning interaktif dengan gamifikasi untuk meningkatkan minat belajar siswa sekolah dasar.",
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      href: "/pendidikan",
      color: "group-hover:shadow-purple-500/20",
    },
    {
      title: "Industri",
      description: "Sistem manajemen inventaris otomatis untuk perusahaan manufaktur dengan visualisasi data real-time.",
      icon: <Factory className="w-8 h-8 text-blue-400" />,
      href: "/industri",
      color: "group-hover:shadow-blue-500/20",
    },
  ];

  return (
    <section id="work" className="py-24 min-h-screen flex flex-col justify-center relative">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Our Work
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Eksplorasi proyek-proyek unggulan kami di berbagai sektor, 
            menggabungkan desain intuitif dengan teknologi mutakhir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <Link href={work.href} className="block group h-full">
                <div className={`glass-card p-8 h-full flex flex-col transition-all duration-500 hover:scale-[1.02] ${work.color}`}>
                  <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {work.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {work.title}
                  </h3>
                  
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {work.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors mt-auto">
                    Lihat Proyek 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
