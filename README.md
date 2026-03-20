# Global Freight Next.js Website

A multi-file Next.js website for a Sri Lanka-based logistics and freight forwarding company.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4

## Pages included

- Home
- About Us
- Services
- Why Choose Us
- Industries
- Contact Us
- Request a Quote
- FAQ

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/
  page.tsx
  about/page.tsx
  services/page.tsx
  why-choose-us/page.tsx
  industries/page.tsx
  contact/page.tsx
  quote/page.tsx
  faq/page.tsx
components/
  container.tsx
  cta-banner.tsx
  hero-section.tsx
  industry-card.tsx
  page-hero.tsx
  section-heading.tsx
  service-card.tsx
  site-footer.tsx
  site-header.tsx
  contact-form.tsx
  quote-form.tsx
lib/
  content.ts
```

## Notes

- Replace placeholder contact details in `lib/content.ts`.
- Forms are currently static UI forms and do not submit to a backend yet.
- You can easily connect the quote and contact forms to email, a CRM, or a custom API route later.
