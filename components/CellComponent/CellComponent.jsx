import { useMemo } from 'react'
import { CellSimple } from './variants/CellSimple'
import { CellLast } from './variants/CellLast'
import { CellBold } from './variants/CellBold'
import { CellTitle } from './variants/CellTitle'
import { CellLastBold } from './variants/CellLastBold'
import { CellDisable } from './variants/CellDisable'

import { CellVariantsArray } from '../../constants/clientConstants'
// import { CellVariantsArray } from 'constants'
// import { useGetStyle } from 'helpers'

export function CellComponent({ variant, ...props }) {
    const position = props.original.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)

    if (position != '-1' && position != '0') {
        const symbol = props.original.slice(-1)
        const word = props.original.slice(0, position)
        props.original = symbol + word
    }
    const Component = useMemo(() => {
        let Component

     // if (dataToday >= periodStart && dataToday <= periodEnd) {
        //     return Component
        // } else {
        //     null
        // }
        
 
        switch (variant) {
            case CellVariantsArray[0].component:
                Component = CellSimple
                break

            case CellVariantsArray[1].component:
                Component = CellTitle
                break

            case CellVariantsArray[2].component:
                Component = CellBold
                break

            case CellVariantsArray[3].component:
                Component = CellLast
                break

            case CellVariantsArray[4].component:
                Component = CellLastBold
                break

            case CellVariantsArray[5].component:
                Component = CellDisable
                break

            default:
                Component = CellSimple
                break
        }

   

        return Component
    }, [variant])

    // const styleObject = useGetStyle(props.description)

    return <Component {...props} />
    // return <Component {...props} styleObject={styleObject} />
}
