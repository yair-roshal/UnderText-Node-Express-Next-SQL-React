export const Header = (props) => {
    return (
        <div className='wrapperHeader'>
            <div className='textWrapper'>
                <div className='bold'>{props.name}</div>
                <div className='translation'>{props.translation}</div>
            </div>
        </div>
    )
}
