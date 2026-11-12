import { JSX } from "react";
import { CSharpLogo, NestJsLogo, PythonLogo, TypeScriptLogo } from "./svg_logos";

export type projectParams = {
	projectTitle: string;
	description: string;
	/** public repository; omit for proprietary / unpublished work */
	link?: string;
	/** dateline shown before the description, e.g. where the work was done */
	source?: string;
	/** shown in place of the link when there is no public repository */
	note?: string;
	stack: string[];
};

const logoDict: { [key: string]: JSX.Element } = {
	NestJs: <NestJsLogo size={22} />,
	Typescript: <TypeScriptLogo size={22} />,
	Python: <PythonLogo size={22} />,
	".NET": <CSharpLogo size={22} />,
};

export function Project(params: projectParams) {
	return (
		<article className="project">
			<h3 className="projectTitle">{params.projectTitle}</h3>
			<p className="projectDescription">
				<span className="dateline">{params.source ?? "GitHub"} —</span> {params.description}
			</p>
			{params.link ? (
				<a
					className="projectLink"
					target="_blank"
					rel="noreferrer"
					href={params.link}
					aria-label={`Go to ${params.projectTitle} repository`}
				>
					Continued at the repository →
				</a>
			) : (
				<p className="projectNote">{params.note ?? "Not publicly available."}</p>
			)}
			{params.stack.length > 0 && (
				<div className="projectStack">
					<span className="filedUnder">Filed under:</span>
					{params.stack.map((stack) => (
						<span className="stackTag" key={stack}>
							{logoDict[stack]}
							{stack}
						</span>
					))}
				</div>
			)}
		</article>
	);
}
