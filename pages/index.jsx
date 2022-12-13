import { pagesPrayers } from '../constants/clientConstants'
 import { Link, StyledButton } from 'components'

export default function Home() {
    return (
        <>
            {pagesPrayers.map((pagesPrayer, index) => (
                <Link key={index} href={pagesPrayer.href} style={{ textDecoration: 'none' }}>
                    <StyledButton variant='contained'> {pagesPrayer.name}</StyledButton>
                </Link>
            ))}
        </>
    )
}
