import { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card"
import cardInfo from "./assets/cardInfo.json"

const GameBoard = (props) => {
    const {choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, shuffledCards} = props;
    
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    } 

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            if(choiceOne.key === choiceTwo.key) {
                console.log('Cards match')
                
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
                <Card className="card" key={card.code} src={card.image} onClick={handleChoice}/>
            ))}
        </div>
        </>
    )
}

export default GameBoard