import classes from './NavBar.module.css';
import Dropdown from './UI/Dropdown';
import SearchBar from './UI/SearchBar';
import ThemeToggle from './UI/ThemeToggle';
import useWindowSize from '../hooks/useWindowSize';
import Hamburger from './UI/Hamburger';
import { useState } from 'react';
import HamburgerIcon from './UI/HamburgerIcon';

const NavBar = () => {
	const windowSize = useWindowSize();
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

	const hamBurgerToggleHandler = () => {
		setShowHamburgerMenu((prev) => !prev);
	};

	const constructMobileView = () => {
		return (
			<>
				<div className={classes.left}>
					<SearchBar />
					<Dropdown />
				</div>
				<HamburgerIcon hamBurgerToggleHandler={hamBurgerToggleHandler} />
			</>
		);
	};

	const constructDesktopView = () => {
		return (
			<>
				<div className={classes.left}>
					<ul>
						<li>
							<a href="#">Coins</a>
						</li>
						<li>
							<a href="#">Portfolio</a>
						</li>
					</ul>
				</div>

				<div className={classes.right}>
					<SearchBar />
					<Dropdown />
					<ThemeToggle />
				</div>
			</>
		);
	};

	return (
		<>
			<nav className={classes.navbar}>
				<div className={classes.nav_wrapper}>
					{windowSize.width > 768 && constructDesktopView()}
					{windowSize.width <= 768 && constructMobileView()}
				</div>
			</nav>
			{showHamburgerMenu && <Hamburger />}
		</>
	);
};

export default NavBar;
