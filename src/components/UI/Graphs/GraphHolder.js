import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import CurrencyContext from '../../../context/currency-context';
import useWindowSize from '../../../hooks/useWindowSize';
import MobileSlider from './MobileSlider';
import { formatChartNumber } from '../../../utils/formatChartNumber';
import { getTimePeriod } from '../../../utils/getTimePeriod';
import Graph from './Graph';
import { getLabels } from '../../../utils/getLabels';
import DisplayGraph from './DisplayGraph';

const GraphHolder = (props) => {
	const windowSize = useWindowSize();
	const {
		selectedCurrency: { currency },
	} = useContext(CurrencyContext);

	const date = {
		day: new Date().getDate(),
		month: new Date().toLocaleString('default', { month: 'long' }),
		year: new Date().getFullYear(),
	};

	const [prices, setPrices] = useState({
		labels: '',
		chartData: [],
		latestPrice: 0,
	});

	const [volumes, setVolumes] = useState({
		labels: '',
		chartData: [],
		latestPrice: 0,
	});

	const timePeriod = getTimePeriod(props.timePeriod);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${timePeriod}&interval=daily`
			);

			const priceData = {
				labels: getLabels(data.prices),
				chartData: data.prices.map((el) => el[1]),
				latestPrice: formatChartNumber(
					data.prices[data.prices.length - 1][1].toFixed()
				),
			};

			const volumesData = {
				labels: getLabels(data.total_volumes),
				chartData: data.total_volumes.map((el) => el[1]),
				latestVolume: formatChartNumber(
					data.total_volumes[data.total_volumes.length - 1][1].toFixed()
				),
			};

			setPrices(priceData);
			setVolumes(volumesData);
		}
		fetchData();
	}, [currency, prices, volumes, timePeriod]);

	return (
		<>
			{windowSize.width >= 768 ? (
				<>
					<DisplayGraph
						value={prices.latestPrice}
						date={date}
						type="Line"
						label={prices.labels}
						data={prices.chartData}
					/>

					<DisplayGraph
						value={volumes.latestVolume}
						date={date}
						type="Bar"
						label={volumes.labels}
						data={volumes.chartData}
					/>
				</>
			) : (
				<MobileSlider date={date} prices={prices} volumes={volumes} />
			)}
		</>
	);
};

export default GraphHolder;
