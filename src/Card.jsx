const Card = ({src, onClick, className}) => {
    return (
        <>
        <img className={className} src={src} onClick={onClick} />
        </>
    )
}

export default Card