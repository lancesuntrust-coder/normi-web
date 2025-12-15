"use client";
import { motion } from "framer-motion";
import "@/styles/sections/scene-preview.css";

const scenes = [
  { title: "At the bar" },
  { title: "At a restaurant" },
  { title: "At work" },
  { title: "Making friends" },
  { title: "Shopping" },
  { title: "On the phone" },
];

export function ScenePreview() {
  return (
    <section className="section-md scene-preview">
      <h2 className="scene-preview-title">Practice Real Japanese</h2>
      <p className="scene-preview-intro">
        Organized by real-life scenes. Speak every session and get private feedback.
      </p>
      <div className="scene-preview-grid">
        {scenes.map((s, i) => (
          <motion.div
            key={s.title}
            className="scene-preview-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
          >
            <h3 className="scene-preview-card-title">{s.title}</h3>
            <p className="scene-preview-card-muted">A calm, guided scene with live speaking.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
