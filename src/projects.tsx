import { projectParams } from "./Project";

export const projects: projectParams[] = [
	{
		projectTitle: "Quick Service Portal",
		source: "Stanbic IBTC",
		description:
			"Collaborated on the end-to-end development and deployment of a client-facing online service portal, building automated modules for letter requests, account upgrades, reactivation and digital account opening. The portal reduced physical branch visits, improving turnaround time and customer experience.",
		note: "Proprietary work for Stanbic IBTC.",
		stack: [],
	},
	{
		projectTitle: "Banking Middleware Services",
		source: "Stanbic IBTC",
		description:
			"Manages and optimises critical banking middleware for domestic and international transfers and account lifecycle management using .NET APIs, tying multiple internal services into unified workflows for account opening, beneficiary management and bills payment. Maintenance work includes switching transfer services to NPS and updating service logging.",
		note: "Proprietary work for Stanbic IBTC.",
		stack: [".NET"],
	},
	{
		projectTitle: "Retail and SME Onboarding Optimization on Mobile App",
		source: "Stanbic IBTC",
		description:
			"Optimized the retail and SME onboarding experience on the mobile app improving customer experience and reducing the number of support tickets.",
		note: "Proprietary work for Stanbic IBTC.",
		stack: [".NET"],
	},
	{
		projectTitle: "National Library of Scotland Catalogue Database",
		source: "University of Edinburgh",
		description:
			"MSc thesis: designed a relational database for the National Library of Scotland's catalogue of published material.",
		note: "MSc Data Science, Technology and Innovation thesis.",
		stack: [],
	},
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
		stack: [".NET"],
	},
];
