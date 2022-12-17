import { CellComponent } from './CellComponent/CellComponent'
import { CellVariants } from '../constants/clientConstants'
import { useRouter } from 'next/router'
import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

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

    // // const validationSchema = Yup.object().shape({
    // //     original: Yup.string().required('original is required'),
    // //     translate: Yup.string().required('translate is required'),
    // // })

    // const validationSchema = Yup.array()
    // // const validationSchema = Yup.object().shape([ ])

    // const formOptions = { resolver: yupResolver(validationSchema) }

    // formOptions.defaultValues = newWords
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    //     watch,
    // } = useForm(formOptions)

    // const onSubmit = (data) => {
    //     // formFileWords = data.text.trim().split(' ')
    //     // syncPosting(formFileWords)
    //     // alert(`All words successfully imported `)
    //     console.log(`All words successfully imported `)
    // }

    // console.log('typeof(words) :>> ', typeof words)
    // console.log('JSON.stringify(newWords):>> ', typeof JSON.stringify(words))

    // console.log(' (words) :>> ', words)
    // console.log(' .stringify(newWords):>> ', JSON.stringify(words))
    const [newWords, setNewWords] = useState(JSON.stringify(words))

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('newWords', newWords)
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

                    <button type='submit'>send newWords</button>
                </form>
            </div>

            {/* {newWords && (
                <div className='formWrapper'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea
                            name='newWords'
                            type='text'
                            // value={JSON.stringify(newWords)}

                            {...register("newWords", {
                                // onChange: (e) => {
                                //     setNewWords(
                                //         e.target.newWords,
                                //         //     {
                                //         //     // ...newWords,
                                //         //     // newWords: e.target.newWords,
                                //         //     newWords,
                                //         // }
                                //     )
                                // },
                            })}
                        />
                        <input type='submit' />
                    </form>
                </div>
            )} */}

            {/* <h3>Content form: </h3>
            <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

            {/* <Link href={hrefLinkAdd} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Add 1 Word </UpdateButton>
            </Link> */}
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
