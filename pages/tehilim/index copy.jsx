import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import fs from 'fs/promises';
// import fs from 'fs/promises';
import path from 'path';
const totalPages = 150; // Общее количество страниц
import CellComponent from '../../components/CellComponent/CellComponent';

export async function getServerSideProps({ params }) {
  console.log('url_params_slug ', `${URL}/${params.slug}`)

  try {
    let data = []

       const fileData = await fs.readFile(
        path.join(process.cwd(), 'data', `${id}.json`),
        'utf-8',
      )
      const fileJsonData = JSON.parse(fileData)
      const tableObject = fileJsonData.find((obj) => obj.type === 'table')
      data = data.concat(tableObject ? tableObject.data : [])

    console.log('data.length', data.length)

    return {
      props: {
        data:
          data.length > 0
            ? data
            : [
                {
                  id: 1,
                  original: 'no data in this file json',
                  translate: `data.length = ${data.length} `,
                  description: null,
                  periodStart: null,
                  periodEnd: null,
                },
              ],
      },
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      props: {
        data: [
          {
            id: 1,
            original: 'Error',
            translate: `${error} `,
            description: null,
            periodStart: null,
            periodEnd: null,
          },
        ],
      },
    }
  }
}

export default function BasicSelect() {
  const [currentPage, setCurrentPage] = useState(1);
  const [textData, setTextData] = useState();

  let data = [];

  const fileData = fs.readFile(
    // const fileData = await fs.readFile(
    path.join(process.cwd(), 'data/tehilim', `${currentPage}.json`),
    'utf-8',
  );
  const fileJsonData = JSON.parse(fileData);
  const tableObject = fileJsonData.find((obj) => obj.type === 'table');
  data = data.concat(tableObject ? tableObject.data : []);
  setTextData(data);

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
        <div className="allWords">
          {textData.map((word, index) => (
            <CellComponent key={index} {...word} />
          ))}
        </div>
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
