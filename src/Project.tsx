import { JSX } from "react";
import { NestJsLogo, PythonLogo, TypeScriptLogo } from "./svg_logos";

export const projects: projectParams[] = [
	{
		projectTitle: "Blog API",
		description:
			"A Blog API based on the realworld conduit specification,implemented in NestJS, with JWT authentication and rolebased access. MongoDB and Prisma used as backend",
		link: "https://github.com/gearhead041/realworld-nestjs-prisma-mongodb",
		stack: ["NestJs", "Typescript"],
	},
];

type projectParams = {
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
						A Blog API based on the realworld conduit specification,
						implemented in NestJS, with JWT authentication and role
						based access. MongoDB and Prisma used as backend
					</p>
					<a
						className="projectLink"
						target="_blank"
						href="https://github.com/gearhead041/realworld-nestjs-prisma-mongodb"
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
