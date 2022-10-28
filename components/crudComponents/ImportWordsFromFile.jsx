import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { UpdateButton } from 'components'
import axios from 'axios'

export const ImportWordsFromFile = () => {
	const [words, setWords] = useState(null)
	const URL = 'http://localhost:5000/'
	let newId = 0
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				setWords(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [newId])

	// const showFile = (e) => {
	// 	e.preventDefault()
	// 	const reader = new FileReader()

	// 	//checking last id==========
	// 	let maxId = 0
	// 	for (let index in words) {
	// 		if (+words[index].id > maxId) {
	// 			maxId = +words[index].id
	// 		}
	// 	}
	// 	let newId = maxId + 1

	// 	reader.onload = (e) => {
	// 		const text = e.target.result
	// 		const elements = text.split(' ')

	// 		const temp = elements.map((element, index) => {
	// 			console.log('index==', index)
	// 			const word = {
	// 				id: newId + index,
	// 				original: element,
	// 				translate: '',
	// 			}

	// 			axios
	// 				.post('http://localhost:5000/', { ...word })
	// 				.then((res) => {
	// 					if (res.status === 200) {
	// 						alert('Word successfully added')
	// 					} else Promise.reject()
	// 				})
	// 				.catch((err) => alert('Something went wrong'))

	// 			// arrayNewWords.push(word)

	// 			console.log(`word---`, word)
	// 			// console.log(`arrayNewWords---`, arrayNewWords)
	// 		})

	// 		// window.location = '/';
	// 	}

	// 	reader.readAsText(e.target.files[0])
	// }

	const onSubmitImportWord = (data) => {
		console.log('data', data)
		//checking last id==========
		let maxId = 0
		for (let index in words) {
			if (+words[index].id > maxId) {
				maxId = +words[index].id
			}
		}
		newId = maxId + 1

		const newWords = data.text.split(' ')

		for (let i = 0; i < newWords.length; i++) {
			let newWord = {
				id: newId + i,
				original: newWords[i],
				translate: '',
				description: '',
			}
			axios
				.post('http://localhost:5000/', { ...newWord })
				.then((res) => {
					// setJsonFile(res.data)
					// res.send(rows)
					console.log('res.status :>> ', res.status)
					if (res.status === 200) {
						console.log(`word successfully imported `)
						// alert(`Graph successfully imported with id = ${newId}`)
					} else Promise.reject()
				})
				.catch((err) => console.log('Something went wrong---err==', err))
			// alert('Something went wrong'))
		}
	}

	return (
		<>
			<h1 className='titlePage'>Import words </h1>

			<div className='formWrapper'>
				<h2 className='titlePage'>Import words from text</h2>

				<form onSubmit={handleSubmit(onSubmitImportWord)}>
					<textarea
						name='text'
						type='text'
						placeholder='text'
						{...register('text', { required: true })}
					/>
					{errors.name && <p style={{ color: 'red' }}>Please Enter text</p>}
					<input type='submit' />
				</form>
				{/* <h2 className='titlePage'>Import words from file</h2>

				<input type='file' onChange={(e) => showFile(e)} /> */}
			</div>

			<Link href='/words' style={{ textDecoration: 'none' }}>
				<UpdateButton variant='contained'>Back</UpdateButton>
			</Link>
		</>
	)
}
