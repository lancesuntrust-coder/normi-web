"use client";
import Lenis from "lenis";
// import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

import { Footer } from "@/components/layout/Footer";
import { TopControls } from "@/components/layout/TopControls";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PracticeIntro } from "@/components/sections/PracticeIntro";
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

      <PracticeIntro />

      <HowItWorks />

      <Footer />
    </div>
  );
}
