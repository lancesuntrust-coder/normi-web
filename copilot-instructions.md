# AI Coding Instructions — Normi Web

These rules are the operating spec for AI assistants contributing to this repo. Always follow them unless explicitly overridden by the user.

## Imports & Structure
- Use path alias `@/*` → `src/*`.
- Only import from canonical locations: `src/components/{ui,sections,layout}` and `src/lib/*`.
- Do not create or use barrel files (`index.ts`).
- Keep one component per file; use named exports.

## Styling & Tokens
- Use CSS variables (tokens) for all visual values.
- Do not hardcode hex, rgba, hsla, or Tailwind color/z-index utilities when a token exists.
- Tokens live in `src/styles/tokens.css`; utilities in `src/styles/utilities.css`.
- Prefer reusing existing tokens; if a new visual is necessary, propose adding a token first.

## Motion & Behavior
- Use Framer Motion for animations.
- Store motion ranges/outputs in `src/lib/constants.ts`.
- Do not place motion values in CSS tokens or inline magic numbers.

## Component Placement
- `ui/`: Stateless, reusable primitives with token-driven styling.
- `sections/`: Page-level compositions using `ui/` primitives; handle motion.
- `layout/`: Persistent UI (nav, footer, controls); use z-index tokens.

## Code Quality
- Respect existing TypeScript types; keep props explicit and typed.
- No duplicate components or parallel roots.
- Run `npx eslint && npm run build` for validation before proposing commits.

## Example Usage
```tsx
import { Button } from "@/components/ui/Button";

export function ExampleSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
      <div className="rounded-2xl p-6 border" style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}>
        <p style={{ color: "var(--muted)" }}>Consistent styling via tokens.</p>
        <Button variant="primary">Action</Button>
      </div>
    </section>
  );
}
```
