import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/userAuthContext';

export default function Navbar() {
	const { currentUser } = useUserContext();
	return (
		<ul className='Navbar'>
			<li>
				<Link to='/files' className='navbar-head'>
					CoIDE
				</Link>
			</li>
			<li>
				<Link to='/files'>files</Link>
			</li>

			<li>
				<img
					src={currentUser.photoURL}
					height='50px'
					width='50px'
					style={{ marginRight: '1.5rem', borderRadius: '50%' }}
					alt='displayURL'
				/>{' '}
			</li>
		</ul>
	);
}
