import { Link } from 'components'
import { useMainPage } from 'hooks'

export const CellBold = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

    return (
        <div className='cell'>
            <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                <div className='original_text bold'>{original}</div>
                <div className='translate'>{translate}</div>
            </Link>
        </div>
    )
}
