import { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card"

const GameBoard = (props) => {
    const {choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, shuffledCards} = props;
    const [matched, setMatched] = useState(false);


    const handleChoice = (e) => {
        const cardSplit = e.target.id.split('');
        let cardChoice;
        if (cardSplit[1] ==='S' || cardSplit[1] ==='C') {
            cardChoice = cardSplit[0] + 'black';
            console.log(cardChoice)
        }
        else if (cardSplit[1] ==='D' || cardSplit[1] ==='H') {
            cardChoice = cardSplit[0] + 'red';
        }
        choiceOne ? setChoiceTwo(cardChoice) : setChoiceOne(cardChoice)
        
    } 

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            if(choiceOne === choiceTwo) {
                console.log('Cards match')
                setMatched(true);
            } else {
                console.log("cards don't match")
                resetTurn()
            }
        }
    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)

    }

    return (
        <>
        <div className="gameBoard">
            {shuffledCards.map(card => (
                <Card 
                className="card" 
                key={card.code} 
                src={card.image} 
                onClick={handleChoice} 
                id={card.abbreviation}
                flipped={card.abbreviation === choiceOne || card.abbreviation  === choiceTwo || matched === true}/>
            ))}
        </div>
        </>
    )
}

export default GameBoard