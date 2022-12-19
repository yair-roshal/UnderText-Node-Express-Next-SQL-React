import { useState, useEffect } from 'react'
import { AllWords, Loading } from 'components'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'
import { useRouter } from 'next/router'

export function Homepage() {
    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`
    const [words, setWords] = useState(null)
    console.log('hrefMainPage', hrefMainPage)
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
