import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { HDate, months } from "@hebcal/core"
import { useUsersContext } from "../context/usersContext"
import initialUsersData from "../constants/initialUsersData.json"

export const StyledCell = ({
  original,
  translation,
  bold,
  periodStart,
  periodEnd,
  backgroundColor,
}) => {
  const [shouldShow, setShouldShow] = useState(true)
  // const { usersData, setUsersData } = useUsersContext()
  const { usersData, setUsersData } = useUsersContext(initialUsersData)

  const getVariant = () => {
    if (periodStart == null || periodEnd == null) {
      setShouldShow(true)

      return
    }

    const today = new HDate()
    // console.log('today :>> ', today)

    // console.log('periodStart', periodStart)
    const arrayPeriodStart = periodStart.split("_")
    // console.log('periodEnd', periodEnd)
    const arrayPeriodEnd = periodEnd.split("_")

    const hebrewDateStart = {
      year: today.year,
      month: arrayPeriodStart[1],
      day: ~~arrayPeriodStart[0],
    }

    const hebrewDateEnd = {
      year: today.year,
      month: arrayPeriodEnd[1],
      day: ~~arrayPeriodEnd[0],
    }

    const start = new HDate(
      hebrewDateStart.day,
      hebrewDateStart.month,
      hebrewDateStart.year
    )
    const end = new HDate(
      hebrewDateEnd.day,
      hebrewDateEnd.month,
      hebrewDateEnd.year
    )

    // console.log('start :>> ', start)
    // console.log('end :>> ', end)

    const deltaPeriod = Math.abs(start.deltaDays(end))
    // console.log('deltaDays :>> ', deltaPeriod)

    const deltaTodayToStart = Math.abs(start.deltaDays(today))
    // console.log('deltaTodayToStart :>> ', deltaTodayToStart)

    const deltaTodayToEnd = Math.abs(end.deltaDays(today))
    // console.log('deltaTodayToEnd :>> ', deltaTodayToEnd)

    if (deltaTodayToStart <= deltaPeriod && deltaTodayToEnd <= deltaPeriod) {
      setShouldShow(true)
      console.log("show---------->")
    } else {
      setShouldShow(false)
      console.log("not show---------->")
    }
  }

  useEffect(() => {
    getVariant()
  }, [])

  return shouldShow ? (
    <>
    
    {original && 
        <Box
        className="cell"
        sx={{
          backgroundColor: backgroundColor ? backgroundColor : "#fbeed5",
          fontWeight: bold ? "600" : "400",
          fontFamily: usersData.fontFamily,
          fontSize: `${usersData.fontSize}px !important`,
          border: usersData.borderForCell ? "1px solid #d0d0d0" : "none",
          borderRadius: usersData.borderForCell ? "10px" : "0px",
        }}
      >
        <Box
          sx={{
            fontSize: ~~usersData.fontSize + "px",

            // color: original.length < 2 ? "#c32e2e" : "#0e1468",
            
            color: isNaN(translation)   ?   "#0e1468" : "#c32e2e"

            
          }}
          className="original_text"
        >
          {original.length > 1 ? original : "{" + original + "}"}
           {/* {original} */}
        </Box>

        <Box
          sx={{
            fontSize: `${usersData.fontSize / 2}px !important`,
          }}
          className="translation"
        >
          
          
          {  translation ? translation.toString().toLowerCase() : "---"}
          {/* {typeof translation === "string" ? translation.toLowerCase() : "---"} */}
          
          {/* {console.log('translation >> ', translation)} */}
        </Box>

        {/* <Box className='translation'>{translation.toUpperCase()}</Box> */}
      </Box>
    
    
    }
  
    </>
  ) : null
}
