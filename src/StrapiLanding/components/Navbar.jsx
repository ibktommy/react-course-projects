import { FaBars } from "react-icons/fa";
import { useStrapiContext } from "../context/context";
import sublinks from "../data";
import { nanoid } from "nanoid";

const Navbar = () => {
	const { openSideBar, setPageID } = useStrapiContext();

	// Function that is called when we mouse is placed on any of the navlinks
	function mouseEnterHandler(e) {
		e.preventDefault();
		setPageID(parseFloat(e.target.id));
	}
	// Function that is called when we mouse leaves any of the navlinks
	function mouseLeaveHandler(e) {
		e.preventDefault();
		setPageID("default");
	}

	return (
		<nav>
			<div className="nav-center">
				{/* Logo */}
				<h3 className="logo">strapi</h3>

				{/* NavMenu - Desktop */}
				<ul className="navlinks">
					{sublinks.map((sublink, index) => {
						const { page, url } = sublink;

						return (
							<li key={nanoid()}>
								<a
									href={url}
									onMouseEnter={mouseEnterHandler}
									onMouseLeave={mouseLeaveHandler}
									id={index}
								>
									{page}
								</a>
							</li>
						);
					})}
				</ul>

				{/* NavMenu - Mobile */}
				<button className="nav-menu-btn" onClick={openSideBar}>
					<FaBars />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
