# Adetoun Favour — Personal Site

A personal portfolio styled as a vintage broadsheet newspaper, live at **[gearhead041.github.io](https://gearhead041.github.io/)**.

Built with React 19, TypeScript and Vite. The page is prerendered to static HTML at build time and deployed to GitHub Pages.

## Features

- **Newspaper layout** — blackletter masthead, edition bar, a front-page lead story, sidebar notices for work and education, a "Tech Exchange" skills ticker, projects as column articles, and certifications as vintage advertisements.
- **Day / Night editions** — a light/dark toggle that follows the system setting by default and remembers the visitor's choice.
- **Page-load animation** — the front page "goes to press" in about 1.5 seconds: rules draw in, the photo prints, and text slides up. It's skipped for visitors who have reduced motion turned on.
- **Search and share friendly** — prerendered HTML, meta description, Open Graph and Twitter card tags, JSON-LD structured data, `robots.txt` and `sitemap.xml`.
- **Responsive** — three-column broadsheet on desktop, down to a single column on phones.

## Getting started

Requires **Node.js 20.19+ or 22.12+** (Vite's minimum).

```sh
npm install
npm run dev        # dev server with hot reload
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server. Renders client-side only. |
| `npm run build` | Type-check, build, and prerender the page into `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to check the production version. |
| `npm run lint` | Run ESLint. |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch. |

Always deploy with `npm run deploy` (not `vite build` directly), so the prerender step runs.

## Editing content

| To change… | Edit |
|---|---|
| Lead story, headline, sidebar, contact links, ticker | [`src/App.tsx`](src/App.tsx) |
| Work and education entries | [`src/experience.tsx`](src/experience.tsx) |
| Projects | [`src/projects.tsx`](src/projects.tsx) — `link` is optional; use `source` and `note` for work without a public repo |
| Certifications (the ads) | [`src/Certifications.tsx`](src/Certifications.tsx) — each entry picks an ad `style` (`feature`, `double`, `coupon`, `ornate`, `plain`) and can be `wide` |
| Logos | [`src/svg_logos.tsx`](src/svg_logos.tsx) |
| Styles, theme colours and animation timings | [`src/App.css`](src/App.css) |
| Page title, description, social tags, structured data | [`index.html`](index.html) |

When the content changes significantly, also update `lastmod` in [`public/sitemap.xml`](public/sitemap.xml), and retake [`public/og-image.png`](public/og-image.png) (1200×630) if the top of the page looks different.

## How the site is built and rendered

The site is a single-page React app, but it ships as **prerendered static HTML**: every word of the page is in `index.html` when it leaves the server. React then *hydrates* that HTML in the browser to make it interactive. This is static site generation for a single page, with no server needed at runtime, so it runs on GitHub Pages.

### Why prerender?

A plain Vite React app ships an empty `<div id="root"></div>` and builds the page with JavaScript. Visitors don't notice, but most search-engine crawlers and every link-preview bot (LinkedIn, Slack, WhatsApp…) read the raw HTML without running scripts, so they would see a blank page. Prerendering puts the full content in the HTML, and the page also appears before any JavaScript has loaded.

### The build pipeline

`npm run build` runs four steps:

```
tsc -b                                    1. type-check
vite build                                2. browser bundle          → dist/
vite build --ssr src/entry-server.tsx     3. Node build of the app   → dist-ssr/
node scripts/prerender.mjs                4. render + inject HTML    → dist/index.html
```

1. **Type-check.** `tsc -b` checks the app and the Vite config against the `tsconfig` project references.
2. **Browser build.** Vite bundles [`src/main.tsx`](src/main.tsx) and everything it imports into hashed JS and CSS in `dist/assets/`, copies `public/` into `dist/`, and writes `dist/index.html` with the script and style tags added. At this point the root is still empty.
3. **Server (SSR) build.** Vite builds [`src/entry-server.tsx`](src/entry-server.tsx) for Node. It imports the same `<App />` and exports a `render()` function that calls React's `renderToString`. Asset imports such as the headshot resolve to the same hashed URLs as the browser build, so the prerendered `<img>` points at the real file.
4. **Prerender.** [`scripts/prerender.mjs`](scripts/prerender.mjs) imports `render()` from `dist-ssr/`, calls it to get the page as an HTML string, replaces `<div id="root"></div>` in `dist/index.html` with `<div id="root">…page HTML…</div>`, and deletes `dist-ssr/`. If it can't find the empty root, it throws an error, so a changed template fails the build instead of shipping a blank page.

`npm run deploy` runs the full build and then pushes `dist/` to the `gh-pages` branch.

### What happens in the browser

When a visitor opens the site:

1. **HTML arrives with the full page.** The browser can paint text, layout and images immediately.
2. **The theme is applied before the first paint.** A small inline script in `<head>` reads any saved choice from `localStorage` and sets `<html data-theme="…">`. All colours are CSS variables keyed off `data-theme`, or `prefers-color-scheme` when nothing is saved, so the page never flashes the wrong theme.
3. **The entrance animation plays.** It's pure CSS (keyframes with staggered `animation-delay`s at the end of [`src/App.css`](src/App.css)), so it runs on the prerendered HTML without waiting for JavaScript and finishes within about 1.5s. It is turned off when the visitor has reduced motion enabled.
4. **React hydrates.** [`src/main.tsx`](src/main.tsx) sees the root already has content and calls `hydrateRoot` instead of `createRoot`. React walks the existing DOM, checks it matches what `<App />` renders, and attaches event handlers, such as the theme toggle's click, without rebuilding anything.

In development (`npm run dev`) there's no prerender, so the root is empty and `main.tsx` falls back to `createRoot` with normal hot reloading.

### Browser-only values and hydration

Hydration requires the build-time HTML and the browser's first render to match exactly. Two things on the page can't be known at build time:

- **Today's date** (edition bar volume and number, the long date, and the © year). Rendering it at build time would freeze the build date into the HTML.
- **The current theme** (the toggle's "Day/Night Edition" label). There's no `document`, `localStorage` or media query at build time.

[`src/clientState.ts`](src/clientState.ts) handles both with React's `useSyncExternalStore`, which accepts a separate *server snapshot*:

```ts
useIsClient(): useSyncExternalStore(noop, () => true, () => false)
useTheme():    useSyncExternalStore(subscribeTheme, readTheme, () => null)
```

React uses the server snapshot both while prerendering and during the browser's first hydration pass, so the two always agree: the date spans are blank, and the toggle shows its default label. Once hydration finishes, React switches to the browser snapshot and re-renders only those pieces, filling in today's date and the correct label. The page's colours never depend on this, because they come from CSS and the `data-theme` attribute set in step 2.

`useTheme` also subscribes to system theme changes, and its `toggle()` writes `data-theme` and `localStorage`, then notifies subscribers.

### Search and sharing metadata

[`index.html`](index.html) also carries the parts of the page that only machines read:

- **`<title>`, `meta description` and `canonical`:** the search result headline and snippet, and the single preferred URL.
- **Open Graph and Twitter Card tags:** the title, description and [`public/og-image.png`](public/og-image.png) shown when the link is shared.
- **JSON-LD `Person` structured data:** name, job title, employer, schools, skills, and `sameAs` links to GitHub and LinkedIn, which help search engines connect the site with those profiles.
- **[`public/robots.txt`](public/robots.txt) and [`public/sitemap.xml`](public/sitemap.xml):** let crawlers in and point them at the sitemap, which you submit in Google Search Console and Bing Webmaster Tools.

## Project structure

```
index.html            page shell: metadata, structured data, fonts, theme script
public/               favicon, preview image, robots.txt, sitemap.xml
scripts/prerender.mjs build-time HTML prerender
src/
  main.tsx            browser entry (hydrates prerendered HTML)
  entry-server.tsx    build-time entry used by the prerender
  App.tsx             the page
  App.css             all styles and animations
  clientState.ts      theme + "is in browser" hooks
  Project.tsx         project article
  projects.tsx        project data
  Certifications.tsx  certifications as newspaper ads
  experience.tsx      work and education
  svg_logos.tsx       logo components
```

## Credits

- Fonts: UnifrakturMaguntia, Playfair Display, Old Standard TT and IM Fell English SC, via Google Fonts.
- .NET/C# logo from [Devicon](https://devicon.dev) (MIT).
