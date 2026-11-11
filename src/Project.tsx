import { JSX } from "react";
import { NestJsLogo, PythonLogo, TypeScriptLogo } from "./svg_logos";

export type projectParams = {
	projectTitle: string;
	description: string;
	link: string;
	stack: string[];
};

const logoDict: { [key: string]: JSX.Element } = {
	NestJs: <NestJsLogo size={22} />,
	Typescript: <TypeScriptLogo size={22} />,
	Python: <PythonLogo size={22} />,
};

export function Project(params: projectParams) {
	return (
		<article className="project">
			<h3 className="projectTitle">{params.projectTitle}</h3>
			<p className="projectDescription">
				<span className="dateline">GitHub —</span> {params.description}
			</p>
			<a
				className="projectLink"
				target="_blank"
				rel="noreferrer"
				href={params.link}
				aria-label={`Go to ${params.projectTitle} repository`}
			>
				Continued at the repository →
			</a>
			<div className="projectStack">
				<span className="filedUnder">Filed under:</span>
				{params.stack.map((stack) => (
					<span className="stackTag" key={stack}>
						{logoDict[stack]}
						{stack}
					</span>
				))}
			</div>
		</article>
	);
}
