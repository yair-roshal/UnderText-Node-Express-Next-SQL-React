import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'
import { useRouter } from 'next/router'
import { Link, StyledButton } from 'components'
import { useState, useEffect } from 'react'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'

export const AllWords = ({ words }) => {
    const router = useRouter()
    const [newWords, setNewWords] = useState(JSON.stringify(words))

    const namePrayerPage = `/${router.asPath.split('/')[1]}/`
    const hrefLinkImport = router.pathname + '/import'

    // useEffect(() => {}, [])

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
            await axiosWrappers.postAxios(`${URL}${namePrayerPage}`, { ...objectWord })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await axiosWrappers.deleteAllAxios(URL + namePrayerPage)
        await syncPosting(newWords)
        window.location.reload()
    }

    return (
        <>
            <div className='formWrapper'>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type='text'
                        name='newWords'
                        value={newWords}
                        onChange={(e) => setNewWords(e.target.value)}
                    />

                    {/* <button type='submit'>send newWords</button> */}
                    <StyledButton  variant='contained' type='submit'>send newWords</StyledButton>
                    {/* <StyledButton variant='contained'>Import Words From... </StyledButton> */}

                </form>
            </div>

            <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
                <StyledButton variant='contained'>Import Words From... </StyledButton>
            </Link>

            <div className='allWords'>
                {words.map((word, index) => (
                    <CellComponent key={index} variant={getVariant(word)} {...word} />
                ))}
            </div>
        </>
    )
}
