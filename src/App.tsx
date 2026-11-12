import { useEffect, useState } from "react";
import "./App.css";
import headshot from "./assets/headshot.png";
import {
	GitHubLogo,
	GmailLogo,
	GraphqlLogo,
	LinkedInLogo,
	NestJsLogo,
	NodeJsLogo,
	PythonLogo,
	TypeScriptLogo,
} from "./svg_logos";
import { Project } from "./Project";
import { projects } from "./projects";
import { edus, HeroDetail, workExps } from "./experience";

const FIRST_YEAR = 2018;

function toRoman(n: number): string {
	const map: [number, string][] = [
		[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
		[100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
		[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
	];
	let out = "";
	for (const [value, numeral] of map) {
		while (n >= value) {
			out += numeral;
			n -= value;
		}
	}
	return out;
}

const tickerItems = [
	{ name: "NestJS", logo: <NestJsLogo size={28} /> },
	{ name: "TypeScript", logo: <TypeScriptLogo size={28} /> },
	{ name: "Node.js", logo: <NodeJsLogo size={28} /> },
	{ name: "Python", logo: <PythonLogo size={28} /> },
	{ name: "GraphQL", logo: <GraphqlLogo size={28} /> },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
	const set = document.documentElement.dataset.theme;
	if (set === "light" || set === "dark") return set;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	const toggleTheme = () => {
		const next: Theme = theme === "dark" ? "light" : "dark";
		setTheme(next);
		try {
			localStorage.setItem("theme", next);
		} catch {
			/* storage unavailable — theme still applies for this visit */
		}
	};

	const date = new Date();
	const volume = toRoman(date.getFullYear() - FIRST_YEAR + 1);
	const dayOfYear = Math.floor(
		(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86_400_000,
	);
	const longDate = date.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="paper">
			<header className="masthead">
				<div className="themeBar">
					<button
						type="button"
						className="themeToggle"
						onClick={toggleTheme}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					>
						{theme === "dark" ? "☀ Day Edition" : "☾ Night Edition"}
					</button>
				</div>
				<div className="ears">
					<div className="ear">
						<span className="earLabel">Late City Edition</span>
						<span>Backend Developer</span>
					</div>
					<h1 className="nameplate">Adetoun Favour</h1>
					<div className="ear earRight">
						<span className="earLabel">"All the Code</span>
						<span>That's Fit to Ship"</span>
					</div>
				</div>
				<div className="editionBar">
					<span>Vol. {volume} · No. {dayOfYear}</span>
					<span className="editionDate">{longDate}</span>
					<span>Price: One Pull Request</span>
				</div>
			</header>

			<main>
				<section className="frontPage">
					<article className="leadStory">
						<p className="kicker">Exclusive Report</p>
						<h2 className="headline">
							Backend Developer Builds Scalable, Maintainable Software
						</h2>
						<p className="deck">
							Engineer with experience in Data Science, Agile Development
							and DevOps now at work on the systems behind the screen
						</p>
						<p className="byline">By Our Staff Correspondent</p>

						<div className="storyBody">
							<figure className="photo">
								<img src={headshot} alt="A picture of Adetoun Favour" />
								<figcaption>
									<strong>PICTURED:</strong> Adetoun Favour, backend developer.
								</figcaption>
							</figure>
							<p className="dropCap">
								Backend developer with experience in Data Science, Agile
								Development and DevOps. Passionate about creating scalable
								and maintainable software solutions.
							</p>
							<p>
								Favour currently serves as a Software Engineer at Stanbic
								IBTC, having completed an MSc in Data Science, Technology and
								Innovation at the University of Edinburgh, and before that a
								B.Eng in Mechanical Engineering at Covenant University, Ota.
							</p>
							<blockquote className="pullQuote">
								"Passionate about creating scalable and maintainable software
								solutions."
							</blockquote>
							<p>
								Readers wishing to inspect the work firsthand will find a
								selection of projects reported on below, with full sources
								available at the repository.
							</p>
						</div>
					</article>

					<aside className="sidebar">
						<section className="notice">
							<h3 className="noticeTitle">Appointments</h3>
							{workExps.map((work) => (
								<HeroDetail key={work.institute} {...work} />
							))}
						</section>
						<section className="notice">
							<h3 className="noticeTitle">Academic Notices</h3>
							{edus.map((edu) => (
								<HeroDetail key={edu.institute} {...edu} />
							))}
						</section>
						<section className="notice correspondence">
							<h3 className="noticeTitle">Correspondence</h3>
							<p className="noticeText">
								Letters, enquiries and offers may be directed to the
								following addresses:
							</p>
							<div className="logos">
								<GitHubLogo link="https://github.com/gearhead041" />
								<GmailLogo link="mailto:favouradetoun@gmail.com" />
								<LinkedInLogo link="https://www.linkedin.com/in/favouradetoun" />
							</div>
						</section>
					</aside>
				</section>

				<section className="ticker" aria-label="What I've worked with">
					<div className="tickerLabel">Tech Exchange</div>
					<div className="tickerTrack">
						<div className="tickerContent">
							{[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
								(item, i) => (
									<span className="tickerItem" key={i} aria-hidden={i >= tickerItems.length}>
										{item.logo}
										<span>{item.name}</span>
										<span className="tickerUp">▲</span>
									</span>
								),
							)}
						</div>
					</div>
				</section>

				<section className="projects">
					<h2 className="sectionHead">
						<span>Projects</span>
						<small>Dispatches from the Workshop</small>
					</h2>
					<div className="projectGrid">
						{projects.map((proj) => (
							<Project key={proj.projectTitle} {...proj} />
						))}
					</div>
				</section>
			</main>

			<footer className="colophon">
				Printed &amp; published by Adetoun Favour · © {date.getFullYear()} · Est.{" "}
				{FIRST_YEAR}
			</footer>
		</div>
	);
}

export default App;
