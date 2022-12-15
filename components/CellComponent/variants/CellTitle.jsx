import { Link, Header } from 'components'
import { useRouter } from 'next/router'

export const CellTitle = (props) => {
    const { id, original, translate } = props

    const router = useRouter()
    const hrefLinkShow = `${router.pathname}/update/${id}`

    return (
        <>
            <Link href={hrefLinkShow} style={{ textDecoration: 'none' }}>
                <Header name={original} />
            </Link>
            <div className='cellFullWidth'></div>
        </>
    )
}
