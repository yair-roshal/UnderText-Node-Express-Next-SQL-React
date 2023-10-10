import { Link } from 'components'
import { useMainPage } from 'hooks'

export const CellLast = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

    return (
        <>
            <div className='cell'>
                {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
                    <div className='original_text'>{original}</div>
                    <div className='translate'>{translate}</div>
                {/* </Link> */}
            </div>
            <div className='cellFullWidth'></div>
        </>
    )
}
