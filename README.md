## Contributing & AI Instructions
- See `CONTRIBUTING.md` for human guidelines.
- See `copilot-instructions.md` for AI assistant rules.
Normi Web — motion-first landing page

Overview
- Problem: Many learners understand Japanese but freeze in real conversations. Traditional schools focus on grammar, tests, and polite forms—rarely training real-time speaking.
- Philosophy: Language is a motor skill. Fluency comes from speaking, reacting, being corrected, and repeating in real-life situations.
- What Normi is: A live conversation–first Japanese school focused on nichijou kaiwa (daily, casual Japanese). Small group classes with real teachers. Optional 1-on-1 as a premium add-on. AI supports learning with private after-class feedback.

Why motion-first
- The site should feel like entering a system, not reading a brochure.
- Smooth motion mirrors how conversation flows—responsive, layered, and human.
- Subtle scroll-based cues and animated abstractions (rings, waves, bubbles) suggest dialogue and correction without being childish or corporate.

Design tone
- Calm, modern, human
- Safe to make mistakes; rewarding after every class
- Clear hierarchy and generous spacing

Tech stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Framer Motion for interaction and transitions
- Lenis for smooth scrolling

Running locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

Scope
- Prototype-as-code to explore feel and motion
- No backend, auth, database, dashboard, or CMS

Structure highlights
- Full-screen hero with warm gradient background
- Top-right controls: Language | Login | Sign up
- Bottom-centered floating navigation pill: Scenes | Classes | Community
- Large headline on the left with subtext about live conversation + feedback
- Abstract hero visual on the right representing conversation (rings, sound waves, bubbles)

Notes
- Clean, readable code with comments where helpful
- No copying from existing projects—greenfield implementation focused on experience

Design tokens
 - `--bg`, `--text`, `--muted`, `--accent`, `--peach`, `--sand`, `--glass`, `--glass-border`, `--nav-glass`
 - Utility classes (plain CSS): `.glass-card`, `.nav-pill`, `.btn-primary`, `.btn-secondary`
 - Warm gradient is applied to `body` in `app/globals.css`.

Troubleshooting
 - If Tailwind `@apply` causes build errors, utilities are already implemented in plain CSS.
 - If you see a Turbopack root warning, it’s configured in `next.config.ts`. Remove extra parent lockfiles if not needed.
