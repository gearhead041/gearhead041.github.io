type AdStyle = "feature" | "double" | "coupon" | "ornate" | "plain";

type Certification = {
	title: string;
	issuer: string;
	date: string;
	credentialIds?: string[];
	/** the ad's attention-grabbing top line */
	kicker: string;
	style: AdStyle;
	/** span two grid columns */
	wide?: boolean;
};

// Source: CV — certifications section. Newest first.
const certifications: Certification[] = [
	{
		title: "Associate Cloud Engineer",
		issuer: "Google",
		date: "June 2026",
		kicker: "★ Announcing ★",
		style: "feature",
	},
	{
		title: "Microservices Foundations Professional Certificate",
		issuer: "Kong",
		date: "September 2025",
		kicker: "Now Certified!",
		style: "double",
		wide: true,
	},
	{
		title: "Foundational C# with Microsoft",
		issuer: "freeCodeCamp",
		date: "November 2023",
		kicker: "Completed",
		style: "coupon",
	},
	{
		title: "Web Application Technologies and Django",
		issuer: "Coursera",
		date: "April 2022",
		credentialIds: ["7HJUSGQ74LH5"],
		kicker: "Course Completed",
		style: "ornate",
	},
	{
		title: "Data Collection and Processing with Python",
		issuer: "Coursera",
		date: "March 2022",
		credentialIds: ["QMA6V8ZJ5ZAA"],
		kicker: "Course Completed",
		style: "plain",
	},
	{
		title: "Certified SolidWorks Associate — Mechanical Design",
		issuer: "Dassault Systèmes",
		date: "February 2022",
		credentialIds: ["C-7JPUBZX39L"],
		kicker: "Certified!",
		style: "double",
	},
	{
		title: "Health, Safety & Environment — Levels 1, 2 & 3",
		issuer: "World Safety Organization",
		date: "February 2021",
		credentialIds: ["9128", "11774", "12888"],
		kicker: "Safety First",
		style: "coupon",
		wide: true,
	},
];

export function Certifications() {
	return (
		<section className="ads" aria-labelledby="ads-heading">
			<h2 className="sectionHead" id="ads-heading">
				<span>Advertisements</span>
				<small>Certifications &amp; Training</small>
			</h2>
			<div className="adGrid">
				{certifications.map((cert) => (
					<article
						key={cert.title}
						className={`ad ad--${cert.style}${cert.wide ? " ad--wide" : ""}`}
					>
						<p className="adKicker">{cert.kicker}</p>
						<h3 className="adTitle">{cert.title}</h3>
						<p className="adIssuer">
							<span className="adBy">issued by</span> {cert.issuer}
						</p>
						<p className="adDate">{cert.date}</p>
						{cert.credentialIds && (
							<p className="adId">
								Credential No{cert.credentialIds.length > 1 ? "s" : ""}.{" "}
								{cert.credentialIds.join(" · ")}
							</p>
						)}
					</article>
				))}
			</div>
		</section>
	);
}
