import { ActionTypes } from './action-types'

export const getProducts = (words) => {
	return {
		type: ActionTypes.GET_WORDS,
		payload: words,
	}
}

export const getProduct = (word) => {
	return {
		type: ActionTypes.GET_WORD,
		payload: word,
	}
}

export const addProduct = (word) => {
	return {
		type: ActionTypes.ADD_WORD,
		payload: word,
	}
}

export const updateProduct = () => {
	return {
		type: ActionTypes.UPDATE_WORD,
	}
}

export const deleteProduct = () => {
	return {
		type: ActionTypes.DELETE_WORD,
	}
}
