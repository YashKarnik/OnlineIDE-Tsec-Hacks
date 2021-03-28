import React from 'react';
import ReactDOM from 'react-dom';
export default function Modal({ open, setOpen }) {
	function handleLogout(e) {
		e.preventDefault();
		console.log('ff');
	}
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className='portal'>
			<button className='portal-close-btn' onClick={() => setOpen(false)}>
				&times;
			</button>
			<button onClick={handleLogout}>Logout?</button>
		</div>,
		document.getElementById('portal')
	);
}
