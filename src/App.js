import Login from './compnenets/Login';
import { UserProvider } from './contexts/userAuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/privateRoute';
import Ide from './compnenets/ide';
export default function App() {
	return (
		<UserProvider>
			<Router>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/ide' component={Ide} />
			</Router>
		</UserProvider>
	);
}
