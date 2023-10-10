import { Link } from 'components'
import { useMainPage } from 'hooks'
import styles from './cells.module.css'
// import styles from './cells.module.scss'
import { Box } from '@mui/material'

export const CellSimple = (props) => {
  const { id, original, translate } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  const boxStyle = {
    color: styles.primaryColor, // Apply the color directly
    textDecoration: 'none',
  }

  return (
    <>
      <Link href={hrefLinkUpdate} style={{ textDecoration: 'none' }}>
        <Box style={boxStyle}>
          <Box className={styles.original_text}>{original}</Box>
          <Box className={styles.translate}>{translate}</Box>
        </Box>
      </Link>
    </>
  )
}
