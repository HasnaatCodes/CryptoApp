import { useContext, useEffect } from 'react';
import classes from './Dropdown.module.css';
import getCurrencyIcon from '../../utils/getCurrencyIcon';
import CurrencyContext from '../../context/currency-context';

const Dropdown = () => {
	const { selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);

	const currencyChangeHandler = ({ target: { value } }) => {
		const newCurrencyIcon = getCurrencyIcon(value);
		setSelectedCurrency({
			currency: value,
			currencyIcon: newCurrencyIcon,
		});
	};

	useEffect(() => {
		const lastSelected = localStorage.getItem('currency') ?? 'usd';
		setSelectedCurrency({
			currency: lastSelected,
			currencyIcon: getCurrencyIcon(lastSelected),
		});
	}, [setSelectedCurrency]);

	return (
		<div className={classes.dropdown_container}>
			<div className={classes.symbol}>
				<span className={classes.child}>{selectedCurrency.currencyIcon}</span>
			</div>

			<div className={classes.dropdown}>
				<select
					className={classes.currency}
					onChange={currencyChangeHandler}
					value={selectedCurrency.currency}
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
