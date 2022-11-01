import { combineReducers } from "redux";
import { wordReducers } from "./reducer";

export const reducers = combineReducers({
    word: wordReducers
});
 