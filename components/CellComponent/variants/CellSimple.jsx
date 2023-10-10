import { Link } from 'components'
import { useMainPage } from 'hooks'
import { Cell } from '../../Cell'

export const CellSimple = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`


    return (
        <>
            {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
            <Cell original={original} translate={translate} bold={false} />

            {/* </Link> */}
        </>
    )
}
