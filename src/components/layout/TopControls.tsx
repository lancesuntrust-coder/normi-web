"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";
import "@/styles/layout/top-controls.css";

export function TopControls() {
  return (
    <>
      <motion.div
        className="top-controls"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="content-container top-controls-row">
          <Link href="/" className="top-controls-logo">
            <span className="top-controls-brand">Normi</span>
          </Link>

          <nav className="top-controls-bar">
            <button className="top-controls-btn top-controls-muted">
              <Globe size={16} /> EN
            </button>
            <span className="top-controls-separator" />
            <Link href="#" className="top-controls-login">
              Login
            </Link>
            <Link href="#" className="top-controls-signup">
              Sign up
            </Link>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
