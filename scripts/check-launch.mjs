import assert from "node:assert/strict";
const base = process.argv[2] ?? "http://127.0.0.1:3100";
const sitemap = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemap.status, 200, "Sitemap must load");
const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.equal(urls.length, 23, "Every content route should be in the sitemap");
const titles = new Set();
const assets = new Set();
for (const url of urls) {
  assert.equal(url.origin, "https://cityviewpestcontrol.ca");
  const response = await fetch(`${base}${url.pathname}`);
  assert.equal(response.status, 200, url.pathname);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `One H1: ${url.pathname}`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(canonical && new URL(canonical).href, url.href, `Canonical: ${url.pathname}`);
  assert.ok(html.includes('property="og:title"'), `Social metadata: ${url.pathname}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${url.pathname}`);
  titles.add(title);
  assert.ok(!html.includes("Photo placeholder"), `No unfinished photo: ${url.pathname}`);
  assert.ok(!html.includes("Preview bug animation"), "Development control excluded");
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) assets.add(match[1]);
}
for (const asset of assets) assert.equal((await fetch(`${base}${asset}`)).status, 200, `Link/asset: ${asset}`);
for (const route of ["/not-a-page", "/services/not-a-service", "/services/wildlife-removal/not-an-animal"]) assert.equal((await fetch(`${base}${route}`)).status, 404, route);
assert.ok((await (await fetch(`${base}/robots.txt`)).text()).includes("https://cityviewpestcontrol.ca/sitemap.xml"));
console.log(`PASS: ${urls.length} pages, unique titles, H1s, canonicals, social metadata, structured data, ${assets.size} links/assets, robots and unknown-route 404s.`);
