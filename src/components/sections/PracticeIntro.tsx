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
  }) => `translate(-50%, -50%) translate3d(${x}, ${y}, 0)${scale ? ` scale(${scale})` : ""}`;

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start animation only once the section reaches the top of the viewport
    offset: ["start start", "end start"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 0.05, 0.4], [1, 1, 0.14]);
  const sectionLift = useTransform(scrollYProgress, [0.35, 0.6], ["0vh", "-100vh"]);

  // Cards start far offscreen and converge toward center
  const card1X = useTransform(scrollYProgress, [0.05, 0.4], ["-330vw", "-5%"]);
  const card1Y = useTransform(scrollYProgress, [0.05, 0.4], ["-350vh", "-25%"]);

  const card2X = useTransform(scrollYProgress, [0.05, 0.4], ["340vw", "5%"]);
  const card2Y = useTransform(scrollYProgress, [0.05, 0.4], ["-280vh", "0%"]);

  const card3X = useTransform(scrollYProgress, [0.05, 0.4], ["-440vw", "-15%"]);
  const card3Y = useTransform(scrollYProgress, [0.05, 0.4], ["0vh", "0%"]);

  const card4X = useTransform(scrollYProgress, [0.05, 0.4], ["440vw", "5%"]);
  const card4Y = useTransform(scrollYProgress, [0.05, 0.4], ["180vh", "0%"]);

  const card5X = useTransform(scrollYProgress, [0.05, 0.4], ["-240vw", "-5%"]);
  const card5Y = useTransform(scrollYProgress, [0.05, 0.4], ["280vh", "10%"]);
  const cardVisibility = useTransform(scrollYProgress, [0, 0, 0.4], ["hidden", "hidden", "visible"]);

  return (
    <section ref={sectionRef} className={styles.root}>
      <motion.div className={styles.sticky} style={{ y: sectionLift }}>
        <div className={styles.content}>
          <motion.h2
            className={styles.heading}
            style={{ scale: headingScale }}
          >
            Practice Real{"\n"}Japanese.
          </motion.h2>

          <div className={styles.cards}>
            <motion.div
              className={`${styles.card} ${styles.cardImage} ${styles.cardPhoto}`}
              style={{ x: card1X, y: card1Y, visibility: cardVisibility }}
              transformTemplate={transformTemplate}
            >
              <Image
                src="/hero/card1.jpg"
                alt="Japanese conversation"
                fill
                sizes="(max-width: 768px) 60vw, 320px"
                className={styles.cardImageMedia}
                priority={false}
              />
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.cardBlue}`}
              style={{ x: card2X, y: card2Y, visibility: cardVisibility }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLabel}>Lesson 12</div>
              <div className={styles.cardTitle}>Restaurant ordering</div>
              <div className={styles.cardMeta}>今日の目標</div>
              <div className={styles.cardText}>Order confidently and handle substitutions.</div>
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.cardLive} ${styles.cardGreen}`}
              style={{ x: card3X, y: card3Y, visibility: cardVisibility }}
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
              className={`${styles.card} ${styles.cardPink}`}
              style={{ x: card4X, y: card4Y, visibility: cardVisibility }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLabel}>Key phrases</div>
              <div className={styles.cardPhrases}>こんにちは</div>
              <div className={styles.cardText}>Learn phrases with natural pronunciation cues.</div>
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.cardAccent}`}
              style={{ x: card5X, y: card5Y, visibility: cardVisibility }}
              transformTemplate={transformTemplate}
            >
              <div className={styles.cardLabel}>Scene challenge</div>
              <div className={styles.cardTitle}>Cafe pickup</div>
              <div className={styles.cardTextStrong}>「アイスラテをお願いします」</div>
              <div className={styles.cardText}>Match tone, speed, and body language in context.</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
