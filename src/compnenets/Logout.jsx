import React from 'react';
import { useUserContext } from '../contexts/userAuthContext';

export default function Logout(props) {
	const { logout, currentUser } = useUserContext();

	async function handleLogout(e) {
		try {
			await logout();
			props.history.push('/');
		} catch (error) {}
	}
	return (
		<div>
			<button onClick={handleLogout} className='logout-btn'>
				{' '}
				LOGOUT ?
			</button>
		</div>
	);
}
