import { projectParams } from "./Project";

export const projects: projectParams[] = [
	{
		projectTitle: "Blog API",
		description:
			"A Blog API based on the realworld conduit specification,implemented in NestJS, with JWT authentication and rolebased access. MongoDB and Prisma used as backend",
		link: "https://github.com/gearhead041/realworld-nestjs-prisma-mongodb",
		stack: ["NestJs", "Typescript"],
	},
	{
		projectTitle: "Telegram NewsBot",
		description:
			"A telegram Bot for sending curated Nigerian News updates to registered users. Uses Firebase as a datastore.",
		link: "https://github.com/gearhead041/telegram_bot_motivator",
		stack: ["Typescript"],
	},
	{
		projectTitle: "Chimoney SDK .NET",
		description: "A .NET SDK for the Chimoney Payment Platform. Over 600 downloads to date.",
		link: "https://github.com/dsccovenantuniversity/Chimoney-SDK-Challenge-Covenant-University/tree/main/SDK%20Submissions/ChimoneyDotNet",
		stack: ["NET"],
	},
];
