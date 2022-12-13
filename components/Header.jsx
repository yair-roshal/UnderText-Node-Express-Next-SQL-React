export const Header = (props) => {
    return (
        <div className='wrapperHeader'>
            <div className='textWrapper'>
                <span className='bold'>{props.name}</span>
                {/* <span className='bold'>Brachot aBoker</span> */}
            </div>
        </div>
    )
}
