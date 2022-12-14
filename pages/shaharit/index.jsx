import { useState, useEffect } from 'react'
import { AllWords, Loading, Header } from 'components'
import { store } from '@reduxFolder'
import { Provider } from 'react-redux'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`

    const [words, setWords] = useState(null)

    useEffect(() => {
        axiosWrappers.getAxios(URL + hrefMainPage, setWords)
    }, [])

    if (!words) {
        return <Loading />
    }

    return (
        <Provider store={store}>
            <div>
                <div className='wrapperTextBlock'>
                    <AllWords words={words} />
                </div>
            </div>
        </Provider>
    )
}
