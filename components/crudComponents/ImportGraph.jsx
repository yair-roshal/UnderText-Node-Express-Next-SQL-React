import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { UpdateButton } from 'components'
import axios from 'axios'

export const ImportGraph = graphProp => {
    const [fileName, setFileName] = useState(null)
    const [jsonFile, setJsonFile] = useState(null)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const [graphs, setGraphs] = useState([])
    const URL = 'http://localhost:5000/'

    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                setGraphs(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [jsonFile])

    const onSubmitImportGraph = data => {
        //checking last id
        let maxId = 0

        for (let index in graphs) {
            if (+graphs[index].id > maxId) {
                maxId = +graphs[index].id
            }
        }

        let newId = maxId + 1

        axios
            .post('http://localhost:5000/import', { ...data, newId })
            .then(res => {
                setJsonFile(res.data)
                if (res.status === 200) {
                    alert(`Graph successfully imported with id = ${newId}`)
                } else Promise.reject()
            })

            .catch(err => alert('Something went wrong'))
    }

    return (
        <>
            <h1 className='titlePage'>Import files {fileName}</h1>

            <div className='formWrapper'>
                <form onSubmit={handleSubmit(onSubmitImportGraph)}>
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
            <Link href='/graphs' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}
