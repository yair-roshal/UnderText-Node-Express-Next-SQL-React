import { useState, useEffect } from 'react'
import { Link, UpdateButton } from 'components'
import axios from 'axios'

export const ExportWord = (wordProp) => {
    const [fileName, setFileName] = useState(null)

    useEffect(() => {
        axios
            .post(`http://localhost:5000/files/${wordProp.id}`, wordProp)
            .then((res) => {
                setFileName(res.data)
                if (res.status === 200) {
                    alert('Object successfully saved')
                } else Promise.reject()
            })
            .catch((err) => alert('Something went wrong'))
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
