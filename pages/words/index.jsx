import { useState, useEffect } from 'react'
import { AllWords, Loading, Header } from 'components'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import { URL } from '../../constants/allConstants'
import { axiosWrappers } from '../../helpers/axios-wrappers'

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
                <div className='wrapperAllWords'>
                    <Header />
                    <AllWords words={words} />
                </div>
            </div>
        </Provider>
    )
}
