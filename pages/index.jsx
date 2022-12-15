import { pagesPrayers } from '../constants/clientConstants'
import { Link } from 'components'
import { Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import BookIcon from '@mui/icons-material/Book'

export default function Home() {
    return (
        <div className='wrapperTitles'>
            <List>
                {pagesPrayers.map((pagesPrayer, index) => (
                    <ListItem key={pagesPrayer.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>

                            <Link
                                key={index}
                                href={pagesPrayer.href}
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography variant='h4' gutterBottom>
                                    {pagesPrayer.name}
                                </Typography>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* 
            {pagesPrayers.map((pagesPrayer, index) => (

                <Link key={index} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                    <Typography variant='h4' gutterBottom>
                        {pagesPrayer.name}
                    </Typography>
                </Link>

            ))} */}
        </div>
    )
}
