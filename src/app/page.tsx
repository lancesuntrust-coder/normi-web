"use client";
import { motion } from "framer-motion";
import Lenis from "lenis";
// import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

import { Footer } from "@/components/layout/Footer";
import { TopControls } from "@/components/layout/TopControls";
import { Hero } from "@/components/sections/Hero";
import { ScenePreview } from "@/components/sections/ScenePreview";
import { BottomNavPill } from "@/components/ui/BottomNavPill";
import { SupportButton } from "@/components/ui/SupportButton";

import styles from "./page.module.css";

export default function Home() {
  // Smooth scrolling via Lenis (micro motion philosophy)
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current = null;
    };
  }, []);

  // no-op: scroll hint is implemented inside Hero

  return (
    <div className={styles.root}>
      {/* Floating elements */}
      <TopControls />
      <BottomNavPill />
      {/* Scroll hint now lives inside Hero; removed from page to keep it within hero bounds */}
      <div className={styles.support}>
        <SupportButton />
      </div>

      {/* Treat hero as a stage (full-bleed wrapper to escape global gutters) */}
      <div className={styles.fullBleed}>
        <Hero />
      </div>

      {/* Subsequent sections (standardized gutters from layout wrapper) */}
      <ScenePreview />

      <section className={styles.sectionMd}>
        <h2 className={styles.title}>How it works</h2>
        <div className={styles.grid3}>
          {["Speak in class", "Get private feedback", "Repeat in scenes"].map((t, i) => (
            <motion.div
              key={t}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
            >
              <h3 className={styles.cardTitle}>{t}</h3>
              <p className={styles.cardMuted}>Calm, human, and focused on natural speech.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.sectionMdB}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.grid2}>
          {["I finally speak without freezing.", "Feels like real life practice."] .map((q, i) => (
            <motion.blockquote
              key={i}
              className={styles.quote}
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
