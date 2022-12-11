import { ActionTypes } from '@reduxFolder'

export const getWords = (words) => {
	return {
		type: ActionTypes.GET_WORDS,
		payload: words,
	}
}

export const getWord = (word) => {
	return {
		type: ActionTypes.GET_WORD,
		payload: word,
	}
}

export const addWord = (word) => {
	return {
		type: ActionTypes.ADD_WORD,
		payload: word,
	}
}

export const updateWord = () => {
	return {
		type: ActionTypes.UPDATE_WORD,
	}
}

export const deleteWord = () => {
	return {
		type: ActionTypes.DELETE_WORD,
	}
}
