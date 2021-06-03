
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/user-actions';


export default function Login() {

   
    const dispatch = useDispatch()

    const onUserLogout = (e) => {
        e.preventDefault();
        dispatch(login("mohamed6@instabug.com","12345678"))
    }

    return (
        <>
            <h1>Login Is Working Fine</h1>
            <button type="submit" onClick={onUserLogout}>Login</button>
        </>
    )


}