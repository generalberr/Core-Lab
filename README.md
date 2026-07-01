# CoachCore Website

Built with Next.js 14 (App Router) · TypeScript · CSS Modules · Deployed on Vercel via GitHub.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your GitHub repo
3. Vercel auto-detects Next.js — click Deploy
4. Every push to `main` auto-deploys

## Formspree (Contact Form)

1. Go to formspree.io and create a free account
2. Create a new form → copy the Form ID
3. In `src/app/contact/page.tsx` replace `YOUR_FORM_ID` with your actual ID

## Pages

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/the-band` | `src/app/the-band/page.tsx` |
| `/pricing` | `src/app/pricing/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

## Editing Content

- **Hero text** → `src/app/page.tsx`
- **Band specs** → `src/app/the-band/page.tsx`
- **Pricing plans** → `src/app/pricing/page.tsx`
- **Nav links** → `src/components/Nav/Nav.tsx`
- **Footer** → `src/components/Footer/Footer.tsx`
- **Colors** → `src/app/globals.css` (`:root` variables)
