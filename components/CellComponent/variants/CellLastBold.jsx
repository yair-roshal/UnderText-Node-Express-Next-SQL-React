import { Link } from 'components'
import { useMainPage } from 'hooks'
import { Cell } from '../../Cell'

export const CellLastBold = (props) => {
  const { id, original, translate } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      <Cell original={original} translate={translate} bold={true} />

      <div className='cellFullWidth'></div>
    </>
  )
}
