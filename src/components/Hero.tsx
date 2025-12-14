"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroVisual } from "../components/HeroVisual";

export function Hero() {
  const { scrollY } = useScroll();
  // Headline/subtext slight fade/translate on scroll
  const yText = useTransform(scrollY, [0, 300], [0, -12]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.92]);

  return (
    <section className="relative min-h-screen px-6 sm:px-10">
      {/* Floating controls added outside from page */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 items-center gap-12 pt-28">
        <motion.div style={{ y: yText, opacity: textOpacity }} className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-semibold text-zinc-900">
            Learn Japanese for real life.
          </h1>
          <p className="max-w-lg text-lg text-zinc-700">
            Live conversation classes with real teachers. Speak naturally, not like a textbook.
          </p>
          <div className="flex gap-3">
            <button className="btn-primary">Choose your scene</button>
            <button className="btn-secondary">How Normi works</button>
          </div>
        </motion.div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
