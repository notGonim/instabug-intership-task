
import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../components/header'
import * as ROUTES from '../constants/routes'
import notfound from '../assets/notfound.png'

export default function NotFound() {


    const history = useHistory()
    const onUserLogoIN = (e) => {
        e.preventDefault();
        history.push(ROUTES.LOGIN)
    }

    return (
        <>
            <Header onLogout={onUserLogoIN} btnText="LOGIN" />
            <div className="notfound_container">
                <div className="img_notFound__container">
                    <img src={notfound} alt="not found img" className="img-err" />
                </div>
                <div className="notfound_text__container">
                    <h1>404 - Page Not Found!</h1>
                    <p>Sorry, that page doesn’t exist. What would you like to do?</p>
                </div>
            </div>
        </>
    )

}

