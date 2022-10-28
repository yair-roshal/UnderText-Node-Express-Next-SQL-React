import React, { useState, useEffect } from 'react'
import { Link } from 'components'
import { AllWords } from 'components'
import { Loading } from 'components'
import { Header } from 'components'
import axios from 'axios'

export default function Index() {
    const [words, setWords] = useState(null)
    const URL = 'http://localhost:5000/'

    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                setWords(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (!words) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='titlePage'>Word</h1>
            <div className='wrapperAllWords'>
                <Header />
                <AllWords words={words} />




            </div>
        </div>
    )
}
