# Yash Waghmare — Portfolio

Personal site with a modern Home plus About, Work, Skills, Contact, and Resume. Built from `Yash_Waghmare_Website_Blueprint _CLI.md` and restyled from the Stitch project.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Inter + JetBrains Mono via `next/font`
- Vercel for hosting
- Resend for the contact form (optional)

Track implementation in [`DEVELOPMENT_PROGRESS.md`](./DEVELOPMENT_PROGRESS.md).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Contact form

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (verified Resend sender)

Without those keys the form returns a clear error and visitors can still use the email link.

## Content

Edit the TypeScript files in `content/`:

- `content/profile.ts` — identity, about copy, nav, contact
- `content/projects.ts` — work + case studies
- `content/skills.ts` — skill domains

Replace `public/downloads/resume.pdf` with your real resume. Update email, LinkedIn, GitHub, and store links in `content/profile.ts` and `content/projects.ts`.

## Deploy

```bash
npx vercel
```

Or import the GitHub repo in the Vercel dashboard. Set the same env vars in the project settings.
