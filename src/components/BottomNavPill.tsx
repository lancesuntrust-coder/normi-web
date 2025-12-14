"use client";
import { motion } from "motion/react";

// Dominant bottom-center dark glass navigation pill
export function BottomNavPill() {
  return (
    <motion.div
      className="nav-pill fixed bottom-8 left-1/2 z-40 -translate-x-1/2 px-5 py-3"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-6 text-sm text-white/90">
        <button className="hover:text-white">Scenes</button>
        <span className="h-4 w-px bg-white/25" />
        <button className="hover:text-white">Classes</button>
        <span className="h-4 w-px bg-white/25" />
        <button className="hover:text-white">Community</button>
        <span className="h-4 w-px bg-white/25" />
        <button className="hover:text-white">Teachers</button>
      </div>
    </motion.div>
  );
}
