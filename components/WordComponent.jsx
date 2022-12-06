import { useState, useEffect } from 'react'
import { Link } from 'components'
import { UpdateButton } from 'components'

export const WordComponent = (word) => {
    const { id, json } = word
    const [preparedData, setPreparedData] = useState([])
    const [error, setError] = useState(false)

    return (
        <>
            <Link href={`/words/update/${id}`} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Update</UpdateButton>
            </Link>
            <Link href={`/words/`} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>

            <h1 className='subTitle'>{`Word id: ${id} `}</h1>

            {!error && (
                <div>
                    <div className='wordWrapper'>
                     </div>

                    <div className='flexWrapper'>
                        <div className='item'>
                            <h2>Data from Server:</h2>
                            <pre className='textJSON'>{json}</pre>
                        </div>

                        <div className='item'>
                            <h2>Prepared Data:</h2>
                            <pre className='textJSON'>
                                {JSON.stringify(preparedData, undefined, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div>
                    <h1 className='subTitle'>JSON Data is incorrect</h1>
                </div>
            )}
        </>
    )
}
