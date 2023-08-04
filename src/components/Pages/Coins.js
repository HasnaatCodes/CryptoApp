import React, { useState } from 'react';
import SimpleContainer from '../UI/SimpleContainer';
import classes from './Coins.module.css';
import GraphsContainer from '../UI/Graphs/GraphsContainer';
import RangeSelector from '../UI/RangeSelector';

const Coins = () => {
	const [currentlySelectedTimePeriod, setCurrentlySelectedTimePeriod] =
		useState('6m');

	return (
		<SimpleContainer>
			<div className={classes.content}>
				<h1>Overview</h1>
				<GraphsContainer
					currentlySelectedTimePeriod={currentlySelectedTimePeriod}
				/>

				<RangeSelector
					currentlySelectedTimePeriod={currentlySelectedTimePeriod}
					setCurrentlySelectedTimePeriod={setCurrentlySelectedTimePeriod}
				/>
			</div>
		</SimpleContainer>
	);
};

export default Coins;
