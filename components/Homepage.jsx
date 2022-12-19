import { useState, useEffect } from 'react'
import { AllWords, Loading } from 'components'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'
import { useMainPage } from 'hooks'

export function Homepage() {
    const hrefMainPage = useMainPage()

    const [words, setWords] = useState(null)
    useEffect(() => {
        axiosWrappers.getAxios(URL + hrefMainPage).then((value) => {
            setWords(value)
        })
    }, [hrefMainPage])

    if (!words) {
        return <Loading />
    }

    return <AllWords words={words} />
}
