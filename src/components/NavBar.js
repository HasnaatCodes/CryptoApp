import classes from './NavBar.module.css';
import Dropdown from './UI/Dropdown';
import SearchBar from './UI/SearchBar';
import ThemeToggle from './UI/ThemeToggle';

const NavBar = () => {
	return (
		<nav className={classes.navbar}>
			<div className={classes.left}>
				<a href="#" className={classes.link_active}>
					Coins
				</a>
				<a href="#">Portfolio</a>
			</div>

			<div className={classes.right}>
				<SearchBar />
				<Dropdown />
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default NavBar;
