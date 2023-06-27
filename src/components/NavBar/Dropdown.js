import { useState } from 'react';
import classes from './Dropdown.module.css';

const Dropdown = () => {
	const [selectedCurrency, setSelectedCurrency] = useState('$');

	const currencyChangeHandler = (event) => {
		let selectedValue = event.target.value;
		switch (selectedValue) {
			case 'usd':
				setSelectedCurrency('$');
				break;
			case 'eur':
				setSelectedCurrency('€');
				break;
			case 'gbp':
				setSelectedCurrency('£');
				break;
			case 'btc':
				setSelectedCurrency('₿');
				break;
			case 'eth':
				setSelectedCurrency('Ξ');
				break;
			default:
				setSelectedCurrency('$');
		}
	};

	return (
		<div className={classes.dropdown_container}>
			<div className={classes.symbol}>
				<span className={classes.child}>{selectedCurrency}</span>
			</div>

			<div className={classes.dropdown}>
				<select className={classes.currency} onChange={currencyChangeHandler}>
					<option value="usd">USD</option>
					<option value="eur">EUR</option>
					<option value="gbp">GBP</option>
					<option value="btc">BTC</option>
					<option value="eth">ETH</option>
				</select>
			</div>
		</div>
	);
};

export default Dropdown;
