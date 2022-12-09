import { UpdateWord } from 'components/crudComponents'
import axios from 'axios'

export default UpdateWord

export async function getServerSideProps(props) {
    // export async function getServerSideProps({ params }) {
console.log('props', props)
    const { params } = props
    console.log('params :>> ', params)
    console.log('params.id :>> ', params.id)
    let res = await axios.get(`http://localhost:5000/${params.id}`).catch((error) => {
        console.log(error)
    })

    console.log('{ ...res.data }[0]', { ...res.data }[0])
    if (res == undefined) {
        res.data = [{ id: 0, original: '-', translate: '-', description: '-' }]
    }
    console.log('{ ...res.data }[0]', { ...res.data }[0])
    return {
        props: { ...res.data }[0],
    }
}
