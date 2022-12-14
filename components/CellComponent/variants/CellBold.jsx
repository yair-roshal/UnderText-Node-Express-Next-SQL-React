import { Link } from 'components'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { axiosWrappers } from 'helpers'
import { useRouter } from 'next/router'
import { URL } from 'constants/clientConstants'

export const CellBold = (props) => {
    console.log('props :>> ', props)
    const { id, original, translate } = props

    const router = useRouter()
    const hrefLinkUpdate = `${router.pathname}/update/${id}`
    const hrefLinkShow = `${router.pathname}/show/${id}`

    return (
        <div className='cell'>
            {/* <div className='cell' style={styleObject}> */}
            <div className='edit'>
                {/* buttons================================ */}

                <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                    <IconButton color='secondary' component='label'>
                        <RefreshIcon />
                    </IconButton>
                </Link>

                {/* <IconButton onClick={() => deleteWord(id)} aria-label='delete'>
					<DeleteIcon />
				</IconButton> */}

                {/* <Link href={`/words/show/${id}`} style={{ textDecoration: 'none' }}>
					<IconButton color='primary' aria-label='upload picture' component='label'>
						<OpenInNewIcon />
					</IconButton>
				</Link> */}
            </div>

            {/* text ================================ */}

            <Link href={hrefLinkShow} style={{ textDecoration: 'none' }}>
                {/* <div className='original_text'> */}
                {/* <div className='original_text' style={styleObject}> */}
                <div className='original_text' style={{ 'font-weight': '900' }}>
                    {original}
                </div>
                <div className='translate'>{translate}</div>
            </Link>
        </div>
    )
}
