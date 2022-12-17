import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'
import { useRouter } from 'next/router'
import { Link, UpdateButton } from 'components'
import { useState, useEffect } from 'react'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'

export const AllWords = ({ words }) => {
    const router = useRouter()

    const namePrayerPage = `/${router.asPath.split('/')[1]}/`
    const hrefLinkImport = router.pathname + '/import'

    // deleteWord(id) {
    // 	axios.delete('http://localhost:5000/words/' + id)
    // 	  .then(response => {console.log(response.data)});

    // 	this.setState({
    // 	  words: this.state.words.filter(el => el._id !== id)
    // 	})
    //   }

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

    const [newWords, setNewWords] = useState(JSON.stringify(words))

    const handleSubmit = async (event) => {
        event.preventDefault()
        await axiosWrappers.deleteAllAxios(URL + namePrayerPage)
    }

    // const updateWordItem = async (wordObject) => {
    //     await axiosWrappers.putAxios(
    //         URL + `/${router.asPath.split('/')[1]}/` + wordProp.id,
    //         wordObject,
    //     )
    // }

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

                    <button type='submit'>send newWords</button>
                </form>
            </div>

            <Link href={hrefLinkImport} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Import Words From... </UpdateButton>
            </Link>

            <div className='allWords'>
                {words.map((word, index) => (
                    <CellComponent key={index} variant={getVariant(word)} {...word} />
                ))}
            </div>
        </>
    )
}
