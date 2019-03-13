import {combineReducers} from "redux";
import mainReducer from './mainReducer';
import addReducer from "./addReducer";


export  {
    mainReducer,
    addReducer
}

export default  combineReducers({main:mainReducer,add:addReducer});