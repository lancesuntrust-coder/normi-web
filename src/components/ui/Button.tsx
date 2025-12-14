"use client";
import Link from "next/link";
import { cn } from "@/src/lib/cn";

type Variant = "primary" | "glass" | "ghost";
type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: cn(
    "rounded-full px-5 py-2 font-semibold",
    "text-[var(--brand-coral-strong)]",
    "bg-[var(--on-brand)]"
  ),
  glass: cn(
    "rounded-full px-5 py-2 font-semibold border",
    "text-[var(--on-brand)]",
    "bg-[var(--glass-overlay)]",
    "border-[var(--glass-border)]"
  ),
  ghost: cn(
    "rounded-full px-5 py-2 font-semibold",
    "bg-transparent",
    "text-[var(--on-brand)]"
  ),
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