import { useMemo } from 'react'
import { CellSimple } from './variants/CellSimple'
import { CellNewLine } from './variants/CellNewLine'
import { CellVariants } from '../../constants/clientConstants'

// const CellVariants = {
//     CellSimple: 'CellSimple',
//     CellNewLine: 'CellNewLine',
// }

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

            default:
                Component = CellSimple
                break
        }
        return Component
    }, [variant])

    return <Component {...props} />
}
