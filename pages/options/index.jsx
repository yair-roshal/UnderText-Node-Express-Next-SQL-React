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
import initialUsersData from '../../constants/initialUsersData.json'

export default function BasicSelect() {
  const { usersData, setUsersData } = useUsersContext()

  const [options, setOptions] = useState(initialUsersData)

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

    console.log('usersData2222_options', options)
  }, [options, setUsersData])

  const textExampleHebrew = 'אַשְׁרֵי יוֹשְׁבֵי בֵיתֶֽךָ עוֹד יְהַלְלֽוּךָ סֶּֽלָה '
  const textExample = 'счастливы сидячие в доме твоем (и) еще восхвалят тебя'

  const handleDefaultButtonClick = () => {
    const defaultOptions = {
      fontSize: '26',
      fontFamily: 'Times New Roman',
      borderForCell: 'true',
    }

    setOptions(defaultOptions)
  }

  const handleOptionChange = (event, optionName) => {
    const value = optionName === 'borderForCell' ? event.target.checked : event.target.value

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
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <FormControl sx={{ width: '100%' }}>
            <Typography variant='h5'>Размер</Typography>

            <Select value={options.fontSize} onChange={(event) => handleOptionChange(event, 'fontSize')}>
              {fontSizeList.map((fontSize) => (
                <MenuItem key={fontSize} value={fontSize}>
                  {fontSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: '100%' }}>
            <Typography variant='h5'>Шрифт</Typography>

            <Select value={options.fontFamily} onChange={(event) => handleOptionChange(event, 'fontFamily')}>
              {fontFamilyList.map((fontFamily) => (
                <MenuItem key={fontFamily} value={fontFamily}>
                  {fontFamily}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button sx={{ width: '300px', height: '50px', paddingLeft: 2, m: 2 }} variant='contained' onClick={handleDefaultButtonClick}>
            По умолчанию
          </Button>
        </Box>

        <Typography variant='h6'>
          Рамка для текста <Checkbox checked={options.borderForCell} onChange={(event) => handleOptionChange(event, 'borderForCell')} />
        </Typography>
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
