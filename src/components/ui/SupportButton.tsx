"use client";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/cn";

type SupportButtonProps = {
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
};

export function SupportButton({ className, onClick, href, children }: SupportButtonProps) {
  const content = (
    <span className={cn("rounded-full px-4 py-2 backdrop-blur-md inline-flex items-center gap-2", className)}
      style={{ background: "var(--glass)", color: "var(--on-brand-85)" }}>
      <MessageCircle size={16} /> {children ?? "Support"}
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
