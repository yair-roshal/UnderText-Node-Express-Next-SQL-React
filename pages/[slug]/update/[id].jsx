import { UpdateWord } from 'components/crudComponents'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    console.log('`${URL}/${params.slug}/${params.id}`', `${URL}/${params.slug}/${params.id}`)
    // const response = await axios.get(`${URL}/shaharit/${params.id}`)
    const response = await axios.get(`${URL}/${params.slug}/${params.id}`)


    return {
        props: { ...response.data }[0],
    }
}

export default UpdateWord
