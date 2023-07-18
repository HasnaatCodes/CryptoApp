const getCurrencyIcon = (value) => {
	let currency = '';
	switch (value) {
		case 'usd':
			currency = '$';
			break;
		case 'eur':
			currency = '€';
			break;
		case 'gbp':
			currency = '£';
			break;
		case 'btc':
			currency = '₿';
			break;
		case 'eth':
			currency = 'Ξ';
			break;
		default:
			currency = '$';
	}

	localStorage.setItem('currency', value);
	return currency;
};

export default getCurrencyIcon;
