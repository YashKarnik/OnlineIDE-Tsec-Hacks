import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/userAuthContext';
import Portal from './portal';
export default function Navbar() {
	const { currentUser } = useUserContext();
	const [open, setOpen] = useState(false);
	return (
		<ul className='Navbar'>
			<li>
				<Link to='/files' className='navbar-head'>
					CoIDE
				</Link>
			</li>
			<Link to='/logout'>
				<li>
					{currentUser?.photoURL && (
						<img
							src={currentUser.photoURL}
							style={{ cursor: 'pointer' }}
							onClick
							height='50px'
							width='50px'
							style={{ marginRight: '1.5rem', borderRadius: '50%' }}
							alt='displayURL'
							className='display-photo'
						/>
					)}
				</li>
			</Link>
		</ul>
	);
}
