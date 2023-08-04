import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import GlobalDataBar from './components/GlobalDataBar/GlobalDataBar';
import MyRoutes from './components/Routes/MyRoutes';
import PageContainer from './components/UI/PageContainer';
import MyCurrencyContextProvider from './context/MyCurrencyContextProvider';

const App = () => {
	return (
		<MyCurrencyContextProvider>
			<Router>
				<NavBar />

				<PageContainer>
					<GlobalDataBar />
					<MyRoutes />
				</PageContainer>
			</Router>
		</MyCurrencyContextProvider>
	);
};

export default App;
