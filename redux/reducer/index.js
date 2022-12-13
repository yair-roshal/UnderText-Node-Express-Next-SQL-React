import { combineReducers } from 'redux'
import { wordReducers } from '@reduxFolder'

export const reducers = combineReducers({
    shaharit: wordReducers,
    minha: wordReducers,
})
