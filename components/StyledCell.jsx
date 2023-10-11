import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { HDate, months } from '@hebcal/core'

export const StyledCell = ({ original, translate, bold, periodStart, periodEnd }) => {
  const [shouldShow, setShouldShow] = useState(false)

  const getVariant = () => {
    if (periodStart == null || periodEnd == null) {
      setShouldShow(true)

      return
    }

    const today = new HDate()

    console.log('today :>> ', today)
    console.log('today.day :>> ', today.day)

    const arrayPeriodStart = periodStart.split(' ')
    const arrayPeriodEnd = periodEnd.split(' ')

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

    const start = new HDate(hebrewDateStart.day, hebrewDateStart.month, hebrewDateStart.year)
    const end = new HDate(hebrewDateEnd.day, hebrewDateEnd.month, hebrewDateEnd.year)

    console.log('start :>> ', start)
    console.log('end :>> ', end)

    const deltaPeriod = Math.abs(start.deltaDays(end))
    console.log('deltaDays :>> ', deltaPeriod)

    const deltaTodayToStart = Math.abs(start.deltaDays(today))
    console.log('deltaTodayToStart :>> ', deltaTodayToStart)

    const deltaTodayToEnd = Math.abs(end.deltaDays(today))
    console.log('deltaTodayToEnd :>> ', deltaTodayToEnd)

    if (deltaTodayToStart <= deltaPeriod && deltaTodayToEnd <= deltaPeriod) {
      setShouldShow(true)
    } else {
      setShouldShow(false)
    }
  }

  useEffect(() => {
    getVariant()
  }, [])

  return shouldShow ? (
    <Box>
      <Box className='cell' sx={{ fontWeight: bold ? '600' : '400' }}>
        <Box className='original_text'>{original}</Box>
        <Box className='translate'>{translate.toUpperCase()}</Box>
      </Box>
    </Box>
  ) : null
}
