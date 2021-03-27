import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Loading from '../Loading';
import { useUserContext } from '../../contexts/userAuthContext';
import { db } from '../../firebase';

export default function Ide(props) {
	const [value, setValue] = useState('');
	const [fileName, setFileName] = useState(props.match.params.filename);
	const { logout, currentUser } = useUserContext();
	async function handleLogout(e) {
		try {
			await logout();
			props.history.push('/');
		} catch (error) {}
	}

	async function saveFile(e) {
		console.log(value, `${currentUser.uid}/${fileName}`);

		db.doc(`${currentUser.uid}/${fileName}`)
			.update({ value })
			.then(e => console.log('success'));
	}

	useEffect(() => {
		const docRef = db.collection(`${currentUser.uid}`).doc(`${fileName}`);
		docRef.get().then(e => {
			setValue(e.data().value);
			console.log(value);
		});
	}, []);

	return (
		<div>
			<Navbar />
			<h1 className='text-center'>
				&nbsp;
				{fileName}
			</h1>
			{value === '' ? (
				<Loading />
			) : (
				<textarea
					name='gg'
					id=''
					cols='192'
					rows='10'
					value={value}
					onChange={e => setValue(e.target.value)}></textarea>
			)}
			<button onClick={saveFile}>Save</button>
			<button onClick={handleLogout}>logout</button>
		</div>
	);
}
