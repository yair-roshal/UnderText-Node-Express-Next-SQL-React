import { useMemo } from 'react'
import { CellSimple } from './variants/CellSimple'
import { CellNewLine } from './variants/CellNewLine'
import { CellVariants } from '../../constants/clientConstants'
import { useGetStyle } from '../../helpers/useGetStyle'
// import { useGetStyle } from 'helpers';

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

    const color = useGetStyle(props.description)

    return <Component {...props} color={color} />
}
