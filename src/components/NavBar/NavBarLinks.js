import React, { useState } from 'react';
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

	const [activeLink, setActiveLink] = useState('Coins');

	const coinClasses =
		activeLink === 'Coins'
			? `${navClasses.link} ${navClasses.active}`
			: `${navClasses.link}`;

	const portfolioClasses =
		activeLink === 'Portfolio'
			? `${navClasses.link} ${navClasses.active}`
			: `${navClasses.link}`;

	return (
		<ul className={navClasses.ul}>
			<li className={navClasses.li}>
				<NavLink
					className={coinClasses}
					to="/"
					onClick={() => {
						setActiveLink('Coins');
					}}
				>
					Coins
				</NavLink>
			</li>
			<li className={navClasses.li}>
				<NavLink
					className={portfolioClasses}
					to="portfolio"
					onClick={() => {
						setActiveLink('Portfolio');
					}}
				>
					Portfolio
				</NavLink>
			</li>
			{props.children}
		</ul>
	);
};

export default NavBarLinks;
