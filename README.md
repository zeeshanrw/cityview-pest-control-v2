# Cityview Pest Control — Website

Professional website for Cityview Pest Control, a solo-operated pest control
and wildlife removal business serving Peel Region (Mississauga, Brampton)
and York Region, GTA.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting (planned):** Vercel

## Getting Started

### Prerequisites

- Node.js 18.18+ (LTS recommended)
- npm

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    about/                # About page
    contact/              # Contact page (call/WhatsApp CTA + short form)
    blog/                 # Seasonal pest guides (SEO content)
    services/
      termites/
      bed-bugs/
      rodents/
      ants/
      cockroaches/
      mosquitoes/
      wasps-hornets/
      spiders/
      wildlife-removal/
  components/              # Shared UI components (Header, Footer, CTA buttons, etc.)
  lib/                     # Utilities, SEO helpers, constants
public/
  images/
    logo/                  # Client-provided logo assets
    team/                  # Real photos of owner/van/job sites
    services/              # Pest-specific images (real + licensed stock)
```

## Key Business Requirements

- **Pricing model:** Not fixed. Every CTA should say "Call or WhatsApp for a
  Free Quote" — never show pricing tables or fixed rates.
- **Primary contact:** 647-779-1770 (call + WhatsApp)
- **Contact form:** Secondary only. Max 3-4 fields (name, city, pest type,
  contact method). No pricing fields.
- **Images:** Only real client-provided photos or properly licensed stock
  (Unsplash/Shutterstock). Never use images from competitor sites.
- **Service area:** Mississauga, Brampton (confirmed). York Region cities
  pending confirmation — do not list specific York municipalities until
  confirmed with client.

Full requirements: see `/docs/requirements.md` (or the project's Claude
Project resources).

## Deployment

Planned: Vercel (recommended for Next.js — zero-config, free tier fits this
project, automatic deploys on push to `main`).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed (analytics
IDs, form endpoint, etc. — added as they're set up).
