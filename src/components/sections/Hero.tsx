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
    <section className="hero">
      <video
        className="hero-video"
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/hero.jpg"
      />

      <div className="hero-content">
        <div className="hero-container">
          <motion.div
            style={{ y: yText, opacity: textOpacity }}
            className="hero-headline"
          >
          <h1 className="hero-title">
            Learn Japanese
            <br />for real life.
          </h1>
          <div className="hero-cta">
            <Button variant="primary">Choose your scene</Button>
            <Button variant="glass">How Normi works</Button>
          </div>
          </motion.div>

          <div className="hero-copy">
          <p className="hero-copy-text">
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
          className="hero-hint"
        >
          <motion.span
            aria-hidden
            className="hero-hint-dot"
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