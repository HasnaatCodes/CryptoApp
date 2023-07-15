import React from 'react';
import classes from './Hamburger.module.css';
import NavBarLinks from './NavBarLinks';
import useWindowSize from '../../hooks/useWindowSize';

const Hamburger = () => {
	const windowSize = useWindowSize();
	return (
		<>
			{windowSize.width <= 768 && (
				<div className={classes.hamburger_container}>
					<div className={classes.hamburger_menu}>
						<NavBarLinks isHamburger>
							<hr className={classes.solid}></hr>
							<li>
								<button>Theme</button>
							</li>
						</NavBarLinks>
					</div>
				</div>
			)}
		</>
	);
};

export default Hamburger;
