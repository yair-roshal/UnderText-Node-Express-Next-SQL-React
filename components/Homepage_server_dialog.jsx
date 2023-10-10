import { useState, useEffect } from 'react'
import { Loading, Link, StyledButton, ImportButton } from 'components'
import { axiosWrappers } from 'helpers'
import { useMainPage } from 'hooks'
import { CellComponent } from './CellComponent/CellComponent'
import { URL } from 'constants/clientConstants'
 
// import { useRouter } from 'next/router'
// import { CellVariantsArray, URL } from 'constants'
// import DialogComponent from 'components/styled/DialogComponent'
// import axios from 'axios'
// import { Button, Container, TextField } from '@mui/material'
// import {
//   // toJewishDate,
//   // formatJewishDate,
//   // toHebrewJewishDate,
//   // formatJewishDateInHebrew,
//   toGregorianDate,
//   // JewishMonth,
// } from 'jewish-date'

export function Homepage(props) {
  const [queryResult, setQueryResult] = useState([])

  // Use the useRouter hook to access props
  // const router = useRouter();

  const hrefMainPage = useMainPage()
  const hrefLinkImport = hrefMainPage + '/import'
  // const [file, setFile] = useState(null)
  // const [dialogOpen, setDialogOpen] = useState(false)
  // const [dialogText, setDialogText] = useState('')

  const { data } = props

  // console.log('props111', props)
  // console.log('data111', data)

  const [words, setWords] = useState(props.data)
  const [newWords, setNewWords] = useState(JSON.stringify(words))

  useEffect(() => {
    console.log('props111', props)
    setWords(props.data)
  }, [props])

  // useEffect(() => {
  //   const url = URL + hrefMainPage
  //   console.log('url_____', url)
  //   axiosWrappers.getAxios(url).then((value) => {
  //     console.log('_axiosWrappers.getAxio_value!!!', value)

  //     console.log('value22222', value)
  //     setWords(value)
  //   })
  //  }, [hrefMainPage])

  useEffect(() => {
    setNewWords(JSON.stringify(words))
  }, [words])

  const handleCloseDialog = () => {
    // setDialogOpen(false)
  }

  // const getVariant = (word) => {
  //     console.log('word_0000 :>> ', word)

  //     const hebrewDateToday = new Intl.DateTimeFormat('en-u-ca-hebrew', {
  //         year: 'numeric',
  //         month: 'numeric',
  //         day: 'numeric',
  //     }).format(new Date())

  //     console.log('------------')

  //     const arrayHebrewDateToday = hebrewDateToday.split(' ')
  //     console.log('arrayHebrewDateToday :>> ', arrayHebrewDateToday)

  //     const arrayPeriodStart = word.periodStart.split(' ')
  //     const arrayPeriodEnd = word.periodEnd.split(' ')

  //     console.log('arrayPeriodStart', arrayPeriodStart)
  //     console.log('arrayPeriodEnd', arrayPeriodEnd)

  //     const startObj = {
  //         year: arrayHebrewDateToday[2],
  //         monthName: arrayPeriodStart[1],
  //         day: Number(arrayPeriodStart[0]),
  //     }
  //     console.log('startObj', startObj)

  //     const GregorianDateStart = toGregorianDate(startObj)

  //     const endObj = {
  //         year: arrayHebrewDateToday[2],
  //         monthName: arrayPeriodEnd[1],
  //         day: Number(arrayPeriodEnd[0]),
  //     }
  //     console.log('endObj', endObj)

  //     const GregorianDateEnd = toGregorianDate(endObj)
  //     console.log(GregorianDateStart)
  //     console.log(GregorianDateEnd)

  //     const dateToday = new Date()

  //     console.log(
  //         'GregorianDateStart > dateToday :>> ',
  //         GregorianDateStart > dateToday,
  //     )
  //     console.log(
  //         'GregorianDateEnd < dateToday :>> ',
  //         GregorianDateEnd < dateToday,
  //     )
  //     console.log('GregorianDateStart != ', GregorianDateStart != '')
  //     if (
  //         arrayPeriodStart != '' &&
  //         arrayPeriodEnd != '' &&
  //         (GregorianDateStart > dateToday || GregorianDateEnd < dateToday)
  //     ) {
  //         console.log('innnnnn')
  //         return 'CellDisable'
  //         // return null
  //     }
  //     console.log('11111 :>> ')
  //     for (const cellObject of CellVariantsArray) {
  //         if (word.description === cellObject.type) {
  //             return cellObject.component
  //         }
  //     }
  // }

  const syncPosting = async (stringWords) => {
    const arrayObjectWords = JSON.parse(stringWords)

    for (const objectWord of arrayObjectWords) {
      console.log('objectWord', objectWord)
      await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, {
        ...objectWord,
      })
    }
  }

  // const handleSubmit = async () => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axiosWrappers.deleteAllAxios(URL + hrefMainPage)
    await syncPosting(newWords)
    window.location.reload()
  }

  if (!words) {
    return <Loading />
  }

  ///-----------------------------

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0])
  // }

  // const handleUpload = () => {
  //   const formData = new FormData()
  //   formData.append('sqlFile', file)

  //   axios
  //     .post(URL + '/api/uploadSql', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then((response) => {
  //       console.log('Table successfully updated')

  //       setDialogText('Table successfully updated')
  //       setDialogOpen(true)
  //     })
  //     .catch((error) => {
  //       console.error('Error updating table:', error)
  //       setDialogText('Error updating table: ' + error.message)

  //       setDialogText('Error updating table:')
  //       setDialogOpen(true)
  //     })

  // }

  return (
    <>
 

      {/* <Container>
        <TextField type='file' onChange={handleFileChange} />
        <Button variant='contained' onClick={handleUpload}>
          Upload SQL File
        </Button>
      </Container> */}

      <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
        <ImportButton variant='contained'>Import Words From File or text </ImportButton>
      </Link>
      <div className='wrapperTextBlock'>
        <div className='allWords'>
          {words.map((word, index) => (
            <CellComponent
              key={index}
              // variant={getVariant(word)}
              {...word}
            />
          ))}
        </div>

        <div className='formWrapperJSON'>
          <form onSubmit={handleSubmit}>
            <textarea
              className='homePage'
              type='text'
              name='newWords'
              value={newWords}
              onChange={(e) => setNewWords(e.target.value)}
            />

            <StyledButton variant='contained' type='submit'>
              change
            </StyledButton>
          </form>
        </div>
      </div>

      {/* <DialogComponent
        text={dialogText || '---'}
        buttonRight={'ok'}
        open={dialogOpen}
        onClose={handleCloseDialog}
      /> */}
    </>
  )
}
