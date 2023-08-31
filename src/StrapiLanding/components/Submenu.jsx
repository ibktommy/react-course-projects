import { useStrapiContext } from "../context/context";
import sublinks from "../data";
import { nanoid } from "nanoid";

const SubMenu = () => {
	const { pageID } = useStrapiContext();


	// Condition that checks if the pageID is still in its default "string" type and therefore does not display the submenu-section but displays it when the pageID changes to a number
	if (typeof(pageID) === 'string') {
		return (
			<section id="submenu" className="display"></section>
		)
	} else {
		const { page, links } = sublinks[pageID]
		
		return (
			<section id="submenu">
				<article key={nanoid()} className="submenu-links">
					<h3>{page}</h3>
					<div className="submenu-options">
						{links.map((link) => {
							const { label, icon } = link;
							return (
								<div className="submenu-options-content">
									{icon}
									<p>{label}</p>
								</div>
							);
						})}
					</div>
				</article>
			</section>
		);
	}
};

export default SubMenu;
