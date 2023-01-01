import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import BookIcon from '@mui/icons-material/Book'
import {
    Box,
    Drawer,
    Toolbar,
    CssBaseline,
    Typography,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import { pagesPrayers } from '../constants/clientConstants'
import { Link } from 'components'
import { useMainPage } from 'hooks'

// const hebrewDate = require('hebrew-date')

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        // width: '100%',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}))

export function MenuBar() {
    const hrefMainPage = useMainPage()

    const hebrewDate = new Intl.DateTimeFormat('en-u-ca-hebrew', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(new Date())

    const nameHeader = hrefMainPage.slice(1).toUpperCase() + '  -  ' + hebrewDate

    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' open={open}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{ flexGrow: 1, textAlign: 'center' }}
                        component='div'
                    >
                        {nameHeader}
                    </Typography>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='end'
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DrawerHeader />

            <Drawer
                sx={{
                    'width': drawerWidth,
                    'flexShrink': 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant='persistent'
                anchor='right'
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {pagesPrayers.map(
                        (pagesPrayer) =>
                            pagesPrayer.prayer == true && (
                                <ListItem key={pagesPrayer.name} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BookIcon />
                                        </ListItemIcon>

                                        <Link
                                            onClick={handleDrawerClose}
                                            href={pagesPrayer.href}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <ListItemText primary={pagesPrayer.name} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ),
                    )}
                </List>

                <Divider />
                <List>
                    {pagesPrayers.map(
                        (pagesPrayer) =>
                            pagesPrayer.prayer == false && (
                                <ListItem key={pagesPrayer.name} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BookIcon />
                                        </ListItemIcon>

                                        <Link
                                            onClick={handleDrawerClose}
                                            href={pagesPrayer.href}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <ListItemText primary={pagesPrayer.name} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ),
                    )}
                </List>

                <Divider />
                <List>
                    {pagesPrayers.map(
                        (pagesPrayer) =>
                            pagesPrayer.prayer == 'additionalItems' && (
                                <ListItem key={pagesPrayer.name} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BookIcon />
                                        </ListItemIcon>

                                        <Link
                                            onClick={handleDrawerClose}
                                            href={pagesPrayer.href}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <ListItemText primary={pagesPrayer.name} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ),
                    )}
                </List>
            </Drawer>
        </Box>
    )
}
