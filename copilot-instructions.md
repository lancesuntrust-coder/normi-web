# AI Coding Instructions — Normi Web
# AI Coding Instructions — Normi Web

These rules are the operating spec for AI assistants contributing to this repo.
Always follow them unless explicitly overridden by the user.

Failure to follow these rules means the output is incorrect.


## File Creation Rules (Strict)

  `grep -R "export function <ComponentName>" src/components`



## Imports & Structure

  - `src/components/ui`
  - `src/components/sections`
  - `src/components/layout`
  - `src/lib`


## Component Placement

  - Stateless, reusable UI primitives
  - Token-driven styling only
  - Page-level compositions
  - Compose `ui/` primitives
  - Handle motion and layout
  - Persistent UI (navigation, footer, controls)
  - Use z-index tokens for stacking

Do NOT place components directly under `src/components`.


## Styling & Design Tokens


  - `src/styles/tokens.css`
  - `src/styles/utilities.css`


### Numeric Values Clarification



## Style Architecture Standards (Strict Ownership + CSS Modules)

### No Tailwind Utilities in TSX (Mandatory)

  - semantic, component-owned class names (e.g., `heroHeadline`, `topControlsNav`)
  - approved global layout primitives: `content-container` ONLY

Disallowed in TSX (non-exhaustive):
`flex`, `grid`, `items-*`, `justify-*`, `gap-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`,
`m-*`, `w-*`, `h-*`, `min-*`, `max-*`, `text-*`, `bg-*`, `rounded-*`,
`absolute`, `relative`, `fixed`, `inset-*`, `top-*`, `left-*`, `right-*`, `bottom-*`,
`overflow-*`, `backdrop-*`.

Allowed inline styles:


### Ownership Rules

  - import of `src/styles/tokens.css`
  - minimal reset
  - base typography
  - app-level color defaults
  - accessibility defaults

  ```ts
  import styles from "./Component.module.css";
  ```


### Three-Layer Model (Non-Negotiable)

1. **Tokens**

   * Centralized variables in `src/styles/tokens.css`
   * Single `:root`
   * Do not change values unless explicitly requested

2. **Global Base**

   * Lives in `src/app/globals.css`
   * Minimal reset
   * Typography defaults
   * Color defaults
   * Focus-visible styles
  * NO component or layout styling (no section spacing, no hero/layout CSS)

3. **Component Styles**

   * Colocated CSS Modules (`*.module.css`)
   * Owned by each component under `src/components/**`


### Section Rhythm (Deprecated)

* Do NOT use `section-*` global utilities going forward.
* Page/section spacing should be implemented via each page’s CSS Module wrapper.
* Continue to use the global `content-container` for horizontal gutters; do not duplicate this logic.

---
### Hero Patterns (Current Implementation)

* Colocated CSS Module (`Hero.module.css`) with a root-scoped approach.
* Typical classes: `.root`, `.container`, `.headline`, `.title`, `.cta`, `.copy`, `.hint`.
* Vertical alignment uses hero spacing tokens; absolute elements bind offsets with:
  `calc(var(--hero-bottom-*) + var(--hero-space-bottom))`.
* Do not introduce hero CSS into globals; keep it owned by the component.

---


* No static visual inline styles in TSX.
* Inline styles allowed only for animation-driven values.
* Scope selectors with a root class per component.
* Avoid generic selectors like `.button` unless strictly prefixed and owned.

### CSS Modules Conventions

* Group structure first (root/rows/containers), then elements (title/copy/cta), then states (active/hover) as separate classes.
* Prefer state classes over inline styles for hover/active; motion values may remain inline via Framer Motion.

### Enforcement & Tooling

* Pre-commit (`.husky/pre-commit`) runs:
  - `lint-staged` (eslint with `--max-warnings=0` on staged TS/TSX)
  - Tailwind-in-TSX guard (grep) — commits fail if utilities are reintroduced
  - Barrels and misplaced components guard
* ESLint enforces import order and alias resolution; fix warnings before commit.

---

### Do / Don’t

**Do**
* Import component CSS inside the component file.
* Keep `globals.css` limited to base responsibilities.
* Use tokens for color, spacing, radii, and z-index.

**Don’t**

* Import component CSS into `globals.css`.
* Use Tailwind utilities anywhere.
* Hardcode colors or spacing inside TSX.
* Duplicate layout primitives.

---

## Global Base Styles

* When Tailwind is removed, a minimal global reset is mandatory.
* `src/app/globals.css` owns ONLY:

  * token imports
  * box-sizing reset
  * body margin reset
  * media normalization
  * base typography
  * neutral link styles
  * tokenized focus-visible styles

### Fonts

* Fonts are defined once via `next/font` in `src/app/layout.tsx`.
* Expose fonts as CSS variables (`--font-sans`, `--font-mono`) on `<html>`.
* `body` uses `font-family: var(--font-sans, system-ui, …)`.
* Components inherit fonts by default.

---

### Accessibility: Focus Ring (Mandatory)

* Use a global tokenized focus ring.

* Tokens in `tokens.css`:

  * `--focus-ring`
  * `--focus-ring-offset`

* Global rule in `globals.css`:
  ```css
  :focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: var(--focus-ring-offset);
  }
  ```

* Never remove focus outlines.

* Component overrides must remain visible and meet AA+ contrast.

---


* `content-container` is the single global primitive for readable width and gutters.
* Defined in `src/styles/utilities.css`.
* Applied once in `layout.tsx` around `{children}`.

Usage rules:

* Normal sections are contained by default.
* Do NOT duplicate container logic inside components.

---

## Motion & Behavior

* Use Framer Motion for animations.
* Motion ranges and outputs live in `src/lib/constants.ts`.
* Do NOT inline motion magic numbers.
* Do NOT store motion values in CSS tokens.
---

## Code Quality

* Respect existing TypeScript types.
* Keep props explicit and typed.
* No duplicate components.
* No parallel roots.
* Do not restyle existing components unless explicitly instructed.

---

## Required Validation

* All changes must pass:

  * `npm run lint`
* If a change would break the build, do NOT propose it.

---

## Compliance Note

---

### Final call

This version is **clean**, **non-contradictory**, and **AI-proof**.

Once you upload this into the ChatGPT project:
- I will treat it as binding
- I will not suggest patterns that violate it
- I will call out violations immediately

You did the hard thinking already. This just locks it so nothing drifts.
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

### Style Architecture Standards (Strict Ownership + No Tailwind in TSX)
- Keep horizontal gutters and vertical rhythm independent.
- Use `layout.tsx` with `content-container` for site-wide gutters.

#### No Tailwind Utilities in TSX (Mandatory)
- `.tsx/.jsx` files must NOT contain Tailwind utility classes.
- `className` in TSX may contain ONLY:
  - semantic, component-owned class names (e.g., `hero-headline`, `top-controls-nav`)
  - optionally ONE shared layout primitive if already defined (e.g., `content-container`, `full-bleed`, `section-*`)
- All layout, spacing, typography, color, positioning, sizing, borders, blur, and z-index MUST live in CSS files.

Disallowed in TSX (non-exhaustive): `flex`, `grid`, `items-*`, `justify-*`, `gap-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`, `m-*`, `w-*`, `h-*`, `min-*`, `max-*`, `text-*`, `bg-*`, `rounded-*`, `absolute`, `relative`, `fixed`, `inset-*`, `top-*`, `left-*`, `right-*`, `bottom-*`, `overflow-*`, `backdrop-*`.

Allowed inline styles: Framer Motion animated values only (e.g., `y`, `opacity`, transforms). No static visuals inline.

#### Ownership Rules
- `globals.css` may import ONLY:
  - `src/styles/tokens.css`
  - base/reset styles (html/body, typography)
  - minimal global a11y defaults
- DO NOT import any section or component CSS files in `globals.css`.
- Every component/section must import its own CSS directly, e.g.:
  - Using CSS Modules: `import styles from "./Hero.module.css";`

#### Three-Layer Model
- Tokens: centralized variables in `src/styles/tokens.css` (single `:root`, grouped). Do not change values without request.
- Global Base: minimal reset + typography + color defaults live in `src/app/globals.css`. No component/layout styles here.
- Component Styles: colocated CSS Modules (`*.module.css`) owned by each component under `src/components/**`.

#### Section Rhythm
- Use `section-*` utilities for vertical spacing (`section-md`, `section-md-b`, `section-footer`).
- Do not hardcode margins/padding in components for section spacing.

#### Hero Patterns
- Horizontal: `.hero-container` (tokens `--hero-container-*`).
- Vertical: `.hero` (tokens `--hero-space-*`, `--hero-indent-bottom`).
- Absolute hero elements bind offsets with `calc(var(--hero-bottom-*) + var(--hero-space-bottom))`.

#### Implementation Rules
- No static visual inline styles in TSX; put them in the component’s CSS.
- Inline style is allowed only for motion/animation-driven values.
- Scope selectors with a root class for the component (e.g., `.hero ...`, `.top-controls ...`). Avoid generic selectors like `.button` unless strictly prefixed and owned.

#### Do / Don’t
- Do: import your component’s CSS in the component file.
- Do: keep `globals.css` clean with tokens/utilities/base only.
- Don’t: add section or component CSS imports to `globals.css`.
- Don’t: use Tailwind utilities in TSX.

#### Example: Before → After
Before (TSX):
```tsx
<nav className="flex items-center gap-4 rounded-full px-4 py-2 text-sm">…</nav>
```

After (TSX + CSS):
```tsx
<nav className="top-controls-bar">…</nav>
```
```css
.top-controls-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
```

---

## Global Base Styles

- When Tailwind is removed, a minimal global reset is mandatory to normalize browser defaults.
- `src/app/globals.css` owns ONLY:
  - tokens import
  - minimal reset (box-sizing, margins, media elements, form controls)
  - app-level defaults (background, text color, typography smoothing)
  - neutral link styles
  - tokenized focus-visible styles
- Fonts are defined once via `next/font` in `src/app/layout.tsx` and exposed as CSS variables (`--font-sans`, `--font-mono`) on the `<html>` element.
- The `body` uses `font-family: var(--font-sans, system-ui, …)`; components inherit from body by default.
- All component and layout visuals remain in their colocated CSS Modules.

### Accessibility: Focus Ring (Mandatory)
- Use a global tokenized ring for consistent, accessible focus styling:
  - Tokens in `tokens.css`: `--focus-ring`, `--focus-ring-offset`
  - Global rule in `globals.css`:
    `:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: var(--focus-ring-offset); }`
- Never remove focus outlines. Component overrides must remain visible and meet AA+ contrast.

### Layout Primitive: `content-container`
- Keep `content-container` as the single global primitive for readable width and gutters.
- It remains defined in `src/styles/utilities.css` and applied once in `layout.tsx` around `{children}`.
- Usage:
  - Normal sections are contained by default.
  - Full-bleed sections (hero, edge-to-edge visuals) must explicitly escape the container using a section-scoped wrapper class.
  - Do not duplicate or reimplement container logic in components.

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
