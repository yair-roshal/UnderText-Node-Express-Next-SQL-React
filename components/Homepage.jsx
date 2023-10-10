import { useState, useEffect } from 'react'
import { Loading, Link, StyledButton, ImportButton } from 'components'
import { axiosWrappers } from 'helpers'
import { useMainPage } from 'hooks'
import { CellComponent } from './CellComponent/CellComponent'
import { URL } from 'constants/clientConstants'

import { Database } from 'sql.js' // Импортируем конструктор Database из sql.js
import axios from 'axios' // Импортируем Axios

// Импортируем библиотеку fs
import fs from 'fs'
 
export async function getServerSideProps() {
  console.log('222-----------------')
  try {
    // Чтение файла SQL на сервере
    const sqlText = fs.readFileSync('./public/maariv_all_20.05.23_original.sql', 'utf8')

    // Инициализация базы данных
    const SQL = require('sql.js')
    const db = new SQL.Database()
    db.exec(sqlText)
    console.log('11111')
    // Выполнение SQL-запроса
    const query = 'SELECT * FROM minha'
    const result = db.exec(query)

    console.log('Результат SQL-запроса:', result[0].values)
    // Возвращаем результат в виде пропса
    return {
      props: {
        queryResult: result[0].values,
      },
    }
  } catch (error) {
    console.error('Ошибка при чтении файла SQL:', error)

    return {
      props: {
        queryResult: [],
      },
    }
  }
}

export function Homepage(props) {
  const [queryResult, setQueryResult] = useState(props.queryResult)

  console.log('33333-------',)
  const hrefMainPage = useMainPage()
  const hrefLinkImport = hrefMainPage + '/import'

  const { data } = props

  // console.log('props111', props)
  // console.log('data111', data)

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
      console.log('objectWord', objectWord)
      await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, {
        ...objectWord,
      })
    }
  }

  const handleSubmit = async (event) => {
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
      {/* <div>
        <h1>Данные из SQL файла</h1>
        <ul>
          {queryResult.map((row, index) => (
            <li key={index}>{row.join(', ')}</li>
          ))}
        </ul>
      </div> */}

      <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
        <ImportButton variant='contained' disabled>Import Words From File or text </ImportButton>
      </Link>
      <div className='wrapperTextBlock'>
        <div className='allWords'>
          {words.map((word, index) => (
            <CellComponent key={index} {...word} />
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

            <StyledButton variant='contained' type='submit' disabled>
              change
            </StyledButton>
          </form>
        </div>
      </div>
    </>
  )
}
