import { UpdateWord } from 'components/crudComponents'
import axios from 'axios'

export async function getServerSideProps(context) {
    const id = context.params.id
    // let newId

    // const parts = id.split('}')

    // if (parts.length == 1) {
    //     newId = parts[0]
    // } else {
    //     newId = parts[1]
    // }

    const response = await axios.get(`http://localhost:5000/${id}`).catch((error) => {
        // const response = await axios.get(`http://localhost:5000/${newId}`).catch((error) => {
        console.log(error)
    })

    return {
        props: { ...response.data }[0],
    }
}

export default UpdateWord
