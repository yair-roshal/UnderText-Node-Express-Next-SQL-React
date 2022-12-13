import { addWord, getWord, getWords, deleteWord, updateWord } from '@reduxFolder'
import wordsDB from 'data'

const findWord = (id) => {
    const words = JSON.parse(localStorage.getItem('words'))
    const word = words.find((word) => word.id == id)
    return word
}

export const addWordAction = (word) => {
    const words = JSON.parse(localStorage.getItem('words'))

    let maxID = 0
    const values = Object.values(words)
    for (const value of values) {
        if (value.id > maxID) {
            maxID = value.id
        }
    }

    return (dispatch) => {
        word.id = maxID + 1
        words.push(word)
        window.localStorage.setItem('words', JSON.stringify(words))

        dispatch(addWord(word))
    }
}

//get 1 Word+++
export const getWordAction = (id) => {
    return (dispatch) => {
        dispatch(getWord(findWord(id)))
    }
}

// get all Words+++
export const getAllWordsAction = () => {
    let words = JSON.parse(localStorage.getItem('words'))

    if (words == null) {
        words = wordsDB
        window.localStorage.setItem('words', JSON.stringify(words))
    }

    return (dispatch) => {
        dispatch(getWords(words))
    }
}

export const deleteWordAction = (id) => {
    return (dispatch) => {
        const words = JSON.parse(localStorage.getItem('words'))
        const newArray = words.filter((item) => item.id != id)
        window.localStorage.setItem('words', JSON.stringify(newArray))
        dispatch(deleteWord())
        dispatch(getAllWordsAction())
    }
}

export const updateWordAction = (word, id) => {
    return (dispatch) => {
        const words = JSON.parse(localStorage.getItem('words'))
        const newArray = words.filter((item) => item.id != id)
        newArray.push(word)
        window.localStorage.setItem('words', JSON.stringify(newArray))
        dispatch(updateWord())
        dispatch(getAllWordsAction())
    }
}
