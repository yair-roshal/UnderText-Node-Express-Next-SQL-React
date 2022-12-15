import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './wordsSlice'

export const store = configureStore({
    reducer: {
        words: wordsReducer,
    },
})
