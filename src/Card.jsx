import cardBack from "./assets/cardBack.png"

const Card = (props) => {
    const {src, onClick, flipped, id} = props;
    return (
        <>
            <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    className="front" 
                    src={src} 
                    alt="card front" 
                    id={id}/>
                <img 
                    className="back" 
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

