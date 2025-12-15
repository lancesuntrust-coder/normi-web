"use client";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/cn";
import "@/styles/ui/support-button.css";

type SupportButtonProps = {
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
};

export function SupportButton({ className, onClick, href, children }: SupportButtonProps) {
  const content = (
    <span className={cn("support-button-content", className)}>
      <MessageCircle size={16} /> {children ?? "Support"}
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="support-button">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="support-button">
      {content}
    </button>
  );
}
