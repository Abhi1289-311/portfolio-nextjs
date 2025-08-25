# Next Portfolio (Abhilash) — Latest

Next.js 15 + TypeScript + Tailwind + MUI. Sticky footer, improved contact UX, optional Supabase storage.

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Env
Copy `.env.local.example` to `.env.local` and set:
```
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Git Hygiene
- `.gitignore` included (node_modules, .next, .env.local, etc.).
- If `node_modules` was tracked accidentally:
```bash
git rm -r --cached node_modules
git commit -m "chore: stop tracking node_modules"
```

## Notes
- Uses App Router, dynamic routes (`/projects/[slug]`), ISR on `/projects`, and an API route (`/api/contact`).
