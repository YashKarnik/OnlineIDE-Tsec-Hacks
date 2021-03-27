import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><h1 style={{textDecoration : "none"}}>CoIDE</h1></Link>
            
            <ul className="navbar-links">
                <Link to="/ide">
                    <li><button>IDE</button></li>
                </Link>    
                <Link to="login">
                    <li><button>Logout</button></li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar

