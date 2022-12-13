import { useMemo } from 'react'

export function useGetStyle(typeOfElement) {

    const color = useMemo(() => {
        if (typeOfElement == 'bold') return 'blue'
    }, [])

    return color
}
