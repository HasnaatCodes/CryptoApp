import React, { useEffect, useState, useContext } from 'react';
import classes from './GraphHolder.module.css';

import axios from 'axios';
import CurrencyContext from '../../context/currency-context';
import Legend from './Legend';
import LineGraph from './Graphs/LineGraph';
import BarGraph from './Graphs/BarGraph';
import GraphWrapper from './Graphs/GraphWrapper';

const GraphHolder = ({ value, title, type }) => {
	const [lineChartLabel, setLineChartLabel] = useState();
	const [barChartLabel, setBarChartLabel] = useState();
	const [chartMarket, setChartMarket] = useState();
	const [volume, setVolume] = useState();
	const { selectedCurrency } = useContext(CurrencyContext);
	const { currency } = selectedCurrency;
	const todayDate = new Date();
	const date = {
		day: todayDate.getDate(),
		month: todayDate.toLocaleString('default', { month: 'long' }),
		year: todayDate.getFullYear(),
	};

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=180&interval=daily`
			);

			setLineChartLabel(getLabels(data.prices));
			setBarChartLabel(getLabels(data.total_volumes));
			setChartMarket(data.prices.map((el) => el[1]));
			setVolume(data.total_volumes.map((el) => el[1]));
		}
		fetchData();
	}, [currency]);

	const getLabels = (labelData) => {
		let labels = labelData.map((labelData) =>
			new Date(labelData[0]).toLocaleString(undefined, {
				day: 'numeric',
			})
		);
		return labels;
	};

	return (
		<div className={classes.graph_holder}>
			<div className={classes.info}>
				<Legend title={title} value={value} date={date} />

				<GraphWrapper>
					{type === 'Line' && (
						<LineGraph label={lineChartLabel} data={chartMarket} />
					)}

					{type === 'Bar' && <BarGraph label={barChartLabel} data={volume} />}
				</GraphWrapper>
			</div>
		</div>
	);
};

export default GraphHolder;
