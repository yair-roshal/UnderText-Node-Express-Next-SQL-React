import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    console.log(
        '`${URL}/${params.slug}` in getServerSideProps',
        `${URL}/${params.slug}`,
    )
    console.log('params in  getServerSideProps', params)
    const response = await axios.get(`${URL}/${params.slug}`)
    console.log('response :>> ', response)
    return {
        props: { ...response.data }[0],
        // { props: response.data[0] },
    }
}

export default Homepage
