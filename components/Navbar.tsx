"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Tim", href: "/#tim" },
  { name: "Karya", href: "/karya" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // "Karya" aktif di halaman karya dan halaman detail proyek
  const isActive = (href: string) =>
    href === "/karya" && ["/karya", "/wisata", "/pendidikan"].some((p) => pathname?.startsWith(p));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300", scrolled ? "pt-3" : "pt-5")}>
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={cn(
            "rounded-full border-2 border-ink bg-paper/90 backdrop-blur px-3 py-2 pl-4 flex items-center justify-between transition-shadow",
            scrolled ? "shadow-[4px_4px_0_0_var(--color-ink)]" : "shadow-none"
          )}
        >
          <Link href="/" className="font-display text-lg font-bold tracking-tight flex items-center gap-2 text-ink">
            <motion.span
              whileHover={{ rotate: -12, scale: 1.1 }}
              className="w-8 h-8 rounded-full bg-coral border-2 border-ink flex items-center justify-center text-paper text-xs"
            >
              UX
            </motion.span>
            Kelompok<span className="font-normal text-ink-soft">4</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold px-4 py-2 rounded-full text-ink hover:bg-sun transition-colors",
                  isActive(link.href) && "bg-sun"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-full text-ink hover:bg-sun transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              className="absolute top-full left-0 right-0 mt-2 p-3 card-soft md:hidden flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ink font-semibold p-3 text-center rounded-2xl hover:bg-sun transition-colors"
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
