import { useState, useEffect } from 'react'
import { Loading, Link, StyledButton, ImportButton } from 'components'
import { axiosWrappers } from 'helpers'
import { useMainPage } from 'hooks'
import { CellComponent } from './CellComponent/CellComponent'
import { CellVariantsArray, URL } from 'constants'

import {
    // toJewishDate,
    // formatJewishDate,
    // toHebrewJewishDate,
    // formatJewishDateInHebrew,
    toGregorianDate,
    // JewishMonth,
} from 'jewish-date'

export function Homepage() {
    const hrefMainPage = useMainPage()
    const hrefLinkImport = hrefMainPage + '/import'

    const [words, setWords] = useState(null)
    const [newWords, setNewWords] = useState(JSON.stringify(words))

    useEffect(() => {
        axiosWrappers.getAxios(URL + hrefMainPage).then((value) => {
            console.log('value!!!', value)
            setWords(value)
        })
    }, [hrefMainPage])

    useEffect(() => {
        setNewWords(JSON.stringify(words))
    }, [words])

    
    
    
    // const getVariant = (word) => {
    //     console.log('word_0000 :>> ', word)

    //     const hebrewDateToday = new Intl.DateTimeFormat('en-u-ca-hebrew', {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric',
    //     }).format(new Date())

    //     console.log('------------')

    //     const arrayHebrewDateToday = hebrewDateToday.split(' ')
    //     console.log('arrayHebrewDateToday :>> ', arrayHebrewDateToday)

    //     const arrayPeriodStart = word.periodStart.split(' ')
    //     const arrayPeriodEnd = word.periodEnd.split(' ')

    //     console.log('arrayPeriodStart', arrayPeriodStart)
    //     console.log('arrayPeriodEnd', arrayPeriodEnd)

    //     const startObj = {
    //         year: arrayHebrewDateToday[2],
    //         monthName: arrayPeriodStart[1],
    //         day: Number(arrayPeriodStart[0]),
    //     }
    //     console.log('startObj', startObj)

    //     const GregorianDateStart = toGregorianDate(startObj)

    //     const endObj = {
    //         year: arrayHebrewDateToday[2],
    //         monthName: arrayPeriodEnd[1],
    //         day: Number(arrayPeriodEnd[0]),
    //     }
    //     console.log('endObj', endObj)

    //     const GregorianDateEnd = toGregorianDate(endObj)
    //     console.log(GregorianDateStart)
    //     console.log(GregorianDateEnd)

    //     const dateToday = new Date()

    //     console.log(
    //         'GregorianDateStart > dateToday :>> ',
    //         GregorianDateStart > dateToday,
    //     )
    //     console.log(
    //         'GregorianDateEnd < dateToday :>> ',
    //         GregorianDateEnd < dateToday,
    //     )
    //     console.log('GregorianDateStart != ', GregorianDateStart != '')
    //     if (
    //         arrayPeriodStart != '' &&
    //         arrayPeriodEnd != '' &&
    //         (GregorianDateStart > dateToday || GregorianDateEnd < dateToday)
    //     ) {
    //         console.log('innnnnn')
    //         return 'CellDisable'
    //         // return null
    //     }
    //     console.log('11111 :>> ')
    //     for (const cellObject of CellVariantsArray) {
    //         if (word.description === cellObject.type) {
    //             return cellObject.component
    //         }
    //     }
    // }

    const syncPosting = async (stringWords) => {
        const arrayObjectWords = JSON.parse(stringWords)

        for (const objectWord of arrayObjectWords) {
            console.log('objectWord', objectWord)
            await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, {
                ...objectWord,
            })
        }
    }

    // const handleSubmit = async () => {
    const handleSubmit = async (event) => {
        event.preventDefault()

        await axiosWrappers.deleteAllAxios(URL + hrefMainPage)
        await syncPosting(newWords)
        window.location.reload()
    }

    if (!words) {
        return <Loading />
    }

    return (
        <>
            <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
                <ImportButton variant='contained'>
                    Import Words From File or text{' '}
                </ImportButton>
            </Link>
            <div className='wrapperTextBlock'>
                <div className='allWords'>
                    {words.map((word, index) => (
                        <CellComponent
                            key={index}
                            // variant={getVariant(word)}
                            {...word}
                        />
                    ))}
                </div>

                <div className='formWrapperJSON'>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className='homePage'
                            type='text'
                            name='newWords'
                            value={newWords}
                            onChange={(e) => setNewWords(e.target.value)}
                        />

                        <StyledButton variant='contained' type='submit'>
                            change
                        </StyledButton>
                    </form>
                </div>
            </div>
        </>
    )
}
