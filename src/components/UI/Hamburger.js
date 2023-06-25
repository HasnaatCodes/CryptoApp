import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = () => {
	return (
		<div className={classes.hamburger_container}>
			<div className={classes.hamburger_menu}>
				<ul>
					<li>Coins</li>
					<li>Portfolio</li>
					<hr className={classes.solid}></hr>
					<li>
						<button>Theme</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hamburger;
