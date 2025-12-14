"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

export function TopControls() {
  return (
    <>
      <motion.div
        className="fixed top-6 left-6"
        style={{ zIndex: "var(--z-nav)" }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="inline-flex items-center">
          <span className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "0.2px" }}>Normi</span>
        </Link>
      </motion.div>

      <motion.nav
        className="fixed top-6 right-6 flex items-center gap-4 rounded-full px-4 py-2 text-sm"
        style={{ background: "var(--glass-overlay)", backdropFilter: "blur(32px)", zIndex: "var(--z-nav)" }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <button className="inline-flex items-center gap-2" style={{ color: "var(--on-brand-85)" }}>
          <Globe size={16} /> EN
        </button>
        <span className="h-4 w-px" style={{ background: "var(--glass-separator)" }} />
        <Link href="#" className="rounded-full px-3 py-1" style={{ background: "var(--glass-overlay)", backdropFilter: "blur(32px)", color: "var(--on-brand-85)" }}>
          Login
        </Link>
        <Link href="#" className="rounded-full px-4 py-2 font-semibold" style={{ background: "var(--on-brand)", color: "var(--brand-coral-strong)" }}>
          Sign up
        </Link>
      </motion.nav>
    </>
  );
}
