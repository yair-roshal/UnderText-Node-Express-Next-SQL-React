import { Link, UpdateButton } from 'components'
import { useForm } from 'react-hook-form'
import { axiosWrappers } from '../../helpers/axios-wrappers'
import { URL } from '../../constants/allConstants'
import axios from 'axios'

export const ImportWords = () => {
    const IAM_TOKEN =
        't1.9euelZqQk4qMzsmKkpOci8eei4nPm-3rnpWazc3KxsuPipOSzMmenc7JzYzl8_cqPT5j-e93eUw2_t3z92prO2P573d5TDb-.3pfJCMzgDkglrI1cOi4E3htTT1eZun4gUECCReGvf8bLl9MfufoFEWW7aj2aj56bpcHlnru9jQd0xGwIsuxvBA'

    const folder_id = 'b1gjqr7b84k21ft9l42g'

    const target_language = 'ru'
    const texts = ['Hello', 'World']

    const body = {
        targetLanguageCode: target_language,
        texts: texts,
        folderId: folder_id,
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {0}'.format(IAM_TOKEN),
    }

    axios
        .post('https://translate.api.cloud.yandex.net/translate/v2/translate', body, headers)
        .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
        })
        .catch((err) => {
            console.log('AXIOS ERROR: ', err)
        })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmitImportWords = (data) => {
        console.log('data', data)

        const newWords = data.text.split(' ')

        for (let i = 0; i < newWords.length; i++) {
            const newWord = {
                original: newWords[i],
                translate: '',
                description: '',
            }
            axiosWrappers.postAxios(URL, { ...newWord })
        }
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
