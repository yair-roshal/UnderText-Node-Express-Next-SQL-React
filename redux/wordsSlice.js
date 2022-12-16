import { createSlice } from '@reduxjs/toolkit'
import { getWords } from '../helpers/getWords'

const wordsMinha = [
    { id: 1, original: 'מודֶה', translate: 'Благодарен', description: '' },
    { id: 2, original: 'אֲנִי', translate: 'я', description: '' },
]
const wordsShaharit = [
    { id: 1, original: 'מודֶה', translate: 'Благодарен', description: '' },
    { id: 2, original: 'אֲנִי', translate: 'я', description: '' },
]

const wordsInitial = { wordsMinha, wordsShaharit }

export const wordsSlice = createSlice({
    name: 'words',
    initialState: wordsInitial,
    reducers: {
        getWord(state, action) {
            state.words = action.payload
        },

        addWord(state, action) {
            state.words.unshift(action.payload)
        },

        editWord(state, action) {
            const index = state.words.findIndex((word) => word.id === action.payload.id)
            state.words[index].completed = action.payload
        },

        deleteWord(state, action) {
            state.words.filter((word) => word.id !== action.payload.id)
        },
        extraReducers: {
            [getWords.pending]: (state, action) => {
                state.status = 'loading'
            },
            [getWords.fulfilled]: (state, { payload, meta }) => {
                state.words = payload
                state.status = 'success'
            },
            [getWords.rejected]: (state, action) => {
                state.status = 'failed'
            },
        },
    },
})

export const { getWord, addWord, editWord, deleteWord } = wordsSlice.actions
export default wordsSlice.reducer
