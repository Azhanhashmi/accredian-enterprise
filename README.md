# Accredian Enterprise — Landing Page Clone

A faithful recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Includes a fully functional lead capture form backed by a Next.js API route.

**Live Demo:** _Deploy to Vercel (instructions below)_

---

## Tech Stack

- **Next.js 15** — App Router, server & client components
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Next.js API Routes** — backend endpoint for lead capture (no external DB needed)

---

## Sections Built

| Section | Description |
|---|---|
| **Navbar** | Sticky, scroll-aware, fully responsive with mobile menu |
| **Hero** | Full-screen dark landing with animated dashboard card |
| **Stats** | Animated counters triggered on scroll |
| **Solutions** | 8-feature grid with hover interactions |
| **Programs** | 4 domain cards (Data Science, PM, Leadership, Cloud) |
| **How It Works** | Interactive 4-step process with tab switcher |
| **Testimonials** | 3 testimonial cards from L&D leaders |
| **Partners** | Dual infinite marquee of institution logos |
| **CTA Banner** | Mid-page call-to-action |
| **Contact Form** | Lead capture form with validation + API integration ✅ Bonus |
| **Footer** | Full links, social icons, legal |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API — Lead Capture

### `POST /api/lead`

Accepts lead form submissions. Validates required fields and stores them in-memory.

**Request body:**
```json
{
  "fullName": "Rahul Mehta",
  "workEmail": "rahul@company.com",
  "companyName": "Acme Corp",
  "teamSize": "51-200",
  "message": "Optional message"
}
```

**Success response:**
```json
{
  "success": true,
  "message": "Thank you! Our team will reach out within 24 hours.",
  "leadId": "LEAD-1234567890"
}
```

### `GET /api/lead`

Returns all captured leads (useful during development/review).

> **Note:** Leads are stored in-memory and reset on server restart. In production, replace with a database (PostgreSQL, MongoDB, etc.)

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments.

---

## Approach Taken

1. **Scanned the reference site** to map every section, copy, and UI pattern
2. **Component-first architecture** — each section is its own isolated component
3. **Dark/light contrast** — dark navy for hero/stats/contact, white for content sections, creates clear visual rhythm
4. **Animations** — CSS keyframes for hero fade-up, scroll-triggered counters in Stats, hover lifts on cards
5. **Mobile-first responsive** — all sections tested at 375px, 768px, 1280px breakpoints
6. **API integration** — `/api/lead` route handles form validation server-side before storing

---

## AI Usage

This project was built with assistance from **Claude (Anthropic)**:

| What AI helped with | What I modified/improved |
|---|---|
| Component scaffolding for all sections | Adjusted color palette and spacing to match reference more closely |
| Initial Tailwind class structure | Fixed the `styled-jsx` server component bug manually |
| Copy/content from reference site scan | Reorganized section order for better UX flow |
| API route boilerplate | Added proper TypeScript types and email regex validation |
| Animation CSS | Tuned timing and delays for smoother feel |

---

## What I'd Improve With More Time

1. **Database integration** — replace in-memory store with PostgreSQL (via Prisma) or Supabase
2. **Email notification** — send confirmation email to lead using Resend or SendGrid
3. **Analytics dashboard page** — build the actual `/dashboard` route shown in the hero card
4. **Framer Motion** — replace CSS animations with Framer Motion for more control
5. **CMS integration** — pull testimonials, programs, and partner logos from a headless CMS (Contentful/Sanity)
6. **A/B testing** — test hero CTA variants for conversion optimization
7. **i18n** — add multi-language support for regional enterprise clients
8. **E2E tests** — add Playwright tests for the form submission flow
