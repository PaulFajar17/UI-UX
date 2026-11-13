"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Ilustrasi kosong: tiga frame kosong yang melayang pelan. */
export function ComingSoon() {
  const reduce = useReducedMotion();
  const frames = [
    { rotate: -10, x: -90, color: "#ffc23d", delay: 0 },
    { rotate: 0, x: 0, color: "#8b77ff", delay: 0.3 },
    { rotate: 10, x: 90, color: "#22c3a4", delay: 0.6 },
  ];

  return (
    <div className="relative mx-auto h-56 w-full max-w-sm" aria-hidden="true">
      {frames.map((f, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-4 -ml-[56px] h-44 w-28 rounded-[22px] border-2 border-ink bg-paper p-2 shadow-[5px_5px_0_0_var(--color-ink)]"
          style={{ zIndex: i === 1 ? 2 : 1 }}
          initial={{ opacity: 0, y: 30, rotate: 0, x: 0 }}
          animate={{
            opacity: 1,
            rotate: f.rotate,
            x: f.x,
            y: reduce ? 0 : [0, -10, 0],
          }}
          transition={{
            opacity: { delay: f.delay },
            rotate: { type: "spring", stiffness: 160, damping: 14, delay: f.delay },
            x: { type: "spring", stiffness: 160, damping: 14, delay: f.delay },
            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: f.delay },
          }}
        >
          <div className="h-full w-full rounded-[14px] border-2 border-dashed border-ink/30 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: f.color }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
