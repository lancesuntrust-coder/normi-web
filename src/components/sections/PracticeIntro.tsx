"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import styles from "./PracticeIntro.module.css";

export function PracticeIntro() {
  const transformTemplate = ({
    x = "0px",
    y = "0px",
    scale,
  }: {
    x?: string | number;
    y?: string | number;
    scale?: string | number;
  }) => `translate(${x}, ${y}) translate(-50%, -50%)${scale ? ` scale(${scale})` : ""}`;

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const badgeOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0.8]);
  const headingScale = useTransform(scrollYProgress, [0, 0.05, 0.4], [1, 1, 0.14]);
  const headingMaxWidth = useTransform(scrollYProgress, [0, 0.4], ["1400px", "175px"]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [0.6, 0.6, 0]);

  const card1X = useTransform(scrollYProgress, [0.05, 0.35], ["-40vw", "50%"]);
  const card1Y = useTransform(scrollYProgress, [0.05, 0.35], ["-30vh", "50%"]);

  const card2X = useTransform(scrollYProgress, [0.05, 0.35], ["140vw", "50%"]);
  const card2Y = useTransform(scrollYProgress, [0.05, 0.35], ["-30vh", "50%"]);

  const card3X = useTransform(scrollYProgress, [0.05, 0.35], ["-50vw", "50%"]);
  const card3Y = useTransform(scrollYProgress, [0.05, 0.35], ["130vh", "50%"]);

  const card4X = useTransform(scrollYProgress, [0.05, 0.35], ["140vw", "50%"]);
  const card4Y = useTransform(scrollYProgress, [0.05, 0.35], ["130vh", "50%"]);

  return (
    <section ref={sectionRef} className={styles.root}>
      <div className={styles.sticky}>
        <div className={styles.content}>
          <motion.div className={styles.badge} style={{ opacity: badgeOpacity, scale: badgeScale }}>
            Built for scenes, classes, and community
          </motion.div>
          <motion.h2
            className={styles.heading}
            style={{ scale: headingScale, maxWidth: headingMaxWidth }}
          >
            Practice real Japanese
          </motion.h2>
          <motion.p className={styles.description} style={{ opacity: descriptionOpacity }}>
            Speak with confidence through live classes, scene-based practice, and community feedback.
          </motion.p>

          <div className={styles.cards}>
            <motion.div
              className={`${styles.card} ${styles.cardImage}`}
              style={{ x: card1X, y: card1Y }}
              transformTemplate={transformTemplate}
            >
              <Image
                src="/hero/hero.jpg"
                alt="Japanese conversation"
                fill
                sizes="(max-width: 768px) 60vw, 320px"
                className={styles.cardImageMedia}
                priority={false}
              />
            </motion.div>

            <motion.div
              className={styles.card}
              style={{ x: card2X, y: card2Y }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLabel}>Lesson 12</div>
              <div className={styles.cardTitle}>Restaurant ordering</div>
              <div className={styles.cardMeta}>今日の目標</div>
              <div className={styles.cardText}>Order confidently and handle substitutions.</div>
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.cardLive}`}
              style={{ x: card3X, y: card3Y }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLiveRow}>
                <span className={styles.liveDot} aria-hidden />
                Live class
              </div>
              <div className={styles.cardTitle}>今日のレッスン</div>
              <div className={styles.cardText}>Native coach + peers. Practice in real contexts.</div>
              <div className={styles.avatars} aria-hidden>
                <span className={`${styles.avatar} ${styles.avatarBlue}`} />
                <span className={`${styles.avatar} ${styles.avatarPurple}`} />
                <span className={`${styles.avatar} ${styles.avatarYellow}`} />
                <span className={`${styles.avatar} ${styles.avatarGreen}`} />
              </div>
            </motion.div>

            <motion.div
              className={styles.card}
              style={{ x: card4X, y: card4Y }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLabel}>Key phrases</div>
              <div className={styles.cardPhrases}>こんにちは</div>
              <div className={styles.cardText}>Learn phrases with natural pronunciation cues.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
