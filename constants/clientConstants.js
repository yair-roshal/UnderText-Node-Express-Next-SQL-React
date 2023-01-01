export const JewishMonth = {
    None: 'None',
    Tishri: 'Tishri',
    Cheshvan: 'Cheshvan',
    Kislev: 'Kislev',
    Shevat: 'Shevat',
    Adar: 'Adar',
    Nisan: 'Nisan',
    Iyyar: 'Iyyar',
    Sivan: 'Sivan',
    Tammuz: 'Tammuz',
    Av: 'Av',
    Elul: 'Elul',
    AdarI: 'AdarI',
    AdarII: 'AdarII',
    Tevet: 'Tevet',
}

export const CellVariantsArray = [
    { type: 'simple', value: '', component: 'CellSimple' },
    { type: 'title', value: 'title', component: 'CellTitle' },
    { type: 'bold', value: 'bold', component: 'CellBold' },
    { type: 'last', value: 'last', component: 'CellLast' },
    { type: 'lastBold', value: 'lastBold', component: 'CellLastBold' },
    { type: 'disable', value: 'disable', component: 'CellDisable' },
]

export const URL = `http://localhost:${process.env.PORT}`

export const pagesPrayers = [
    // { name: 'Shaharit', href: '/shaharit', prayer: true },
    { name: 'Minha', href: '/minha', prayer: true },
    { name: 'Maariv', href: '/maariv', prayer: true },

    // { name: 'Main shalosh', href: '/main-shalosh', prayer: false },
    // { name: 'Birkat aMazon', href: '/birkat-amazon', prayer: false },
    { name: 'Tehilim', href: '/tehilim', prayer: false },

    { name: 'Options', href: '/options', prayer: 'additionalItems' },
    { name: 'About', href: '/about', prayer: 'additionalItems' },
]

export const fontFamilyList = [
    'Arial',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
]

export const fontSizeList = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
