import classes from './NavBar.module.css';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import useWindowSize from '../../hooks/useWindowSize';
import Hamburger from './Hamburger';
import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import NavBarLinks from './NavBarLinks';

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
					<NavBarLinks />
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
