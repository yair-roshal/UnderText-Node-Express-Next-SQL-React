export const URL = `http://localhost:${process.env.PORT}`
console.log('URL_const', URL)
// export const URL = 'http://localhost:7700'

export const pagesPrayers = [
    // { name: 'Shaharit', href: '/shaharit', prayer: true },
    { name: 'Minha', href: '/minha', prayer: true },
    { name: 'Maariv', href: '/maariv', prayer: true },

    // { name: 'Main shalosh', href: '/main-shalosh', prayer: false },
    // { name: 'Birkat aMazon', href: '/birkat-amazon', prayer: false },
    { name: 'Tehilim', href: '/tehilim', prayer: false },

    { name: 'Options', href: '/options', prayer: 'additionalItems' },
]

export const CellVariants = {
    CellSimple: 'CellSimple',
    CellNewLine: 'CellNewLine',
    CellBold: 'CellBold',
    CellTitle: 'CellTitle',
}
