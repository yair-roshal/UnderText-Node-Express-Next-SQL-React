import React from 'react'
import { AppBar, Toolbar, CssBaseline } from '@mui/material/'
import { NavLink } from '.'
export const Navbar = () => {
	return (
		<>
			<AppBar position='static'>
				<CssBaseline />
				<Toolbar>
					<div className='navlinks'>
						<NavLink href='/' exact className='link' style={{ textDecoration: 'none' }}>
							Home
						</NavLink>
						<NavLink href='/words' className='link' style={{ textDecoration: 'none' }}>
							Words
						</NavLink>
					</div>
				</Toolbar>
			</AppBar>
		</>
	)
}
