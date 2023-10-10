import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
// import axios from 'axios'
// import fs from 'fs/promises' // Import the fs module
import path from 'path' // Добавляем модуль path для работы с путями к файлам

import fs from 'fs'
import * as SQL from 'sql.js'

export async function getServerSideProps({ params }) {
  console.log('222-----------------')

  const filePath_sql = path.join(process.cwd(), 'data', `maariv_all_20.05.23_original.sql`)
  console.log('filePath_sql', filePath_sql)

  try {
    // Чтение файла SQL на сервере

    const sqlText = await fs.readFile(filePath_sql, (err, data) => {
      if (err) {
        console.error('Произошла ошибка при чтении файла:', err)
        return
      }
      console.log('Содержимое файла:', data)
    })

    // Инициализация базы данных

    // Инициализация базы данных
    const db = new SQL.Database()

    db.exec(sqlText)
    console.log('11111')
    // Выполнение SQL-запроса
    const query = 'SELECT * FROM minha'
    const result = db.exec(query)

    console.log('Результат SQL-запроса:', result[0].values)
  } catch (error) {
    console.error('Ошибка при чтении файла SQL:', error)
  }

  //=========================

  console.log('url_params_slug ', `${URL}/${params.slug}`)

  const filePath = path.join(process.cwd(), 'data', `${params.slug}.json`)
  console.log('filePath', filePath)

  try {
    const fileData = await fs.readFile(filePath, 'utf-8') // Read the file content
    const jsonData = JSON.parse(fileData) // Parse the JSON data

    const tableObject = jsonData.find((obj) => obj.type === 'table')

    const data = tableObject ? tableObject.data : []
    console.log('data111.length', data.length)

    return {
      props: {
        data: data.length > 0 ? data : [],
      },
    }
  } catch (error) {
    console.error('Ошибка:', error)
    return {
      props: {}, // Return an empty object in case of an error
    }
  }
}

export default Homepage
