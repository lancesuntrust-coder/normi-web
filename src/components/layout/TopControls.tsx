"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

import styles from "./TopControls.module.css";

export function TopControls() {
  return (
    <>
      <motion.div
        className={styles.root}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.row}>
          <Link href="/" className={styles.logo}>
            <span className={styles.brand}>Normi</span>
          </Link>

          <nav className={styles.bar}>
            <button className={`${styles.btn} ${styles.muted}`}>
              <Globe size={16} /> EN
            </button>
            <span className={styles.separator} />
            <Link href="#" className={styles.login}>
              Login
            </Link>
            <Link href="#" className={styles.signup}>
              Sign up
            </Link>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
