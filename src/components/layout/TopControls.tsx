"use client";
import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export function TopControls() {
  return (
    <>
      <motion.div
        className="fixed top-6 left-6 z-40"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="inline-flex items-center">
          <span className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "0.2px" }}>Normi</span>
        </Link>
      </motion.div>

      <motion.nav
        className="fixed top-6 right-6 z-40 flex items-center gap-4 rounded-full px-4 py-2 border text-sm"
        style={{ background: "var(--glass-overlay)", backdropFilter: "blur(32px)", borderColor: "var(--glass-border)" }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <button className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.85)" }}>
          <Globe size={16} /> EN
        </button>
        <span className="h-4 w-px" style={{ background: "rgba(255,255,255,0.25)" }} />
        <Link href="#" className="rounded-full px-3 py-1 border" style={{ background: "var(--glass-overlay)", backdropFilter: "blur(32px)", borderColor: "var(--glass-border)", color: "rgba(255,255,255,0.85)" }}>
          Login
        </Link>
        <Link href="#" className="rounded-full px-4 py-2 font-semibold" style={{ background: "var(--on-brand)", color: "var(--brand-coral-strong)" }}>
          Sign up
        </Link>
      </motion.nav>
    </>
  );
}
