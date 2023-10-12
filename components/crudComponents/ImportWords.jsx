import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

import { axiosWrappers } from 'helpers'
import { URL } from 'constants'
import { useMainPage } from 'hooks'

let formFileWords = []

export const ImportWords = (props) => {
  const hrefMainPage = useMainPage()
  const [words, setWords] = useState(props.data)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const syncPosting = async (formFileWords) => {
    console.log('formFileWords :>> ', formFileWords)
    console.log('words :>> ', words)

    let newDataTehilim = []

    for (const formFileWord of formFileWords) {
      let newWord

      const checkWord = (checkingWord) => {
        return checkingWord.original == formFileWord
      }

      const foundedWord = words.find(checkWord)

      console.log('foundedWord :>> ', foundedWord)
      if (foundedWord) {
        newWord = {
          id: newDataTehilim.length + 1, // Заменили id на порядковый номер
          original: foundedWord.original,
          translate: foundedWord.translate,
          description: null,
          periodStart: null,
          periodEnd: null,
        }
      } else {
        console.log('new word :>> ', formFileWord)

        newWord = {
          id: newDataTehilim.length + 1, // Заменили id на порядковый номер
          original: formFileWord,
          translate: '',
          description: null,
          periodStart: null,
          periodEnd: null,
        }
      }

      newDataTehilim = [...newDataTehilim, newWord]
      // await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, { ...newWord })
    }


    console.log(JSON.stringify(newDataTehilim, null, 0));  
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
    formFileWords = data.text.trim().split(/\s/)
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
