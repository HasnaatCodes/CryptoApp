import React from 'react';
import HamburgerDarkTheme from '../../images/hamburger_dark.svg';
import classes from './NavBar.module.css';

const HamburgerIcon = ({ hamBurgerToggleHandler }) => {
	return (
		<div className={`${classes.right}`} onClick={hamBurgerToggleHandler}>
			<img
				className={classes.enable_click}
				src={HamburgerDarkTheme}
				alt="Hamburger Menu Icon"
			/>
		</div>
	);
};

export default HamburgerIcon;
