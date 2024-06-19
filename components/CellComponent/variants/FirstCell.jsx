import { Link } from 'components'
import { useMainPage } from 'hooks'
import { StyledCell } from '../../StyledCell'

export const FirstCell = (props) => {
  const { id, original, translation, periodStart, periodEnd } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      <div className='cellFullWidth'></div>

      <StyledCell
        original={original}
        translation={translation}
        bold={true}
        periodStart={periodStart}
        periodEnd={periodEnd}
      />
    </>
  )
}
