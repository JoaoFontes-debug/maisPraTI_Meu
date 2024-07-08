import React from "react";
import logo from './images/logo.png';
import './App.css'

function Header(){
    return(
        <div className="Header" >
            <img src={logo} alt="logo"  className="logo"/>
            <h1>React.js</h1>
            <p>i.e., using the React library for rendering the UI</p>

        </div>
    )
}

export default Header;