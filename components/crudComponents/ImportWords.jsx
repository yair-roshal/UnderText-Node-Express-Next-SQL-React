import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

import { axiosWrappers } from 'helpers'
import { URL } from 'constants'
import { useMainPage } from 'hooks'

let formFileWords = []

export const ImportWords = () => {
  const hrefMainPage = useMainPage()
  const [words, setWords] = useState(null)
  useEffect(() => {
    console.log('URL + hrefMainPage ImportWords', URL + hrefMainPage)
    axiosWrappers
      .getAxios(URL + hrefMainPage)
      .then(function (value) {
        setWords(value)
      })
      .catch((err) => console.log('err2222', err))
  }, [])

  // const words = useSelector((state) => state.words)
  // const dispatch = useDispatch()
  // console.log('words from store :>> ', words)

  // useEffect(() => {
  //     dispatch(getWords({ table: router.asPath.split('/')[1] }))
  //     console.log('words from store222 :>> ', words)
  // }, [])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const syncPosting = async (formFileWords) => {
    console.log('formFileWords :>> ', formFileWords)
    console.log('words :>> ', words)

    for (const formFileWord of formFileWords) {
      let newWord

      const checkWord = (checkingWord) => {
        return checkingWord.original == formFileWord
      }

      const foundedWord = words.find(checkWord)

      console.log('foundedWord :>> ', foundedWord)
      if (foundedWord) {
        newWord = {
          original: foundedWord.original,
          translate: foundedWord.translate,
          description: foundedWord.description,
        }
      } else {
        console.log('new word :>> ', formFileWord)

        newWord = {
          original: formFileWord,
          translate: '',
          description: '',
        }
      }

      await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, { ...newWord })
    }
  }

  const showFile = (e) => {
    // e.preventDefault()
    const fileReader = new FileReader()

    fileReader.onload = (e) => {
      const text = e.target.result
      // formFileWords = text.trim().split(' ')
      formFileWords = text.trim().split(/\s/)
      syncPosting(formFileWords)
    }

    fileReader.readAsText(e.target.files[0])
    console.log(`All words from this file successfully imported `)
    // alert(`All words from this file successfully imported `)
  }

  const onSubmitImportWords = (data) => {
    //  formFileWords = data.text.trim().split(/[\s]/g)
    formFileWords = data.text.trim().split(/\s/)
    // formFileWords = data.text.trim().split(/\r\n|\r|\n/)

    //  formFileWords = data.text.trim().split(' ')
    syncPosting(formFileWords)
    console.log(`All words successfully imported `)
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
            className='importWords'
            name='text'
            type='text'
            placeholder='Please Enter your text'
            {...register('text', { required: true })}
          />
          {errors.name && <p style={{ color: 'red' }}>Please Enter your text</p>}
          <input type='submit' />
        </form>

        {/* Import words from file ============  */}
        <h2 className='titlePage'>Import words from file</h2>
        <input type='file' onChange={(e) => showFile(e)} />
      </div>
    </>
  )
}
