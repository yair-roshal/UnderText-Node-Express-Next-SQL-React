import { useState, useEffect } from 'react'
import { Loading, Link, StyledButton, ImportButton } from 'components'
import { axiosWrappers } from 'helpers'
import { useMainPage } from 'hooks'
import { CellComponent } from './CellComponent/CellComponent'
import { URL } from 'constants/clientConstants'

export function Homepage(props) {
  // console.log('props.data :>> ', props.data);
  const hrefMainPage = useMainPage()
  const hrefLinkImport = hrefMainPage + '/import'

  const [words, setWords] = useState(props.data)
  const [newWords, setNewWords] = useState(JSON.stringify(words))

  useEffect(() => {
    console.log('props111', props)
    setWords(props.data)
  }, [props])

  useEffect(() => {
    setNewWords(JSON.stringify(words))
  }, [words])

  const syncPosting = async (stringWords) => {
    const arrayObjectWords = JSON.parse(stringWords)

    for (const objectWord of arrayObjectWords) {
      await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, {
        ...objectWord,
      })
    }
  }

  const changeHandleSubmit = async (event) => {
    event.preventDefault()

    await axiosWrappers.deleteAllAxios(URL + hrefMainPage)
    await syncPosting(newWords)
    window.location.reload()
  }

  if (!words) {
    return <Loading />
  }

  return (
    <>
      {/* <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
        <ImportButton variant='contained' disabled>
          Import Words From File or text{' '}
        </ImportButton>
      </Link> */}
      <div className='wrapperTextBlock'>
        <div className='allWords'>
           { words.map((word, index) => <CellComponent key={index} {...word} />)}
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
