"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import styles from "./HeroVisual.module.css";

export function HeroVisual() {
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 300], [0, 18]);
  const [useFallback, setUseFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isProd = process.env.NODE_ENV === "production";
  const devMp4 = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  const devWebm = process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onError = () => setUseFallback(true);
    v.addEventListener("error", onError);
    return () => v.removeEventListener("error", onError);
  }, []);

  return (
    <div className={styles.root}>
      {!useFallback ? (
        <motion.div style={{ y: yVisual }} className={styles.media}>
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className={styles.video}>
            {/* In development, prefer environment-provided sources to avoid committing third-party media */}
            {!isProd && devWebm ? (
              <source src={devWebm} type="video/webm" />
            ) : (
              <source src="/hero/hero.webm" type="video/webm" />
            )}
            {!isProd && devMp4 ? (
              <source src={devMp4} type="video/mp4" />
            ) : (
              <source src="/hero/hero.mp4" type="video/mp4" />
            )}
          </video>
        </motion.div>
      ) : (
        <div className={styles.fallback} />
      )}

      {!useFallback && (
        <div aria-hidden="true" className={styles.ambient} />
      )}
    </div>
  );
}
