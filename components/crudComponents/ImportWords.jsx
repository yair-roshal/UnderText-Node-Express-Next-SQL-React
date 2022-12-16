import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getWord, addWord, editWord, deleteWord } from '../../redux/wordsSlice'
import { useEffect } from 'react'
import { getWords } from '../../helpers/getWords'

let newWords = []

export const ImportWords = () => {
    const words = useSelector((state) => state.words)
    const dispatch = useDispatch()
    console.log('words from store :>> ', words)

    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`

    useEffect(() => {
        dispatch(getWords({ table: router.asPath.split('/')[1] }))
        console.log('words from store222 :>> ', words)
    }, [])

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const syncPosting = async (newWords) => {
        for (const word of newWords) {
            const newWord = {
                original: word,
                translate: '',
                description: '',
            }

            await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, { ...newWord })
        }
    }

    const onSubmitImportWords = (data) => {
        newWords = data.text.trim().split(' ')
        syncPosting(newWords)
        // alert(`All words successfully imported `)
        console.log(`All words successfully imported `)
    }

    // ==================================

    const showFile = (e) => {
        // e.preventDefault()
        const fileReader = new FileReader()

        fileReader.onload = (e) => {
            const text = e.target.result
            newWords = text.trim().split(' ')
            syncPosting(newWords)
        }

        fileReader.readAsText(e.target.files[0])
        console.log(`All words from this file successfully imported `)
        // alert(`All words from this file successfully imported `)
    }

    return (
        <>
            <Link href={hrefMainPage} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
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

                {/* Import words from file ============
                finish it later================= */}
                <h2 className='titlePage'>Import words from file</h2>
                <input type='file' onChange={(e) => showFile(e)} />
            </div>
        </>
    )
}
