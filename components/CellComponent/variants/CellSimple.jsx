import { Link } from 'components'
import { useRouter } from 'next/router'
import { URL } from 'constants/clientConstants'

export const CellSimple = (props) => {
    const { id, original, translate } = props

    // const deleteWord = (id) => {
    //     axiosWrappers.deleteAxios(URL, id)
    // }

    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`
    const hrefLinkUpdate = `${hrefMainPage}/update/${id}`
 

    console.log(' hrefLinkUpdate ', hrefLinkUpdate)

    // console.log('hrefLinkUpdate', hrefLinkUpdate)
    return (
        <>
            <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                <div className='cell'>
                    <div className='original_text'>{original}</div>
                    <div className='translate'>{translate}</div>
                </div>
            </Link>
        </>
    )
}

{
    /* <div className='edit'> 
                <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
                    <IconButton color='secondary' component='label'>
                        <RefreshIcon />
                    </IconButton>
                </Link>

                <IconButton onClick={() => deleteWord(id)} aria-label='delete'>
					<DeleteIcon />
				</IconButton>

                <Link href={`/words/show/${id}`} style={{ textDecoration: 'none' }}>
					<IconButton color='primary' aria-label='upload picture' component='label'>
						<OpenInNewIcon />
					</IconButton>
				</Link>
            </div> */
}
