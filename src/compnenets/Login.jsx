import React, { useState } from 'react';
import { useUserContext } from '../contexts/userAuthContext';

export default function Login() {
	const { login, logout, currentUser } = useUserContext();
	const [error, setError] = useState('');

	async function handleLogin(e) {
		try {
			await login();
		} catch (error) {
			setError(error);
		}
	}
	async function handleLogout(e) {
		try {
			const abc = await logout();
		} catch (error) {
			setError(error);
		}
	}

	return (
		<div>
			<button onClick={handleLogin}>Log in with google</button>
			<p>{error && JSON.stringify(error)}</p>
			<p>{currentUser && currentUser.displayName}</p>
			{currentUser && <img src={currentUser.photoURL} alt='aaa' srcset='' />}
			<p>{currentUser && currentUser.name}</p>
			{currentUser && (
				<button onClick={handleLogout}>Log out with google</button>
			)}
		</div>
	);
}
