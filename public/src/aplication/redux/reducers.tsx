import { combineReducers } from "redux";
import { categoryReducer } from "./state";

export const rootReducer = combineReducers({
    category : categoryReducer
})