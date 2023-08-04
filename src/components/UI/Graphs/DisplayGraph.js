import React from 'react';
import Legend from '../Legend';
import BarGraph from './BarGraph';
import GraphWrapper from './GraphWrapper';
import Graph from './Graph';
import LineGraph from './LineGraph';
import classes from './DisplayGraph.module.css';

const DisplayGraph = ({ value, date, type, label, data }) => {
	return (
		<>
			<Graph>
				<div className={classes.graph_holder}>
					<div className={classes.info}>
						<Legend value={value} date={date} />
						<GraphWrapper>
							{type === 'Line' && <LineGraph label={label} data={data} />}

							{type === 'Bar' && <BarGraph label={label} data={data} />}
						</GraphWrapper>
					</div>
				</div>
			</Graph>
		</>
	);
};

export default DisplayGraph;
