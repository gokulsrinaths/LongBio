# LongBio — The Intelligence Layer for Longevity Biotech

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Airtable](https://img.shields.io/badge/Airtable-Database-FCAF45?logo=airtable&logoColor=white)](https://airtable.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Author:** Gokul Srinath Seetha Ram

</div>

---

## What Is LongBio?

LongBio is a curated intelligence platform for the longevity biotech ecosystem. It maps the people, companies, investors, and research programs shaping the field — and keeps that map current.

The product is built around a single idea: **most longevity information exists somewhere, but it's scattered, unstructured, and hard to navigate**. LongBio pulls it into one working view — structured enough to be searchable, connected enough to be useful, and updated frequently enough to reflect where the field actually is.

---

## What's Inside

| Section | What it does |
|---------|-------------|
| **Database** | Search 2,184+ profiles across companies, researchers, investors, and operators. Backed by live Airtable views — updated every ~4.6 hours |
| **Library** | Curated collection of papers, video lectures, online courses, talks, and podcast embeds. Organised by topic and difficulty |
| **Events** | Longevity conferences, meetups, and industry gatherings with an embedded live calendar |
| **Reading** | Curated external writing — the best commentary and analysis from across the longevity web, without the noise |
| **About** | Institute mission, core values, and sponsorship/contribution pathways |

---

## Database Structure

The database covers 11 core domains across the longevity stack — therapeutics, biomarkers, infrastructure, tooling, and adjacent categories — with four primary views:

| View | What's tracked |
|------|---------------|
| **Companies** | Stage, focus area, and leadership |
| **People** | Researchers, operators, and builders across the ecosystem |
| **Investors** | Funds, rounds, and timing |
| **Typology** | Research area taxonomy for navigating the field |

All views are powered by embedded Airtable — live data, filterable, no manual sync required.

---

## Platform Stats

- **2,184** profiles mapped across the longevity ecosystem
- **4.6h** average update cadence
- **11** core domains covered

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5.3 |
| **Styling** | Tailwind CSS 3 + `@tailwindcss/typography` + `@tailwindcss/forms` |
| **Animation** | Framer Motion 12 |
| **Components** | Headless UI + Heroicons |
| **Database** | Airtable (embedded views via `AirtableEmbed` component) |
| **Testing** | Jest + React Testing Library |
| **Linting** | ESLint + TypeScript ESLint |
| **Git hooks** | Husky (pre-commit lint) |
| **Deployment** | Netlify (`netlify.toml` configured) |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              <- Landing page: hero, stats, product overview
│   ├── database/             <- Database hub + people/companies/investors/typology
│   ├── library/              <- Knowledge library with search and collections
│   ├── events/               <- Events calendar
│   ├── blog/                 <- Curated reading list
│   └── about/                <- Mission and support page
├── components/
│   ├── database/             <- AirtableEmbed, DatabaseNav, FilterBar
│   ├── library/              <- ResourceExplorer, AdvancedSearch, LearningPath
│   ├── ui/                   <- Badge, Button, Card, Typography, LoadingSpinner
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroBackground.tsx
│   └── AnimationWrapper.tsx
├── config/
│   └── database.ts           <- Airtable embed URLs per view
├── data/
│   └── library.ts            <- Static curated library content
├── hooks/
│   ├── useReducedMotion.ts   <- Respects prefers-reduced-motion
│   └── useScrollAnimation.ts
├── styles/
│   └── theme.ts              <- Design tokens
└── types/
    ├── database.ts
    └── global.d.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18.17.0+

### Install & Run

```bash
git clone https://github.com/gokulsrinaths/LongBio.git
cd LongBio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Commands

```bash
npm run dev           # Development server
npm run build         # Production build
npm run start         # Start production server
npm run lint          # ESLint
npm run type-check    # TypeScript check (no emit)
npm test              # Jest test suite
npm run test:watch    # Jest in watch mode
npm run test:coverage # Coverage report
```

---

## Airtable Setup

The database views are powered by Airtable embeds configured in `src/config/database.ts`. Each view maps to a public Airtable embed URL:

```typescript
export const databaseConfig = {
  people:    { url: 'https://airtable.com/embed/...' },
  companies: { url: 'https://airtable.com/embed/...' },
  investors: { url: 'https://airtable.com/embed/...' },
  typology:  { url: 'https://airtable.com/embed/...' },
};
```

To connect your own Airtable base, replace the embed URLs in `database.ts` with your own shared view links. See [`AIRTABLE_SETUP.md`](AIRTABLE_SETUP.md) for full instructions.

---

## License

MIT — see [`LICENSE`](LICENSE) for details.

---

<div align="center">

*Mapping the longevity biotech ecosystem — one profile at a time.*

**Gokul Srinath Seetha Ram**

</div>
