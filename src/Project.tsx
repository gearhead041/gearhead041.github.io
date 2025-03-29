import { JSX } from "react";
import { NestJsLogo, PythonLogo, TypeScriptLogo } from "./svg_logos";

export type projectParams = {
	projectTitle: string;
	description: string;
	link: string;
	stack: string[];
};

const logoDict: { [key: string]: JSX.Element } = {
	NestJs: <NestJsLogo size={40} />,
	Typescript: <TypeScriptLogo size={40} />,
	Python: <PythonLogo size={40} />,
};

export function Project(params: projectParams) {
	return (
		<>
			<div className="project">
				<div className="projectText">
					<p className="projectTitle">{params.projectTitle}</p>
					<p className="projectDescription">
						{params.description}
					</p>
					<a
						className="projectLink"
						target="_blank"
						href={params.link}
						aria-label="Go to project repository"
					>
						Project Link
					</a>
					<div className="projectStack">
						{params.stack.map((stack) => logoDict[stack])}
					</div>
				</div>
			</div>
		</>
	);
}
