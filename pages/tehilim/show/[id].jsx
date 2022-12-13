import { WordPage } from 'components'
import axios from 'axios'

export default WordPage

export async function getServerSideProps({ params }) {
    let res = await axios.get(`http://localhost:5000/${params.id}`)

    return {
        props: { ...res.data }[0],
    }
}
