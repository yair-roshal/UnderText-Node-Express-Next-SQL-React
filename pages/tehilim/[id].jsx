import { useState, useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
// import axios from 'axios'
import { useRouter } from 'next/router';
import { Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
const totalPages = 150; // Общее количество страниц
import CellComponent from '../../components/CellComponent/CellComponent';

import path from 'path';
import fs from 'fs/promises';
import { TehilimPage } from 'components'

export async function getServerSideProps({ params }) {
  console.log('params.slug---------->>', params.slug);
  try {
    let data = [];

    const fileData = await fs.readFile(path.join(process.cwd(), 'data/tehilim', `${params.id}.json`), 'utf-8');
    const fileJsonData = JSON.parse(fileData);
    const tableObject = fileJsonData.find((obj) => obj.type === 'table');
    data = data.concat(tableObject ? tableObject.data : []);

    console.log('data.length', data.length);

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
    };
  } catch (error) {
    console.error('Error:', error);
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
    };
  }
}

export default TehilimPage


// export default function BasicSelect(props) {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log('id', id);

//   console.log('props', props);

//   const [currentPage, setCurrentPage] = useState(id || 1);
//   const [textData, setTextData] = useState([] || props.data);

//   useEffect(() => {
//     setTextData(props.data);
//   }, []);

//   const handlePageChange = (event) => {
//     setCurrentPage(event.target.value);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <div className="wrapperTextBlock">
//         <div className="allWords">{textData.length > 0 && textData.map((word, index) => <CellComponent key={index} {...word} />)}</div>
//       </div>

//       <FormControl>
//         <InputLabel>Выберите страницу</InputLabel>
//         <Select value={currentPage} onChange={handlePageChange}>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <MenuItem key={index + 1} value={index + 1}>
//               {index + 1}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <Button variant="contained" color="primary" onClick={handlePreviousPage} disabled={currentPage === 1}>
//         Предыдущая
//       </Button>
//       <Button variant="contained" color="primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
//         Следующая
//       </Button>
//     </Box>
//   );
// }
