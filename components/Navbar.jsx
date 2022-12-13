import { AppBar, Toolbar, CssBaseline } from '@mui/material/'
import { NavLink } from 'components'
import { pagesPrayers } from '../constants/clientConstants'

export const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <CssBaseline />
                <Toolbar>
                    <div className='navLinks'>
                        {pagesPrayers.map((pagesPrayer, index) => (
                            <NavLink
                                key={index}
                                href={pagesPrayer.href}
                                className='link'
                                style={{ textDecoration: 'none' }}
                            >
                                {pagesPrayer.name}
                            </NavLink>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
