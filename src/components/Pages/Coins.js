import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './Coins.module.css';
import numeral from 'numeral';
import CurrencyContext from '../../context/currency-context';

const Coins = () => {
	const secondRef = useRef();
	const thirdRef = useRef();
	const [activeCurrencies, setActiveCurrencies] = useState();
	const [markets, setMarkets] = useState();
	const [marketCap, setMarketCap] = useState();
	const { selectedCurrency } = useContext(CurrencyContext);

	useEffect(() => {
		async function fetchCoins() {
			const response = await axios.get(
				'https://api.coingecko.com/api/v3/global'
			);
			setActiveCurrencies(response.data.data.active_cryptocurrencies);
			setMarkets(response.data.data.markets);
			let processedMarketCap = numeral(
				response.data.data.total_market_cap[selectedCurrency.currency]
			)
				.format('0.00a')
				.toUpperCase();

			setMarketCap(processedMarketCap);
		}
		fetchCoins();

		secondRef.current.style.setProperty('--percent-value', '44%');
		thirdRef.current.style.setProperty('--percent-value', '19%');
	}, [selectedCurrency]);

	return (
		<div className={classes.coins_overview_container}>
			<div className={classes.market_data}>
				<ul className={classes.market_data_list}>
					<li>
						<span>Coins {activeCurrencies}</span>
					</li>
					<li>
						<span>Exchange {markets}</span>
					</li>
					<li>
						<div className={classes.dot}></div>
						<span>
							{selectedCurrency.currencyIcon}
							{marketCap}
						</span>
					</li>
					<li>
						<div className={classes.dot}></div>
						<span>53.54B</span>
						<div className={classes.percentage}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
					<li>
						<span>44%</span>
						<div className={classes.percentage} ref={secondRef}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
					<li>
						<span>19%</span>
						<div className={classes.percentage} ref={thirdRef}>
							<div className={classes.inner_percentage}></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Coins;
