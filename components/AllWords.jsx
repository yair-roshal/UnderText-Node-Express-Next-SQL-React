import { useEffect } from 'react'
import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'
import { Link } from 'components'
import { useRouter } from 'next/router'

export const AllWords = ({ words }) => {
    const router = useRouter()
    console.log('router.pathname :>> ', router.pathname)

    const hrefLinkAdd = router.pathname + '/add'
    const hrefLinkImport = router.pathname + '/ImportWordsFrom'

    useEffect(() => {
        // setSlides(words.length)
        console.log('words', words)
    }, [words])

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

        return CellVariants.CellSimple
    }

    return (
        <>
            <div className='allWords'>
                {words.map((word, index) => (
                    <CellComponent key={index} variant={getVariant(word)} {...word} />
                ))}
            </div>

            <div className='wrapperButton'>
                <Link href={hrefLinkAdd} className='button'>
                    <span>Add 1 Word </span>
                </Link>
            </div>
            <div className='wrapperButton'>
                <Link href={hrefLinkImport} className='button'>
                    <span>Import Words From... </span>
                </Link>
            </div>
        </>
    )
}
