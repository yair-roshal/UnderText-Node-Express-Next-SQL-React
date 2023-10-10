import { useMemo } from 'react'
// import { CellSimple, CellLast, CellBold, CellTitle, CellLastBold, CellDisable } from './variants'
// import { useGetStyle } from 'helpers'

import { CellSimple } from './variants/CellSimple'
import { CellLast } from './variants/CellLast'
import { CellBold } from './variants/CellBold'
import { CellTitle } from './variants/CellTitle'
import { CellLastBold } from './variants/CellLastBold'
import { FirstCell } from './variants/FirstCell'

const CellVariants = {
  simple: CellSimple,
  title: CellTitle,
  bold: CellBold,
  last: CellLast,
  lastBold: CellLastBold,
  first: FirstCell,
}

export function CellComponent({ original, description, ...props }) {
  // перемещаем определенный символ в начало строки, если этот символ найден в ее конце.
  const position = original.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
  if (position !== -1 && position !== 0) {
    const symbol = original.slice(-1)
    const word = original.slice(0, position)
    original = symbol + word
  }

  const Component = useMemo(() => {
    return CellVariants[description] || CellSimple
  }, [description])

  // const styleObject = useGetStyle(description)

  return <Component original={original} description={description} {...props} />
  // return <Component original={original} description={description} {...props} styleObject={styleObject} />
}
