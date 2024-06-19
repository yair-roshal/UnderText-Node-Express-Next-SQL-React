import { useState, useEffect } from "react"
import { Link } from "components"
import { CellComponent } from "./CellComponent/CellComponent"
// import { useUsersContext } from '../context/usersContext'
import { useRouter } from "next/router"

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Box,
  Typography,
} from "@mui/material"
const path = require("path")
// const dataFolderPath = './data' // Путь к папке с данными
const totalPages = 150 // Общее количество страниц

export function TehilimPage(props) {
  const router = useRouter()
console.log('router :>> ', router);
console.log('router.query.id :>> ', router.query.id);

  const [currentPage, setCurrentPage] = useState(router.query.id)
  const [textData, setTextData] = useState()
  const [availableFiles, setAvailableFiles] = useState([])

  useEffect(() => {
    setTextData(props.data)
    setAvailableFiles(props.files)
  }, [props])

  const handlePageChange = (event) => {
    const selectedPage = Number(event.target.value)
    setCurrentPage(selectedPage)
    router.push(`/tehilim/${selectedPage}`)
    console.log('selectedPage :>> ', selectedPage);
  }

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1
    if (previousPage >= 1) {
      setCurrentPage(previousPage)
      router.push(`/tehilim/${previousPage}`)
    }
    
    
    
  }

  const handleNextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage)
      router.push(`/tehilim/${nextPage}`)
    }
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <Typography>Выберите страницу</Typography>
          <Select
            sx={{
              width: "300px",
            }}
            fullWidth
            value={router.query.id}
            onChange={handlePageChange}
          >
          
            
            {[...Array(150).keys()].map((index) => (
  <MenuItem key={index} value={index + 1}>
    {index + 1}
  </MenuItem>
))}

            
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          padding: "50px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Предыдущая
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Следующая
        </Button>
      </Box>

      <div className="wrapperTextBlock">
        <div className="allWords">
          {textData &&
            textData.map((word, index) => (
              <CellComponent key={index} {...word} />
            ))}
        </div>
      </div>

      <Box
        sx={{
          padding: "50px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Предыдущая
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Следующая
        </Button>
      </Box>
    </>
  )
}
