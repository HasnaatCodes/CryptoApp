/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import classes from './GlobalDataBar.module.css';
import numeral from 'numeral';
import CurrencyContext from '../../context/currency-context';
import useWindowSize from '../../hooks/useWindowSize';
import Bitcoin from '../../images/bitcoin.svg';
import Ethereum from '../../images/ethereum.svg';

const Coins = () => {
	const [activeCurrencies, setActiveCurrencies] = useState();
	const [markets, setMarkets] = useState();
	const [marketCap, setMarketCap] = useState();
	const [totalVolume, setTotalVolume] = useState();
	const { selectedCurrency } = useContext(CurrencyContext);
	const { currency, currencyIcon } = selectedCurrency;

	const [firstPercent, setFirstPercent] = useState('');
	const [secondPercent, setSecondPercent] = useState('');
	const windowSize = useWindowSize();

	useEffect(() => {
		async function fetchCoins() {
			const response = await axios.get(
				'https://api.coingecko.com/api/v3/global'
			);
			setRespectiveStates(response.data.data);
		}
		fetchCoins();
	}, [selectedCurrency, currency]);

	const processNumbers = (number) => {
		return numeral(number).format('0.00a').toUpperCase();
	};

	const setRespectiveStates = (data) => {
		const {
			active_cryptocurrencies,
			markets,
			total_market_cap,
			total_volume,
			market_cap_percentage,
		} = data;

		setActiveCurrencies(active_cryptocurrencies);
		setMarkets(markets);

		setMarketCap(processNumbers(total_market_cap[currency]));
		setTotalVolume(processNumbers(total_volume[currency]));
		setPercentBars(market_cap_percentage);
	};

	const setPercentBars = (marketCap) => {
		let arr = Object.values(marketCap)
			.sort(function (a, b) {
				return b - a;
			})
			.slice(0, 2);

		setFirstPercent(Math.round(arr[0]));
		setSecondPercent(Math.round(arr[1]));
	};

	const ProgressBar = ({ percent }) => {
		return (
			<div className={classes.progress_bar}>
				<div
					className={classes.inner_bar}
					style={{ width: `${percent}%` }}
				></div>
			</div>
		);
	};

	return (
		<div className={classes.coins_overview_container}>
			<div className={classes.market_data}>
				<ul className={classes.market_data_list}>
					{windowSize.width >= 1200 && (
						<li>
							<span>Coins {activeCurrencies}</span>
						</li>
					)}
					{windowSize.width >= 1500 && (
						<li>
							<span>Exchange {markets}</span>
						</li>
					)}
					{windowSize.width >= 1000 && (
						<li>
							<div className={classes.dot}></div>
							<span>
								{currencyIcon}
								{marketCap}
							</span>
						</li>
					)}
					<li>
						<div className={classes.dot}></div>
						<span>
							{currencyIcon}
							{totalVolume}
						</span>
						<ProgressBar percent={totalVolume?.toString().slice(0, 2)} />
					</li>
					<li>
						<img className={classes.image} src={Bitcoin} alt="Bitcoin" />
						<span>{firstPercent}%</span>
						<ProgressBar percent={firstPercent} />
					</li>
					{windowSize.width >= 480 && (
						<li>
							<img className={classes.image} src={Ethereum} alt="Ethereum" />
							<span>{secondPercent}%</span>
							<ProgressBar percent={secondPercent} />
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Coins;
