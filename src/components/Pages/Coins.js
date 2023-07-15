import React, { useEffect, useRef } from 'react';
import classes from './Coins.module.css';

const Coins = () => {
	const secondRef = useRef();
	const thirdRef = useRef();

	useEffect(() => {
		secondRef.current.style.setProperty('--percent-value', '44%');
		thirdRef.current.style.setProperty('--percent-value', '19%');
	}, []);

	return (
		<div className={classes.coins_overview_container}>
			<div className={classes.market_data}>
				<ul className={classes.market_data_list}>
					<li>
						<span>Coins 7884</span>
					</li>
					<li>
						<span>Exchange 622</span>
					</li>
					<li>
						<div className={classes.dot}></div>
						<span>$1.20T</span>
					</li>
					<li>
						<div className={classes.dot}></div>
						<span>$53.54B</span>
						<div className={classes.percentage}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
					<li>
						<span>44%</span>
						<div className={classes.percentage} ref={secondRef}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
					<li>
						<span>19%</span>
						<div className={classes.percentage} ref={thirdRef}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Coins;
