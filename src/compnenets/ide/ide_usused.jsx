// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar';
// import Loading from '../Loading';
// import { useUserContext } from '../../contexts/userAuthContext';
// import { db } from '../../firebase';
// import Editor from './Editor';
// export default function Ide(props) {
// 	const [value, setValue] = useState('');
// 	const [loading, setLoading] = useState(true);
// 	const [html, setHtml] = useState('');
// 	const [javascript, setJavascript] = useState('');
// 	const [css, setCss] = useState('');
// 	const [srcDoc, setSrcDoc] = useState('');

// 	const [fileName, setFileName] = useState(props.match.params.filename);
// 	const { logout, currentUser } = useUserContext();
// 	async function handleLogout(e) {
// 		try {
// 			await logout();
// 			props.history.push('/');
// 		} catch (error) {}
// 	}

// 	async function saveFile(e) {
// 		console.log(value, `${currentUser.uid}/${fileName}`);

// 		db.doc(`${currentUser.uid}/${fileName}`)
// 			.update({ type: 'html', value: { html, css, javascript } })
// 			.then(e => console.log('success'));
// 	}

// 	useEffect(() => {
// 		const docRef = db.collection(`${currentUser.uid}`).doc(`${fileName}`);
// 		docRef.get().then(e => {
// 			setValue(e.data().value);
// 			console.log(e.data().value);
// 			setHtml(e.data().value.html);
// 			setCss(e.data().value.css);
// 			setJavascript(e.data().value.javascript);
// 			setLoading(false);
// 			console.log(value);
// 		});
// 	}, []);

// 	useEffect(() => {
// 		setSrcDoc(
// 			`<html>
// 				<body>${html}</body>
// 				<style>${css}</style>
// 				<script>${javascript}</script>
// 			</html>`
// 		);
// 		// console.log(srcDoc);
// 	}, [html, css, javascript]);

// 	return (
// 		<div>
// 			<Navbar />
// 			<h1 className='text-center'>
// 				&nbsp;
// 				{fileName}
// 			</h1>
// 			{loading ? (
// 				<Loading />
// 			) : (
// 				<>
// 					<h2>HTML</h2>
// 					<Editor
// 						language='xml'
// 						displayName='filename'
// 						value={html}
// 						onChange={setHtml}
// 					/>
// 					<h2>Css</h2>
// 					<Editor
// 						language='css'
// 						displayName='filename'
// 						value={css}
// 						onChange={setCss}
// 					/>
// 					<h2>JS</h2>
// 					<Editor
// 						language='javascript'
// 						displayName='filename'
// 						value={javascript}
// 						onChange={setJavascript}
// 					/>
// 				</>
// 			)}

// 			<iframe
// 				srcDoc={srcDoc}
// 				title='output'
// 				sandbox='allow-scripts'
// 				frameBorder='0'
// 				width='100%'
// 				height='100%'
// 			/>
// 			<button onClick={saveFile}>Save</button>
// 			<button onClick={handleLogout}>logout</button>
// 		</div>
// 	);
// }
import React from 'react';
import HTMLide from './HTMLEditor/HTML_ide';
export default function Ide(props) {
	// const { filename, language } = props.match.params;

	// return <h1>jj{JSON.stringify(props.match.params)}</h1>;
	if (props.match.params.language == 'html') return <HTMLide />;
}
