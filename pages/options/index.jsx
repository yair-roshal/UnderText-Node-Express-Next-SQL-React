import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import StyledCell from '../../components/StyledCell'

import { fontFamilyList, fontSizeList } from '../../constants/clientConstants'
import { useUsersContext } from '../../context/usersContext'
import { StyledCell } from 'components/StyledCell'

export default function BasicSelect() {
  const { usersData, setUsersData } = useUsersContext()

  const [options, setOptions] = useState({
    fontSize: '',
    fontFamily: '',
    textOnlyToDate: true,
  })

  useEffect(() => {
    const savedOptions = JSON.parse(localStorage.getItem('userOptions'))

    if (savedOptions) {
      setOptions(savedOptions)
    }
  }, [])

  useEffect(() => {
    // Обновляем контекст
    setUsersData(options)

    // Сохраняем параметры в LocalStorage
    localStorage.setItem('userOptions', JSON.stringify(options))
  }, [options, setUsersData])

  const handleOptionChange = (event, option) => {
    const value = event.target.value
    setOptions({
      ...options,
      [option]: value,
    })
  }

  const textExampleHebrew = 'טקסט לדוגמה גודל ומשפחת גופנים בעברית '
  const textExample = 'Текст для примера размера и семейства шрифта на русском'

  const handleDefaultButtonClick = () => {
    const defaultOptions = {
      fontSize: '22',
      fontFamily: 'Times New Roman',
      textOnlyToDate: true,
    }

    setOptions(defaultOptions)
  }

  return (
    <>
      <Box sx={{ minWidth: 120, p: 4 }}>
        <Typography variant='h3' sx={{ padding: '20px 0px' }}>
          Options
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',

            justifyContent: 'space-around',
          }}
        >
          <FormControl sx={{ width: '100%' }}>
            <Typography variant='h5'>Размер шрифта</Typography>
            <Select
              labelId='fontSize-select-label'
              value={options.fontSize}
              label='fontSize'
              onChange={(event) => handleOptionChange(event, 'fontSize')}
            >
              {fontSizeList.map((fontSize) => (
                <MenuItem key={fontSize} value={fontSize}>
                  {fontSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: '100%', paddingLeft: 2 }}>
            <Typography variant='h5'>Семейство шрифта</Typography>

            <Select
              labelId='fontFamily-select-label'
              value={options.fontFamily}
              label='fontFamily'
              onChange={(event) => handleOptionChange(event, 'fontFamily')}
            >
              {fontFamilyList.map((fontFamily) => (
                <MenuItem key={fontFamily} value={fontFamily}>
                  {fontFamily}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            sx={{ width: '300px', height: '50px', paddingLeft: 2, m: 2 }}
            // sx={{ width: '100%', paddingLeft: 2, m: 2 }}
            variant='contained'
            onClick={handleDefaultButtonClick}
          >
            По умолчанию
          </Button>
        </Box>

        {/* <Typography variant='h6'>
          Только текст на эту дату (без дополнительного текста на весь год){' '}
          <Checkbox
            checked={options.textOnlyToDate}
            onChange={(event) => handleOptionChange(event, 'textOnlyToDate')}
          />
        </Typography> */}
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant='h4' p={2}>
          Пример :
        </Typography>

        <StyledCell original={textExampleHebrew} translate={textExample} />
      </Box>
    </>
  )
}
