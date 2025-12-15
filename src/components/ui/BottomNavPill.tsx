"use client";
import { Home } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/cn";
import "@/styles/ui/bottom-nav-pill.css";

type NavKey = "home" | "scenes" | "classes" | "community" | "teachers";

export function BottomNavPill({ activeKey = "home" }: { activeKey?: NavKey }) {
  const [hoverKey, setHoverKey] = useState<NavKey | null>(null);

  const items = useMemo(
    () => [
      { key: "home" as const, label: "", icon: true },
      { key: "scenes" as const, label: "Scenes", icon: false },
      { key: "classes" as const, label: "Classes", icon: false },
      { key: "community" as const, label: "Community", icon: false },
      { key: "teachers" as const, label: "Teachers", icon: false },
    ],
    []
  );

  const pillClasses = cn("bottom-nav");

  return (
    <nav className={pillClasses}>
      <div className="bottom-nav-inner">
        {items.map((item) => {
          const isActive = activeKey === item.key;
          const isHover = hoverKey === item.key;
          const baseOpacity = item.key === "home" && !isActive ? 0.92 : 1;

          return (
            <button
              key={item.key}
              type="button"
              onMouseEnter={() => setHoverKey(item.key)}
              onMouseLeave={() => setHoverKey(null)}
              className={cn("bottom-nav-item")}
              style={{ opacity: baseOpacity }}
            >
              <span
                aria-hidden="true"
                className="bottom-nav-highlight"
                style={{
                  opacity: isActive ? 0.16 : isHover ? 0.12 : 0,
                  transform: isActive || isHover ? "scale(1)" : "scale(0.98)",
                }}
              />
              <span className="bottom-nav-item-content">
                {item.icon ? (
                  <span className="bottom-nav-item-icon">
                    <Home size={20} />
                  </span>
                ) : (
                  <span className="bottom-nav-item-label">{item.label}</span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}