import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { UpdateButton } from 'components'
import axios from 'axios'
import { isJsonString } from 'utils'

export const AddWord = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const [words, setWords] = useState([])
	const URL = 'http://localhost:5000/'

	useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				setWords(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const onSubmitAddWord = (data) => {
		if (!isJsonString(data.json)) {
			alert('json not correct!')
			return false
		}

		//checking last id
		let maxId = 0
		for (let index in words) {
			if (+words[index].id > maxId) {
				maxId = +words[index].id
			}
		}
		let newId = maxId + 1

		axios
			.post('http://localhost:5000/', { id: newId, ...data })
			.then((res) => {
				if (res.status === 200) {
					alert('Word successfully added')
				} else Promise.reject()
			})
			.catch((err) => alert('Something went wrong'))
	}

	return (
		<>
			<h1 className='titlePage'>Add Word</h1>

			<div className='formWrapper'>
				<form onSubmit={handleSubmit(onSubmitAddWord)}>
					<label htmlFor='name'>Name</label>
					<input
						name='name'
						type='text'
						placeholder='Name'
						{...register('name', { required: true })}
					/>
					{errors.name && <p style={{ color: 'red' }}>Please Enter your Name</p>}
					<br />

					<label htmlFor='image'>Image url</label>
					<input
						placeholder='Image url'
						{...register('image', {
							required: true,
							minLength: 5,
							pattern: {
								value: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
							},
						})}
					/>
					{errors.image && <p style={{ color: 'red' }}>Please Enter A Valid Link!</p>}
					<br />

					<label htmlFor='json'>json</label>
					<textarea type='text' placeholder='json' {...register('json')} />
					<br />

					<input type='submit' />
				</form>

				<Link href='/words' style={{ textDecoration: 'none' }}>
					<UpdateButton variant='contained'>Cancel</UpdateButton>
				</Link>
			</div>
		</>
	)
}
