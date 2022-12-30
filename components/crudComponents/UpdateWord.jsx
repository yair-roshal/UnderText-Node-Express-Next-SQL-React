import { useState } from 'react'
import { Link } from 'components'
import { StyledButton } from 'styles'
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
                <StyledButton variant='contained'>Back</StyledButton>
            </Link>

            <StyledButton onClick={() => deleteWord(wordProp.id)} variant='contained'>
                Delete
            </StyledButton>

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

                            <label htmlFor='translate'>Translate</label>
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
