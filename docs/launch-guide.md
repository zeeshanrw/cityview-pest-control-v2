# Cityview launch guide

## Prepared configuration

- Canonical website: `https://cityviewpestcontrol.ca` (inferred from the supplied business email; confirm this is the intended website domain before uploading).
- Hosting: EthicalHost. The prepared **static export** does not require a Node.js process on the host.
- Public email: `info@cityviewpestcontrol.ca`. The alternate address supplied is `cityviewpestcontrol@gmail.com`; it is not published as a duplicate contact destination.
- Phone / WhatsApp: `647-779-1770`.
- Forms send requests to `info@cityviewpestcontrol.ca` through the host's PHP mail service. Submissions are not stored in a server database. Confirm PHP `mail()` is enabled for the account and test delivery after upload.

## Build and upload

1. Use Node.js 22 LTS and run `npm ci`, then `npm run lint` and `npm run build:static` on your computer. Building downloads the fonts; visitors receive self-hosted font files.
2. The `out` directory contains the uploadable website. It includes prebuilt WebP image sizes and an Apache-compatible `.htaccess` file. Upload **the contents** to the domain's document root, typically `public_html`; do not upload `node_modules`, source code, `.env` files, or the whole project folder.
3. Back up any existing website before replacing files. Do not remove unrelated email or account folders.
4. Install/enable a valid SSL certificate for the domain and `www` alias first. The included rules redirect to `https://cityviewpestcontrol.ca`.
5. Ensure EthicalHost allows `.htaccess` rules with `mod_rewrite`, `mod_headers`, and the supplied `Options` directives. These are prepared for Apache-compatible hosting; their behavior must be checked on your actual account. If the host returns HTTP 500 after upload, ask support which directives are allowed rather than deleting all security rules.

The original `npm run build` / `npm start` server deployment is still supported if your plan supports Node.js. Rebuild for the chosen mode; `next start` cannot serve a static-export build. Use `npm run preview:static` for a local static preview at `http://127.0.0.1:3100`, then `npm run check:launch` in a second terminal.

## Verify on the live host before announcing launch

- Open the root and a deep link such as `/services/wildlife-removal/raccoon-removal` directly. Test refresh, desktop/mobile menus, and an unknown path (must return 404).
- Verify HTTPS and a single preferred-host redirect from HTTP and `www`, including preservation of a deep path. Check `/robots.txt` and `/sitemap.xml` return 200.
- Verify the security headers from `.htaccess` appear in responses. The CSP permits Next.js inline hydration scripts and inline styles; it is a compatibility baseline, not a strict nonce/hash CSP or a security certification. HSTS has no preload or includeSubDomains directive.
- Send one real quote and one callback request from another device and confirm both arrive at `info@cityviewpestcontrol.ca`, including checking spam. Also test the phone, direct email and WhatsApp links. Local testing deliberately did not send messages.
- Configure the email provider's SPF, DKIM and DMARC records. Use the provider's exact values; they cannot be inferred from an email address. If desired, configure forwarding to the Gmail inbox in the hosting control panel.
- Confirm the actual website domain, service coverage, licensing claims and image usage rights. No address, hours, reviews, ratings or licence number was invented for structured data. Replace the About commitment card with a real owner/family photo when ready.
- Check a physical iPhone and Android device. Run PageSpeed Insights against the public URL, then connect Google Search Console and submit the sitemap. Local viewport checks are not a public Core Web Vitals measurement.

No hosting account, DNS, mail settings or public website was changed during preparation.

## Local verification completed — September 11, 2026

- Lint, TypeScript and both production build modes passed on Next.js 16.3.5.
- Final `npm audit --json`: zero known vulnerabilities.
- Static preview: all 23 content pages passed unique title, one H1, canonical URL, social metadata and JSON-LD parsing checks. All 55 sampled links/assets resolved, robots/sitemap loaded, and three invalid routes returned 404.
- Browser checks at 320, 375, 768 and 1440 CSS pixels covered the mobile/tablet header, service navigation, selected-service styling and desktop keyboard disclosure/Escape.
- Quote and callback forms prepared correctly encoded WhatsApp drafts with dummy details; the site URL stayed unchanged and every form control had an associated label. No message was sent.
- Floating callback focus moves to the name field and returns to the trigger on Escape; hidden fields are removed.
- Reduced-motion preference paused automatic slideshow motion; manual slide selection still worked. The Bird slide no longer clipped its text at narrow width. Only adjacent slideshow images are mounted.
- `out/` contains 351 files, approximately 42 MB before compression. The Apache configuration is included, but its host-specific execution is not verified locally.

## Maintenance

Run `npm audit` regularly, apply compatible security updates, and rebuild/upload the static site after code or content changes. Keep the lockfile and deploy reproducibly using `npm ci`. The generated `out` and `public/optimized` directories are ignored by Git and recreated by the static build.

EthicalHost publicly documents cPanel hosting and SSL availability: https://www.ethicalhost.ca/ . The specific plan's modules and settings still require confirmation on the account.
