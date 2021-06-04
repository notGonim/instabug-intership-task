
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/user-actions';
import logo from '../assets/Instabugicon.svg'
import { LoginIconContainer } from '../components/login-icon-container';
import { TextLine } from '../components/login/text-line';
import gLogo from '../assets/gLogo.png'
import giLogo from '../assets/giLogo.png'
import mLogo from '../assets/mlogo.png'
import Product from '../assets/Product.svg'

export default function Login() {


    const dispatch = useDispatch()

    const onUserLogout = (e) => {
        e.preventDefault();
        dispatch(login("mohamed6@instabug.com", "12345678"))
    }

    return (
        <div className="login_container">
            <div className="left_container">
                <img src={Product} alt="icon pic" />
                <h2>Afsdsfsdfsfdsfsdfsfsdffdsf</h2>
            </div>
            <div className="right_container">
                <img src={logo} alt="icon pic" />
                <h3>Log in to Instabug</h3>
                <LoginIconContainer icon={gLogo} txt="Google" classStyle="blu" />
                <LoginIconContainer icon={giLogo} txt="Github" classStyle="bla" />
                <LoginIconContainer icon={mLogo} txt="Microsoft" classStyle="whi" />
                <TextLine txt="OR" />
            </div>

        </div>
    )


}