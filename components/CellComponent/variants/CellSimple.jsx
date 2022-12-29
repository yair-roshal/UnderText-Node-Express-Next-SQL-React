import { Link } from 'components'
import { useMainPage } from 'hooks'

export const CellSimple = (props) => {
    const { id, original, translate } = props
    const hrefMainPage = useMainPage()
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`
    const position = original.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
    let newWord = original

    if (position != '-1' && position != '0') {
        const symbol = original.slice(-1)
        const word = original.slice(0, position)
        newWord = symbol + word
    }

    return (
        <>
            <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                <div className='cell'>
                    <div className='original_text'>{newWord}</div>
                    <div className='translate'>{translate}</div>
                </div>
            </Link>
        </>
    )
}
