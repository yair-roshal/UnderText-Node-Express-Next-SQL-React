import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
import fs from 'fs/promises'
import path from 'path'

const minhaSeder = ['ashrey', 'amida']
const maarivSeder = ['shma', 'amida']
const tehilimSeder = ['tehilim']

export async function getServerSideProps({ params }) {
  // console.log('url_params_slug ', `${URL}/${params.slug}`)

  try {
    let data = []

    if (params.slug === 'minha') {
      // Если slug равен 'minha', запросить данные из файлов с именами из minhaSeder
      for (const file of minhaSeder) {
        const fileData = await fs.readFile(
          path.join(process.cwd(), 'data', `${file}.json`),
          'utf-8',
        )
        const fileJsonData = JSON.parse(fileData)
        const tableObject = fileJsonData.find((obj) => obj.type === 'table')
        data = data.concat(tableObject ? tableObject.data : [])
      }
    } else if (params.slug === 'maariv') {
      // Если slug равен 'maariv', запросить данные из файлов с именами из maarivSeder
      for (const file of maarivSeder) {
        const fileData = await fs.readFile(
          path.join(process.cwd(), 'data', `${file}.json`),
          'utf-8',
        )
        const fileJsonData = JSON.parse(fileData)
        const tableObject = fileJsonData.find((obj) => obj.type === 'table')
        data = data.concat(tableObject ? tableObject.data : [])
      }
    } else if (params.slug === 'tehilim') {
      // Если slug равен 'tehilim', запросить данные из файлов с именами из tehilimSeder
      for (const file of tehilimSeder) {
        const fileData = await fs.readFile(
          path.join(process.cwd(), 'data', `${file}.json`),
          'utf-8',
        )
        const fileJsonData = JSON.parse(fileData)
        const tableObject = fileJsonData.find((obj) => obj.type === 'table')
        data = data.concat(tableObject ? tableObject.data : [])
      }
    }

 
    return {
      props: {
        data:
          data.length > 0
            ? data
            : [
                {
                  id: 1,
                  original: 'no data in this file json',
                  translation: 'no data in this file json',
                  description: null,
                  periodStart: null,
                  periodEnd: null,
                },
              ],
      },
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      props: {
        data: [
          {
            id: 1,
            original: 'Error',
            translation: `${error} `,
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ],
      },
    }
  }
}

export default Homepage
