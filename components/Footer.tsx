import Link from "next/link";
import { Globe, Mail, MessageCircle, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md relative z-10">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm">
                LG
              </span>
              Liquid<span className="font-light text-white/70">Glass</span>
            </Link>
            <p className="text-white/50 text-sm text-center md:text-left max-w-xs">
              Membangun pengalaman antarmuka digital yang modern, interaktif, dan responsif.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="#work" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <Globe size={20} />
            </a>
            <a href="#" className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <Mail size={20} />
            </a>
            <a href="#" className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <User size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Kelompok Liquid Glass. All rights reserved. Tugas Mata Kuliah UI/UX.
          </p>
        </div>
      </div>
    </footer>
  );
}
