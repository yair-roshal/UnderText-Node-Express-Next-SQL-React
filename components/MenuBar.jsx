import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import BookIcon from '@mui/icons-material/Book'
import { Box, Drawer, Toolbar, CssBaseline, Typography, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material'

import { pagesPrayers } from '../constants/clientConstants'
import { Link } from 'components'
import { useMainPage } from 'hooks'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
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

  const gregorianDate = new Date()
  const gregorianDateStr = gregorianDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleMenuItemClick = () => {
    handleDrawerClose()
  }

  return (
    <>
      <Box
        sx={{
          paddingTop: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* big buttons */}
        {pagesPrayers.map((pagesPrayer) => (
             <Link key={pagesPrayer.name} onClick={handleDrawerClose} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
              <Button
                // disabled={pagesPrayer.name.toLowerCase() == 'tehilim' ? true : false} //
                variant='contained'
                sx={{ color: 'black' }}
              >
                {pagesPrayer.name}
              </Button>
            </Link>
         ))}
      </Box>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <Toolbar>
            <Typography variant='h6' noWrap sx={{ flexGrow: 1, textAlign: 'center' }} component='div'>
              {hrefMainPage.slice(1).toUpperCase()}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '200px',
                height: '50px',
                padding: '5px',
                borderRadius: '10px',
                border: '1px solid #d0d0d0',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              <Typography
                noWrap
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}
                component='div'
              >
                {hebrewDate}
              </Typography>
              <Typography
                noWrap
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}
                component='div'
              >
                {gregorianDateStr}
              </Typography>
            </Box>

            <IconButton color='inherit' aria-label='open drawer' edge='end' onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }) }}>
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
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
          </DrawerHeader>

          <Divider />
          <List>
            {/* list buttons============== */}
            {pagesPrayers.map(
              (pagesPrayer) =>
                pagesPrayer.prayer === true && (
                     <Link key={pagesPrayer.name} onClick={handleDrawerClose} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick()}>
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={pagesPrayer.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                 ),
            )}
          </List>
          <Divider />
          <List>
            {pagesPrayers.map(
              (pagesPrayer) =>
                pagesPrayer.prayer === false && (
                     <Link key={pagesPrayer.name} onClick={handleDrawerClose} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick()}>
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={pagesPrayer.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                 ),
            )}
          </List>
          <Divider />
          <List>
            {pagesPrayers.map(
              (pagesPrayer) =>
                pagesPrayer.prayer === 'additionalItems' && (
                     <Link key={pagesPrayer.name} onClick={handleDrawerClose} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick()}>
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={pagesPrayer.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                 ),
            )}
          </List>
        </Drawer>
      </Box>
    </>
  )
}
