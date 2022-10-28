import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { UpdateButton } from 'components'
import axios from 'axios'

export const ExportGraph = graphProp => {
    const [fileName, setFileName] = useState(null)

    useEffect(() => {
        axios
            .post(`http://localhost:5000/files/${graphProp.id}`, graphProp)
            .then(res => {
                setFileName(res.data)
                if (res.status === 200) {
                    alert('Object successfully saved')
                } else Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }, [])

    return (
        <>
            <h1 className='titlePage'>Graph saved in file {fileName}</h1>

            <Link href='/graphs' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}
