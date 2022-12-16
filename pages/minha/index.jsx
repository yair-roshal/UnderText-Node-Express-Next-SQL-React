import { useState, useEffect } from 'react'
import { AllWords, Loading } from 'components'
import { axiosWrappers } from 'helpers'
import { URL } from 'constants/clientConstants'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`
    const [words, setWords] = useState(null)

    useEffect(() => {
        const response = axiosWrappers.getAxios(URL + hrefMainPage)
        setWords(response)
    }, [])

    if (!words) {
        return <Loading />
    }

    return (
        <div>
            <div className='wrapperTextBlock'>
                <AllWords words={words} />
            </div>
        </div>
    )
}
