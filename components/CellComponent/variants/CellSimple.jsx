import { Link } from 'components'
import { useMainPage } from 'hooks'
import { StyledCell } from '../../StyledCell'

export const CellSimple = (props) => {
  const { id, original, translate, periodStart, periodEnd } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      {/* <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}> */}
      <StyledCell
        original={original}
        translate={translate}
        periodStart={periodStart}
        periodEnd={periodEnd}
        bold={false}
      />

      {/* </Link> */}
    </>
  )
}
