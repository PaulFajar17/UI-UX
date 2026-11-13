"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Landmark, Sparkles } from "lucide-react";
import { lengangGroups } from "@/lib/data";
import { ScreenDeck } from "./ScreenDeck";

const icons = { awal: Sparkles, wisatawan: Smartphone, pemda: Landmark } as const;

/** Galeri LENGANG dengan pilihan alur: wisatawan atau pemerintah daerah. */
export function LengangGallery() {
  const [groupId, setGroupId] = useState(lengangGroups[0].id);
  const group = lengangGroups.find((g) => g.id === groupId)!;

  return (
    <div>
      <div className="mb-6 inline-flex rounded-full border-2 border-ink bg-paper p-1" role="tablist" aria-label="Pilih alur">
        {lengangGroups.map((g) => {
          const Icon = icons[g.id as keyof typeof icons] ?? Smartphone;
          const on = g.id === groupId;
          return (
            <button
              key={g.id}
              role="tab"
              aria-selected={on}
              onClick={() => setGroupId(g.id)}
              className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-sm font-semibold transition-colors ${on ? "text-cream" : "text-ink hover:bg-ink/5"}`}
            >
              {on && (
                <motion.span
                  layoutId="lengang-tab"
                  className="absolute inset-0 rounded-full bg-[#24563f]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon size={16} className="relative" />
              <span className="relative">{g.label}</span>
              <span className="relative text-xs opacity-70">{g.screens.length}</span>
            </button>
          );
        })}
      </div>

      <ScreenDeck key={group.id} group={group} />
    </div>
  );
}
