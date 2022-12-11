import { createStore, applyMiddleware } from 'redux'
import { reducers } from 'redux/reducer'
import thunk from 'redux-thunk'

const composeWithDevTools = require('redux-devtools-extension').composeWithDevTools

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))
