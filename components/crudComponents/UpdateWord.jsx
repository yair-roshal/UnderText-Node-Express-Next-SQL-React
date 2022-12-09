import { useState } from 'react'
import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { axiosWrappers } from '../../helpers/axios-wrappers'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export const UpdateWord = (wordProp) => {
    const [word, setWord] = useState(null)

    const validationSchema = Yup.object().shape({
        original: Yup.string().required('original is required'),
        translate: Yup.string().required('translate is required'),
        description: Yup.string().required('Last Name is required'),
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    formOptions.defaultValues = wordProp
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm(formOptions)

    const updateWordItem = (wordObject) => {
        axiosWrappers.putAxios(URL + wordProp.id, wordObject)
    }

    return (
        <>
            {wordProp && (
                <>
                    <div className='titlePage'>Update Word</div>
                    <div className='formWrapper'>
                        <form onSubmit={handleSubmit(updateWordItem)}>
                            <input style={{ display: 'none' }} {...register('id')} />

                            <label htmlFor='original'>original word</label>
                            <input
                                type='text'
                                placeholder='original word'
                                {...register('original', {
                                    required: true,
                                    message: 'Please Enter original word',
                                    onChange: (e) => {
                                        setWord({
                                            ...word,
                                            original: e.target.value,
                                        })
                                    },
                                })}
                            />
                            {errors.original && (
                                <p style={{ color: 'red' }}>Please Enter original word</p>
                            )}

                            <br />

                            <label htmlFor='translate'>translate</label>
                            <input
                                type='text'
                                placeholder='translate'
                                {...register('translate', {
                                    required: true,
                                    minLength: 2,
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            translate: e.target.value,
                                        }),
                                })}
                            />
                            {errors.translate && (
                                <p style={{ color: 'red' }}>Please Enter a translate</p>
                            )}

                            <br />

                            <label htmlFor='description'>description</label>
                            <textarea
                                type='text'
                                placeholder='description'
                                {...register('description', {
                                    required: true,
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            description: e.target.value,
                                        }),
                                })}
                            />
                            {errors.description && (
                                <p style={{ color: 'red' }}>Please Enter A description</p>
                            )}
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
