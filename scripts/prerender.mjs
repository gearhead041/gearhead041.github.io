// Renders the React app to static HTML and injects it into dist/index.html,
// so search engines and link-preview bots see the full page content without
// running JavaScript. Runs after `vite build` and `vite build --ssr`.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = await readFile(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
	throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

const appHtml = render();
await writeFile(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote ${appHtml.length.toLocaleString()} chars of HTML into dist/index.html`);
