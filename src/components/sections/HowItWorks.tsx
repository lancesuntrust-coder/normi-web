"use client";
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import styles from "./HowItWorks.module.css";

const steps = [
  { icon: "🎯", title: "Pick a scene", className: "lineAdd" },
  { icon: "🎙️", title: "Join live", className: "lineSend" },
  { icon: "🔁", title: "Repeat scenes", className: "lineExchange" },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const offsets = [
    useTransform(scrollYProgress, [0, 0.12], [80, 0]),
    useTransform(scrollYProgress, [0.08, 0.2], [80, 0]),
    useTransform(scrollYProgress, [0.16, 0.28], [80, 0]),
  ];
  const opacities = [
    useTransform(scrollYProgress, [0, 0.12], [0, 1]),
    useTransform(scrollYProgress, [0.08, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0.16, 0.28], [0, 1]),
  ];

  return (
    <section ref={sectionRef} className={styles.root}>
      <div className={styles.sticky}>
        <div className={styles.stack}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className={`${styles.line} ${styles[step.className]}`}
              style={{ y: offsets[idx], opacity: opacities[idx] }}
            >
              <div className={styles.icon}>{step.icon}</div>
              <div className={styles.label}>{step.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
