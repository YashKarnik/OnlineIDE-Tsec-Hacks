import Login from './compnenets/Login';
import { UserProvider } from './contexts/userAuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/privateRoute';
// import Ide from './compnenets/ide/ide_usused';
import HTML_ide from './compnenets/ide/HTMLEditor/HTML_ide';
import Files from './compnenets/files/files';

export default function App() {
	return (
		<UserProvider>
			<Router>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/html/:filename/ide' component={HTML_ide} />
				<PrivateRoute exact path='/files' component={Files} />
			</Router>
		</UserProvider>
	);
}
