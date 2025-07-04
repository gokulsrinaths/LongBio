# LongBio Institute Website

A modern, minimalist website for the LongBio Institute built with Next.js and Tailwind CSS. The website showcases the institute's mission, research database, educational resources, events, and membership options.

## Features

- Modern, responsive design inspired by OpenAI and Y Combinator aesthetics
- Research database with sections for People, Companies, and Investors
- Educational library with PDFs, videos, courses, and podcasts
- Events calendar and registration system
- Blog integration with Substack (LongBio Letter)
- Membership system with Individual and Organization tiers

## Pages

1. Landing Page
   - Hero section
   - Institute overview
   - Sponsors grid

2. Database
   - People section
   - Companies section
   - Investors section
   - LongBio Typology

3. Library
   - Research papers
   - Video lectures
   - Online courses
   - Podcast episodes

4. Events
   - Upcoming conferences
   - Past events
   - Event registration

5. Blog (LongBio Letter)
   - Featured articles
   - Category filtering
   - Substack integration

6. About & Membership
   - Team information
   - Mission statement
   - Membership tiers

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint
- PostCSS
- Autoprefixer

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/longbio/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── database/       # Database page
│   ├── events/         # Events page
│   ├── library/        # Library page
│   └── membership/     # Membership page
├── components/         # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - see LICENSE file for details 