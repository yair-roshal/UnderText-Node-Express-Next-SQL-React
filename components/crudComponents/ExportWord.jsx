import { useState, useEffect } from 'react'
import { Link, UpdateButton } from 'components'
import { axiosWrappers } from 'helpers'

export const ExportWord = (wordProp) => {
    const [fileName, setFileName] = useState(null)

    useEffect(() => {
        axiosWrappers.postAxios(URL + '/files/' + wordProp.id, wordProp, setFileName)
    }, [])

    return (
        <>
            <h1 className='titlePage'>Word saved in file {fileName}</h1>

            <Link href='/words' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}
