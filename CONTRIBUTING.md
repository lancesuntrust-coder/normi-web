# Normi Web — Code Structure & Style Guide

This guide defines how we structure code, style components, and use tokens so future additions stay consistent and maintainable.

## 1. Project Structure
**Source of Truth**
- All application code lives in `src/`
- No parallel or duplicate roots are allowed

**App Router**
- Next.js App Router is used
- Location: `src/app/`
- `layout.tsx` — global layout
- `globals.css` — global styles and CSS variables
- `page.tsx` — route entry files only

**Components**
- Components are grouped by responsibility, not by page.
- `src/components/`
```
├── ui/        // Reusable UI primitives
├── sections/  // Page-level composed sections
├── layout/    // Global layout elements
```

**ui/**
- Stateless, reusable primitives
- Examples: `Button`, `BottomNavPill`, `HeroVisual`

**sections/**
- Page sections composed of UI primitives
- Examples: `Hero`, `ScenePreview`

**layout/**
- Persistent layout elements
- Examples: `TopControls`, `Footer`

- Do not place components directly in `src/components/`.

## 2. Imports & Aliases
**Path Alias**
- Use the alias `@/*` → `src/*` (configured in `tsconfig.json`)
- Examples:
```ts
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { TopControls } from "@/components/layout/TopControls";
import { cn } from "@/lib/cn";
```

**Import Rules**
- Import directly from canonical files
- Do not use barrel files (`index.ts`)
- Avoid relative imports like `../../components/...`

## 3. Styling & Design Tokens
**Token-First Styling**
- Visual values must come from CSS variables (tokens)
- Do not hardcode hex, rgba, or Tailwind color utilities when a token exists

**Token Location**
- All tokens live in `src/styles/tokens.css`
- Shared utilities live in `src/styles/utilities.css`

**Token Categories**
- Brand
  - `--brand-coral`
  - `--brand-coral-strong`
  - `--on-brand`
- Text
  - `--text`
  - `--muted`
- Glass / Overlay
  - `--glass`
  - `--glass-border`
- Hero / Ambient
  - `--peach-100`, `--peach-200`, `--peach-300`
  - `--hero-ambient-start`, `--hero-ambient-end`
- Radii
  - `--radius-pill`
  - `--radius-inner`
- Z-Index
  - `--z-video`
  - `--z-content`
  - `--z-nav`

**How to Use Tokens**
- Tokens may be used via inline styles when necessary:
```tsx
style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}
style={{ color: "var(--text)" }}
style={{ zIndex: "var(--z-nav)" }}
```
- If the same token combination is reused more than twice, create a utility class in `utilities.css`.

**Tailwind Usage**
- Tailwind is used for layout and typography only
  - spacing, grid, flex, sizing, font scale
- Avoid Tailwind color, opacity, and z-index utilities when tokens exist

## 4. Motion & Behavior
- Framer Motion is the standard animation library
- Motion values must live in `src/lib/constants.ts`
- Example:
```ts
MOTION.hero.yRange
MOTION.hero.opacityRange
```
- Rules:
  - Do not inline animation ranges or magic numbers
  - Do not store motion values in CSS tokens
  - Motion behavior belongs to JS, not CSS

## 5. Component Rules
**UI Primitives (ui/)**
- Stateless
- Reusable
- Token-driven styling only
- No page logic

**Sections (sections/)**
- Compose UI primitives
- Handle motion and layout
- No global side effects

**Layout (layout/)**
- Persistent UI (nav, footer, controls)
- Use z-index tokens for stacking
- No page-specific logic

## 6. Naming & Files
- One component per file
- PascalCase filenames
- Named exports only
```ts
export function Button() {}
```
- Props must be typed
- Prefer explicit, simple prop names

## 7. Do & Don’t
**Do**
- Import from canonical paths using `@/`
- Use CSS variables (`var(--...)`) for visual styling
- Centralize motion values in `lib/constants.ts`
- Keep components in the correct folder

**Don’t**
- Create duplicate components
- Add barrel files
- Use raw hex/rgba values
- Use Tailwind color or z-index utilities when tokens exist
- Place components at `src/components` root

## 8. Adding Something New — Required Checklist
Before adding any new file:
- Confirm the correct location:
  - UI primitive → `src/components/ui/`
  - Section → `src/components/sections/`
  - Layout → `src/components/layout/`
- Search for existing implementations:
```sh
grep -R "export function <Name>" src/components
```
- Reuse or extend existing components if found
- Use tokens for all styling
- Add motion values to `lib/constants.ts` if needed
- Run:
```sh
npm run build
```

## 9. Example
```tsx
import { Button } from "@/components/ui/Button";

export function ExampleSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
      <h2 className="text-2xl font-semibold mb-6">Example</h2>
      <div
        className="rounded-2xl p-6 border"
        style={{
          background: "var(--glass)",
          borderColor: "var(--glass-border)",
        }}
      >
        <p style={{ color: "var(--muted)" }}>
          Consistent styling via tokens.
        </p>
        <Button variant="primary">Action</Button>
      </div>
    </section>
  );
}
```

## 10. Rationale
- Tokens centralize design decisions
- Prevents visual and behavioral drift
- Enables future theming and scaling
- Keeps structure predictable for humans and AI tools
