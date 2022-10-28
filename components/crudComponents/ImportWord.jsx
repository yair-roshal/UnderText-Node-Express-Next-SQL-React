import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { UpdateButton } from 'components'
import axios from 'axios'

export const ImportWord = wordProp => {
    const [fileName, setFileName] = useState(null)
    const [jsonFile, setJsonFile] = useState(null)

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
            .then(response => {
                setWords(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [jsonFile])

    const onSubmitImportWord = data => {
        //checking last id
        let maxId = 0

        for (let index in words) {
            if (+words[index].id > maxId) {
                maxId = +words[index].id
            }
        }

        let newId = maxId + 1

        axios
            .post('http://localhost:5000/import', { ...data, newId })
            .then(res => {
                setJsonFile(res.data)
                if (res.status === 200) {
                    alert(`Word successfully imported with id = ${newId}`)
                } else Promise.reject()
            })

            .catch(err => alert('Something went wrong'))
    }

    return (
        <>
            <h1 className='titlePage'>Import files {fileName}</h1>

            <div className='formWrapper'>
                <form onSubmit={handleSubmit(onSubmitImportWord)}>
                    <label htmlFor='name'>File File</label>
                    <input
                        name='name'
                        type='text'
                        placeholder='File Name'
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>Please Enter File Name</p>}

                    <input type='submit' />
                </form>
            </div>
            <Link href='/words' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}
