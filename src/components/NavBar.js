import classes from './NavBar.module.css';

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
				<label className={classes.search}>
					<input type="text" placeholder="Search..." />
				</label>
				<div className={classes.myselect}>
					<select className={classes.currency}>
						<option value="usd">USD</option>
						<option value="eur">EUR</option>
						<option value="gbp">GBP</option>
						<option value="btc">BTC</option>
						<option value="eth">ETH</option>
					</select>
				</div>

				<label className={classes.switch}>
					<input type="checkbox" />
					<span className={`${classes.slider} ${classes.round}`}></span>
				</label>
			</div>
		</nav>
	);
};

export default NavBar;
