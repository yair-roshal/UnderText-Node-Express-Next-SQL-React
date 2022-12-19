import { useRouter } from 'next/router'

export function useMainPage() {
    const router = useRouter()
    const hrefMainPage = `/${router.asPath.split('/')[1]}`

    return hrefMainPage
}
