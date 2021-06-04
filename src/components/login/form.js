import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/user/user-actions'
import { isEmail, isPassword } from '../../services/validators'
import { PartnersIcons } from './partners-icons'

export const Form = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || email === ''
    const { user, isAuthenticated, error, loading } = useSelector(state => state.auth)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)

    const dispatch = useDispatch()

    const onUserLogoin = (e) => {

        e.preventDefault()
        setEmailErr(false)
        setPasswordErr(false)
        if (isEmail(email) && isPassword(password)) {
            dispatch(login(email, password))
        }
        if (!isEmail(email)) {
            setEmailErr(true)
        }
        if (!isPassword(password)) {
            setPasswordErr(true)
        }


    }



    return (
        <div className="form_container">
            {error && <div className="err_container">
                <p>{error}</p>
            </div>
            }
            <div className="form_item">
                <label > Work Email</label>
                <input type="email" className={`email ${emailErr ? 'bordererr' : ''}`} value={email} onChange={({ target }) => setEmail(target.value)} placeholder="you@company.com" id="" />
                {emailErr &&<span className="errHandler">Enter a valid email address</span>}
            </div>
            <div className="form_item">
                <label > Password</label>
                <input type="password" className={`password ${passwordErr ? 'bordererr' : ''}`} value={password} onChange={({ target }) => setPassword(target.value)} placeholder="8+ Characters" id="" />
                {passwordErr && <span className="errHandler">Password must be 8 characters or more</span>}

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
