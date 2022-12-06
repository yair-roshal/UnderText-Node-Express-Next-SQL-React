import { createStore, applyMiddleware } from 'redux'
import { reducers } from './reducer/index'
import thunk from 'redux-thunk'

let composeWithDevTools;
composeWithDevTools = require('redux-devtools-extension').composeWithDevTools;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))
export default store
