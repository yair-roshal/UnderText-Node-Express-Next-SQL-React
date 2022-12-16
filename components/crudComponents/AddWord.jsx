import { useState, useEffect } from 'react'
import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { URL } from 'constants/clientConstants'
import { axiosWrappers } from 'helpers'

export const AddWord = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const [words, setWords] = useState([])

    useEffect(() => {
        // axiosWrappers.getAxios(URL, setWords)
        const response = axiosWrappers.getAxios(URL)
        setWords(response)
    }, [])

    const onSubmitAddWord = (data) => {
        //checking last id
        // let maxId = 0
        // for (const index in words) {
        //     if (+words[index].id > maxId) {
        //         maxId = +words[index].id
        //     }
        // }
        // const newId = maxId + 1

        axiosWrappers.postAxios(URL, data)
        // axiosWrappers.postAxios(URL, { id: newId, ...data })
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
