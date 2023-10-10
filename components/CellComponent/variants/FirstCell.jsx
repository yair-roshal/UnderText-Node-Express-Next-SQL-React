import { Link } from 'components'
import { useMainPage } from 'hooks'
import { Cell } from '../../Cell'

export const FirstCell = (props) => {
  const { id, original, translate } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      <div className='cellFullWidth'></div>

      <Cell original={original} translate={translate} bold={true} />
    </>
  )
}
