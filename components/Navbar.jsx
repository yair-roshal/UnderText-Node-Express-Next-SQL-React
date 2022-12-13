import { AppBar, Toolbar, CssBaseline } from '@mui/material/'
import { NavLink } from 'components'
// import { pages } from 'constants'
// import { pagesPrayers } from '../constants/clientConstants'

const pagesPrayers = [
    { name: 'Home', href: '/' },
    { name: 'Shaharit', href: '/shaharit' },
    { name: 'Minha', href: '/minha' },
    { name: 'Maariv', href: '/maariv' },
    { name: 'Main shalosh', href: '/main-shalosh' },
    { name: 'Birkat aMazon', href: '/birkat-amazon' },
    { name: 'Tehilim', href: '/tehilim' },
]

console.log('pagesPrayers :>> ', pagesPrayers)

export const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <CssBaseline />
                <Toolbar>
                    <div className='navlinks'>

                        {/* {pagesPrayers.map((pagesPrayer, index) => (
                            <NavLink
                                key={index}
                                href={pagesPrayer.href}
                                // exact
                                className='link'
                                style={{ textDecoration: 'none' }}
                            >
                                {pagesPrayer.name}
                            </NavLink>
                        ))} */}

                        <NavLink href='/' exact className='link' style={{ textDecoration: 'none' }}>
                            Home
                        </NavLink>

                        <NavLink href='/words' className='link' style={{ textDecoration: 'none' }}>
                            Tehilim
                        </NavLink>
                        <NavLink href='/words' className='link' style={{ textDecoration: 'none' }}>
                            Shaharit
                        </NavLink>
                        <NavLink href='/words' className='link' style={{ textDecoration: 'none' }}>
                            Minha
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
