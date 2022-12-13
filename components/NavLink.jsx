import { Link } from 'components'

function NavLink({ children, href, exact, ...props }) {
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}

NavLink.defaultProps = {
    exact: false,
}

export { NavLink }
