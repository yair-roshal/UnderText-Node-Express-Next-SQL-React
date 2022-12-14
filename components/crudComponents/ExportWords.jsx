import { useState, useEffect } from 'react'
import { Link } from 'components'
import { StyledButton } from 'styles'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'

// todo: make it if it is need

export const ExportWords = (wordProp) => {
    const [fileName, setFileName] = useState(null)

    useEffect(() => {
        axiosWrappers.postAxios(URL + '/files/' + wordProp.id, wordProp, setFileName)
    }, [])

    return (
        <>
            <h1 className='titlePage'>Word saved in file {fileName}</h1>

            <Link href='/words' style={{ textDecoration: 'none' }}>
                <StyledButton variant='contained'>Back</StyledButton>
            </Link>
        </>
    )
}
