import React from 'react'
import { Link } from 'components'
import { useForm } from 'react-hook-form'
import { isJsonString } from 'utils'
import axios from 'axios'
import { UpdateButton } from 'components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export const UpdateWord = wordProp => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Title is required'),
        image: Yup.string().required('First Name is required'),
        json: Yup.string().required('Last Name is required'),
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    formOptions.defaultValues = wordProp
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm(formOptions)

    const updateWordItem = wordObject => {
        if (!isJsonString(wordObject.json)) {
            alert('json not correct!')
            return false
        }

        axios
            .put('http://localhost:5000/' + wordProp.id, wordObject)
            .then(res => {
                if (res.status === 200) {
                    alert('Word successfully updated')
                } else Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    return (
        <>
            {wordProp && (
                <>
                    <div className='titlePage'>Update Word</div>
                    <div className='formWrapper'>
                        <form onSubmit={handleSubmit(updateWordItem)}>
                            <input
                                style={{ display: 'none' }}
                                placeholder='Id'
                                {...register('id', {
                                    required: true,
                                })}
                            />
                            <label htmlFor='name'>Name</label>

                            <input
                                type='text'
                                placeholder='Name'
                                {...register('name', {
                                    required: true,
                                    message: 'Please Enter your Name',
                                    onChange: e => {
                                        setWord({
                                            ...word,
                                            name: e.target.value,
                                        })
                                    },
                                })}
                            />
                            {errors.name && <p style={{ color: 'red' }}>Please Enter your Name</p>}

                            <br />

                            <label htmlFor='image'>Image url</label>
                            <input
                                type='text'
                                placeholder='Image url'
                                {...register('image', {
                                    required: true,
                                    minLength: 5,
                                    onChange: e =>
                                        setWord({
                                            ...word,
                                            image: e.target.value,
                                        }),
                                    pattern: {
                                        value: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
                                        message: 'Please Enter A Valid Link!',
                                    },
                                })}
                            />
                            {errors.image && (
                                <p style={{ color: 'red' }}>Please Enter A Valid Link</p>
                            )}

                            <br />

                            <label htmlFor='json'>JSON</label>
                            <textarea
                                type='text'
                                placeholder='JSON'
                                {...register('json', {
                                    required: true,
                                    onChange: e =>
                                        setWord({
                                            ...word,
                                            json: e.target.value,
                                        }),
                                })}
                            />
                            {errors.json && <p style={{ color: 'red' }}>Please Enter A JSON</p>}
                            <br />
                            <input type='submit' />
                        </form>

                        <h3>Content form: </h3>
                        <pre>{JSON.stringify(watch(), null, 2)}</pre>

                        <Link href='/words' style={{ textDecoration: 'none' }}>
                            <UpdateButton variant='contained'>Back</UpdateButton>
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}
