import { Link } from 'components'
import { useMainPage } from 'hooks'
import { StyledCell } from '../../StyledCell'
import { Box } from '@mui/material'

// import styled from 'styled-components' // Импортируйте styled-components
import { styled } from '@mui/material/styles'

const GreyCellContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'grey',
}))

export const GreyCell = (props) => {
  const { id, original, translate, periodStart, periodEnd } = props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <GreyCellContainer>
      <StyledCell
        sx={{ backgroundColor: '#d0d0d0' }}
        original={original}
        translate={translate}
        bold={false}
        periodStart={periodStart}
        periodEnd={periodEnd}
      />
    </GreyCellContainer>
  )
}
