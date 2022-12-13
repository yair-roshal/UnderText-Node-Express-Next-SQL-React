import { WordPage } from 'components'
import { URL } from 'constants/clientConstants'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    const response = await axios.get(`${URL}minha/${params.id}`)
    return {
        props: { ...response.data }[0],
    }
}

export default WordPage
