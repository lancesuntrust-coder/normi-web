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
