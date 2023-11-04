import path from 'path'
import fs from 'fs/promises'
import { TehilimPage } from 'components'

export async function getServerSideProps({ params }) {
  console.log('params---------->>', params)
  try {
    let data = []

    const fileData = await fs.readFile(path.join(process.cwd(), 'data/tehilim-json', `${params.id}.json`), 'utf-8')
    // const data = JSON.parse(fileData);
    const fileJsonData = JSON.parse(fileData)
    const tableObject = fileJsonData.find((obj) => obj.type === 'table')
    data = data.concat(tableObject ? tableObject.data : fileJsonData)

    //==================

    let onlyNumbersSorted = []
    try {
      const files = await fs.readdir('data/tehilim-json')

      const onlyJsons = files.filter((file) => /^\d+\.json$/.test(file))
      const onlyNumbers = onlyJsons.map((file) => file.replace('.json', ''))
      onlyNumbersSorted = onlyNumbers.sort((a, b) => a - b)
      console.log(onlyNumbers)
    } catch (err) {
      console.error(err)
    }

    return {
      props: {
        files: onlyNumbersSorted,
        data:
          data && data.length > 0
            ? data
            : [
                {
                  id: 1,
                  original: 'no data in this file json',
                  translate: 'no data in this file json',
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
            translate: `${error} `,
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ],
      },
    }
  }
}

export default TehilimPage
