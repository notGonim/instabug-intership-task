import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/user/user-actions'
import { PartnersIcons } from './partners-icons'

export const Form = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || email === ''


    const dispatch = useDispatch()

    const onUserLogoin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return (
        <div className="form_container">
            <div className="form_item">
                <label > Work Email</label>
                <input type="email" className="email"value={email} onChange={({ target }) => setEmail(target.value)} placeholder="you@company.com" id="" />
            </div>
            <div className="form_item">
                <label > Password</label>
                <input type="password" className="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="8+ Characters" id="" />
            </div>
            <button type="submit" disabled={isInvalid} id="sub" onClick={onUserLogoin} className={`  ${isInvalid ? 'dis' : 'btn_login'}`} >Log in</button>
            <div className="text_form">
                <p>Don`t have an account ? <Link to=""><span>Sign up</span></Link></p>
                <Link to=""><span>Login via SSO</span> </Link>
            </div>
            <div className="form_text_center">
                <p>Trusted by the top companies</p>
            </div>
            <PartnersIcons />

        </div>
    )
}
