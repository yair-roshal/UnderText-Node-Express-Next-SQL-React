import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button' // Импортируем кнопку

import { fontFamilyList, fontSizeList } from '../../constants/clientConstants'
import { useUsersContext } from '../../context/usersContext'
import { useEffect } from 'react'

export default function BasicSelect() {
  // const { userOption, setUserOption } = useUserOptionContext();
  const { usersData, setUsersData } = useUsersContext()

  const [fontSize, setFontSize] = React.useState('')
  const [fontFamily, setFontFamily] = React.useState('')
  const [textOnlyToDate, setTextOnlyToDate] = React.useState(true) // Стейт для чекбокса

  useEffect(() => {
    // Заполняем стейты из контекста
    setFontSize(usersData.fontSize)
    setFontFamily(usersData.fontFamily)
    setTextOnlyToDate(usersData.textOnlyToDate)

    console.log('usersData :>> ', usersData)
  }, [usersData])

  const fontSizeHandleChange = (event) => {
    setFontSize(event.target.value)

    // Сохраняем выбранный font-size в контекст
    setUsersData({ ...usersData, fontSize: event.target.value })
  }

  const fontFamilyHandleChange = (event) => {
    setFontFamily(event.target.value)

    // Сохраняем выбранный font-family в контекст
    setUsersData({ ...usersData, fontFamily: event.target.value })
  }

  const textOnlyToDateHandleChange = (event) => {
    setTextOnlyToDate(event.target.checked)

    // Сохраняем состояние чекбокса в контекст
    setUsersData({ ...usersData, textOnlyToDate: event.target.checked })
  }

  const handleDefaultButtonClick = () => {
    // Устанавливаем значения по умолчанию
    setFontFamily('Times New Roman')
    setFontSize(22)
    setTextOnlyToDate(true)

    // Обновляем контекст
    setUsersData({
      ...usersData,
      fontFamily: 'Times New Roman',
      fontSize: 22,
      textOnlyToDate: true,
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
            // paddingTop: '90px',
            display: 'flex',
            alignItems: 'bottom',
            justifyContent: 'start',
          }}
        >
          <FormControl sx={{ width: 220 }}>
            <Typography variant='h5'>Font size</Typography>
            <Select
              labelId='fontSize-select-label'
              value={fontSize}
              label='fontSize'
              onChange={fontSizeHandleChange}
            >
              {fontSizeList.map((fontSize) => (
                <MenuItem key={fontSize} value={fontSize}>
                  {fontSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: 220, paddingLeft: 2 }}>
            <Typography variant='h5'>Font family</Typography>

            <Select
              labelId='fontFamily-select-label'
              value={fontFamily}
              label='fontFamily'
              onChange={fontFamilyHandleChange}
            >
              {fontFamilyList.map((fontFamily) => (
                <MenuItem key={fontFamily} value={fontFamily}>
                  {fontFamily}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button sx={{ m: 3 }} variant='contained' onClick={handleDefaultButtonClick}>
            Default
          </Button>
        </Box>

        <Typography variant='h6'>
          text only to this date (without additional text to all year){' '}
          <Checkbox checked={textOnlyToDate} onChange={textOnlyToDateHandleChange} />
        </Typography>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography
          sx={{
            fontFamily: usersData.fontFamily,
            fontSize: `${usersData.fontSize}px !important`,
            border: '1px solid black',
            borderRadius: '5px',
            width: 'fit-content',
            padding: '10px',
          }}
        >
          Text For Example Size and Font Family in English
        </Typography>
        <Typography
          sx={{
            fontFamily: usersData.fontFamily,
            fontSize: `${usersData.fontSize}px !important`,
            border: '1px solid black',
            borderRadius: '5px',
            width: 'fit-content',
            padding: '10px',
            margin: '20px 0 ',
          }}
        >
          טקסט לדוגמה גודל ומשפחת גופנים בעברית
        </Typography>
      </Box>
    </>
  )
}
