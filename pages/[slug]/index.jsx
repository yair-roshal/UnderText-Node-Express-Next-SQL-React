import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    console.log('params', params)
    const response = await axios.get(`${URL}/${params.slug}`)

    return {
        props: { ...response.data }[0],
    }
}

export default Homepage
