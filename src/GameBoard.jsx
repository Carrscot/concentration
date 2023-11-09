import Card from "./Card"

const GameBoard = () => {
    let cards = [];
    for (let i=0; i<54; i++) {
        cards.push(<Card key={i} />)
    }
    return (
        <>
        <div className="gameBoard">
            {cards}
        </div>
        </>
    )
}

export default GameBoard