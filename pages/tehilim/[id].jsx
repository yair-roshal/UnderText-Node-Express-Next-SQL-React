// [id].jsx
import path from 'path'
import fs from 'fs/promises'
import xlsx from 'xlsx' // Импортируем библиотеку для чтения XLS/XLSX файлов
import { TehilimPage } from 'components'

export async function getServerSideProps({ params }) {
  console.log('params---------->>', params)
  try {
    let data = []

    // Попытка прочитать JSON файл
    const jsonFilePath = path.join(process.cwd(), 'data/tehilim-data', `${params.id}.json`)
    const jsonFileExists = await fs.stat(jsonFilePath).catch(() => false)

    if (jsonFileExists) {
      const fileData = await fs.readFile(jsonFilePath, 'utf-8')
      const fileJsonData = JSON.parse(fileData)
      const tableObject = fileJsonData.find((obj) => obj.type === 'table')
      data = data.concat(tableObject ? tableObject.data : fileJsonData)
    } else {
      // Если JSON файл не найден, попытка прочитать XLS файл
      const xlsFilePath = path.join(process.cwd(), 'data/tehilim-data', `${params.id}.xls`)
      const xlsFileExists = await fs.stat(xlsFilePath).catch(() => false)

      if (xlsFileExists) {
        const workbook = xlsx.readFile(xlsFilePath)
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        const jsonData = xlsx.utils.sheet_to_json(worksheet)
        data = jsonData
      } else {
        // Если ни JSON, ни XLS файл не найдены
        data = [
          {
            id: 1,
            original: 'No data found',
            translate: 'Данные не найдены',
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ]
      }
    }

    //==================

    let onlyNumbersSorted = []
    try {
      const files = await fs.readdir('data/tehilim-data')

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
        data: data,
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
            translate: `${error}`,
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