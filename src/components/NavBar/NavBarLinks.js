import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBarLinks.module.css';

const NavBarLinks = (props) => {
	let navClasses = {
		ul: `${classes.unordered_list}`,
		li: `${classes.unordered_list_li_element}`,
		link: `${classes.link_element}`,
		active: `${classes.link_active}`,
	};

	if (props.isHamburger) {
		navClasses = {
			ul: `${classes.hamburger_menu_unordered_list}`,
			li: `${classes.hamburger_menu_list_element}`,
			link: `${classes.hamburger_link_element}`,
		};
	}

	return (
		<ul className={navClasses.ul}>
			<li className={navClasses.li}>
				<NavLink
					className={`${navClasses.link} ${navClasses.active}`}
					to="coins"
				>
					Coins
				</NavLink>
			</li>
			<li className={navClasses.li}>
				<NavLink className={navClasses.link} to="portfolio">
					Portfolio
				</NavLink>
			</li>
			{props.children}
		</ul>
	);
};

export default NavBarLinks;
