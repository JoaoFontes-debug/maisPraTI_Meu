import React from "react";
import logo from './images/logo.png';
import style from './Header.module.css';

function Header(){
    return(
        <div className={style.header}>
            <div className={style.conteudoHeader}>
                <img src={logo} alt="logo"  className={style.logo}/>
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </div>
                
            <div className={style.media}>
                <ul className={style.botoes}>
                    <li><a href="">Why React?</a></li>
                    <li><a href="">Core Features</a></li>
                    <li><a href="">Related Resources</a></li>
                    <li><a href="">React vs JS</a></li>
                </ul>
                <div className={style.painel}>

                </div>
            </div>

        </div>
    )   
}

export default Header;