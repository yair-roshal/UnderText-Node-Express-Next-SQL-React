import { Link } from 'components'
import { useMainPage } from 'hooks'

export const CellSimple = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`


    return (
        <>
            {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
                <div className='cell'>
                    <div className='original_text'>{original}</div>
                    <div className='translate'>{translate}</div>
                </div>
            {/* </Link> */}
        </>
    )
}
