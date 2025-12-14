"use client";
import { motion } from "framer-motion";

export function NavPill() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-zinc-200 px-4 py-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-6 text-sm text-zinc-700">
        <button className="hover:text-black">Scenes</button>
        <span className="h-4 w-px bg-zinc-200" />
        <button className="hover:text-black">Classes</button>
        <span className="h-4 w-px bg-zinc-200" />
        <button className="hover:text-black">Community</button>
      </div>
    </motion.div>
  );
}
