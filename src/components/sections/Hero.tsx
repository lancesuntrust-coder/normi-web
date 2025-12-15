"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import "@/styles/sections/hero.css";

import { Button } from "@/components/ui/Button";
import { MOTION } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, MOTION.hero.yRange as number[], MOTION.hero.yOutput as number[]);
  const textOpacity = useTransform(scrollY, MOTION.hero.opacityRange as number[], MOTION.hero.opacityOutput as number[]);

  return (
    <section className="relative min-h-screen overflow-hidden hero">
      <video
        className="absolute inset-0 w-full h-full object-cover hero-video"
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/hero.jpg"
      />

      <div className="absolute inset-0 hero-content">
        <div className="hero-container relative h-full">
          <motion.div
            style={{ y: yText, opacity: textOpacity }}
            className="absolute left-0 space-y-6 hero-headline"
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

          <div className="absolute right-0 max-w-xs hero-copy">
          <p className="text-white hero-copy-text">
            Single account for all your learning moments.
            Speak naturally, not like a textbook.
          </p>
          </div>

          <button
          type="button"
          onClick={() => {
            const target = window.innerHeight * 0.9;
            window.scrollTo({ top: target, behavior: "smooth" });
          }}
          className="absolute left-0 text-xs rounded-full px-3 py-1 backdrop-blur-md inline-flex items-center gap-2 hero-hint"
        >
          <motion.span
            aria-hidden
            className="inline-block hero-hint-dot"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          Scroll
          </button>
        </div>
      </div>
    </section>
  );
}