import { useState, useEffect } from 'react'
import { AllWords, Loading, Header } from 'components'
import { store } from '../../redux/'
import { Provider } from 'react-redux'
import { URL } from 'constants'
import { axiosWrappers } from 'helpers'

export default function Index() {
    const [words, setWords] = useState(null)

    useEffect(() => {
        axiosWrappers.getAxios(URL, setWords)
    }, [])

    if (!words) {
        return <Loading />
    }

    return (
        <Provider store={store}>
            <div>
                <h1 className='titlePage'>Word</h1>
                <div className='wrapperTextBlock'>
                    <Header />
                    <AllWords words={words} />
                </div>
            </div>
        </Provider>
    )
}
