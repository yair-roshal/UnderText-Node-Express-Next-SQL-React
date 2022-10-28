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
						<NavLink href='/graphs' className='link' style={{ textDecoration: 'none' }}>
							Graphs
						</NavLink>
					</div>
				</Toolbar>
			</AppBar>
		</>
	)
}
