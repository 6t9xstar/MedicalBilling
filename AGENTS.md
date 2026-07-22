# Apex Precision Billing - Unified Website

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion v12
- Lucide React v1
- TypeScript

## Key Conventions
- All client components use `"use client"` directive
- Data in `src/data/` as TypeScript modules
- Centralized animation variants in `src/lib/animations.ts`
- CSS variables in `src/app/globals.css`
- Responsive: mobile-first with Tailwind breakpoints
- Colors use CSS variable theme tokens

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint check

## Project Structure
```
src/
├── app/           # Pages (App Router)
│   ├── page.tsx   # Home page
│   ├── about/
│   ├── contact/
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── specialties/
│   ├── for-you/
│   ├── facility/
│   ├── pricing/
│   ├── faq/
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/    # Navbar, Footer, ScrollProgress
│   ├── sections/  # Home page sections
│   ├── ui/        # AnimatedCounter, etc.
│   └── widgets/   # LiveChat, CookieConsent, etc.
├── data/          # Services, specialties, navigation
├── lib/           # Utils, animations
└── hooks/         # Custom hooks
```
