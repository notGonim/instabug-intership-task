
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainComponent } from '../components/mainComponent'
import useAuthListener from '../hooks/user-auth-listener'
import { logout } from '../redux/user/user-actions'
import home from '../assets/home.svg'
import { Header } from '../components/header'

export default function Welcome() {


    const { activeUser } = useAuthListener()
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        activeUser ? setEmail(activeUser.email) : setEmail('')
    })
    const onUserLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <>
            <Header onLogout={onUserLogout} />
            <MainComponent h1="Hello ," h2={email} img={home} />
        </>
    )

}