"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "@/styles/ui/hero-visual.css";

export function HeroVisual() {
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 300], [0, 18]);
  const [useFallback, setUseFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onError = () => setUseFallback(true);
    v.addEventListener("error", onError);
    return () => v.removeEventListener("error", onError);
  }, []);

  return (
    <div className="hero-visual">
      {!useFallback ? (
        <motion.div style={{ y: yVisual }} className="hero-visual-media">
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="hero-visual-video">
            <source src="/hero/hero.webm" type="video/webm" />
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      ) : (
        <div className="hero-visual-fallback" />
      )}

      {!useFallback && (
        <div aria-hidden="true" className="hero-visual-ambient" />
      )}
    </div>
  );
}
