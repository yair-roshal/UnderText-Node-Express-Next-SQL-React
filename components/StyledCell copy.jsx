import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const StyledCell = ({ original, translate, bold, periodStart, periodEnd }) => {
  const [shouldShow, setShouldShow] = useState(false);

  const getVariant = () => {
    if (periodStart == null || periodEnd == null) {
      setShouldShow(true);
      return;
    }

    const hebrewDateToday = new Intl.DateTimeFormat('en-u-ca-hebrew', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(new Date());

    const arrayHebrewDateToday = hebrewDateToday.split(' ');
    const hebrewDateTodayObject = {
      year: arrayHebrewDateToday[2],
      month: arrayHebrewDateToday[1],
      day: ~~arrayHebrewDateToday[0],
    };

    const arrayPeriodStart = periodStart.split(' ');
    const arrayPeriodEnd = periodEnd.split(' ');

    const hebrewDateStart = {
      year: arrayHebrewDateToday[2],
      month: arrayPeriodStart[1],
      day: ~~arrayPeriodStart[0],
    };

    const hebrewDateEnd = {
      year: arrayHebrewDateToday[2],
      month: arrayPeriodEnd[1],
      day: ~~arrayPeriodEnd[0],
    };

    
     console.log('hebrewDateTodayObject', hebrewDateTodayObject)
      console.log('hebrewDateStart', hebrewDateStart)
      console.log('hebrewDateEnd', hebrewDateEnd)
    if (
      hebrewDateTodayObject.year === hebrewDateStart.year &&
      hebrewDateTodayObject.year === hebrewDateEnd.year &&
      hebrewDateTodayObject.month >= hebrewDateStart.month &&
      hebrewDateTodayObject.month <= hebrewDateEnd.month
    ) {
      if (
        (hebrewDateTodayObject.month === hebrewDateStart.month && hebrewDateTodayObject.day >= hebrewDateStart.day) ||
        (hebrewDateTodayObject.month === hebrewDateEnd.month && hebrewDateTodayObject.day <= hebrewDateEnd.day) ||
        (hebrewDateTodayObject.month !== hebrewDateStart.month && hebrewDateTodayObject.month !== hebrewDateEnd.month)
      ) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
    } else {
      setShouldShow(false);
    }
  };

  useEffect(() => {
    getVariant();
  }, []);

  return shouldShow ? (
    <Box>
      <Box className='cell' sx={{ fontWeight: bold ? '600' : '400' }}>
        <Box className='original_text'>{original}</Box>
        <Box className='translate'>{translate.toUpperCase()}</Box>
      </Box>
    </Box>
  ) : null;
};
