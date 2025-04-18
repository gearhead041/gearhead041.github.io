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
import { Education } from "./Education";
import { education } from "./education.1";

//TODO here's an idea, put stars and quotes above the header
function App() {
	const date = new Date();

	return (
		<>
			<div className="header">
				<header className="title">Adetoun Favour</header>
				<div className="subHeader">
					<p className="jobTitle">Backend Developer</p>
					<p className="date">{date.toDateString()}</p>
				</div>
				<hr className="thickRule"/>
				<div className="logos">
					<GitHubLogo link="https://github.com/gearhead041" />
					<GmailLogo link="mailto:favouradetoun@gmail.com" />
					<LinkedInLogo link="https://www.linkedin.com/in/toluadetoun/" />
				</div>

			</div>
			<div className="profileSection">
				<div className="profileTop">
					<img
						src={headshot}
						alt="A picture of Adetoun Favour"
						className="profilePic"
					/>
					<div className="blurb">
						<p>
							Backend developer with experience in Data Science.
							Passionate about creating scalable and maintainable
							software solutions.
						</p>
					</div>
				</div>
				<div className="education">
					<p className="title eduTitle">Education</p>
					<div className="eduEntries">
						{education.map((edu) => (
							<Education {...edu} />
						))}
					</div>
				</div>
			</div>
			<div className="header subHeader">
				<div className="skills">What I've Worked With</div>
			</div>
			<div className="scrollContainer">
				<div className="scrollContent">
					<NestJsLogo size={64} />
					<TypeScriptLogo size={64} />
					<NodeJsLogo size={64} />
					<PythonLogo size={64} />
					<GraphqlLogo size={64} />
					<NestJsLogo size={64} />
					<TypeScriptLogo size={64} />
					<NodeJsLogo size={64} />
					<PythonLogo size={64} />
					<GraphqlLogo size={64} />
					<NestJsLogo size={64} />
					<TypeScriptLogo size={64} />
					<NodeJsLogo size={64} />
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
