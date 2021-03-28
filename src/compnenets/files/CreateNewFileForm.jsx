import React, { useEffect } from 'react';
import creator from 'name-creator';
import { useUserContext } from '../../contexts/userAuthContext';
import { db } from '../../firebase';

export default function CreateNewFileForm({
	setCreatenewFile,
	newFile,
	setNewFile,
}) {
	const { currentUser } = useUserContext();

	useEffect(() => {
		setNewFile({
			fileName: creator.generate({ number: true }).dashed || 'newfile',
			date: String(new Date()).substring(0, 16),
			type: 'Python',
		});
		return () => setNewFile('');
	}, []);
	async function handleSubmit(e) {
		e.preventDefault();
		console.log(newFile);
		db.doc(`${currentUser.uid}/${newFile.fileName}`)
			.set({
				fileName: newFile.fileName,
				date: newFile.date,
				type: 'html',
				value: { html: '', css: '', javascript: '' },
			})
			.then(e => window.location.reload());
	}
	return (
		<form className='new-file-form'>
			<div className='new-file-form-inputs'>
				<label htmlFor=''>Filename</label>
				<input
					placeholder='Filename'
					value={newFile.fileName}
					onChange={e => {
						console.log(newFile, e.target.value);
						setNewFile(p => {
							return { ...p, ['fileName']: e.target.value };
						});
					}}
					type='text'
				/>
			</div>
			<div className='new-file-form-inputs'>
				<label htmlFor=''>Date</label>
				<input
					disabled={true}
					placeholder='Filename'
					value={String(newFile.date)}
					type='text'
				/>
			</div>
			<div className='new-file-form-inputs'>
				<label htmlFor=''>Language</label>
				<select
					name='cars'
					style={{ padding: '20px', fontSize: '1.3rem' }}
					onClick={e => {
						console.log(newFile);
						setNewFile(p => {
							return { ...p, ['type']: e.target.value };
						});
					}}
					id='cars'>
					<option value='html' style={{ padding: '80px' }}>
						html
					</option>
				</select>
			</div>

			<button className='close-file-form' onClick={handleSubmit}>
				✓
			</button>
			<div className='close-file-form' onClick={() => setCreatenewFile(false)}>
				&times;
			</div>
		</form>
	);
}
