# Clinicus Landing Page

A responsive healthcare landing page for Clinicus. It introduces the care-management platform, highlights outcomes and programs, and provides clear calls to action for booking a demo.

## Highlights

- Responsive layouts for phone, tablet, laptop, and large desktop screens
- Healthcare-focused hero, solution, program, metrics, testimonial, and CTA sections
- Optimized local images using Next.js `Image`
- Modern styling with Tailwind CSS
- Footer with contact details and social links

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Run Locally

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/YOUR-USERNAME/clinicus-landing.git
cd clinicus-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev    # Start the development server
npm run build  # Create an optimized production build
npm run start  # Run the production build locally
npm run lint   # Run ESLint
```

## Project Structure

```text
src/
├── app/          # App Router pages and global styles
└── components/   # Reusable landing-page sections
public/images/    # Site images and SVG assets
```

## Deployment

The recommended deployment option is [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project**.
3. Import the GitHub repository.
4. Confirm the detected **Next.js** settings and select **Deploy**.

Every push to the production branch will automatically trigger a fresh deployment.

## License

This project is intended for private use unless a license is added.
