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
        <motion.div style={{ y: yVisual, filter: "var(--shadow-visual)" }} className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -left-24 -top-10 h-64 w-64 rounded-full" style={{ background: "var(--peach-100)", opacity: 0.65 }} />
              <div className="absolute -left-10 -top-6 h-80 w-80 rounded-full" style={{ background: "var(--peach-200)", opacity: 0.75 }} />
              <div className="absolute -left-2  top-2  h-96 w-96 rounded-full" style={{ background: "var(--peach-300)", opacity: 0.85 }} />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute left-1/2"
                  style={{
                    top: `${80 + i * 55}px`,
                    transform: "translateX(-50%)",
                    width: `${360 - i * 28}px`,
                    height: `${360 - i * 28}px`,
                    borderRadius: "9999px",
                    background: "linear-gradient(180deg, var(--white-95) 0%, var(--white-60) 100%)",
                    boxShadow: "var(--shadow-medium), var(--shadow-tiny), var(--shadow-inset-light)",
                    border: "1.25px solid var(--white-70)",
                    opacity: 0.98,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div aria-hidden="true" className="absolute inset-0" style={{ background: "radial-gradient(1200px 560px at 65% 50%, var(--hero-ambient-start), var(--hero-ambient-end) 60%)", maskImage: "radial-gradient(560px 560px at 65% 50%, var(--black-100), var(--black-0) 70%)" }} />
    </div>
  );
}
