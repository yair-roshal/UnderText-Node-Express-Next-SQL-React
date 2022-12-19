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
        axiosWrappers.getAxios(URL + hrefMainPage).then((value) => {
            setWords(value)
        })
    }, [])

    if (!words) {
        return <Loading />
    }

    return <AllWords words={words} />
}

// import { Homepage } from 'components'
// function Index() {
//     // export default function Index() {
//     return <Homepage />
// }
// export default Index
