import useWindowSize from '../../../hooks/useWindowSize';
import GraphHolder from './GraphHolder';
import classes from './GraphsContainer.module.css';

const GraphsContainer = ({ currentlySelectedTimePeriod }) => {
	const windowSize = useWindowSize();
	return (
		<div className={classes.graphs}>
			{windowSize.width >= 768 && (
				<GraphHolder timePeriod={currentlySelectedTimePeriod} />
			)}

			{windowSize.width < 768 && (
				<div className={classes.single_graph}>
					<GraphHolder timePeriod={currentlySelectedTimePeriod} />
				</div>
			)}
		</div>
	);
};

export default GraphsContainer;
