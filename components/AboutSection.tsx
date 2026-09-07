"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const members = [
    {
      name: "Budi Santoso",
      role: "UI/UX Designer",
      initials: "BS",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Siti Aminah",
      role: "Frontend Developer",
      initials: "SA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Andi Saputra",
      role: "Backend Developer",
      initials: "AS",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg mb-8">
            Kami adalah kelompok mahasiswa yang berfokus pada desain dan pengembangan antarmuka web modern. Proyek ini disusun untuk memenuhi tugas mata kuliah Desain Antarmuka Pengguna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="glass-card p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
                <div className={`w-24 h-24 rounded-full mb-4 bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl font-bold text-white tracking-wider">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-white/60 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
