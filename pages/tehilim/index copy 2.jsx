import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
 import CellComponent from '../../components/CellComponent/CellComponent';
const totalPages = 150; // Общее количество страниц

export default function BasicSelect() {
  const [currentPage, setCurrentPage] = useState(1);
  const [textData, setTextData] = useState(null);

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="wrapperTextBlock">
        <div className="allWords">{textData && textData.map((word, index) => <CellComponent key={index} {...word} />)}</div>
      </div>

      <FormControl>
        <InputLabel>Выберите страницу</InputLabel>
        <Select value={currentPage} onChange={handlePageChange}>
          {Array.from({ length: totalPages }, (_, index) => (
            <MenuItem key={index + 1} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handlePreviousPage} disabled={currentPage === 1}>
        Предыдущая
      </Button>
      <Button variant="contained" color="primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Следующая
      </Button>
    </Box>
  );
}
