import { useMemo } from 'react'

export function useGetStyle(typeOfElement) {
    const styleObject = useMemo(() => {
        if (typeOfElement == 'bold') return { color: 'blue' }
        if (typeOfElement == 'last')
            return {
                'flex-grow': '1',
                // 'flex-shrink': '0',
                // "flex-basis": "max-content",
            }
        // if (typeOfElement == 'last') return { width: '100%' }
    }, [])

    return styleObject
}
