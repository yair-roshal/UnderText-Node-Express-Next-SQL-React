import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
// import axios from 'axios'
import fs from 'fs/promises' // Import the fs module
import path from 'path' // Добавляем модуль path для работы с путями к файлам

export async function getServerSideProps({ params }) {
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
        data:
          data.length > 0
            ? data
            : [
                {
                  id: 1,
                  original: 'no data in this file json',
                  translate: `data.length = ${data.length} `,
                  description: 'NULL',
                  periodStart: 'NULL',
                  periodEnd: 'NULL',
                },
              ],
      },
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      // props: {},

      props: {
        data: [
          {
            id: 1,
            original: 'Error',
            translate: `${error} `,
            description: 'NULL',
            periodStart: 'NULL',
            periodEnd: 'NULL',
          },
        ],
      },
    }
  }
}

export default Homepage
