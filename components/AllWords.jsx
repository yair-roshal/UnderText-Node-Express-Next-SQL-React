import { useEffect } from 'react'
import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'
import { useRouter } from 'next/router'
import { Link, UpdateButton } from 'components'

export const AllWords = ({ words }) => {
    const router = useRouter()

    const hrefLinkAdd = router.pathname + '/add'
    const hrefLinkImport = router.pathname + '/import'

    // useEffect(() => {
    //     // setSlides(words.length)
    //     console.log('words', words)
    // }, [words])

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

    return (
        <>
            <Link href={hrefLinkAdd} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Add 1 Word </UpdateButton>
            </Link>
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
