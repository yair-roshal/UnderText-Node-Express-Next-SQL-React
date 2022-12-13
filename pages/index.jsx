import { pagesPrayers } from '../constants/clientConstants'
import { Link } from 'components'
import { Typography } from '@mui/material'

export default function Home() {
    return (
        <div className='wrapperTitles'>
            {pagesPrayers.map((pagesPrayer, index) => (
                <Link key={index} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                    <Typography variant='h4' gutterBottom>
                        {pagesPrayer.name}
                    </Typography>
                </Link>
            ))}
        </div>
    )
}
