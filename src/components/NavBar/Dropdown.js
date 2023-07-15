import { useEffect, useState } from 'react';
import classes from './Dropdown.module.css';

const Dropdown = () => {
	const [selectedCurrencyIcon, setSelectedCurrencyIcon] = useState('$');
	const [selectedCurrency, setSelectedCurrency] = useState('usd');

	const currencyChangeHandler = ({ target: { value } }) => {
		getCurrencyIcon(value);
		setSelectedCurrency(value);
	};

	useEffect(() => {
		const lastSelected = localStorage.getItem('currency') ?? 'usd';
		setSelectedCurrency(lastSelected);
		getCurrencyIcon(lastSelected);
	}, []);

	const getCurrencyIcon = (value) => {
		switch (value) {
			case 'usd':
				setSelectedCurrencyIcon('$');
				break;
			case 'eur':
				setSelectedCurrencyIcon('€');
				break;
			case 'gbp':
				setSelectedCurrencyIcon('£');
				break;
			case 'btc':
				setSelectedCurrencyIcon('₿');
				break;
			case 'eth':
				setSelectedCurrencyIcon('Ξ');
				break;
			default:
				setSelectedCurrencyIcon('$');
		}

		localStorage.setItem('currency', value);
	};

	return (
		<div className={classes.dropdown_container}>
			<div className={classes.symbol}>
				<span className={classes.child}>{selectedCurrencyIcon}</span>
			</div>

			<div className={classes.dropdown}>
				<select
					className={classes.currency}
					onChange={currencyChangeHandler}
					value={selectedCurrency}
				>
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
