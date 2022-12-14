import { useState } from 'react'
import { Link } from 'components'
import { StyledButton } from 'styles'

import { useForm } from 'react-hook-form'
import { axiosWrappers } from 'helpers'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
// import Router from 'next/router'
import { URL } from 'constants'
import { useRouter } from 'next/router'

export const UpdateWord = (wordProp) => {
    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`

    const [word, setWord] = useState(null)

    const validationSchema = Yup.object().shape({
        original: Yup.string().required('original is required'),
        translate: Yup.string().required('translate is required'),
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    formOptions.defaultValues = wordProp
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm(formOptions)

    const updateWordItem = async (wordObject) => {
        await axiosWrappers.putAxios(
            URL + `/${router.asPath.split('/')[1]}/` + wordProp.id,
            wordObject,
        )
    }

    return (
        <>
            <Link href={hrefMainPage} style={{ textDecoration: 'none' }}>
                <StyledButton variant='contained'>Back</StyledButton>
            </Link>

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
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            description: e.target.value,
                                        }),
                                })}
                            />

                            <br />
                            <input type='submit' />
                        </form>

                        <h3>Content form: </h3>
                        <pre>{JSON.stringify(watch(), null, 2)}</pre>
                    </div>
                </>
            )}
        </>
    )
}
