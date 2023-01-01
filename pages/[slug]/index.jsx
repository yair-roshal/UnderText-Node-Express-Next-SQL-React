import { Homepage } from 'components'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    console.log('params_getServerSideProps_`${URL}/${params.slug}`', params)
    const response = await axios.get(`${URL}/${params.slug}`)
    // console.log('response :>> ', response)
    return {
        props: { ...response.data }[0],
    }
}

export default Homepage
