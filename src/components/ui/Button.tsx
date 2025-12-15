"use client";
import Link from "next/link";

import { cn } from "@/lib/cn";

import styles from "./Button.module.css";

type Variant = "primary" | "glass" | "ghost";
type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: cn(styles.root, styles.primary),
  glass: cn(styles.root, styles.glass),
  ghost: cn(styles.root, styles.ghost),
};

export function Button({ variant = "primary", className, href, children, ...props }: ButtonProps) {
  const classes = cn(variantClasses[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}