export const getLabels = (labelData) => {
	let labels = labelData.map((labelData) =>
		new Date(labelData[0]).toLocaleString(undefined, {
			day: 'numeric',
		})
	);
	return labels;
};
