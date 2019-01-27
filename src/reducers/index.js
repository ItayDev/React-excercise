import { combineReducers } from "redux";

import user from "./userReducer";
import books from "./bookReducer"

export default combineReducers({user, books})