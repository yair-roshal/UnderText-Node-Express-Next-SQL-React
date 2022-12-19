import { Link, Header } from 'components'
import { useMainPage } from 'hooks'

export const CellTitle = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkShow = `${hrefMainPage}/update/${id}`

    return (
        <>
            <Link href={hrefLinkShow} style={{ textDecoration: 'none' }}>
                <Header name={original} translate={translate} />
            </Link>
            <div className='cellFullWidth'></div>
        </>
    )
}
