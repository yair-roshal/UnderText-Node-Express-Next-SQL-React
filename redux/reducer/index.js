import { combineReducers } from "redux";
import { wordReducers } from "@reduxFolder";

export const reducers = combineReducers({
    word: wordReducers
});
 