import { readdir, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

const root = process.cwd();
const widths = [64, 128, 256, 320, 640, 960, 1280, 1920];
for (const folder of ["images/services", "logo"]) {
  for (const name of await readdir(path.join(root, "public", folder))) {
    if (!/\.(png|jpe?g|webp)$/i.test(name)) continue;
    const outputFolder = path.join(root, "public/optimized", folder);
    await mkdir(outputFolder, { recursive: true });
    for (const width of widths) {
      await sharp(path.join(root, "public", folder, name)).resize({ width, withoutEnlargement: true }).webp({ quality: folder === "logo" ? 90 : 80 }).toFile(path.join(outputFolder, `${name.replace(/\.[^.]+$/, "")}-${width}.webp`));
    }
  }
}
const build = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], { cwd: root, env: { ...process.env, STATIC_EXPORT: "true" }, stdio: "inherit" });
if (build.status !== 0) process.exit(build.status ?? 1);
await copyFile(path.join(root, "deployment/ethicalhost.htaccess"), path.join(root, "out/.htaccess"));
console.log("EthicalHost upload folder ready: out/ (include .htaccess). No Node.js server is needed for this export.");
