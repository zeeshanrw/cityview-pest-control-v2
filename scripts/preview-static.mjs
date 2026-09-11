// Local preview only. Production is served by the hosting provider.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml", ".webp": "image/webp", ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2" };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const requested = path.resolve(root, `.${pathname}`);
    if (!requested.startsWith(`${root}${path.sep}`) && requested !== root) { res.writeHead(403).end(); return; }
    let file;
    for (const candidate of [requested, `${requested}.html`, path.join(requested, "index.html")]) {
      try { if ((await stat(candidate)).isFile()) { file = candidate; break; } } catch { /* Try next clean-route form. */ }
    }
    res.statusCode = file ? 200 : 404;
    file ??= path.join(root, "404.html");
    res.setHeader("Content-Type", types[path.extname(file)] ?? "application/octet-stream");
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'");
    res.end(await readFile(file));
  } catch { res.writeHead(500).end("Preview error"); }
}).listen(3100, "127.0.0.1", () => console.log("Static preview: http://127.0.0.1:3100"));
