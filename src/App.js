import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Coins from './components/Pages/Coins';
import CurrencyContext from './context/currency-context';

const App = () => {
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
			<div className={classes.App}>
				<Router>
					<NavBar />
					<Coins />
					<Routes>
						<Route path="/" element={<h1>Coins</h1>} />
						<Route path="/portfolio" element={<h1>Portfolio</h1>} />
					</Routes>
				</Router>
			</div>
		</CurrencyContext.Provider>
	);
};

export default App;
