import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function useAuthListener() {

    const { user, isAuthenticated, error, loading } = useSelector(state => state.auth)
    const [activeUser, setActiveUser] = useState(null)
    useEffect(() => {
        if (isAuthenticated) {
            setActiveUser(user)
        } else {
            setActiveUser(null)
        }
    }, [user])
    return { activeUser }

}
