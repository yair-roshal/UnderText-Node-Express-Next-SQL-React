import { useState, useEffect } from 'react'
import { AllWords, Loading, Link, StyledButton } from 'components'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'
import { useMainPage } from 'hooks'

import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'

export function Homepage() {
    const hrefMainPage = useMainPage()
    const hrefLinkImport = hrefMainPage + '/import'

    const [words, setWords] = useState(null)
    const [newWords, setNewWords] = useState(JSON.stringify(words))

    useEffect(() => {
        axiosWrappers.getAxios(URL + hrefMainPage).then((value) => {
            setWords(value)
        })
    }, [hrefMainPage])

    useEffect(() => {
        setNewWords(JSON.stringify(words))
    }, [words])

    const getVariant = (word) => {
        if (word.description == 'last') {
            return CellVariants.CellNewLine
        }
        if (word.description == 'bold') {
            return CellVariants.CellBold
        }
        if (word.description == 'title') {
            return CellVariants.CellTitle
        }

        return CellVariants.CellSimple
    }

    const syncPosting = async (stringWords) => {
        const arrayObjectWords = JSON.parse(stringWords)

        for (const objectWord of arrayObjectWords) {
            console.log('objectWord', objectWord)
            await axiosWrappers.postAxios(`${URL}${hrefMainPage}`, { ...objectWord })
        }
    }

    // const handleSubmit = async () => {
        const handleSubmit = async (event) => {
        event.preventDefault()

        console.log('URL + hrefMainPage1111', URL + hrefMainPage)
        await axiosWrappers.deleteAllAxios(URL + hrefMainPage)
        console.log('newWords111', newWords)
        await syncPosting(newWords)
        window.location.reload()
    }

    if (!words) {
        return <Loading />
    }

    return (
        <>
            <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
                <StyledButton variant='contained'>Import Words From File or text </StyledButton>
            </Link>
            <div className='wrapperTextBlock'>
                <div className='formWrapper'>
                    <form onSubmit={handleSubmit}>
                        <textarea
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

                <div className='allWords'>
                    {words.map((word, index) => (
                        <CellComponent key={index} variant={getVariant(word)} {...word} />
                    ))}
                </div>
            </div>
        </>
    )
}
