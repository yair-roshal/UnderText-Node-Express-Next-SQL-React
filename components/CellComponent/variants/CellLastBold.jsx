import { Link } from 'components'
import { useMainPage } from 'hooks'
import { StyledCell } from '../../StyledCell'

export const CellLastBold = (props) => {
  const { id, original, translation, periodStart, periodEnd } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      <StyledCell
        periodStart={periodStart}
        periodEnd={periodEnd}
        original={original}
        translation={translation}
        bold={true}
      />

      <div className='cellFullWidth'></div>
    </>
  )
}
