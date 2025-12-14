"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Video-based hero with fallback to abstract rings, Jeton-style
export function HeroVisual() {
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 300], [0, 18]); // subtle parallax
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
      {/* Right-aligned hero media */}
      {!useFallback ? (
        <motion.div
          style={{ y: yVisual, filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.18))" }}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-2xl"
            style={{ width: "clamp(320px, 42vw, 720px)", height: "auto" }}
          >
            <source src="/hero/hero.webm" type="video/webm" />
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      ) : (
        // Fallback to abstract rings if video fails or is missing
        <motion.div
          style={{ y: yVisual, filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.18))" }}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -left-24 -top-10 h-64 w-64 rounded-full" style={{ background: "#ffd9c7", opacity: 0.65 }} />
              <div className="absolute -left-10 -top-6 h-80 w-80 rounded-full" style={{ background: "#ffe7d8", opacity: 0.75 }} />
              <div className="absolute -left-2  top-2  h-96 w-96 rounded-full" style={{ background: "#fff2ea", opacity: 0.85 }} />
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
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 100%)",
                    boxShadow:
                      "0 35px 65px rgba(0,0,0,0.22), 0 6px 18px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.85)",
                    border: "1.25px solid rgba(255,255,255,0.7)",
                    opacity: 0.98,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Ambient glow behind media */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 560px at 65% 50%, rgba(255,255,255,0.45), rgba(255,255,255,0) 60%)",
          maskImage:
            "radial-gradient(560px 560px at 65% 50%, rgba(0,0,0,1), rgba(0,0,0,0.0) 70%)",
        }}
      />
    </div>
  );
}
