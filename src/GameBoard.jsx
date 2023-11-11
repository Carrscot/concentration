import { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card"

const GameBoard = (props) => {
    const {choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, shuffledCards} = props;
    const [matched, setMatched] = useState(false);

    function getCardColor(card) {
        const cardSplit = card.split('');
        const colors = {
            'H' : 'red',
            'D' : 'red',
            'S' : 'black',
            'C' : 'black'
        };
        return colors[cardSplit[1]] || '';
    }

    function getCardNumber(card) {
        const cardSplit = card.split('');
        return cardSplit[0];
    }

    const handleChoice = (e) => {
        choiceOne ? setChoiceTwo(e.target.id) : setChoiceOne(e.target.id);       
    } 

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);

    }

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            const colorOne = getCardColor(choiceOne);
            const colorTwo = getCardColor(choiceTwo);
            const numberOne = getCardNumber(choiceOne);
            const numberTwo = getCardNumber(choiceTwo);
            if(colorOne === colorTwo && numberOne === numberTwo) {
                console.log('Cards match')
                setMatched(true);
            } else {
                console.log("cards don't match");
                setTimeout(()=>resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo])

    return (
        <>
        <div className="gameBoard">
            {shuffledCards.map(card => (
                <Card 
                className="card" 
                key={card.code} 
                src={card.image} 
                onClick={handleChoice} 
                id={card.code}
                flipped={card.code === choiceOne || card.code === choiceTwo}/>
            ))}
        </div>
        </>
    )
}

export default GameBoard