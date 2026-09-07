"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:py-6",
        scrolled ? "pt-2 md:pt-4" : ""
      )}
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm">
              LG
            </span>
            Liquid<span className="font-light text-white/70">Glass</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-2 p-4 glass-card md:hidden flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white font-medium p-3 text-center rounded-xl hover:bg-white/10 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
