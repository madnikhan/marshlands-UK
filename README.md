# MARSHLAND Website

Professional static marketing site for **MARSHLAND** (Al-Razaq UK Pvt Ltd) — UK brand for kitchen and home products, with Amazon retail and B2B partnership pathways.

## Stack

- [Astro](https://astro.build) + TypeScript
- Static HTML/CSS/JS output
- Web3Forms for Contact and Partner enquiry forms

## Pages

- `/` Home
- `/about` About
- `/products` Our Products
- `/partner` Become a Partner
- `/contact` Contact Us
- `/privacy` Privacy

## Develop

Node.js 22.12+ required.

```bash
cp .env.example .env
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content updates

- Company details: `src/data/company.ts`
- Products catalogue: `src/data/products.ts`
- Brand assets: `public/images/`

## Deploy

See [DEPLOY.md](./DEPLOY.md) for hosting and DNS steps for `marshlands.co.uk`.

## Brand colours

- Maroon `#790D16`
- Cream `#E5D3AF`
- Cream light `#F5EFE1`
- Slate mist `#AEC4D4`
