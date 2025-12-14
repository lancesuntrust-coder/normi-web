"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroVisual } from "../components/HeroVisual";

export function Hero() {
  const { scrollY } = useScroll();
  // Headline/subtext slight fade/translate on scroll
  const yText = useTransform(scrollY, [0, 300], [0, -18]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section
      className="relative min-h-screen px-6 sm:px-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E85C6A 0%, #F08D73 35%, #F6C7A3 100%)",
      }}
    >
      {/* Subtle warm vignette toward bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 85%, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.0) 55%)",
        }}
      />
      {/* Floating controls added outside from page */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 items-center gap-12 pt-28">
        <motion.div style={{ y: yText, opacity: textOpacity }} className="space-y-6">
          <h1 className="text-6xl sm:text-7xl font-semibold text-white">
            Learn Japanese for real life.
          </h1>
          <p className="max-w-lg text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Live conversation classes with real teachers. Speak naturally, not like a textbook.
          </p>
          <div className="flex gap-3">
            {/* Primary CTA: solid white, not glass */}
            <button
              className="rounded-full px-5 py-2 font-semibold"
              style={{ background: "#ffffff", color: "#E85C6A" }}
            >
              Choose your scene
            </button>
            {/* Secondary CTA: matte glass */}
            <button
              className="rounded-full px-5 py-2 font-semibold border"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(32px)", borderColor: "rgba(255,255,255,0.35)", color: "#ffffff" }}
            >
              How Normi works
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
