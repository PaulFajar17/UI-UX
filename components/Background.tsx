"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  { color: "#ffc23d", className: "top-[-12%] left-[-8%] w-[42vw] h-[42vw]", x: [0, 60, 0], y: [0, 40, 0], d: 22 },
  { color: "#ff6b57", className: "top-[35%] right-[-12%] w-[36vw] h-[36vw]", x: [0, -50, 0], y: [0, 60, 0], d: 26 },
  { color: "#22c3a4", className: "bottom-[-15%] left-[20%] w-[40vw] h-[40vw]", x: [0, 40, 0], y: [0, -50, 0], d: 30 },
];

export function Background() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-cream">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] opacity-25 ${b.className}`}
          style={{ backgroundColor: b.color }}
          animate={reduce ? undefined : { x: b.x, y: b.y, scale: [1, 1.08, 1] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* titik-titik halus supaya latar tidak polos */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(35,27,58,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}
