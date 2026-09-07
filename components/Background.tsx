"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-[#05050f]" />
      
      {/* Animated Blobs / Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[100px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[100px]"
      />
    </div>
  );
}
