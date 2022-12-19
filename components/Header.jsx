export const Header = (props) => {
    return (
        <div className='wrapperHeader'>
            <div className='textWrapper'>
                <div className='bold'>{props.name}</div>
                <div>{props.translate}</div>
            </div>
        </div>
    )
}
