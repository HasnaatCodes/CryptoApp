import classes from './NavBar.module.css';
import Dropdown from './UI/Dropdown';
import SearchBar from './UI/SearchBar';
import ThemeToggle from './UI/ThemeToggle';
import useWindowSize from '../hooks/useWindowSize';
import HamburgerDarkTheme from '../images/hamburger_dark.svg';

const NavBar = () => {
	const windowSize = useWindowSize();

	const constructMobileView = () => {
		return (
			<>
				<div className={classes.left}>
					<SearchBar />
					<Dropdown />
				</div>
				<div className={classes.right}>
					<img src={HamburgerDarkTheme} alt="Hamburger Menu Icon" />
				</div>
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
		<nav className={classes.navbar}>
			<div className={classes.nav_wrapper}>
				{windowSize.width > 768 && constructDesktopView()}
				{windowSize.width <= 768 && constructMobileView()}
			</div>
		</nav>
	);
};

export default NavBar;
