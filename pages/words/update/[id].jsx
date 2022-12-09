import { UpdateWord } from 'components/crudComponents'
import axios from 'axios'

export async function getServerSideProps({ params }) {
    let res = await axios.get(`http://localhost:5000/${params.id}`).catch((error) => {
        console.log(error)
    })

    return {
        props: { ...res.data }[0],
    }
}

export default UpdateWord
