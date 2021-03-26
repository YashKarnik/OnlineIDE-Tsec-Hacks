import React, { useState } from 'react';
import { useUserContext } from '../contexts/userAuthContext';

export default function Login(props) {
	const { login, currentUser } = useUserContext();
	const [error, setError] = useState('');

	async function handleLogin(e) {
		try {
			await login();
			props.history.push('./ide');
		} catch (error) {
			setError(error);
		}
	}

	return (
		<div>
			<button onClick={handleLogin}>Log in with google</button>
			<p>{error && JSON.stringify(error)}</p>
			<p>{currentUser && currentUser.displayName}</p>
			{currentUser && <img src={currentUser.photoURL} alt='aaa' />}
			<p>{currentUser && currentUser.name}</p>
		</div>
	);
}
