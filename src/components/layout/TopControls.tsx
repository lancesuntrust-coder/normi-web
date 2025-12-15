"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";
import "@/styles/layout/top-controls.css";

export function TopControls() {
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-controls"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="content-container flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <span className="text-white top-controls-brand">Normi</span>
          </Link>

          <nav
            className="flex items-center gap-4 rounded-full px-4 py-2 text-sm top-controls-bar"
          >
            <button className="inline-flex items-center gap-2 top-controls-muted">
              <Globe size={16} /> EN
            </button>
            <span className="h-4 w-px top-controls-separator" />
            <Link href="#" className="rounded-full px-3 py-1 top-controls-login">
              Login
            </Link>
            <Link href="#" className="rounded-full px-4 py-2 font-semibold top-controls-signup">
              Sign up
            </Link>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
