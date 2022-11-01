import { addProduct, getProduct, getProducts, deleteProduct, updateProduct } from './actions'
import wordsDB from '../../data/words.json'

const findProduct = (id) => {
	let words = JSON.parse(localStorage.getItem('words'))
	let word = words.find((word) => word.id == id)
	return word
}

export const addProductAction = (word) => {
	let words = JSON.parse(localStorage.getItem('words'))

	var maxID = 0
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

		dispatch(addProduct(word))
	}
}

//get 1 Product+++
export const getProductAction = (id) => {
	return (dispatch) => {
		dispatch(getProduct(findProduct(id)))
	}
}

// get all Products+++
export const getAllProductsAction = () => {
	let words = JSON.parse(localStorage.getItem('words'))

	if (words == null) {
		words = wordsDB
		window.localStorage.setItem('words', JSON.stringify(words))
	}

	return (dispatch) => {
		dispatch(getProducts(words))
	}
}

export const deleteProductAction = (id) => {
	return (dispatch) => {
		let words = JSON.parse(localStorage.getItem('words'))
		var newArray = words.filter((item) => item.id != id)
		window.localStorage.setItem('words', JSON.stringify(newArray))
		dispatch(deleteProduct())
		dispatch(getAllProductsAction())
	}
}

export const updateProductAction = (word, id) => {
	return (dispatch) => {
		let words = JSON.parse(localStorage.getItem('words'))
		var newArray = words.filter((item) => item.id != id)
		newArray.push(word)
		window.localStorage.setItem('words', JSON.stringify(newArray))
		dispatch(updateProduct())
		dispatch(getAllProductsAction())
	}
}
