import { combineReducers } from "redux";
import UserReducer from "./user/user-reducer";





const rootReducer = combineReducers({
    auth: UserReducer
})



export default rootReducer