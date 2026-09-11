# Cityview Pest Control

Family-owned pest control and humane wildlife removal website, built with Next.js 16.3.5, React 19, TypeScript and Tailwind CSS 4.

## Development

Use Node.js 22 LTS.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Restart development after changing dependencies or Next configuration.

## Production for EthicalHost

```sh
npm run lint
npm run build:static
npm run preview:static
```

The upload folder is `out/`, including `.htaccess`. It contains a complete static website and optimized images; Node.js is required only to build it locally. In another terminal, run `npm run check:launch` against the local preview. Follow [the launch guide](docs/launch-guide.md) before uploading or announcing the site.

For a host with a Node.js runtime, use `npm run build` followed by `npm start` instead. Do not use `next start` immediately after a static export; rebuild for server mode first.

## Contact flow

The quote and callback forms post to `public/send-contact.php`, which uses the host's PHP mail service to deliver requests to `info@cityviewpestcontrol.ca`. Callback forms also offer a prefilled WhatsApp submission. Form submissions are not stored in a database. Confirm PHP `mail()` is enabled and send live test submissions after upload.

## Content and configuration

- `src/lib/services-data.ts`: pest services.
- `src/lib/wildlife-data.ts`: wildlife services and image paths.
- `src/lib/constants.ts`: business phone and navigation.
- `src/lib/seo.ts`: canonical domain, metadata and service titles.
- `src/components/HomeHeroSlideshow.tsx`: homepage photos.
- `public/images/services` and `public/logo`: source image assets.
- `deployment/ethicalhost.htaccess`: static hosting redirects and headers.
- `scripts/build-static.mjs`: generates WebP image variants and the upload folder.

The About section uses a finished brand card until a real family/owner photo is provided. Service tiles remain a responsive grid. The slideshow and introductory bugs respect reduced-motion preferences.

## Verification

`npm run lint`, `npm run build`, `npm run build:static`, `npm audit`, and `npm run check:launch` cover code, builds, known dependency advisories, and page/asset checks. Browser testing covers selected interactions and mobile layouts. Live SSL, redirects, email, WhatsApp receipt, image rights and public performance require the final hosting/account checks described in the launch guide.
