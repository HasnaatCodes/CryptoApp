export const chartOptions = {
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		y: {
			grid: {
				display: false,
				drawTicks: false,
				borderWidth: 0,
			},
			ticks: {
				display: false,
			},
		},
		x: {
			display: true,
			grid: {
				display: false,
				borderWidth: 0,
			},
			ticks: {
				maxRotation: 0,
				minRotation: 0,
				autoSkip: true,
				maxTicksLimit: 16,
			},
		},
	},
};
