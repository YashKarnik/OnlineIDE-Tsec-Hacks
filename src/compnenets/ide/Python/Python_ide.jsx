import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Editor from '../Editor';
// import { useUserContext } from '../../../contexts/userAuthContext';
export default function Python_ide(props) {
	let fileName = props.match.params.filename;
	const [python, setPython] = useState('');
	function runCode(e) {
		e.preventDefault();
	}
	return (
		<div>
			<Navbar />
			<h1 className='text-center'>{fileName}</h1>
			<Editor language='python' value={python} onChange={setPython} />
			<button onClick={runCode}>RUN</button>
		</div>
	);
}
