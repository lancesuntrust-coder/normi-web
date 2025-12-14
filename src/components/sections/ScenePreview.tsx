"use client";
import { motion } from "framer-motion";

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
    <section className="mx-auto max-w-7xl px-6 sm:px-10 pb-24">
      <h2 className="text-2xl font-semibold mb-6">Practice Real Japanese</h2>
      <p className="mb-8 max-w-2xl" style={{ color: "var(--muted)" }}>
        Organized by real-life scenes. Speak every session and get private feedback.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {scenes.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
          >
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>A calm, guided scene with live speaking.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
