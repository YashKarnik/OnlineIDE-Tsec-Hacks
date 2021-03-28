import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileRowComponent from './fileRowComponent';
import CreateNewFileForm from './CreateNewFileForm';
import Loading from '../Loading';
import Navbar from '../Navbar';
import { useUserContext } from '../../contexts/userAuthContext';
import { db } from '../../firebase';
export default function Files() {
	const { currentUser } = useUserContext();
	const [filesList, setFilesList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [createnewFile, setCreatenewFile] = useState(false);
	const [newFile, setNewFile] = useState({ fileName: '', type: '', date: '' });
	useEffect(async () => {
		const citiesRef = db.collection(currentUser.uid);
		const snapshot = await citiesRef.get();
		snapshot.forEach(doc => {
			setFilesList(p => [...p, doc.data()]);
			console.log(doc.data());
		});
		setLoading(false);
		return () => setFilesList([]);
	}, []);

	function handleClick(e) {
		setCreatenewFile(true);
	}
	return (
		<>
			<Navbar />
			<div className='files-container'>
				<h3 className='text-center'>{currentUser.displayName}'s Files</h3>
				<ul>
					{loading ? (
						<Loading />
					) : (
						filesList.map((e, i) => (
							<Link
								style={{ color: 'black', textDecoration: 'none' }}
								to={`${e.type}/${e.fileName}/ide`}>
								<FileRowComponent
									key={i}
									fileName={e.fileName}
									date={e.date || String(new Date()).substring(0, 16)}
									type={e.type}
								/>
							</Link>
						))
					)}
				</ul>
				<div
					className='add-new-file'
					style={{ display: createnewFile && 'none' }}
					onClick={handleClick}>
					+
				</div>
				{createnewFile && (
					<CreateNewFileForm
						setCreatenewFile={setCreatenewFile}
						newFile={newFile}
						setNewFile={setNewFile}
					/>
				)}
			</div>
		</>
	);
}
