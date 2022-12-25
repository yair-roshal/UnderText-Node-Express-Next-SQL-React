import NextLink from 'next/link'

export function Link({ href, children }) {
    // export function Link({ href, children, ...props }) {
    return (
        <NextLink className='styledLink' href={href}>
            {/* <a className='styledLink' 
            {...props}
            >{children}</a> */}
            {children}
        </NextLink>
    )
}
