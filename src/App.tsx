import { useEffect, useRef } from "react";
import "./App.css";
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

//TODO here's an idea, put stars and quotes above the header
function App() {
	const date = new Date();
	const scrollRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.innerHTML += scrollRef.current.innerHTML; // Duplicate content
		}
	}, []);

	return (
		<>
			<div className="header">
				<header className="title">Adetoun Favour</header>
				<div className="subHeader">
					<p className="jobTitle">Backend Developer</p>
					<p className="date">{date.toDateString()}</p>
				</div>
				<div className="thickRule"></div>
				<div className="logos">
					<GitHubLogo link="https://github.com/gearhead041" />
					<GmailLogo link="mailto:favouradetoun@gmail.com" />
					<LinkedInLogo link="https://www.linkedin.com/in/toluadetoun/" />
				</div>
			</div>
			<div className="profileSection">
				<div>
					<img src="src/assets/headshot.png" alt="A picture of Adetoun Favour" className="profilePic" />
				</div>
				<div className="blurb">
					<p>
						Backend developer with experience in building APIs and
						microservices. Passionate about creating scalable and
						maintainable software solutions.
					</p>
				</div>
			</div>
			<div className="header skills">What I Work With</div>
			<div className="scrollContainer">
				<div className="scrollContent" ref={scrollRef}>
					<NestJsLogo size={64} />
					<TypeScriptLogo size={64} />
					<NodeJsLogo size={64} />
					<PythonLogo size={64} />
					<GraphqlLogo size={64} />
				</div>
			</div>
			<div className="projectContainer">
				<div className="header title" id="projectsTitle">
					Projects
				</div>
				{projects.map((proj) => (
					<Project {...proj} />
				))}
			</div>
		</>
	);
}

export default App;
