"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function TopControls() {
  return (
    <motion.nav
      className="fixed top-6 right-6 z-40 flex items-center gap-4 rounded-full bg-white/70 px-4 py-2 backdrop-blur-md shadow-sm border border-zinc-200"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button className="text-sm text-zinc-700 hover:text-black">Language</button>
      <span className="h-4 w-px bg-zinc-200" />
      <Link href="#" className="text-sm text-zinc-700 hover:text-black">
        Login
      </Link>
      <Link
        href="#"
        className="rounded-full bg-black text-white text-sm px-3 py-1 hover:bg-zinc-900"
      >
        Sign up
      </Link>
    </motion.nav>
  );
}
