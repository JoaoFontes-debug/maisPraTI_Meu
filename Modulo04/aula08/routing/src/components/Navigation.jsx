import React from 'react'
import { Link } from 'react-router-dom'
import styleNav from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styleNav.navi}>
            <ul>
                <li><Link to="/">Principal</Link></li>
                <li><Link to="/dois">Sobre</Link></li>
                <li><Link to="/tres">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation