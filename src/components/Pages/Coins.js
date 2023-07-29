import React from 'react';
import GraphHolder from '../UI/GraphHolder';
import classes from './Coins.module.css';

const Coins = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<h1>Overview</h1>
				<div className={classes.graphs}>
					<div className={classes.left_graph}>
						<GraphHolder value="29.45 ths" title="Price" type="Line" />
					</div>

					<div className={classes.right_graph}>
						<GraphHolder value="29.45 ths" title="Volume 24h" type="Bar" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coins;
