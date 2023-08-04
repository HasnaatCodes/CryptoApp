import RangeButton from './RangeButton';
import classes from './RangeSelector.module.css';

const RangeSelector = ({
	currentlySelectedTimePeriod,
	setCurrentlySelectedTimePeriod,
}) => {
	const range = ['1d', '1w', '1m', '3m', '6m', '1y'];

	return (
		<div className={classes.range_selector}>
			<div className={classes.range}>
				{range.map((timePeriod, index) => (
					<RangeButton
						key={index}
						title={timePeriod}
						currentlySelected={currentlySelectedTimePeriod}
						onClick={setCurrentlySelectedTimePeriod}
					/>
				))}
			</div>
		</div>
	);
};

export default RangeSelector;
