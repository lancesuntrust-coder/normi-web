"use client";
import { motion } from "framer-motion";

// Abstract hero visual: layered rings and waves suggesting conversation
export function HeroVisual() {
  const ring = (delay: number, size: string, color: string, opacity = 0.8) => (
    <motion.div
      key={delay + color}
      className={`absolute rounded-full border ${color}`}
      style={{ width: size, height: size, opacity }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ delay, duration: 1.2, ease: "easeOut" }}
    />
  );

  return (
    <div className="relative h-[60vh] w-full sm:h-[70vh]">
      <div className="absolute inset-0">
        {/* Dialogue rings */}
        <div className="absolute right-6 top-8">
          {ring(0.0, "220px", "border-zinc-300")}
          {ring(0.2, "280px", "border-zinc-300/70", 0.6)}
          {ring(0.4, "340px", "border-zinc-300/50", 0.5)}
        </div>

        {/* Sound waves */}
        <motion.div
          className="absolute right-0 bottom-12 h-28 w-64"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full items-center gap-2">
            {[10, 18, 26, 18, 10].map((h, i) => (
              <motion.div
                key={i}
                className="w-6 rounded bg-zinc-300"
                initial={{ height: h }}
                animate={{ height: h + 12 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                style={{ opacity: 0.7 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Layered speech bubbles */}
        <motion.div
          className="absolute right-32 top-24"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-white/80 backdrop-blur-md px-4 py-2 text-sm text-zinc-800 shadow border border-zinc-200">
              こんにちは！
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur-md px-4 py-2 text-sm text-zinc-800 shadow border border-zinc-200">
              元気？
            </div>
            <div className="rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2 text-sm text-zinc-800 shadow border border-zinc-200">
              今日、飲みに行かない？
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
