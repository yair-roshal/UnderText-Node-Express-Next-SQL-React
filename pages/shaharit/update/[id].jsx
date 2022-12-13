import { UpdateWord } from 'components/crudComponents'
import { axiosWrappers } from 'helpers'
// import { URL } from 'constants'
import { URL } from '../../../constants/clientConstants'

export async function getServerSideProps({ params }) {
    const response = await axiosWrappers.getAxios(URL + 'shaharit/' + params.id)

    return {
        props: { ...response.data }[0],
    }
}

export default UpdateWord
