Place your hero video files here:
- hero.webm (preferred)
- hero.mp4 (fallback)

Suggested export: 1080p or 1440p, ~24–30fps, muted.
Recommended encoding: VP9 (webm) + H.264 (mp4).

Development-only overrides (do not commit third-party media):
- Set env vars to preview a local/remote dev asset without adding it to the repo:
	- NEXT_PUBLIC_HERO_VIDEO_WEBM
	- NEXT_PUBLIC_HERO_VIDEO_URL (mp4)
- In production, the app will use `/hero/hero.webm` and `/hero/hero.mp4` if present.
- If you must store a dev file locally, prefer naming it `dev-*.mp4`/`dev-*.webm` and do not commit.
