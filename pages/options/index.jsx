import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { fontFamilyList, fontSizeList } from '../../constants/clientConstants'
import { useUsersContext } from '../../context/usersContext'
import { StyledCell } from 'components/StyledCell'

export default function BasicSelect() {
  const { usersData, setUsersData } = useUsersContext()

  const [options, setOptions] = useState({
    fontSize: '22',
    fontFamily: 'Times New Roman',
    borderForCell: true,
  })

  useEffect(() => {
    const savedOptions = JSON.parse(localStorage.getItem('usersData'))

    if (savedOptions) {
      setOptions(savedOptions)
    }
  }, [])

  useEffect(() => {
    // Обновляем контекст
    setUsersData(options)

    // Сохраняем параметры в LocalStorage
    localStorage.setItem('usersData', JSON.stringify(options))

    console.log('usersData2222_options', usersData)
  }, [options, setUsersData])

  const textExampleHebrew = 'טקסט לדוגמה גודל ומשפחת גופנים בעברית '
  const textExample = 'Текст для примера размера и семейства шрифта на русском'

  const handleDefaultButtonClick = () => {
    const defaultOptions = {
      fontSize: '22',
      fontFamily: 'Times New Roman',
      borderForCell: true,
    }

    setOptions(defaultOptions)
  }

  const handleOptionChange = (event, optionName) => {
    const value = event.target.value
    console.log('value----', value)
    console.log('optionName----', optionName)

    if (optionName === 'borderForCell') {
      setOptions({
        ...options,
        [optionName]: event.target.checked,
      })
      return
    }

    setOptions({
      ...options,
      [optionName]: value,
    })
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
            <Typography variant='h5'>Размер</Typography>

            <Select
              value={options.fontSize}
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
            <Typography variant='h5'>Шрифт</Typography>

            <Select
              value={options.fontFamily}
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

        <Typography variant='h6'>
          Рамка для текста{' '}
          <Checkbox
            checked={options.borderForCell}
            onChange={(event) => handleOptionChange(event, 'borderForCell')}
          />
        </Typography>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant='h4' p={2}>
          Пример :
        </Typography>

        <StyledCell
          // sx={{
          //   fontSize: options.fontSize,
          //   fontFamily: options.fontFamily,
          //   border: options.borderForCell ? '1px solid #d0d0d0' : 'none',
          //   borderRadius: options.borderForCell ? '10px' : '0px',
          // }}
          original={textExampleHebrew}
          translate={textExample}
        />
      </Box>
    </>
  )
}
