import { combineReducers } from "redux";
import postReducer from "./postReducer.js";
import counterReducer from "./counterReducer";

export default combineReducers({
    posts: postReducer,
    counter: counterReducer
})