import emailReducer from "./email.reducer";
import emailFilter from "./filter.reducer";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    emailReducer,
    emailFilter
})


export default rootReducer;