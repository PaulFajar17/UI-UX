"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Hand, MousePointerClick, UserRound } from "lucide-react";
import { members, TEAM_NAME, TEAM_ORIGIN, type Member } from "@/lib/data";

const CARD_W = 260;
const CARD_H = 360;

/**
 * Tumpukan kartu profil anggota tim.
 * - Geser kartu teratas (atau tombol panah) untuk ganti anggota; latar ikut warna kartu.
 * - Klik kartu untuk membalik: belakang kartu berisi nama, NIM, dan role.
 */
export function TeamSection() {
  const [order, setOrder] = useState(() => members.map((_, i) => i));
  const [flipped, setFlipped] = useState(false);
  const topIndex = order[0];
  const top = members[topIndex];

  const next = () => {
    setFlipped(false);
    setOrder((o) => [...o.slice(1), o[0]]);
  };
  const prev = () => {
    setFlipped(false);
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
  };
  const goTo = (idx: number) => {
    setFlipped(false);
    setOrder((o) => {
      const k = o.indexOf(idx);
      return [...o.slice(k), ...o.slice(0, k)];
    });
  };

  return (
    <motion.section
      id="tim"
      initial={false}
      animate={{ backgroundColor: top.tint }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-24 scroll-mt-16 border-y-2 border-ink overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
        {/* teks */}
        <div>
          <span className="chip bg-paper">Tim Kami</span>
          <h2 className="font-display mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1]">
            Kenalan dengan{" "}
            <span className="relative inline-block">
              tim kami
              <motion.span
                className="absolute left-0 -bottom-1 h-3 w-full rounded-full -z-10"
                animate={{ backgroundColor: top.color }}
                transition={{ duration: 0.5 }}
              />
            </span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft max-w-md">
            Empat mahasiswa {TEAM_ORIGIN.split(" · ").join(", ")}. Balik kartunya untuk melihat
            nama, NIM, dan role masing-masing.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button onClick={prev} className="btn-ghost !p-3" aria-label="Anggota sebelumnya">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="btn-pop !p-3" aria-label="Anggota berikutnya">
              <ChevronRight size={20} />
            </button>
            <div className="ml-3 flex gap-2">
              {members.map((m, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Lihat anggota ${i + 1}`}
                  className="h-3 rounded-full border-2 border-ink transition-all duration-300"
                  style={{ width: i === topIndex ? 32 : 12, backgroundColor: i === topIndex ? m.color : "transparent" }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5"><Hand size={16} /> Geser kartu untuk ganti</span>
            <span className="flex items-center gap-1.5"><MousePointerClick size={16} /> Klik kartu untuk membalik</span>
          </div>
        </div>

        {/* tumpukan kartu */}
        <div
          className="relative mx-auto h-[440px] w-full max-w-[380px] outline-none"
          style={{ perspective: 1400 }}
          tabIndex={0}
          aria-label="Kartu anggota tim. Panah kiri/kanan untuk ganti, Enter untuk membalik."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
        >
          {members.map((m, i) => (
            <ProfileCard
              key={i}
              member={m}
              number={i + 1}
              total={members.length}
              pos={order.indexOf(i)}
              flipped={flipped && i === topIndex}
              onFlip={() => setFlipped((f) => !f)}
              onSwipe={next}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProfileCard({
  member,
  number,
  total,
  pos,
  flipped,
  onFlip,
  onSwipe,
}: {
  member: Member;
  number: number;
  total: number;
  pos: number;
  flipped: boolean;
  onFlip: () => void;
  onSwipe: () => void;
}) {
  const isTop = pos === 0;
  const x = useMotionValue(0);
  const dragRotate = useTransform(x, [-240, 240], [-14, 14]);
  // Klik = balik kartu, tapi abaikan klik yang sebenarnya akhir dari geseran.
  const dragged = useRef(false);
  const no = String(number).padStart(2, "0");

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 600) onSwipe();
  };

  const face = "absolute inset-0 rounded-[28px] border-2 border-ink overflow-hidden shadow-[6px_6px_0_0_var(--color-ink)]";
  const hidden = { backfaceVisibility: "hidden" as const, WebkitBackfaceVisibility: "hidden" as const };

  return (
    // lapisan luar: posisi kipas di tumpukan
    <motion.div
      className="absolute top-4 left-1/2"
      style={{ width: CARD_W, marginLeft: -CARD_W / 2, zIndex: 20 - pos, originX: 0.5, originY: 1 }}
      initial={false}
      animate={{ rotate: pos * 6, scale: 1 - pos * 0.05, y: pos * 4 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
    >
      {/* lapisan tengah: drag */}
      <motion.div
        style={{ x, rotate: dragRotate }}
        drag={isTop ? "x" : false}
        dragSnapToOrigin
        dragElastic={0.7}
        onPointerDown={() => (dragged.current = false)}
        onDragStart={() => (dragged.current = true)}
        onDragEnd={handleDragEnd}
        onClick={() => {
          if (isTop && !dragged.current) onFlip();
        }}
        whileHover={isTop ? { y: -8 } : undefined}
        whileDrag={{ scale: 1.04 }}
        className={isTop ? "cursor-grab active:cursor-grabbing" : ""}
      >
        {/* lapisan dalam: balik kartu */}
        <motion.div
          className="relative"
          style={{ height: CARD_H, transformStyle: "preserve-3d" }}
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        >
          {/* depan: foto */}
          <div className={`${face} bg-paper flex flex-col`} style={hidden}>
            <div className="m-3 mb-0 flex-1 rounded-[20px] border-2 border-ink overflow-hidden relative" style={{ backgroundColor: member.tint }}>
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.photo} alt={member.name} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-end">
                  <UserRound size={190} strokeWidth={1.25} style={{ color: member.color }} className="-mb-6" aria-hidden="true" />
                  <span className="absolute top-3 left-3 chip !py-0.5 bg-paper/90 text-[11px]">Foto menyusul</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: member.color }} />
                {TEAM_NAME}
              </span>
              <span className="font-display text-sm font-bold text-ink-soft">
                {no} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* belakang: identitas */}
          <div className={`${face} bg-paper flex flex-col`} style={{ ...hidden, transform: "rotateY(180deg)" }}>
            <div className="px-6 pt-6 pb-5 border-b-2 border-ink" style={{ backgroundColor: member.color }}>
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink/70">Anggota {no}</span>
              <p className="font-display mt-1 text-2xl font-extrabold text-ink leading-tight">{member.name}</p>
            </div>
            <dl className="flex-1 px-6 py-5 flex flex-col gap-4">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-ink-soft">NIM</dt>
                <dd className="font-display mt-0.5 text-lg font-bold text-ink tabular-nums">{member.nim}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-ink-soft">Role</dt>
                <dd className="font-display mt-0.5 text-lg font-bold text-ink">{member.role}</dd>
              </div>
            </dl>
            <p className="px-6 pb-5 text-xs text-ink-soft">{TEAM_ORIGIN}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
