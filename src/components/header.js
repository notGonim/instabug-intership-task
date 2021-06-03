import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.scss'
import * as ROUTES from '../constants/routes'
import logo from '../assets/logo.svg'

export const Header = ({onLogout}) => {
    return (

        <header className="header_container">
            <div className="icon_container">
                <Link to={ROUTES.WELCOME} aria-label="instaGo logo">
                    <img src={logo} alt="logo" className="" />
                </Link>
            </div>
            <div className="btn_container">
                <button className="btn_header" onClick={onLogout}>LOGOUT</button>
            </div>
        </header>
    )
}
