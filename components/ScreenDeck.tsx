"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Screen, ScreenGroup } from "@/lib/data";

/**
 * Galeri layar Figma bergaya tumpukan kartu:
 * - geser frame depan (atau tombol / panah keyboard) untuk pindah layar
 * - daftar indeks di samping bisa diklik
 * - panel info ikut berganti sesuai layar aktif
 * - layar panjang bisa digulir di dalam bingkai HP
 */
export function ScreenDeck({ group }: { group: ScreenGroup }) {
  const { screens, accent, proto } = group;
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const n = screens.length;
  const current = screens[active];

  const go = (i: number) => {
    const target = (i + n) % n;
    setDir(target > active || (active === n - 1 && target === 0) ? 1 : -1);
    setActive(target);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) go(active + 1);
    else if (info.offset.x > 80 || info.velocity.x > 500) go(active - 1);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
      {/* tumpukan frame */}
      <div
        className="relative h-[660px] rounded-[36px] border-2 border-ink overflow-hidden outline-none"
        style={{ backgroundColor: accent }}
        tabIndex={0}
        aria-label="Galeri layar. Panah kiri/kanan untuk pindah layar."
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1);
          if (e.key === "ArrowLeft") go(active - 1);
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#c9f26b]/20 blur-3xl" />

        {screens.map((s, i) => {
          const pos = (i - active + n) % n; // 0 = depan
          const visible = pos < 3;
          const isFront = pos === 0;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ width: 260, marginLeft: -130, marginTop: -305, zIndex: 10 - pos }}
              initial={false}
              animate={{
                x: pos * 34,
                y: pos * -10,
                rotate: pos * 4,
                scale: 1 - pos * 0.07,
                opacity: visible ? 1 - pos * 0.2 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <motion.div
                drag={isFront ? "x" : false}
                dragSnapToOrigin
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                whileDrag={{ rotate: dir * 2, scale: 1.03 }}
                style={{ touchAction: "pan-y" }}
                className={isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}
              >
                <PhoneFrame screen={s} scrollable={isFront} />
              </motion.div>
            </motion.div>
          );
        })}

        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-20">
          <button onClick={() => go(active - 1)} className="btn-ghost !p-3" aria-label="Layar sebelumnya">
            <ChevronLeft size={20} />
          </button>
          <span className="chip bg-paper hidden sm:inline-flex">Geser untuk pindah · gulir untuk lihat isi</span>
          <button onClick={() => go(active + 1)} className="btn-pop !p-3" aria-label="Layar berikutnya">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* panel info + indeks */}
      <div className="flex flex-col gap-5">
        <div className="card-soft p-6 overflow-hidden">
          <div className="flex items-center justify-between text-sm font-semibold text-ink-soft">
            <span>{group.label}</span>
            <span className="font-display text-ink">
              {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-ink/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: accent }}
              initial={false}
              animate={{ width: `${((active + 1) / n) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </div>
          <div className="relative mt-5 min-h-[104px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: dir * 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: dir * -24 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <h3 className="font-display text-2xl font-bold text-ink">{current.title}</h3>
                <p className="mt-2 text-ink-soft">{current.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          {proto && (
            <a href={proto} target="_blank" rel="noopener noreferrer" className="btn-pop mt-4">
              <Play size={16} /> Coba prototipe alur ini
            </a>
          )}
        </div>

        <ol className="card-soft p-2 flex flex-col max-h-[380px] overflow-y-auto">
          {screens.map((s, i) => (
            <li key={i}>
              <button onClick={() => go(i)} className="relative w-full flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left">
                {i === active && (
                  <motion.span
                    layoutId={`pill-${group.id}`}
                    className="absolute inset-0 rounded-2xl border-2 border-ink bg-[#d8eedf]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative font-display text-sm font-bold text-ink/50 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`relative font-semibold ${i === active ? "text-ink" : "text-ink-soft"}`}>{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function PhoneFrame({ screen, scrollable }: { screen: Screen; scrollable: boolean }) {
  return (
    <div className="relative w-[260px] h-[540px] rounded-[40px] border-[3px] border-ink bg-ink p-2 shadow-[8px_8px_0_0_rgba(35,27,58,0.9)] select-none">
      <div
        className={`relative h-full w-full rounded-[32px] bg-[#f6f6f2] ${scrollable ? "overflow-y-auto" : "overflow-hidden"} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {screen.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={screen.image} alt={`Layar ${screen.title}`} className="block w-full h-auto" draggable={false} />
        ) : (
          <div className="h-full flex items-center justify-center p-6 text-center font-display font-bold text-ink-soft">
            {screen.title}
          </div>
        )}
      </div>
    </div>
  );
}
