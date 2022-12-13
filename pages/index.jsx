import { pagesPrayers } from '../constants/clientConstants'
import { NavLink } from 'components'
import { Link, StyledButton } from 'components'

// const pagesPrayers = [
//     { name: 'Home', href: '/' },
//     { name: 'Shaharit', href: '/shaharit' },
//     { name: 'Minha', href: '/minha' },
//     { name: 'Maariv', href: '/maariv' },
//     { name: 'Main shalosh', href: '/main-shalosh' },
//     { name: 'Birkat aMazon', href: '/birkat-amazon' },
//     { name: 'Tehilim', href: '/tehilim' },
// ]

console.log('pagesPrayers :>> ', pagesPrayers)

export default function Home() {
    return (
        <>
            {pagesPrayers.map((pagesPrayer, index) => (
                // <NavLink
                //     key={index}
                //     href={pagesPrayer.href}
                //     // exact
                //     className='link'
                //     style={{ textDecoration: 'none' }}
                // >
                //     {pagesPrayer.name}
                // </NavLink>
                // <h1 key={index} className='titlePage'>
                //     {pagesPrayer.name}
                // </h1>

                <Link key={index} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                    <StyledButton variant='contained'> {pagesPrayer.name}</StyledButton>
                </Link>
            ))}
        </>
    )
}
