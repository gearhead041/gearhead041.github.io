import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root")!;
const app = (
	<StrictMode>
		<App />
	</StrictMode>
);

// Production builds ship prerendered HTML (see scripts/prerender.mjs), so attach
// to it; the dev server serves an empty root, so render from scratch.
if (root.hasChildNodes()) {
	hydrateRoot(root, app);
} else {
	createRoot(root).render(app);
}
