# AI Coding Instructions — Normi Web

These rules are the operating spec for AI assistants contributing to this repo.
Always follow them unless explicitly overridden by the user.

Failure to follow these rules means the output is incorrect.

---

## File Creation Rules (Strict)
- Do NOT create new components unless explicitly asked by the user.
- Before creating any file, search for existing implementations:
  `grep -R "export function <ComponentName>" src/components`
- If a component already exists, modify or extend it instead of creating a duplicate.
- Duplicate or parallel components are not allowed.

- It is allowed to delete unused or duplicate files if they violate structure rules.
- If a file is deleted, update all imports accordingly.

---

## Imports & Structure
- Use path alias `@/*` → `src/*`.
- Only import from canonical locations:
  - `src/components/ui`
  - `src/components/sections`
  - `src/components/layout`
  - `src/lib`
- Do NOT create or use barrel files (`index.ts`).
- One component per file.
- Use named exports only.

---

## Component Placement
- `ui/`
  - Stateless, reusable UI primitives
  - Token-driven styling only
- `sections/`
  - Page-level compositions
  - Compose `ui/` primitives
  - Handle motion and layout
- `layout/`
  - Persistent UI (navigation, footer, controls)
  - Use z-index tokens for stacking

Do NOT place components directly under `src/components`.

---

## Styling & Design Tokens
- Use CSS variables (tokens) for all visual values.
- Do NOT hardcode hex, rgba, hsla.
- Do NOT use Tailwind color or z-index utilities when a token exists.

- Tokens live in:
  - `src/styles/tokens.css`
- Shared utilities live in:
  - `src/styles/utilities.css`

- Prefer reusing existing tokens.
- Do NOT introduce new design tokens without explicit user approval.
- If a new visual value is needed, flag it instead of implementing it.

### Style Architecture Standards (Strict Ownership)
- Keep horizontal gutters and vertical rhythm independent.
- Use `layout.tsx` with `content-container` for site-wide gutters.

#### Ownership Rules
- `globals.css` may import ONLY:
  - `tailwindcss` (if used)
  - `src/styles/tokens.css`
  - `src/styles/utilities.css`
  - base/reset styles (html/body, typography)
  - truly shared UI primitives (only if reused across multiple components)
- DO NOT import any section or component CSS files in `globals.css`.
- Every component/section must import its own CSS directly, e.g.:
  - `src/components/sections/Hero.tsx` → `import "@/styles/sections/hero.css";`
  - `src/components/layout/TopControls.tsx` → `import "@/styles/layout/top-controls.css";`

#### Three-Layer Model
- Tokens: centralized variables in `src/styles/tokens.css` (single `:root`, grouped). Do not change values without request.
- Utilities: global helpers in `src/styles/utilities.css` (`content-container`, `full-bleed`, `section-*`, a11y helpers, hero utilities).
- Section Styles: one file per component under `src/styles/sections|layout|ui` with clear class names, imported by the owning component.

#### Section Rhythm
- Use `section-*` utilities for vertical spacing (`section-md`, `section-md-b`, `section-footer`).
- Do not hardcode margins/padding in components for section spacing.

#### Hero Patterns
- Horizontal: `.hero-container` (tokens `--hero-container-*`).
- Vertical: `.hero` (or `.hero-section`) (tokens `--hero-space-*`, `--hero-indent-bottom`).
- Absolute hero elements bind offsets with `calc(var(--hero-bottom-*) + var(--hero-space-bottom))`.

#### Implementation Rules
- No static visual inline styles in TSX. Move background, color, z-index, pointer-events, spacing into the component’s CSS file.
- Inline style is allowed only for motion/animation-driven values (e.g., Framer Motion `y`, `opacity`, transforms) or dynamic state-dependent values.
- Scope selectors with a root class for the component (e.g., `.hero ...`, `.top-controls ...`). Avoid generic selectors like `.button` inside section CSS unless strictly prefixed and owned.

#### Do / Don’t
- Do: import your component’s CSS in the component file.
- Do: keep `globals.css` clean with tokens/utilities/base only.
- Don’t: add section or component CSS imports to `globals.css`.
- Don’t: use static inline styles for visuals.

#### Examples
- `globals.css`
  - `@import "tailwindcss";`
  - `@import "../styles/tokens.css";`
  - `@import "../styles/utilities.css";`
- `Hero.tsx`
  - `import "@/styles/sections/hero.css";`
- `TopControls.tsx`
  - `import "@/styles/layout/top-controls.css";`

---

## Motion & Behavior
- Use Framer Motion for animations.
- Store motion ranges and outputs in `src/lib/constants.ts`.
- Do NOT inline motion magic numbers.
- Do NOT store motion values in CSS tokens.

---

## Code Quality
- Respect existing TypeScript types.
- Keep props explicit and typed.
- No duplicate components.
- No parallel roots.
- Do not restyle existing components unless explicitly instructed.
- Preserve spacing, radii, and optical balance unless told otherwise.

---

## Required Validation
- Any proposed change must pass:
  - `npm run lint`
  - `npm run build`
- If a change would break the build, do NOT propose it.

---

## Example Usage
```tsx
import { Button } from "@/components/ui/Button";

export function ExampleSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
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

---

That’s it.  
This is **tight, enforceable, and readable by both humans and AI**.

If you want next, I’ll give you:
- a **one-line Copilot pre-prompt** you paste every time, or  
- a **Jeton-style UI refactor checklist** so we go back to visuals without breaking structure.
