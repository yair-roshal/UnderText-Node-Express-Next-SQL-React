import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { fontFamilyList, fontSizeList } from '../../constants/clientConstants'

export default function BasicSelect() {
    const [fontSize, setFontSize] = React.useState('')
    const [fontFamily, setFontFamily] = React.useState('')

    const fontSizeHandleChange = (event) => {
        setFontSize(event.target.value)
    }

    const fontFamilyHandleChange = (event) => {
        setFontFamily(event.target.value)
    }

    return (
        <>
            <h1>Options</h1>
            <Box sx={{ minWidth: 120 }}>
                {/* <FormControl sx={{ width: 220 }}> */}
                <FormControl fullWidth>
                <h3>font-size</h3>

                {/* <InputLabel id='fontSize-select-label'>font-size</InputLabel> */}
                <Select
                    labelId='fontSize-select-label'
                    value={fontSize}
                    label='fontSize'
                    onChange={fontSizeHandleChange}
                >
                    {console.log('fontSizeList', fontSizeList)}
                    {fontSizeList.map((fontSize) => {
                        // <MenuItem value={fontSize}>{fontSize}</MenuItem>
                        <MenuItem value={11}>111</MenuItem>
                        console.log('fontSize', fontSize)

                    })}

                </Select>
                </FormControl>

                <FormControl sx={{ width: 220 }}>
                <h3>font-family</h3>
                {/* <InputLabel id='fontFamily-select-label'>font-size</InputLabel> */}

                <Select
                    labelId='fontFamily-select-label'
                    value={fontFamily}
                    label='fontFamily'
                    onChange={fontFamilyHandleChange}
                >
                    {console.log('fontFamilyList', fontFamilyList)}
                    {fontFamilyList.map((fontFamily) => {
                         <MenuItem value={fontFamily}>{fontFamily}</MenuItem>
                    })}
                </Select>
                </FormControl>
            </Box>
        </>
    )
}
