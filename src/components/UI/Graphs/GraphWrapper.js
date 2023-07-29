import React from 'react';
import classes from './GraphWrapper.module.css';
import {
	Chart as ChartJS,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	BarElement,
	Filler,
} from 'chart.js';

ChartJS.register(
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	BarElement,
	Filler,
	Title
);

const GraphWrapper = (props) => {
	return <div className={classes.chart_wrapper}>{props.children}</div>;
};

export default GraphWrapper;
