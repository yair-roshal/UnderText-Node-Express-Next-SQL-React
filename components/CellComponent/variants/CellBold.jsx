// import { Link } from 'components'
// import { useMainPage } from 'hooks'
import { Cell } from '../../Cell'
export const CellBold = (props) => {
  const { id, original, translate } = props
//   const hrefMainPage = useMainPage()
//   const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
      {/* <div className='original_text bold'>{original}</div>
                <div className='translate'>{translate}</div> */}

      <Cell original={original} translate={translate} bold={true} />
      {/* </Link> */}
    </>
  )
}
