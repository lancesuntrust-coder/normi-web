"use client";
import { motion, useScroll, useTransform } from "motion/react";

// Abstract hero object: stacked conversation rings / discs
export function HeroVisual() {
  const { scrollY } = useScroll();
  // subtle parallax: translateY only, very restrained
  const y = useTransform(scrollY, [0, 400], [0, 12]);

  return (
    <motion.div style={{ y }} className="relative w-full h-[60vh] sm:h-[70vh]">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Soft layered discs with depth via opacity */}
        <div className="relative">
          <div className="absolute -left-24 -top-10 h-64 w-64 rounded-full" style={{ background: "#ffd9c7", opacity: 0.45 }} />
          <div className="absolute -left-10 -top-6 h-80 w-80 rounded-full" style={{ background: "#ffe7d8", opacity: 0.55 }} />
          <div className="absolute -left-2  top-2  h-96 w-96 rounded-full" style={{ background: "#fff2ea", opacity: 0.7 }} />
          {/* Thin ring outlines for conversational feel */}
          <div className="absolute -left-6 -top-2 h-[22rem] w-[22rem] rounded-full border border-white/70" />
          <div className="absolute  left-4  top-10 h-[26rem] w-[26rem] rounded-full border border-white/50" />
          <div className="absolute  left-12 top-16 h-[30rem] w-[30rem] rounded-full border border-white/30" />
        </div>
      </div>
    </motion.div>
  );
}
