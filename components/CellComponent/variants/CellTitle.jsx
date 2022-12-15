import { Link } from 'components'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { axiosWrappers } from 'helpers'
import { useRouter } from 'next/router'
import { URL } from 'constants/clientConstants'
import { Header } from 'components'

export const CellTitle = (props) => {
    console.log('props :>> ', props)
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
