"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    <div className="relative h-[560px]">
      {!useFallback ? (
        <motion.div style={{ y: yVisual, filter: "var(--shadow-visual)" }} className="absolute right-0 top-1/2 -translate-y-1/2">
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="rounded-2xl" style={{ width: "clamp(320px, 42vw, 720px)", height: "auto" }}>
            <source src="/hero/hero.webm" type="video/webm" />
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      ) : (
        <div className="absolute inset-0" style={{ background: "var(--brand-coral)" }} />
      )}

      {!useFallback && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 560px at 65% 50%, var(--hero-ambient-start), var(--hero-ambient-end) 60%)",
            maskImage:
              "radial-gradient(560px 560px at 65% 50%, var(--black-100), var(--black-0) 70%)",
          }}
        />
      )}
    </div>
  );
}
