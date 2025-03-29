import { eduParam } from "./education.1";


export function Education(params: eduParam) {
	return (
		<div className="edu">
			<p className="institute">{params.institute}</p>
			<p className="degree">{params.degree}</p>
			<p className="schoolyrs">{params.yrs}</p>
		</div>
	);
}
