// import { Link } from 'components'
// import { useMainPage } from 'hooks'
import { StyledCell } from '../../StyledCell'
export const CellBold = (props) => {
  const { id, original, translate, periodStart, periodEnd } = props
  //   const hrefMainPage = useMainPage()
  //   const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
      {/* <div className='original_text bold'>{original}</div>
                <div className='translate'>{translate}</div> */}

      <StyledCell
        original={original}
        translate={translate}
        periodStart={periodStart}
        periodEnd={periodEnd}
        bold={true}
      />
      {/* </Link> */}
    </>
  )
}
