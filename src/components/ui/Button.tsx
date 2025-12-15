"use client";
import Link from "next/link";

import { cn } from "@/lib/cn";
import "@/styles/ui/button.css";

type Variant = "primary" | "glass" | "ghost";
type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: cn("btn", "btn-primary"),
  glass: cn("btn", "btn-glass"),
  ghost: cn("btn", "btn-ghost"),
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