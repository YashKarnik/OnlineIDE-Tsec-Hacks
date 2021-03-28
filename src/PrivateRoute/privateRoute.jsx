import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { useUserContext } from '../contexts/userAuthContext';
export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useUserContext();
	const history = useHistory();
	return (
		<Route
			{...rest}
			render={restOfProps =>
				currentUser ? <Component {...restOfProps} /> : history.push('/')
			}
		/>
	);
}
