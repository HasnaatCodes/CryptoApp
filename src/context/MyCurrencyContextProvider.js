import React, { useState } from 'react';
import CurrencyContext from './currency-context';

const MyCurrencyContextProvider = ({ children }) => {
	const [selectedCurrency, setSelectedCurrency] = useState({
		currency: 'usd',
		currencyIcon: '$',
	});

	return (
		<CurrencyContext.Provider
			value={{
				selectedCurrency,
				setSelectedCurrency,
			}}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export default MyCurrencyContextProvider;
