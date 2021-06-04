
import React from 'react'
import logo from '../assets/Instabugicon.svg'
import { LoginIconContainer } from '../components/login-icon-container';
import { TextLine } from '../components/login/text-line';
import gLogo from '../assets/gLogo.png'
import giLogo from '../assets/giLogo.png'
import mLogo from '../assets/mlogo.png'
import Product from '../assets/Product.svg'
import { Form } from '../components/login/form';

export default function Login() {


    return (
        <div className="login_container" id="loginContainer">
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
                <Form />
            </div>

        </div>
    )


}