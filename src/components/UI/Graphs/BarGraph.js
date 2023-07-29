import React from 'react';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from '../../../utils/getChartOptions';

const BarGraph = ({ label, data }) => {
	const barChartData = {
		labels: label,
		datasets: [
			{
				label: 'Volume',
				data: data,
				backgroundColor: 'rgb(33,114,229)',
				barPercentage: 0.93,
				borderRadius: 4,
				borderWidth: 0,
				borderSkipped: false,
			},
		],
	};

	return <Bar data={barChartData} options={chartOptions} />;
};

export default BarGraph;
