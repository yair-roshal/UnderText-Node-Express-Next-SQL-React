import { useMemo } from 'react'
import { CellSimple } from './variants/CellSimple'
import { CellNewLine } from './variants/CellNewLine'
import { CellBold } from './variants/CellBold'

// import { CellVariants } from 'constants'
import { CellVariants } from '../../constants/clientConstants'
// import { useGetStyle } from 'helpers'

export function CellComponent({ variant, ...props }) {
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
