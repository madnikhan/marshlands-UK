# Deploying MARSHLAND (marshlands.co.uk)

This project builds to a static `dist/` folder. Any static host works.

## 1. Configure form delivery

1. Create a free access key at [https://web3forms.com](https://web3forms.com).
2. Set the notification emails to `atiq@marshlands.co.uk` and `qasim@marshlands.co.uk`.
3. Copy `.env.example` to `.env` (local) or add the variable in your host dashboard:

```bash
PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## 2. Build locally

Requires Node.js 22.12+.

```bash
npm install
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 3. Deploy options

### Cloudflare Pages (recommended)

1. Connect the Git repository (or upload `dist/`).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Environment variable: `PUBLIC_WEB3FORMS_ACCESS_KEY`
5. Node version: `22`

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add `PUBLIC_WEB3FORMS_ACCESS_KEY` under Site settings → Environment variables

### Vercel

1. Framework preset: Astro (or Other)
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add `PUBLIC_WEB3FORMS_ACCESS_KEY` in Project → Settings → Environment Variables

## 4. Point the domain

For `www.marshlands.co.uk` / `marshlands.co.uk`:

1. In your domain registrar DNS, add the records supplied by your host (usually CNAME for `www` and A/ALIAS for apex).
2. Enable HTTPS in the host dashboard.
3. Prefer redirecting apex → `www` (or the reverse) so there is one canonical URL.

## 5. Post-launch checklist

- [ ] Forms submit successfully and notify both directors
- [ ] Amazon store links open correctly
- [ ] Phone and mailto links work on mobile
- [ ] Add registered office address / Companies House number to the footer when the client provides them
- [ ] Replace product placeholders and add new SKUs in `src/data/products.ts` as the catalogue grows
