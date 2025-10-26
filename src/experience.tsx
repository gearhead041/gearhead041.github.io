
export const edus: eduParam[] = [
  {
    institute: "University of Edinburgh, UK",
    title: "Msc. Data Science Technology and Innovation",
    yrs: "2024 - 2025",
  },
  {
    institute: "Covenant University, Ota",
    title: "B.Eng Mechanical Engineering",
    yrs: "2018 - 2023",
  },
];

export const workExps: workExp[] = [
	{
		institute: "Stanbic IBTC",
		title: "Software Engineer",
		yrs:"2025-Present"
	}
];

type workExp = {
	logo?: string;
	institute: string;
	title: string;
	yrs: string;
};

type eduParam = {
	institute: string;
	title: string;
	yrs: string;
};

export function HeroDetail(params: eduParam | workExp) {

	return (
		<div className="edu">
			{"logo" in params ? <img src={params.logo} /> : <></>}
			<p className="institute">{params.institute}</p>
			<p className="degree">{params.title}</p>
			<p className="schoolyrs">{params.yrs}</p>
		</div>
	);
}