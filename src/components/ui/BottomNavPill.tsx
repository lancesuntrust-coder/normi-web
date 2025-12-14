"use client";
import { Home } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

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

  const pillClasses = cn(
    "fixed bottom-6 left-1/2 -translate-x-1/2",
    "overflow-hidden",
    "flex items-center",
    "px-2",
    "rounded-[24px]",
    "bg-[var(--brand-coral)]"
  );

  return (
    <nav className={pillClasses} style={{ height: 46, zIndex: "var(--z-nav)" }}>
      <div className="flex items-center gap-3" style={{ marginLeft: 2 }}>
        {items.map((item) => {
          const isActive = activeKey === item.key;
          const isHover = hoverKey === item.key;
          const baseOpacity = item.key === "home" && !isActive ? 0.92 : 1;
          const padX = item.icon ? 12 : 12;
          return (
            <button
              key={item.key}
              type="button"
              onMouseEnter={() => setHoverKey(item.key)}
              onMouseLeave={() => setHoverKey(null)}
              className={cn("relative inline-flex items-center justify-center select-none text-[var(--on-brand)]", isActive ? "" : "")}
              style={{ height: 40, padding: `0 ${padX}px`, borderRadius: 20, opacity: baseOpacity }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[18px]"
                style={{
                  background: "#ffffff",
                  opacity: isActive ? 0.16 : isHover ? 0.12 : 0,
                  transition: "opacity 180ms ease, transform 200ms ease 60ms",
                  transform: isActive || isHover ? "scale(1)" : "scale(0.98)",
                }}
              />
              <span className="relative inline-flex items-center gap-2">
                {item.icon ? (
                  <span className="inline-flex items-center justify-center" style={{ width: 20, height: 20 }}>
                    <Home size={20} />
                  </span>
                ) : (
                  <span className="text-[16px] leading-[18px] font-normal tracking-[0.1px] whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}