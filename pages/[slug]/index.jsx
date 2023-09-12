import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
  console.log('url_params_slug ', `${URL}/${params.slug}`)
 
  const response = await axios.get(`${URL}/${params.slug}`)

  console.log('response :>> ', response)
  console.log('response.data222', response.data)

  if (response.data[0] == undefined) {
    // console.log('not items111')
    return {
      props: {
        id: 1,
        original: 'q',
        translate: 'w',
        description: '',
        periodStart: null,
        periodEnd: null,
      },
    }
  }

  // console.log('response.data[0]', response.data[0])
  // console.log('{ ...response.data }[0]', { ...response.data }[0])
  return {
    props: response.data[0],
    // props: response.data[0],
  }
}

export default Homepage
