import { useMemo } from 'react'
import { CellSimple } from './variants/CellSimple'
import { CellNewLine } from './variants/CellNewLine'
import { CellBold } from './variants/CellBold'
import { CellTitle } from './variants/CellTitle'
import { CellLastBold } from './variants/CellLastBold'

// import { CellVariants } from 'constants'
import { CellVariants } from '../../constants/clientConstants'
// import { useGetStyle } from 'helpers'

export function CellComponent({ variant, ...props }) {
    // console.log('...props',  props)
    // let newWord = props
    // console.log('...newWord original', newWord.original=newWord.original+"1231")
    // console.log('...props original', props.original=props.original+"1231")

    const position = props.original.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)

    // console.log('--------')
    // console.log('props.original :>> ', props.original)
    // console.log('position :>> ', position)

    if (position != '-1' && position != '0') {
        const symbol = props.original.slice(-1)
        const word = props.original.slice(0, position)
        props.original = symbol + word
    }
    const Component = useMemo(() => {
        let Component
        switch (variant) {
            case CellVariants.CellSimple:
                Component = CellSimple
                break

            case CellVariants.CellNewLine:
                Component = CellNewLine
                break

            case CellVariants.CellBold:
                Component = CellBold
                break

            case CellVariants.CellLastBold:
                Component = CellLastBold
                break

            case CellVariants.CellTitle:
                Component = CellTitle
                break

            default:
                Component = CellSimple
                break
        }

        // if (dataToday >= periodStart && dataToday <= periodEnd) {
        //     return Component
        // } else {
        //     null
        // }

        return Component
    }, [variant])

    // const styleObject = useGetStyle(props.description)

    return <Component {...props} />
    // return <Component {...props} styleObject={styleObject} />
}
