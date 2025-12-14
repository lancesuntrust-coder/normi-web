## Summary

Describe the change and its purpose.

## Checklist (Required)

- [ ] Read and followed `CONTRIBUTING.md`
- [ ] Read and followed `copilot-instructions.md`
- [ ] Imports use alias `@/*` and canonical paths (`ui/`, `sections/`, `layout`, `lib`)
- [ ] Styling uses tokens (`var(--...)`); no raw hex/rgba/z-index utilities
- [ ] Motion values live in `src/lib/constants.ts` (no inline magic numbers)
- [ ] No barrels (`index.ts`) or duplicate components under `src/components`
- [ ] Ran `npx eslint && npm run build` locally

## Screenshots / Visuals

If UI changes, include before/after screenshots or a short clip.

## Notes

Anything reviewers should be aware of (follow-ups, trade-offs, etc.).
