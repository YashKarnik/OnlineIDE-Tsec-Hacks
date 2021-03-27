import Login from './compnenets/Login';
import { UserProvider } from './contexts/userAuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/privateRoute';
import Ide from './compnenets/ide/ide';
import Files from './compnenets/files/files';

export default function App() {
	return (
		<UserProvider>
			<Router>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/:filename/ide' component={Ide} />
				<PrivateRoute exact path='/files' component={Files} />
			</Router>
		</UserProvider>
	);
}
