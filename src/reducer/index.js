import { combineReducers } from "redux";
import todo from "./todoReducer";
import climaReducer from "./climaReducer";

const rootReducer = combineReducers({
    todo,
    climaReducer
})

export default rootReducer;