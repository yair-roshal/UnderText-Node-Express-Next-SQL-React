import { Link, Header } from 'components'
import { useMainPage } from 'hooks'

export const CellTitle = (props) => {
  const { id, original, translate, periodStart, periodEnd } = props
  const hrefMainPage = useMainPage()
  const hrefLinkShow = `${hrefMainPage}/update/${id}`

  return (
    <>
      {/* <Link href={hrefLinkShow} style={{ textDecoration: 'none' }}> */}
      <div className='cellFullWidth'></div>

      <Header
        name={original}
        translate={translate}
        periodStart={periodStart}
        periodEnd={periodEnd}
      />
      {/* </Link> */}
      <div className='cellFullWidth'></div>
    </>
  )
}
