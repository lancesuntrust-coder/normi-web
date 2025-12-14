# Normi Web — Code Structure & Style Guide

This guide defines how we structure code, style components, and use tokens so future additions stay consistent and maintainable.

## Project Layout
- Source of truth: `src/`
- Next.js App Router: `src/app/`
  - `src/app/layout.tsx`, `src/app/globals.css`, page files
- Components:
  - `src/components/ui`: Reusable UI primitives (e.g., `Button`, `BottomNavPill`, `HeroVisual`)
  - `src/components/sections`: Page-level sections (e.g., `Hero`, `ScenePreview`)
  - `src/components/layout`: Layout elements (e.g., `TopControls`, `Footer`)
- Styles & Tokens: `src/styles/tokens.css`, `src/styles/utilities.css`
- Lib: `src/lib/` for helpers (`cn.ts`) and behavior constants (`constants.ts`)

## Imports
- Path alias: `@/*` → `src/*` (configured in `tsconfig.json`).
  - Examples: `@/components/ui/Button`, `@/components/sections/Hero`, `@/lib/cn`
- Avoid barrels. Import canonical files directly from `ui`, `sections`, or `layout`.

## Styling Rules
- Prefer CSS variables (tokens) over raw hex/rgba and Tailwind color classes.
- Design tokens live in `src/styles/tokens.css`:
  - Brand: `--brand-coral`, `--brand-coral-strong`, `--on-brand`
  - Text: `--text`, `--muted` (aliases to `--text-strong`, `--text-muted`)
  - Glass: `--glass`, `--glass-border` (alias to `--glass-overlay`)
  - Hero Peach Glows: `--peach-100`, `--peach-200`, `--peach-300`
  - Ambient: `--hero-ambient-start`, `--hero-ambient-end`
  - Radii: `--radius-pill`, `--radius-inner`
  - Z-Index: `--z-video`, `--z-content`, `--z-nav`
- Use tokens via inline style when needed:
  - `style={{ color: "var(--text)" }}`
  - `style={{ background: "var(--brand-coral)" }}`
  - `style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}`
  - `style={{ zIndex: "var(--z-nav)" }}`
- Keep Tailwind for layout/typography (spacing, grid, flex, text sizes) but avoid Tailwind color/z-index utilities when a token exists.

## Motion & Behavior
- Framer Motion for animations; keep behavior constants in `src/lib/constants.ts`.
  - Example: `MOTION.hero.yRange`, `MOTION.hero.opacityRange`
- Do not store behavior values (ranges/outputs) in CSS tokens.

## Component Guidelines
- UI primitives (in `ui/`): stateless, reusable, token-driven styling.
- Sections (in `sections/`): compose UI primitives, handle motion, no global side effects.
- Layout (in `layout/`): fixed elements, navigation, footer; use z-index tokens for stacking.

## Naming & Files
- PascalCase component files with named exports: `export function Button() {}`
- One component per file unless trivial helpers.
- Keep props typed; prefer simple, explicit prop names.

## Do & Don’t
- Do: Import from `@/components/ui/...`, `@/components/sections/...`, `@/components/layout/...`.
- Do: Use `var(--...)` tokens for colors, overlays, and z-index.
- Do: Keep motion values in `lib/constants.ts`; use helpers in `lib/`.
- Don’t: Add barrels or duplicate components at `src/components` root.
- Don’t: Use raw hex/rgba or Tailwind color/z-index utilities where tokens exist.

## Adding Something New — Checklist
1. Place files in the right folder:
   - UI primitive → `src/components/ui/`
   - Section → `src/components/sections/`
   - Layout element → `src/components/layout/`
2. Imports: use `@/...` alias to canonical paths.
3. Styling: use tokens (`var(--text)`, `var(--brand-coral)`, `var(--glass)`, `--z-*`).
4. Motion: add ranges/outputs in `src/lib/constants.ts` if needed; don’t inline magic numbers.
5. Verify build: `npm run build` and ensure no broken imports.

## Example
```tsx
import { Button } from "@/components/ui/Button";

export function ExampleSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
      <h2 className="text-2xl font-semibold mb-6">Example</h2>
      <div className="rounded-2xl p-6 border" style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}>
        <p style={{ color: "var(--muted)" }}>Consistent styling via tokens.</p>
        <Button variant="primary">Action</Button>
      </div>
    </section>
  );
}
```

## Rationale
- Tokens centralize visual decisions and prevent drift.
- Facilitates future theming and brand updates without code churn.
- Keeps motion and layout behavior separate from style.
