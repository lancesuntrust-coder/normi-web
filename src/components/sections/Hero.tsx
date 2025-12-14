"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { MOTION } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, MOTION.hero.yRange as number[], MOTION.hero.yOutput as number[]);
  const textOpacity = useTransform(scrollY, MOTION.hero.opacityRange as number[], MOTION.hero.opacityOutput as number[]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/hero.jpg"
        style={{ pointerEvents: "none", zIndex: "var(--z-video)" }}
      />

      <div className="absolute inset-0" style={{ zIndex: "var(--z-content)" }}>
        <motion.div
          style={{ y: yText, opacity: textOpacity }}
          className="absolute left-6 bottom-24 sm:left-10 sm:bottom-24 space-y-6"
        >
          <h1 className="text-white font-bold leading-[1.05] text-[64px] sm:text-[72px] md:text-[80px]">
            Learn Japanese
            <br />for real life.
          </h1>
          <div className="flex gap-3">
            <Button variant="primary">Choose your scene</Button>
            <Button variant="glass">How Normi works</Button>
          </div>
        </motion.div>

        <div className="absolute right-6 bottom-28 sm:right-10 sm:bottom-28 max-w-xs">
          <p className="text-white" style={{ opacity: 0.85 }}>
            Single account for all your learning moments.
            Speak naturally, not like a textbook.
          </p>
        </div>
      </div>
    </section>
  );
}