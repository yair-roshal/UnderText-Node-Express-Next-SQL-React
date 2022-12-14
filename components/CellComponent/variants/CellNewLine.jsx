import { Link } from 'components'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { axiosWrappers } from 'helpers'
import { useRouter } from 'next/router'
import { URL } from 'constants/clientConstants'

export const CellNewLine = (props) => {
    console.log('props :>> ', props)
    const { id, original, translate } = props

    // const deleteWord = (id) => {
    //     axiosWrappers.deleteAxios(URL, id)
    // }

    const router = useRouter()
    const hrefLinkUpdate = `${router.pathname}/update/${id}`
 
    return (
        <>
            <div className='cell'>
                <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                    <div className='original_text'>{original}</div>
                    <div className='translate'>{translate}</div>
                </Link>
            </div>
            <div className='cellFullWidth'></div>
        </>
    )
}
