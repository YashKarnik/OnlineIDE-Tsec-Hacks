import React from 'react';
import { useUserContext } from '../contexts/userAuthContext';

export default function Ide(props) {
	const { logout } = useUserContext();
	async function handleLogout(e) {
		try {
			await logout();
			props.history.push('/');
		} catch (error) {}
	}
	return (
		<div>
			<h1>IDE</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
