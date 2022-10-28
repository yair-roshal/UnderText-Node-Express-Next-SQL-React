import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { AllGraphs } from 'components'
import { Loading } from 'components'
import { Header } from 'components'
import axios from 'axios'

export default function Index() {
    const [graphs, setGraphs] = useState(null)
    const URL = 'http://localhost:5000/'

    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                setGraphs(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (!graphs) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='titlePage'>Graph D3</h1>
            <div className='wrapperAllGraphs'>
                <Header />
                <AllGraphs graphs={graphs} />

                <div className='wrapperButton'>
                    <Link href='/graphs/add' className='button'>
                        <span>Add Graph </span>
                    </Link>
                </div>
                <div className='wrapperButton'>
                    <Link href='/graphs/import' className='button'>
                        <span>Import Graph </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
