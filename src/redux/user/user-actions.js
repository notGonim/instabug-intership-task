
import { isUserAuthenticated } from '../../services/auth'



// login func 
export const login = (email, password) => async dispatch => {

    dispatch({ type: "LOGIN_REQUEST" })
    const authenticated = await isUserAuthenticated(email, password)
    if (authenticated) {
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: authenticated.authenticatedUser
        })
    } else {
        const err = "Your email and/or password are incorrect"
        dispatch({
            type: "LOGIN_FAIL",
            payload: err
        })
    }
}


//handle user logout 
export const logout = () => async dispatch => {

    dispatch({ type: "LOGOUT_REQUEST" })
    let authenticated = null
    if (!authenticated) {
        dispatch({
            type: "LOGOUT_SUCCESS",
        })
    } else {
        const err = "Something went wrong while logging out "
        dispatch({
            type: "LOGOUT_FAIL",
            payload: err
        })

    }
}


//clearing errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS",
    })
}


