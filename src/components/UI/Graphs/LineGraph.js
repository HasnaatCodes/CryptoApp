import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from '../../../utils/getChartOptions';

const LineGraph = ({ label, data }) => {
	chartOptions.elements = {
		point: {
			radius: 1,
			hitRadius: 30,
			hoverRadius: 4,
		},
		line: {
			tension: 0.4,
		},
	};

	const lineChartData = {
		labels: label,
		datasets: [
			{
				label: 'Price',
				data: data,
				fill: true,
				backgroundColor: (context) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 400);
					gradient.addColorStop(0, '#414547');
					gradient.addColorStop(1, '#000');
					return gradient;
				},
				borderColor: '#00ff5f',
				pointBackgroundColor: '#00ff5f',
			},
		],
	};

	return <Line data={lineChartData} options={chartOptions} />;
};

export default LineGraph;
