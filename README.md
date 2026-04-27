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
## Setup Instructions

```bash
# 1. Unzip and enter project
unzip accredian-enterprise.zip
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Production build
npm run build
npm start
```
## Approach Taken

1. **Scanned the reference site** to map every section, content block, and UI pattern before writing a single line of code
2. **Component-first architecture** — each section is a completely isolated component with its own state and logic, making the codebase easy to navigate and extend
3. **Visual hierarchy through contrast** — alternated between dark navy (`#0a1628`) and white/light sections to create clear breathing room and guide the user's eye down the page
4. **Interactivity where it matters** — scroll-triggered counters in Stats, interactive tab switcher in How It Works, hover states on every card — not random animation, but purposeful micro-interactions that make the UI feel alive
5. **Mobile-first** — every component was built and checked at 375px first, then scaled up. The navbar collapses to a hamburger, grids reflow to single column, and font sizes scale appropriately
6. **API-first bonus feature** — the lead capture form hits a real Next.js API route (`/api/lead`) with server-side validation, not just a frontend-only mock

---

## AI Usage Explanation

This project was built with assistance from **Claude (Anthropic)**:

| What AI helped with | What I verified / improved manually |
|---|---|
| Scaffolding all component files | Caught and fixed the Tailwind v4 `@import` bug — AI generated v3 syntax |
| Writing Tailwind class structures | Reviewed every component for visual consistency and spacing |
| API route boilerplate | Added TypeScript types, email regex validation, and proper HTTP status codes |
| Animation CSS keyframes | Tuned timing and delays so animations feel smooth, not jarring |
| Content copy from reference site scan | Verified section order made UX sense, reorganized flow |

**Honest reflection:** AI accelerated scaffolding by ~60%. But it required active review — the Tailwind v4 bug would have shipped broken without manual checking. Good AI usage means treating output as a first draft, not a final answer.

---

## Improvements I Would Make With More Time

### UI & Design Quality
- **Pixel-perfect spacing audit** — go through every section with a fine comb, fix inconsistent padding, line-heights, and font weights that make it look "AI-generated." Real polish is in the 1px details
- **Proper image assets** — replace the placeholder emoji/text logos in the Partners section with actual SVG institution logos. The marquee looks amateurish with text badges
- **Consistent visual language** — right now each section has slightly different border-radius values, shadow depths, and button styles. A proper design token system (via CSS variables) would unify everything
- **Typography scale** — implement a strict type scale (e.g. 12/14/16/20/24/32/48/64px) and stick to it. Currently some font sizes are ad-hoc
- **Dark mode** — the hero is dark, the rest is light. A proper dark mode toggle would make the product feel complete and modern

### Functionality
- **Real database** — swap the in-memory lead store for PostgreSQL via Prisma, or Supabase for a quick serverless option. Right now leads vanish on every server restart
- **Email confirmation** — when a lead submits the form, send them a confirmation email via Resend or Nodemailer. This is what a real product does
- **Form analytics** — track how many users start vs. complete the form. Drop-off data is gold for conversion optimization
- **Toast notifications** — replace the inline success/error states with a proper toast system (react-hot-toast) for better UX feedback
- **Loading skeleton screens** — instead of blank sections while JS loads, show skeleton placeholders that match the layout

### Code Quality
- **Centralized design tokens** — move all colors, spacing, and font sizes into a single `tokens.ts` file so nothing is hardcoded in components
- **Custom hooks** — extract `useScrollAnimation`, `useCounter`, and `useIntersectionObserver` into `/hooks` so components stay clean
- **Error boundaries** — wrap sections in React error boundaries so one broken component doesn't crash the whole page
- **E2E tests** — add Playwright tests for the form submission flow, navbar scroll behavior, and mobile menu
- **Storybook** — document each component in isolation so future developers can understand and reuse them without digging through page files

### Performance
- **Lazy load below-the-fold sections** — use `next/dynamic` with `ssr: false` for heavy sections like Partners and Testimonials
- **Optimize font loading** — move Google Fonts to `next/font` for zero layout shift and better performance scores
- **Image optimization** — use `next/image` for all images with proper `width`, `height`, and `priority` attributes
- **Bundle analysis** — run `@next/bundle-analyzer` to identify and eliminate unnecessary JS weight

### What Would Make This Stand Out in a Real Interview
- A working `/dashboard` route that shows the analytics UI teased in the hero section
- Persisted lead data viewable at `/api/lead` (GET) with a simple admin table at `/admin`
- A Lighthouse score above 90 across all four categories
- Clean git history with meaningful commit messages, not one giant "initial commit"
