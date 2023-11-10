const Card = ({src, onClick, className}) => {
    return (
        <>
        <img className={className} src={src} onClick={onClick} />
        </>
    )
}

export default Card

{/* <div className="card">
<div className={flipped ? "flipped" : ""}>
    <img className="front" src={src} alt="card front"/>
    <img className="back" src={cardBack} onClick={()=>{console.log("handleClick")}} alt="card back"/>
</div>
</div> */}