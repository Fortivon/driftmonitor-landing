# DriftMonitor Landing Page

Developer-focused marketing site for DriftMonitor, built with Next.js App Router, TypeScript, and TailwindCSS.

## Local development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3001` by default.

## Environment variables

Create a local `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

`RESEND_API_KEY` is required by `app/api/waitlist/route.ts` to send waitlist emails via Resend.

## Vercel deployment checklist

- Framework preset: **Next.js**
- Root directory: repository root
- Environment variable in Vercel Project Settings:
  - `RESEND_API_KEY`
- Production domain: `https://driftmonitor.app`

After setting `RESEND_API_KEY`, the waitlist form posts to `/api/waitlist` and sends submissions through Resend.
