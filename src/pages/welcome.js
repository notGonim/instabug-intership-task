
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  logout } from '../redux/user/user-actions'


export default function Welcome() {

    const dispatch = useDispatch()

    const onUserLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <>
            <h1>Welcome Is Working Fine</h1>
            <button type="submit" onClick={onUserLogout}>Logout</button>
        </>
    )

}