"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { TopControls } from "../components/layout/TopControls";
import { BottomNavPill } from "../components/ui/BottomNavPill";
import { Hero } from "../components/sections/Hero";
import { ScenePreview } from "../components/sections/ScenePreview";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  // Smooth scrolling via Lenis (micro motion philosophy)
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const { scrollY } = useScroll();
  // Bottom-left scroll hint: fades out after initial scroll
  const scrollHintOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Floating elements */}
      <TopControls />
      <BottomNavPill />
      <motion.div
        className="fixed bottom-8 left-6 z-30 text-xs"
        style={{ color: "var(--muted)", opacity: scrollHintOpacity as unknown as number }}
      >
        <div className="rounded-full px-3 py-1 backdrop-blur-md border" style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}>
          Scroll
        </div>
      </motion.div>
      <div className="fixed bottom-8 right-6 z-40">
        <button className="rounded-full px-4 py-2 backdrop-blur-md border inline-flex items-center gap-2" style={{ background: "var(--glass)", borderColor: "var(--glass-border)", color: "var(--text)" }}>
          <MessageCircle size={16} /> Support
        </button>
      </div>

      {/* Treat hero as a stage */}
      <Hero />

      {/* Subsequent sections (simple placeholders adhering to motion-first restraint) */}
      <ScenePreview />

      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
        <h2 className="text-2xl font-semibold mb-6">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {["Speak in class", "Get private feedback", "Repeat in scenes"].map((t, i) => (
            <motion.div
              key={t}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
            >
              <h3 className="text-lg font-medium">{t}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Calm, human, and focused on natural speech.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10 pb-24">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["I finally speak without freezing.", "Feels like real life practice."] .map((q, i) => (
            <motion.blockquote
              key={i}
              className="glass-card p-6"
              style={{ color: "var(--text)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
            >
              “{q}”
            </motion.blockquote>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
