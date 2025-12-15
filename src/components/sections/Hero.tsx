"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { MOTION } from "@/lib/constants";

import styles from "./Hero.module.css";

export function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, MOTION.hero.yRange as number[], MOTION.hero.yOutput as number[]);
  const textOpacity = useTransform(scrollY, MOTION.hero.opacityRange as number[], MOTION.hero.opacityOutput as number[]);

  return (
    <section className={styles.root}>
      <video
        className={styles.video}
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/hero.jpg"
      />

      <div className={styles.content}>
        <div className={styles.container}>
          <motion.div
            style={{ y: yText, opacity: textOpacity }}
            className={styles.headline}
          >
          <h1 className={styles.title}>
            Learn Japanese
            <br />for real life.
          </h1>
          <div className={styles.cta}>
            <Button variant="primary">Choose your scene</Button>
            <Button variant="glass">How Normi works</Button>
          </div>
          </motion.div>

          <div className={styles.copy}>
          <p className={styles.copyText}>
            Single account for all your learning moments.
            Speak naturally, not like a textbook.
          </p>
          </div>

          <button
          type="button"
          onClick={() => {
            const target = window.innerHeight * 0.9;
            window.scrollTo({ top: target, behavior: "smooth" });
          }}
          className={styles.hint}
        >
          <motion.span
            aria-hidden
            className={styles.hintDot}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          Scroll
          </button>
        </div>
      </div>
    </section>
  );
}