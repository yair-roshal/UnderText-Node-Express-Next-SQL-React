import { useState, useEffect } from 'react'
import { AllWords, Loading, Header } from 'components'
import { store } from '@reduxFolder'
import { Provider } from 'react-redux'
import { URL } from 'constants'
import { axiosWrappers } from 'helpers'

export default function Index() {
    const [words, setWords] = useState(null)

    useEffect(() => {
        axiosWrappers.getAxios(URL+"minha", setWords)
    }, [])

    if (!words) {
        return <Loading />
    }

    return (
        <Provider store={store}>
            <div>
                 <div className='wrapperTextBlock'>
                    <Header name={'Brachot aBoker'} />
                    <AllWords words={words} />
                </div>
            </div>
        </Provider>
    )
}
