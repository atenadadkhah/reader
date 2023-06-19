const Container = ({children, ...otherProps}) => {
    return (
        <div className='container' {...otherProps}>
            {children}
        </div>
    )
}

export default Container;