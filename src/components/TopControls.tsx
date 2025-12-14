"use client";
import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

// Top-right quiet controls: Language (Globe), Login, Sign up
export function TopControls() {
  return (
    <motion.nav
      className="fixed top-6 right-6 z-40 flex items-center gap-4 rounded-full px-4 py-2 border text-sm"
      style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(32px)", borderColor: "rgba(255,255,255,0.35)" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.85)" }}>
        <Globe size={16} /> EN
      </button>
      <span className="h-4 w-px bg-zinc-200" />
      <Link
        href="#"
        className="rounded-full px-3 py-1 border"
        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(32px)", borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)" }}
      >
        Login
      </Link>
      <Link
        href="#"
        className="rounded-full px-4 py-2 font-semibold"
        style={{ background: "#ffffff", color: "#E85C6A" }}
      >
        Sign up
      </Link>
    </motion.nav>
  );
}
