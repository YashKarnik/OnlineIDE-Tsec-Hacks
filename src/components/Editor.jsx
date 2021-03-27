import React from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/addon/hint/show-hint.js"
import "./Editor.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/python/python"
import "codemirror/addon/edit/closetag.js"
import { Controlled as ControlledEditor } from "react-codemirror2"
// import axios from "axios"

const Editor = (props) => {
    const {
        language,
        displayname,
        value,
        onChange
    } = props

    const handleChange = (editor, data, value) => {
        onChange(value)
        // console.log(data)
        // console.log(editor)
        // console.log(value)  
    }

    // const executeCode = () => {
    //     // var value = ControlledEditor.getValue();
    //     axios.post("http://localhost:5000/api/runcode", {
    //         code: value
    //     }).then(function(res) {
    //         console.log(res);
    //     });
    // }

    // var version = "# version: Python3\n\n";
    // var codeAreaTip = "# please edit your code here:\n";
    // var codeStart = "# code start\n\n";
    // var codeEnd = "# code end\n\n";
    // var codeTip = "'''\nThis function is the entry of this program and\nit must be return your answer of current question.\n'''\n";
    // var code = "def solution():\n\tpass";
    // var initValue = version + codeAreaTip + codeStart + codeEnd + codeTip + code;

    // ControlledEditor.setValue("value", initValue)

    return (
        <div className="editor">
            <div className="file_name">
                {displayname}
                {/* <button onClick={executeCode}>Run</button> */}
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lineNumbers: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    showHint: true,
                    autoCloseTags: true, 
                }}
            />
        </div>
    )
}

export default Editor
