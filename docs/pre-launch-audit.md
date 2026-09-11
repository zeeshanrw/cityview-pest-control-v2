# Cityview Pest Control: pre-launch audit

Date: September 11, 2026

**Original audit verdict: not ready for public launch.** The findings below record the state before remediation. The subsequent launch preparation patched the dependencies, replaced the broken forms with explicit WhatsApp drafts, added SEO/privacy/security configuration, fixed navigation and layout issues, and produced a static hosting build. See `launch-guide.md` for the current deployment steps and remaining live-host checks. No public deployment has been performed.

## Scope and verified results

- `npm run build` passed, including TypeScript and static generation.
- `npm run lint` passed.
- Tested a local production server with `next start`, rather than relying only on the development server.
- All 22 content routes returned HTTP 200: Home, About, Contact, pest overview, wildlife overview, 11 pest detail pages, and six wildlife detail pages. Favicon also returned 200.
- Invalid pest and wildlife slugs returned HTTP 404.
- Scanned internal links in production HTML. Page destinations resolved. Fragment targets existed except the callback target absent from the initial Contact HTML; browser testing confirmed that target appears after JavaScript rendering and the Home callback link scrolls to it successfully.
- All 17 distinct image paths referenced by production pages exist. The six wildlife overview images and all 12 homepage slideshow images loaded in the browser.
- Mobile menu opens, expands Wildlife, navigates to Raccoon Removal, closes, and shows the correct active item and `Home › Wildlife › Raccoon Removal` breadcrumb.
- Contact preselection, form structure, and local callback submission were inspected. Dummy data only; no messages sent to the business.
- Checked representative layouts at 320, 375, 768, and 1440 CSS pixels. This is browser viewport testing, not physical iPhone/Android testing.
- The development-only bug preview button is absent from the production page.
- No browser console errors were captured during the sampled interactions.

These checks do not certify that every browser, device, deployment setting, or security attack path is covered.

## 1. Fix before launch: dependencies

The live npm audit reported **three vulnerable packages: one critical and two high**.

| Installed package | Finding | Action |
| --- | --- | --- |
| `next@16.3.0` | Two critical advisories: remote code execution on affected Windows-hosted servers, and an image-optimization issue involving AVIF inputs | Upgrade to a patched release. The advisories name 16.3.3 as patched; npm offered 16.3.5 during this audit. Keep `eslint-config-next` compatible, rebuild, and repeat the audit. |
| `sharp@0.35.3` | High-severity image-processing dependency advisory | Resolve to 0.35.4 or newer through a compatible dependency update, then verify the lockfile and image optimization. |
| `js-yaml@4.3.1` | High-severity CPU-exhaustion advisory | Update to 4.3.2 or newer. This instance is brought in by ESLint tooling, so it is a development/build dependency rather than a demonstrated public YAML endpoint. |

The Windows advisory is especially relevant if self-hosting on Windows. The image advisory is conditional on processing affected inputs; the inspected local assets are PNGs, and no upload endpoint or remote image allowlist was found. Neither caveat is a reason to deploy known vulnerable versions. No exploit was attempted and there is no evidence here that the site has been compromised.

Sources: [Next.js Windows advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36), [Next.js image optimization advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4), [sharp advisory](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c), [js-yaml advisory](https://github.com/advisories/GHSA-2883-xcg3-v3hh).

## 2. Fix before launch: lead capture and personal information

### Contact-page forms do not send requests

File: `src/app/contact/page.tsx`.

Both forms have no submission handler, action endpoint, or explicit POST method. The browser defaults to GET on the current page. A local dummy callback submission produced:

`/contact?callbackName=Website+Audit+Test&callbackPhone=202-555-0100&callbackMessage=...`

No request reaches the owner. Personal information is placed in the address bar and browser history and may be captured in server request logs. The full quote form also lacks a phone/email field, and its service checkboxes have no submitted names/values.

Recommended resolution: choose one complete delivery flow. Either send validated POST requests to a configured email/form service with spam protection and clear success/error feedback, or explicitly route visitors to WhatsApp with a prepared message. If using WhatsApp, explain that the visitor must press Send there. Test actual receipt with the owner before launch.

### Floating callback confirmation is inaccurate

File: `src/components/CallbackWidget.tsx`.

The widget opens a WhatsApp draft and immediately displays `Request Sent`. It cannot know whether the visitor sends it, cancels, or encounters a blocked popup. Change the wording to describe opening WhatsApp and provide a fallback link. Browser review did not send a WhatsApp message.

### Privacy information is missing

There is no privacy page or explanation beside the forms about handling contact details or passing the message to WhatsApp. Add an accurate notice once the delivery provider and retention practices are decided. This is a product/privacy readiness finding, not a jurisdiction-specific legal assessment.

## 3. Security configuration and hosting

The local production response did not include Content-Security-Policy, anti-framing headers, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy. Add a tested policy suited to Next.js, images, and the final host. Start CSP in report-only mode if necessary to avoid breaking scripts. HTTPS/HSTS must be checked on the final HTTPS host, not inferred from this local HTTP test.

Positive observations: no custom database, account system, upload endpoint, or server action was found; the external WhatsApp links use `noopener noreferrer`; `.env*` and PEM files are ignored by Git; no tracked `.env` files or obvious common secret patterns were found in the inspected application/public files. This is not a historical secret scan or a penetration test.

Before publishing, verify HTTPS, the preferred domain redirect, environment variables, production mode, and that the development server is not used as a public host.

## 4. SEO readiness

- `/robots.txt` and `/sitemap.xml` return 404. Add both, with the final canonical domain and the actual content routes. Their absence does not itself block indexing of this linked small site, but a sitemap makes discovery and Search Console submission easier.
- No canonical tags or JSON-LD structured data were found on content pages. Add page-specific canonical URLs and accurate business, service, and breadcrumb data. Do not invent an address, opening hours, reviews, or ratings. Business information and rich-result eligibility need validation against the actual service-area business setup.
- Contact inherits the homepage title and description. Give it its own metadata. Its entire main content is absent from initial HTML because `useSearchParams` is inside a client component wrapped in an empty Suspense fallback. Render the static heading, contact links, and surrounding content on the server; isolate the interactive form.
- Most service detail pages have individual titles/descriptions and one H1 in initial HTML. Improve awkward titles such as `Ants Control` to natural service phrases and include confirmed local targeting where appropriate.
- The homepage H1 changes with the slideshow and initially says `Summer's Here. So Are the Pests.` A stable heading describing the business's core service and location would communicate its purpose more clearly.
- No social-sharing/Open Graph image configuration was found.
- The requirements confirm Mississauga and Brampton, with York municipalities pending, while the site broadly promises GTA-wide coverage. Confirm the actual coverage, add a useful service-area page, and align site copy with the Google Business Profile.
- Connect Search Console after deployment and submit the sitemap. Structured data and sitemaps improve how information is supplied to search engines; neither guarantees indexing, rankings, or rich results.

References: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview), [Google local-business structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## 5. Mobile, accessibility, and animation

- At 320px width, selecting the Bird Removal hero slide placed the seasonal banner, service label, and final trust text outside the hero's clipped bounds. The fixed-height, vertically centered hero needs a content-driven mobile layout.
- The header logo is 88px high inside a 64px mobile header, placing its image box above and below the header. At 768px the call button becomes 80px tall and the logo becomes heavily compressed. Adjust logo sizing and the desktop-navigation breakpoint.
- Slideshow buttons are around 10px high, with inactive dots around 10px wide. Increase their actual tap targets without requiring visually large dots.
- The slideshow advances every 5.5 seconds indefinitely, with no pause button or reduced-motion behavior. Add pause/play, pause while users interact, and respect motion preferences. The separate bug intro already respects reduced motion.
- Desktop submenus are opened by mouse-enter handlers and have no equivalent focus/click disclosure controls. Add keyboard-operable buttons and Escape handling. The mobile menu also needs Escape/outside-click dismissal as polish.
- Form text fields/selects lack associated labels (`htmlFor`/`id` or wrapping labels); browser inspection returned zero labels for these controls. Add programmatic labels, appropriate autocomplete, and clear validation feedback.
- The collapsed callback's close button remains keyboard-focusable inside an `aria-hidden` region. Use `inert` or remove hidden controls from the focus order.
- Add a skip-to-content link and review small amber-on-paper text contrast and translucent callback text backgrounds.

## 6. Content and imagery

- The About owner/family photo remains a placeholder, deliberately deferred by the owner. Add the real photo before launch or use a finished layout without the placeholder.
- Fleas & Ticks currently uses the bed-bug photo; Silverfish uses the spider photo (`imageSlug` overrides in `src/lib/services-data.ts`). Supply correct images or remove misleading imagery for those entries.
- Seasonal urgency is hard-coded: `Wasp Activity Is High Right Now` and `Summer's Here` will remain visible year-round. Make this seasonal or use evergreen copy.
- Confirm factual promises and absolute wording with the operator, including same-day availability and removal without skunk spray. Family ownership, pandemic founding, and licensing were supplied by the owner, but the expanded About story adds a motivation for founding that should be confirmed.
- Retain a record of photo ownership/licensing and any customer consent. No image rights assessment was performed.
- The README still names Next.js 15 and references files/sections not implemented. Update launch documentation for the actual stack and deployment process.

## 7. Performance and optional improvements

All 12 hero images had loaded during the sampled browser session. Review network behavior under mobile throttling and consider mounting only the active/previous/next slides, preloading the first image, and loading the next image ahead of transition. The source PNG sizes are not equivalent to transfer sizes because Next.js optimizes images; no public PageSpeed score is claimed.

Optional additions after essentials: real customer reviews with permission, FAQs based on actual customer questions, useful seasonal guides, and privacy-conscious call/WhatsApp click measurement. Avoid delaying lead delivery/security work for more animation.

## Recommended order

1. Patch dependencies, repeat npm audit/build, and verify image optimization.
2. Make both contact flows deliver reliably and remove inaccurate success states.
3. Correct mobile clipping and form/keyboard accessibility.
4. Add domain-specific SEO, privacy information, and tested security headers.
5. Complete imagery and confirm business claims, then run staging smoke tests.
6. After hosting: verify HTTPS/redirects, receipt of a real test lead, Search Console, indexing rules, mobile performance, and operation on physical devices.

Final domain, host-level security, email deliverability, WhatsApp account ownership, real mobile-device behavior, public performance scores, and Google indexing remain unverified until the relevant setup exists.
