# DriftMonitor Landing Page

Developer-focused marketing site for DriftMonitor, built with Next.js App Router, TypeScript, and TailwindCSS.

## Local development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3001` by default.

## Environment variables

The current landing page does not require any environment variables for normal rendering.

If you still want to use the legacy waitlist endpoint in `app/api/waitlist/route.ts`, add:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

## Vercel deployment checklist

- Framework preset: **Next.js**
- Root directory: repository root
- Production domain: `https://driftmonitor.app`
- Optional environment variable in Vercel Project Settings:
  - `RESEND_API_KEY` only if the legacy waitlist route is still needed
