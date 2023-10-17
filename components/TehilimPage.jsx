import { useState, useEffect } from 'react'
import { Link } from 'components'
import { CellComponent } from './CellComponent/CellComponent'
import { useUsersContext } from '../context/usersContext'
import { useRouter } from 'next/router'

import { Button, FormControl, MenuItem, Select, Box, Typography } from '@mui/material'
const totalPages = 150 // Общее количество страниц
// const totalPages = 29 // Общее количество страниц

export function TehilimPage(props) {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)
  const [textData, setTextData] = useState()

  useEffect(() => {
    setTextData(props.data)
  }, [props])

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value)
    router.push(`/tehilim/${event.target.value}`)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      <Box
        sx={{
          // paddingTop: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {' '}
        <FormControl>
          <Typography>Выберите страницу</Typography>
          <Select
            sx={{
              width: '300px',
            }}
            fullWidth
            value={currentPage}
            onChange={handlePageChange}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          padding: '50px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Link href={`${currentPage - 1}`}>
          <Button variant='contained' color='primary' onClick={handlePreviousPage} disabled={currentPage === 1}>
            Предыдущая
          </Button>
        </Link>

        <Link href={`${currentPage + 1}`}>
          <Button variant='contained' color='primary' onClick={handleNextPage} disabled={currentPage === totalPages}>
            Следующая
          </Button>
        </Link>
      </Box>

      <div className='wrapperTextBlock'>
        <div className='allWords'>{textData && textData.map((word, index) => <CellComponent key={index} {...word} />)}</div>
      </div>

      <Box
        sx={{
          padding: '50px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Link href={`${currentPage - 1}`}>
          <Button variant='contained' color='primary' onClick={handlePreviousPage} disabled={currentPage === 1}>
            Предыдущая
          </Button>
        </Link>

        <Link href={`${currentPage + 1}`}>
          <Button variant='contained' color='primary' onClick={handleNextPage} disabled={currentPage === totalPages}>
            Следующая
          </Button>
        </Link>
      </Box>
    </>
  )
}
