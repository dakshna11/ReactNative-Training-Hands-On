import { combineReducers } from "redux";
import contactReducers from "./contactReducers";
import detailsReducers from "./detailsReducers";

export default combineReducers({contactReducers, detailsReducers})