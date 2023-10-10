import React from 'react'; // Импортируем React, чтобы использовать JSX
import { Box } from '@mui/material';

export const Cell = ({ original, translate, bold }) => {
  return (
    <Box className='cell' sx={{ fontWeight: bold ? '600' : '400' }}>
      <Box className='original_text'>{original}</Box>
      <Box className='translate'>{translate.toUpperCase()}</Box>
      {/* <Box className='translate'>{translate.toLowerCase()}</Box> */}
    </Box>
  );
};
