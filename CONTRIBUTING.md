# Contributing to Normi Web

This project uses Next.js App Router, React 19, and CSS Modules with design tokens. Keep changes small, consistent, and verifiable.

## Source of Truth
- Read `copilot-instructions.md` first. It is the authoritative spec for architecture, styling, and guardrails.
- Global styles are baseline-only in `src/app/globals.css` (reset, typography, focus ring). Components must own their styles.

## Ground Rules (TL;DR)
- CSS Modules only for component/section/layout styles. No global component styles.
- No Tailwind utilities in TSX. Use CSS Modules and tokens instead.
- Tokens live in `src/styles/tokens.css`. Don’t hardcode colors, shadows, or radii.
- Fonts via `next/font` in `src/app/layout.tsx`. Do not set fonts per-component.
- Focus ring is tokenized and applied globally via `:focus-visible`.
- Import via `@/*` alias. No barrel files.

## Repo Layout
- `src/app/` — App Router entry, `layout.tsx`, `globals.css`, route files.
- `src/components/`
  - `ui/` — reusable primitives (stateless)
  - `sections/` — composed page sections
  - `layout/` — persistent UI (nav, footer, controls)
- `src/styles/` — `tokens.css`, optional `utilities.css`
- `src/lib/` — helpers, clients, constants

## Local Development
```sh
npm install
npm run dev
```

Before pushing:
```sh
npx eslint && npm run build
```

## Commit Style
- Use Conventional Commits, e.g. `feat: …`, `fix: …`, `docs: …`, `refactor: …`.

## Pull Request Checklist
- Follows `copilot-instructions.md` (CSS Modules, strict ownership, no Tailwind utilities in TSX).
- No global side effects in `globals.css` beyond baseline.
- Tokens used for all visual values; no raw hex/rgba.
- Fonts only defined in `layout.tsx` via `next/font`.
- Focus visible works and is unobtrusive (tokenized ring).
- ESLint passes and project builds: `npx eslint && npm run build`.
- UI changes include a short before/after note or screenshots.

## Notes
- Prefer small, focused PRs.
- If in doubt, mirror an existing component’s patterns.
