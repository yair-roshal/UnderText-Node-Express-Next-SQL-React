import { GraphComponent } from 'components'
import axios from 'axios'

export default GraphComponent

export async function getServerSideProps({ params }) {
    let res = await axios.get(`http://localhost:5000/${params.id}`)

    return {
        props: { ...res.data }[0],
    }
}
