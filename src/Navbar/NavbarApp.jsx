import React, { useRef, useState } from "react";
import "./NavbarStyle.css";
import { links, socials } from "./data";
import { FaGitter } from "react-icons/fa";

const NavbarApp = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuIconRef = useRef(null)

  // Function that updates toggleMenu state
  function navMenuHandler(e) {
    setToggleMenu(!toggleMenu)
    const menuBarDOM = menuIconRef.current;

    if (!toggleMenu) {
			menuBarDOM.firstChild.style.transform = "rotate(360deg)";
    } else {
			menuBarDOM.firstChild.style.transform = "rotate(90deg)";
    }
  }
  
	return (
		<nav>
			<div className="nav-center">
				<div className="logo">
					<span>Nav</span>
					<span>Bar</span>
				</div>

				{/* Navbar Links */}
				<div className="nav-links">
					<ul>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>

				{/* Navbar Social */}
				<div className="nav-socials">
					<ul>
						{socials.map((social) => {
							const { id, url, icon } = social;
							return (
								<a href={url} key={id}>
									{icon}
								</a>
							);
						})}
					</ul>
				</div>

				{/* Navbar Menu */}
				<div className="nav-menu" ref={menuIconRef}>
					<FaGitter className="menu-icon" onClick={navMenuHandler} />
				</div>
			</div>

			{/* Navbar Mobile Links */}
			{toggleMenu ? <div className="nav-mobile-links">
				<ul>
					{links.map((link) => {
						const { id, url, text } = link;
						return (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						);
					})}
				</ul>
			</div> : null}
		</nav>
	);
};

export default NavbarApp;
