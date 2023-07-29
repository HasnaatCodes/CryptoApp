import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import GlobalDataBar from './components/GlobalDataBar/GlobalDataBar';
import CurrencyContext from './context/currency-context';
import Coins from './components/Pages/Coins';
import Portfolio from './components/Pages/Portfolio';

const App = () => {
	const [selectedCurrency, setSelectedCurrency] = useState({
		currency: 'usd',
		currencyIcon: '$',
	});

	const MyRoutes = () => {
		return (
			<Routes>
				<Route path="/" element={<Coins />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		);
	};

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

					<div className={classes.container}>
						<GlobalDataBar />
						<MyRoutes />
					</div>
				</Router>
			</div>
		</CurrencyContext.Provider>
	);
};

export default App;
