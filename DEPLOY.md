# Deploying MARSHLAND on IONOS

This project builds to a static `dist/` folder (HTML, CSS, JS, images, videos) plus `send-mail.php` for forms. IONOS webspace hosts that output — no Node or Vercel required on the server.

## Hosting map

| Item | Value |
| --- | --- |
| Domain | `marshlands.co.uk` (SSL assigned) |
| Webspace directory | `/marshlands` |
| SFTP host | `home385931680.1and1-data.host` |
| SFTP user | `u66045375` |
| Form inbox | `info@marshlands.co.uk` |

## 1. Build locally

Requires Node.js 22.12+.

```bash
npm install
npm run build
```

**Do not open `dist/index.html` as a file in the browser.** Paths like `/images/...` and `/_astro/...` only work over HTTP (local preview or the live domain).

Preview the static site correctly:

```bash
npm run preview
# or
npm run serve:dist
```

Then open the URL shown in the terminal (usually `http://localhost:4321`).

Production files are in `dist/`. Confirm these are present:

- `index.html` and page folders (`about/`, `contact/`, …)
- `send-mail.php`
- `.htaccess`
- `videos/`, `images/`, `_astro/`

## 2. Upload to IONOS

1. Connect with SFTP (FileZilla, Cyberduck, or IONOS File Manager) using the host and user above.
2. Open webspace directory `/marshlands`.
3. Upload **the contents of `dist/`** into `/marshlands` (not the `dist` folder itself).
4. Overwrite existing files when updating.
5. Ensure `send-mail.php` and `.htaccess` are on the server (dotfiles can be hidden — show them in the FTP client).

No environment variables are required for forms. PHP `mail()` sends to `info@marshlands.co.uk`.

## 3. After upload

- Visit `https://marshlands.co.uk` and `https://www.marshlands.co.uk`
- Submit a test Contact and Partner enquiry; confirm mail arrives at `info@marshlands.co.uk`
- Check Amazon, mailto, and phone links
- If forms fail, ask IONOS support to confirm PHP `mail()` is enabled for the package and that `info@marshlands.co.uk` exists on the same account

## 4. Updating the site later

```bash
npm run build
```

Then re-upload changed files from `dist/` (or the full folder) to `/marshlands`.

## Notes

- Astro remains the source project; only `dist/` goes on IONOS.
- Contact and Partner forms POST to `/send-mail.php` (same origin).
- Prefer one canonical host (apex or `www`) via IONOS domain settings / redirects.
