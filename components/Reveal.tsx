"use client";

import { motion } from "framer-motion";

/** Muncul dengan efek pegas saat masuk layar. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 170, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}
