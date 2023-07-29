import React, { useContext } from 'react';
import CurrencyContext from '../../context/currency-context';
import classes from './Legend.module.css';

const Legend = ({ title, value, date }) => {
	const { selectedCurrency } = useContext(CurrencyContext);
	const { currencyIcon } = selectedCurrency;

	return (
		<div className={classes.writing_holder}>
			<p className={classes.medium_writing}>{title}</p>
			<p className={classes.large_writing}>
				{currencyIcon}
				{value}
			</p>
			<p className={classes.medium_writing}>
				{date.day} {date.month} {date.year}
			</p>
		</div>
	);
};

export default Legend;
