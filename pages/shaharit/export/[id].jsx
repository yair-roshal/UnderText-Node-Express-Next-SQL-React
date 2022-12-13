import { ExportWord } from 'components/crudComponents'
// import axios from 'axios'
import { axiosWrappers } from 'helpers'

export default ExportWord

export async function getServerSideProps({ params }) {
    // let res = await axios.get(`http://localhost:5000/${params.id}`).catch(error => {
    //     console.log(error)
    // })


    let res = await axiosWrappers.getAxios(URL +params.id)

    return {
        props: { ...res.data }[0],
    }
}
