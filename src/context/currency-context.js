import React from 'react';
import getCurrencyIcon from '../utils/getCurrencyIcon';

// const CurrencyContext = React.createContext({
// 	currency: {
// 		currency: localStorage.getItem('currency') ?? 'usd',
// 		currencyIcon: getCurrencyIcon(localStorage.getItem('currency') ?? 'usd'),
// 	},
// 	setCurrencyContext: () => {},
// });

const CurrencyContext = React.createContext(null);

export default CurrencyContext;
