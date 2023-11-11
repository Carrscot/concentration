import cardBack from "./assets/cardBack.png"

const Card = (props) => {
    const {
        src, 
        onClick, 
        flipped, 
        id, 
        matched} = props;
    return (
        <>
            <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    className={matched ? "hide" : "front"} 
                    src={src} 
                    alt="card front" 
                    id={id}/>
                <img 
                    className={matched ? "hide" : "back"} 
                    src={cardBack} 
                    onClick={onClick} 
                    alt="card back" 
                    id={id}/>
            </div>
            </div>
        </>
    )
}

export default Card

