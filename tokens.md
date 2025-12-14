# Design Tokens Quick Reference

This project standardizes styling via CSS variables in `src/styles/tokens.css`. Prefer tokens over inline hex/rgba or Tailwind color classes to ensure consistency and easy theming.

## Categories
- **Brand**: `--brand-coral`, `--brand-coral-strong`, `--brand-coral-soft`, `--on-brand`
- **Text**: `--text` (strong), `--muted`
- **Glass**: `--glass-overlay`, `--glass-border` (alias: `--glass`)
- **Peach Glows (Hero)**: `--peach-100`, `--peach-200`, `--peach-300`
- **Ambient**: `--hero-ambient-start`, `--hero-ambient-end`
- **Radii**: `--radius-pill`, `--radius-inner`
- **Shadows**: `--shadow-soft`
- **Z-Index**: `--z-video`, `--z-content`, `--z-nav`

## Usage Guidelines
- **Colors**: Use `style={{ color: "var(--text)" }}` or `style={{ background: "var(--brand-coral)" }}`. Do not use raw hex/rgba.
- **Overlays**: Use `var(--glass)` and `var(--glass-border)` for glass surfaces.
- **Z-Index**: Set stacking via `style={{ zIndex: "var(--z-*)" }}`. Avoid Tailwind `z-*` classes where tokens exist.
- **Radii**: Use CSS values from tokens for consistent rounded elements.
- **Motion constants**: Keep behavioral values (ranges, outputs) in `src/lib/constants.ts`.

## Import Conventions
- Path alias: `@/*` → `src/*` (configured in `tsconfig.json`).
  - Examples: `@/components/ui/BottomNavPill`, `@/components/layout/Footer`, `@/lib/cn`.
- Avoid barrels for components; import canonical files directly.

## Examples
```tsx
// Button background using brand token
<button style={{ background: "var(--brand-coral)", color: "var(--on-brand)" }}>Primary</button>

// Glass surface
div style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }} />

// Z-index layering
div style={{ zIndex: "var(--z-nav)" }} />
```

## Rationale
- Tokens centralize visual decisions and prevent drift.
- Facilitates future theming and brand updates without code churn.
- Keeps motion and layout behavior separate from style.
