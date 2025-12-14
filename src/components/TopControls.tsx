"use client";
import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "motion/react";

// Top-right quiet controls: Language (Globe), Login, Sign up
export function TopControls() {
  return (
    <motion.nav
      className="fixed top-6 right-6 z-40 flex items-center gap-4 rounded-full px-4 py-2 backdrop-blur-md border text-sm"
      style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button className="text-zinc-700 hover:text-black inline-flex items-center gap-2">
        <Globe size={16} /> Language
      </button>
      <span className="h-4 w-px bg-zinc-200" />
      <Link href="#" className="text-zinc-700 hover:text-black">
        Login
      </Link>
      <Link href="#" className="btn-primary">
        Sign up
      </Link>
    </motion.nav>
  );
}
