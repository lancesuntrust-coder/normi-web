"use client";

import { Home } from "lucide-react";
import { useMemo, useState } from "react";

type NavKey = "home" | "scenes" | "classes" | "community" | "teachers";

const NAV_BG = "#f84d36";
const ACTIVE_BG = "rgba(255,255,255,0.16)";
const HOVER_BG = "rgba(255,255,255,0.12)";

export function BottomNavPill({ activeKey = "home" }: { activeKey?: NavKey }) {
  const [hoverKey, setHoverKey] = useState<NavKey | null>(null);

  const items = useMemo(
    () =>
      [
        { key: "home" as const, label: "", icon: true },
        { key: "scenes" as const, label: "Scenes", icon: false },
        { key: "classes" as const, label: "Classes", icon: false },
        { key: "community" as const, label: "Community", icon: false },
        { key: "teachers" as const, label: "Teachers", icon: false },
      ] as const,
    [],
  );

  const PILL_H = 48; // reduce overall height to closely match segment height
  const PILL_PAD_X = 2;
  const PILL_PAD_Y = 6; // tighter vertical padding so pill ~ highlight height

  const ITEM_H = 44;
  const ITEM_PAD_X = 14;
  const GAP = 4;

  const pillRadius = PILL_H / 2;
  const itemRadius = ITEM_H / 2;

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
      style={{
        background: NAV_BG,
        height: PILL_H,
        padding: `${PILL_PAD_Y}px ${PILL_PAD_X}px`,
        borderRadius: pillRadius,
        boxShadow: "none",
      }}
    >
      <div className="flex items-center" style={{ height: "100%", gap: GAP }}>
        {items.map((item) => {
          const isActive = activeKey === item.key;
          const isHover = hoverKey === item.key;

          // Home should feel “same system” as text items
          // Jeton keeps the home circle but still reads like a segment.
          const homePadX = 16;

          const padX = item.icon ? homePadX : ITEM_PAD_X;

          // When another item is active, home should chill a little
          const baseOpacity = item.key === "home" && !isActive ? 0.92 : 1;

          return (
            <button
              key={item.key}
              type="button"
              onMouseEnter={() => setHoverKey(item.key)}
              onMouseLeave={() => setHoverKey(null)}
              className="relative inline-flex items-center justify-center select-none"
              style={{
                height: ITEM_H,
                padding: `0 ${padX}px`,
                borderRadius: itemRadius,
                color: "#fff",
                opacity: baseOpacity,
                background: "transparent",
                // no movement on hover
                transform: "translateZ(0)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "#ffffff",
                  opacity: isActive ? 0.16 : isHover ? 0.12 : 0,
                  transition: "opacity 180ms ease, transform 200ms ease 60ms",
                  transform: isActive || isHover ? "scale(1)" : "scale(0.98)",
                  borderRadius: itemRadius,
                }}
              />

              <span className="relative inline-flex items-center gap-2">
                {item.icon ? (
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  >
                    <Home size={20} />
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 16,
                      lineHeight: "18px",
                      fontWeight: 400,
                      letterSpacing: "0.1px",
                      whiteSpace: "nowrap",
                    }}
                  >
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
