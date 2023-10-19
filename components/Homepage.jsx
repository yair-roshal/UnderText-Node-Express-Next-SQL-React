import { useState, useEffect } from 'react'
import { Loading, Link, StyledButton, ImportButton } from 'components'
import { axiosWrappers } from 'helpers'
import { useMainPage } from 'hooks'
import { CellComponent } from './CellComponent/CellComponent'
import { URL } from 'constants/clientConstants'
import { useUsersContext } from '../context/usersContext'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'

export function Homepage(props) {
  const { usersData, setUsersData } = useUsersContext()
  // console.log('props.data :>> ', props.data);
  const hrefMainPage = useMainPage()
  const hrefLinkImport = hrefMainPage + '/import'

  const [words, setWords] = useState(props.data)
  const [newWords, setNewWords] = useState(JSON.stringify(words))
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  // Отслеживание начала загрузки страницы
  router.events &&
    router.events.on('routeChangeStart', (url) => {
      console.log(`Загрузка страницы_Homepage: ${url}`)
      setLoading(true)
    })

  // Отслеживание завершения загрузки страницы
  router.events &&
    router.events.on('routeChangeComplete', (url) => {
      console.log(`Страница загружена_Homepage: ${url}`)
      setLoading(false)
    })

  useEffect(() => {
    console.log('usersData :>> ', usersData)
  }, [usersData])

  useEffect(() => {
    console.log('props111', props)
    setWords(props.data)
  }, [props])

  useEffect(() => {
    setNewWords(JSON.stringify(words))
  }, [words])

  // const syncPosting = async (stringWords) => {
  //   const arrayObjectWords = JSON.parse(stringWords)

  //   for (const objectWord of arrayObjectWords) {
  //     await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, {
  //       ...objectWord,
  //     })
  //   }
  // }

  // const changeHandleSubmit = async (event) => {
  //   event.preventDefault()

  //   await axiosWrappers.deleteAllAxios(URL + hrefMainPage)
  //   await syncPosting(newWords)
  //   window.location.reload()
  // }

  if (loading) {
    return (
      <Box className='loading-overlay'>
        <Loading />
      </Box>
    )
  }

  return (
    <>
      <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
        <ImportButton variant='contained'>Import Words From File or text </ImportButton>
      </Link>

      <div className='wrapperTextBlock'>
        <div className='allWords'>
          {words.map((word, index) => (
            <CellComponent key={index} {...word} />
          ))}
        </div>

        {/* <div className='formWrapperJSON'>
          <form onSubmit={changeHandleSubmit}>
            <textarea
              className='homePage'
              type='text'
              name='newWords'
              value={newWords}
              onChange={(e) => setNewWords(e.target.value)}
            />

            <StyledButton variant='contained' type='submit' disabled>
              change
            </StyledButton>
          </form>
        </div> */}
      </div>
    </>
  )
}
