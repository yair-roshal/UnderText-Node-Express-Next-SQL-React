import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { UpdateButton } from 'components'
import axios from 'axios'

export const ImportWords = () => {
    // const [words, setWords] = useState(null)
    const URL = 'http://localhost:5000/'
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((response) => {
    //             setWords(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    const onSubmitImportWords = (data) => {
        console.log('data', data)

        const newWords = data.text.split(' ')

        for (let i = 0; i < newWords.length; i++) {
            const newWord = {
                original: newWords[i],
                translate: '',
                description: '',
            }
            axios
                .post(URL, { ...newWord })
                .then((res) => {
                    // setJsonFile(res.data)
                    // res.send(rows)
                    console.log('res.status :>> ', res.status)
                    if (res.status === 200) {
                        console.log(`word successfully imported `)
                    } else Promise.reject()
                })

                // .catch((err) => console.log('Something went wrong---err==', err))
                .catch((err) => alert('Something went wrong :', err))
        }
        alert(`all words successfully imported `)
    }

    return (
        <>
            <div className='formWrapper'>
                <h2 className='titlePage'>Import words from text</h2>

                <form onSubmit={handleSubmit(onSubmitImportWords)}>
                    <textarea
                        name='text'
                        type='text'
                        placeholder='Please Enter your text'
                        {...register('text', { required: true })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>Please Enter your text</p>}
                    <input type='submit' />
                </form>

                {/* finish it later============================================ */}

                {/* <h2 className='titlePage'>Import words from file</h2>
				<input type='file' onChange={(e) => showFile(e)} /> */}
            </div>

            <Link href='/words' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}

//  finish it later
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
