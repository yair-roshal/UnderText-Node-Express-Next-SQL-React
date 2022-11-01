import {ActionTypes} from "../actions/action-types";
import wordsJson from "../../data/words.json"

const initialState = {
    words: wordsJson,
    loading: false,
    // setLoading: false,
    pageNumber: 0,
};

export const wordReducers = (state = initialState, action) => {

    switch (action.type) {

        case ActionTypes.GET_WORDS:
            return {
                ...state,
                words: action.payload,
                loading: false
            }

        case ActionTypes.GET_WORD:
            return {
                ...state,
                word: action.payload
            }

        case ActionTypes.ADD_WORD:
            return {
                ...state,
                word: action.payload
            }

        case ActionTypes.UPDATE_WORD:
            return {
                ...state,
                id: action.payload
            }

        case ActionTypes.DELETE_WORD:
            return {
                ...state
            }

        default:
            return state
    }
}
