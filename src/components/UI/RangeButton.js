import React from 'react';
import classes from './RangeButton.module.css';

const RangeButton = (props) => {
	const { title } = props;
	const currentlySelected = props.currentlySelected === title || false;

	const styleClasses = currentlySelected
		? `${classes.button_div} ${classes.selected}`
		: `${classes.button_div}`;

	const handleClick = () => {
		props.onClick(title);
	};

	return (
		<div className={styleClasses} onClick={handleClick}>
			{title}
		</div>
	);
};

export default RangeButton;
