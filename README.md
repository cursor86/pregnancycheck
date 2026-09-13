# Am I Pregnant

A privacy-first, all-in-one pregnancy hub: due date, ovulation/conception, and
weight-gain calculators, a symptom checker, a week-by-week growth visualizer,
a kick counter, and a contraction timer — all in one dashboard, plus a
lightweight FAQ chatbot. Every calculation runs client-side; nothing is sent
to a server.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

> **Note:** always run `next build` with the default `NODE_ENV` (do not
> override it to `development`) — this environment's Next.js/Turbopack build
> is sensitive to a mismatched `NODE_ENV` during static prerendering.

## Project structure

- `src/lib/` — pure calculation logic (due dates, ovulation, weight gain,
  symptom scoring, growth-by-week data, chatbot FAQ engine)
- `src/components/tabs/` — the seven utility hub tools
- `src/components/` — page sections (Hero, UtilityHub, ValueGrid,
  NewsletterSignup, Chatbot, Footer)

## Disclaimer

This is an educational tool, not a medical device. It does not provide
medical advice or diagnosis — always confirm with a healthcare provider.
