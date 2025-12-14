"use client";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { TopControls } from "@/components/TopControls";
import { NavPill } from "@/components/NavPill";
import { HeroVisual } from "@/components/HeroVisual";

export default function Home() {
  // Smooth scrolling via Lenis
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Subtle scroll-based parallax for hero content
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 400], [0, -20]);
  const yRight = useTransform(scrollY, [0, 400], [0, 20]);

  return (
    <div className="min-h-screen">
      <TopControls />
      <NavPill />

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 sm:grid-cols-2">
          <motion.div style={{ y: yLeft }} className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-semibold text-zinc-900">
              Learn Japanese for real life.
            </h1>
            <p className="max-w-lg text-lg text-zinc-700">
              Live conversation–first classes focused on daily, casual Japanese.
              Speak every session, get private AI feedback after class, and feel
              progress in real scenes.
            </p>
          </motion.div>

          <motion.div style={{ y: yRight }} className="relative">
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* Spacer for scroll feel */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {["Scenes", "Classes", "Community"].map((title, i) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-md p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Motion-first modules organized by real-life scenes. Smooth, safe,
                and human.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
