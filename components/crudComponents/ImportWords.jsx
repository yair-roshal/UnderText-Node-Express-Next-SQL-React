import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { axiosWrappers } from '../../helpers/axios-wrappers'
import { URL } from '../../constants/clientConstants'

export const ImportWords = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const syncPosting = async (newWords) => {
        for (const word of newWords) {
            const newWord = {
                original: word,
                translate: '',
                description: '',
            }

            await axiosWrappers.postAxios(URL, { ...newWord })
        }
    }

    const onSubmitImportWords = (data) => {
        const newWords = data.text.split(' ')

        syncPosting(newWords)

        alert(`all words successfully imported `)
    }

    return (
        <>
            <div className='formWrapper'>
                <h2 className='titlePage'>Import words from text</h2>

                <form onSubmit={handleSubmit(onSubmitImportWords)}>
                    <textarea
                        name='text'
                        type='text'
                        placeholder='Please Enter your text'
                        {...register('text', { required: true })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>Please Enter your text</p>}
                    <input type='submit' />
                </form>

                {/* finish it later============================================ */}

                {/* <h2 className='titlePage'>Import words from file</h2>
				<input type='file' onChange={(e) => showFile(e)} /> */}
            </div>

            <Link href='/words' style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>
        </>
    )
}

//  finish it later
// const showFile = (e) => {
// 	e.preventDefault()
// 	const reader = new FileReader()

// 	//checking last id==========
// 	let maxId = 0
// 	for (let index in words) {
// 		if (+words[index].id > maxId) {
// 			maxId = +words[index].id
// 		}
// 	}
// 	let newId = maxId + 1

// 	reader.onload = (e) => {
// 		const text = e.target.result
// 		const elements = text.split(' ')

// 		const temp = elements.map((element, index) => {
// 			console.log('index==', index)
// 			const word = {
// 				id: newId + index,
// 				original: element,
// 				translate: '',
// 			}

// 			axios
// 				.post('http://localhost:5000/', { ...word })
// 				.then((res) => {
// 					if (res.status === 200) {
// 						alert('Word successfully added')
// 					} else Promise.reject()
// 				})
// 				.catch((err) => alert('Something went wrong'))

// 			// arrayNewWords.push(word)

// 			console.log(`word---`, word)
// 			// console.log(`arrayNewWords---`, arrayNewWords)
// 		})

// 		// window.location = '/';
// 	}

// 	reader.readAsText(e.target.files[0])
// }
