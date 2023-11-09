import { useState } from "react";
import Card from "./Card"
import cardInfo from "./assets/cardInfo.json"

const GameBoard = () => {
    const  [isFlipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!isFlipped);
    } 
    const handleFlipClass = () => {
        return ;
    }
    let cards = [];
    let shuffledCards;

    const shuffle = (array) => {
        shuffledCards = [...array];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
      }
       console.log("shuflled");
    };

    shuffle(cardInfo);

    for (let i=0; i<shuffledCards.length; i++) {
        cards.push(<Card className="card" key={i} src={shuffledCards[i].image} onClick={handleFlip}/>)
        console.log()
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