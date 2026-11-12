import { useSyncExternalStore } from "react";

/*
 * Browser-only state (theme, "today") read through useSyncExternalStore so the
 * page can be prerendered to static HTML at build time: the server snapshot is
 * used for the prerender and first hydration pass, then React switches to the
 * real browser value without a hydration mismatch.
 */

const noopSubscribe = () => () => {};

/** false during prerender / hydration, true once running in the browser */
export function useIsClient(): boolean {
	return useSyncExternalStore(
		noopSubscribe,
		() => true,
		() => false,
	);
}

export type Theme = "light" | "dark";

const themeListeners = new Set<() => void>();

function readTheme(): Theme {
	const set = document.documentElement.dataset.theme;
	if (set === "light" || set === "dark") return set;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribeTheme(listener: () => void) {
	themeListeners.add(listener);
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	media.addEventListener("change", listener);
	return () => {
		themeListeners.delete(listener);
		media.removeEventListener("change", listener);
	};
}

export function useTheme(): [Theme | null, () => void] {
	const theme = useSyncExternalStore<Theme | null>(subscribeTheme, readTheme, () => null);

	const toggle = () => {
		const next: Theme = readTheme() === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {
			/* storage unavailable — theme still applies for this visit */
		}
		themeListeners.forEach((l) => l());
	};

	return [theme, toggle];
}
