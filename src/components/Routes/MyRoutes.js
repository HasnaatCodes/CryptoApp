import { Route, Routes } from 'react-router-dom';
import Coins from '../Pages/Coins';
import Portfolio from '../Pages/Portfolio';

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Coins />} />
			<Route path="/portfolio" element={<Portfolio />} />
		</Routes>
	);
};

export default MyRoutes;
