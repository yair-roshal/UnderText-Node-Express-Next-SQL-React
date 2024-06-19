import { useState } from 'react'
import { Link } from 'components'
import { BackButton,DeleteButton } from 'styles'
import { useForm } from 'react-hook-form'
import { axiosWrappers } from 'helpers'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useMainPage } from 'hooks'
import { URL, CellVariantsArray } from 'constants'

export const UpdateWord = (wordProp) => {
    const hrefMainPage = useMainPage()

    const [word, setWord] = useState(null)

    const validationSchema = Yup.object().shape({
        original: Yup.string().required('original is required'),
        translation: Yup.string().required('translation is required'),
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
        await axiosWrappers.putAxios(URL + hrefMainPage + '/' + wordProp.id, wordObject)

        window.location.replace(
            window.location.protocol + '//' + window.location.host + hrefMainPage,
        )
    }

    const deleteWord = (id) => {
        axiosWrappers.deleteAxios(URL, hrefMainPage.slice(1), id)
    }

    return (
        <>
            <Link href={hrefMainPage} style={{ textDecoration: 'none' }}>
                <BackButton variant='contained'>Back</BackButton>
            </Link>

            <DeleteButton onClick={() => deleteWord(wordProp.id)} variant='contained'>
                Delete
            </DeleteButton>

            {wordProp && (
                <>
                    <div className='titlePage'>Update Word</div>

                    <div className='formWrapper'>
                        <form onSubmit={handleSubmit(updateWordItem)}>
                            <input style={{ display: 'none' }} {...register('id')} />

                            <label htmlFor='original'>Original word</label>
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

                            <label htmlFor='translation'>Translate</label>
                            <input
                                type='text'
                                placeholder='translation'
                                {...register('translation', {
                                    required: true,
                                    minLength: 2,
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            translation: e.target.value,
                                        }),
                                })}
                            />

                            {errors.translation && (
                                <p style={{ color: 'red' }}>Please Enter a translation</p>
                            )}

                            <label htmlFor='periodStart'>periodStart</label>
                            <input
                                type='text'
                                placeholder='periodStart'
                                {...register('periodStart', {
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            periodStart: e.target.value,
                                        }),
                                })}
                            />

                            <label htmlFor='periodEnd'>periodEnd</label>
                            <input
                                type='text'
                                placeholder='periodEnd'
                                {...register('periodEnd', {
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            periodEnd: e.target.value,
                                        }),
                                })}
                            />

                            <label htmlFor='description'>Description</label>

                            <select
                                {...register('description', {
                                    onChange: (e) =>
                                        setWord({
                                            ...word,
                                            description: e.target.value,
                                        }),
                                })}
                            >
                                <option disabled selected>
                                    Select type
                                </option>

                                {/* {console.log('CellVariantsArray', CellVariantsArray)} */}
                                {CellVariantsArray.map((cellObject) => (
                                    <option key={cellObject.type} value={cellObject.value}>
                                        {cellObject.type}
                                    </option>
                                ))}
                            </select>

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
