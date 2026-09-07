"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim! (Ini adalah simulasi, tidak ada pesan yang benar-benar dikirim)");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Contact Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hubungi kami untuk pertanyaan, diskusi, atau penawaran kerja sama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Nama</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="glass-input px-4 py-3 text-white placeholder:text-white/30" 
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="glass-input px-4 py-3 text-white placeholder:text-white/30" 
                  placeholder="alamat@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subjek (Opsional)</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="glass-input px-4 py-3 text-white placeholder:text-white/30" 
                  placeholder="Hal yang ingin didiskusikan"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Pesan</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="glass-input px-4 py-3 text-white placeholder:text-white/30 resize-none" 
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="glass-button py-3 mt-2 flex items-center justify-center gap-2 font-medium text-white"
              >
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="p-3 rounded-full bg-white/10 text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email Kami</h4>
                <p className="text-white/60">hello@liquidglass.portfolio</p>
                <p className="text-white/60 text-sm mt-1">Kami akan merespons dalam waktu 1x24 jam.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="p-3 rounded-full bg-white/10 text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Lokasi Kampus</h4>
                <p className="text-white/60">Fakultas Ilmu Komputer</p>
                <p className="text-white/60 text-sm mt-1">Gedung D, Lantai 4. Ruang Lab UI/UX.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
