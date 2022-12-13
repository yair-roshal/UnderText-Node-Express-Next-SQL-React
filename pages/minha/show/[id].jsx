import { WordPage } from 'components'
import { axiosWrappers } from 'helpers'
// import { URL } from 'constants'
import { URL } from '../../../constants/clientConstants'


export async function getServerSideProps(context) {
    console.log('context :>> ', context)
    console.log('context.params :>> ', context.params)
    const id = context.params.id
    const response = await axiosWrappers.getAxios(URL + 'minha/' + id)
    return {
        props: { ...response.data }[0],
    }
}

export default WordPage
