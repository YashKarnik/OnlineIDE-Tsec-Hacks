import React, { useState, useEffect } from 'react'
import "./Ide.css"
import Editor from "./Editor"

function Ide() {
    const [python, setPython] = useState('')
    const [html, setHtml] = useState('')
    const [javascript, setJavascript] = useState('')
    const [css, setCss] = useState('')
    const [srcDoc, setSrcDoc] = useState('')
    const [newFile, setNewFile] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
            </html>
            `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css, javascript]) 

    const handleNewFile = () => {
        
    }

    return (
        <div className="ide container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <h3>Files</h3>
                    <select className="dropdown">
                        <option>File 1</option>
                        <option>File 2</option>
                        <option>File 3</option>
                        <option>File 4</option>
                    </select>


                    <input type="text" placeholder="File Name"></input>
                    <button>New File</button>

                    <h3>Language</h3>
                    {/* /* <div class="dropdown"> */ }
                    <select className="dropdown">
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>Javascript</option>
                        <option defaultChecked>Python</option>
                    </select>
                </div>
                <div className="pane top-pane col-sm-6">
                    <Editor 
                        language="html"
                        displayname="File Name"
                        value={html}
                        onChange={setHtml}
                    />
                </div>
                <div className="pane col-sm-4">
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ide
