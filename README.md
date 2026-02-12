# Angel's Care Landing Page

Landing page for Angel's Care clinic built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 20+
- pnpm 10+

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm build
```

## Deploy to Vercel

1. Push source code to GitHub/GitLab/Bitbucket.
2. Go to Vercel and click `Add New Project`.
3. Import this repository.
4. Keep defaults:
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
5. Click `Deploy`.

## Notes

- All images are local under `public/images/angel-care`.
- Sticky Zalo icon uses remote SVG from `page.widget.zalo.me` and is already whitelisted in `next.config.ts`.
