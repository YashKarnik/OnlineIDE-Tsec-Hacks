import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/edit/closebrackets';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';

import 'codemirror/addon/edit/closetag.js';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = props => {
	const { language, displayname, value, onChange } = props;
	let options_codemirror;
	function handleChange(editor, data, value) {
		onChange(value);
	}

	return (
		<ControlledEditor
			onBeforeChange={handleChange}
			value={value}
			className='code-mirror-wrapper'
			options={{
				lineWrapping: true,
				lineNumbers: true,
				lint: true,
				mode: language,
				autoCloseBrackets: true,
				theme: 'material',
				showHint: true,
				autoCloseTags: true,
			}}
		/>
	);
};

export default Editor;
