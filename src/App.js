import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Coins from './components/Pages/Coins';

const App = () => {
	return (
		<div className={classes.App}>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Coins />} />
					<Route path="/portfolio" element={<h1>Portfolio</h1>} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
