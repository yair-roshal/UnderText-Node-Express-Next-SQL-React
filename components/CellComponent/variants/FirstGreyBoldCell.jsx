import { Link } from "components"
import { useMainPage } from "hooks"
import { StyledCell } from "../../StyledCell"
import { Box } from "@mui/material"

// import styled from 'styled-components' // Импортируйте styled-components
import { styled } from "@mui/material/styles"

const GreyCellContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "grey",
}))

export const FirstGreyBoldCell = (props) => {
  const { id, original, translate, periodStart, periodEnd, backgroundColor } =
    props
  const hrefMainPage = useMainPage()
  const hrefLinkUpdate = `${hrefMainPage}/update/${id}`

  return (
    <>
      <div className="cellFullWidth"></div>

      <GreyCellContainer>
        <StyledCell
          backgroundColor={"grey"}
          original={original}
          translate={translate}
          bold={true}
          periodStart={periodStart}
          periodEnd={periodEnd}
        />
      </GreyCellContainer>
    </>
  )
}
