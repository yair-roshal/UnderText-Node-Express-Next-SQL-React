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
      // props: {
      //   data, // Use the extracted 'data' array
      // },
      props: {
        data:  data.length > 0 ? data : [],
        // data: [
        //   {
        //     id: 1,
        //     original: 'test',
        //     translate: 'тест',
        //     description: "NULL",
        //     periodStart: "NULL",
        //     periodEnd: "NULL",
        //   },
        // ],
      },
    }
  } catch (error) {
    console.error('Ошибка:', error)
    return {
      props: {}, // Return an empty object in case of an error
    }
  }
}

// export async function getServerSideProps({ params }) {
//   console.log('url_params_slug ', `${URL}/${params.slug}`)

//   const response = await axios
//     .get(`${URL}/${params.slug}`)
//     .then((response) => {
//       // Обработка успешного ответа
//       console.log('Успешный ответ:', response.data)
//     })
//     .catch((error) => {
//       // Обработка ошибки
//       console.error('Ошибка:', error.message)
//     })

//   // console.log('response.status :>> ', response.status)
//   // console.log('response.statusText :>>  ', response.statusText)
//   // console.log('response :>> ', response)
//   // console.log('response.data222', response.data)

//   if (response.data[0] == undefined) {
//     // console.log('not items111')
//     return {
//       props: {
//         id: 1,
//         original: 'q',
//         translate: 'w',
//         description: '',
//         periodStart: null,
//         periodEnd: null,
//       },
//     }
//   }

//   console.log('response.data[0]', response.data[0])
//   console.log('{ ...response.data }[0]', { ...response.data }[0])
//   return {
//     props: response.data[0],
//   }
// }

export default Homepage
