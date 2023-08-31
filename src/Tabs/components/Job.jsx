import { BsChevronDoubleRight } from "react-icons/bs";

const Job = ({ dataProps }) => {
	const { id, title, dates, duties, company } = dataProps;
	return (
		<article className="company-details">
			<h2 className="title">{title}</h2>
			<p className="company">{company}</p>
			<p className="date">{dates}</p>

			<ul>
				{duties &&
					duties.map((duty, id) => {
						return (
							<div key={id} className="description">
								<BsChevronDoubleRight className="icon"/>
								<li>{duty}</li>
							</div>
						);
					})}
			</ul>
		</article>
	);
};

export default Job;
