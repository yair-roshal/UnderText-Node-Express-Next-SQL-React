import { Link } from '.'

export { NavLink }

NavLink.defaultProps = {
    exact: false,
}

function NavLink({ children, href, exact, ...props }) {
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}
