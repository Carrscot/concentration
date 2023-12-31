import { useEffect, useState } from "react";
import Card from "./Card"
import matched from "./assets/matched.png"

const GameBoard = (props) => {
    const {
        playerTurn,
        player1,
        player2, 
        setPlayerTurn, 
        choiceOne, 
        choiceTwo, 
        setChoiceOne, 
        setChoiceTwo, 
        shuffledCards,
        player1Score,
        player2Score,
        setPlayer1Score,
        setPlayer2Score,
        setCards,
        setWinner,
        setGameState} = props;

    const [match, setMatch] = useState(false);

    function getCardColor(card) {
        const cardSplit = card.split('');
        const colors = {
            'H' : 'red',
            'D' : 'red',
            'S' : 'black',
            'C' : 'black',
            'R' : 'joker',
            'B' : 'joker'
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

    const changePlayer = ()=> {
        if(playerTurn===1){
            setPlayerTurn(2);
        }
        else{
            setPlayerTurn(1);
        }
    }

    const checkWinner = () => {
        const totalScore = player1Score + player2Score;
        console.log(totalScore);
        if(totalScore === 27) {
            if(player1Score > player2Score) {
                setWinner(player1);
                setGameState('End');
            }
            else {
                setWinner(player2);
                setGameState('End');
            }
        }
        else {
            return "No Winner";
        }
    }

    const incrementPlayerScore = () => {
            if(playerTurn===1){
                setPlayer1Score(player1Score + 1);
                resetTurn();
            }
            else if(playerTurn===2){
                setPlayer2Score(player2Score + 1);
                resetTurn();
            }
    }

    const resetTurn = () => {
        changePlayer();
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
                incrementPlayerScore();
                
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.code === choiceOne || card.code === choiceTwo) {
                            return {...card, matched:true}
                        } else {
                            return card
                        }
                    })
                })

            } else {
                console.log("cards don't match");
                setTimeout(()=>resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo])

    useEffect(()=> {
        setMatch(true);
        checkWinner();
        setTimeout(() => setMatch(false), 1500);
    }, [player1Score, player2Score])

    return (
        <>
            <img className={match ? "matchImage" : "inactive"} src={matched} />
            <div className={match ? "inactive" : "gameBoard"}>
                {shuffledCards.map(card => (
                    <Card  
                    key={card.code} 
                    src={card.image} 
                    onClick={handleChoice} 
                    id={card.code}
                    flipped={card.code === choiceOne || card.code === choiceTwo}
                    matched={card.matched === true}/>
                ))}
            </div>
        </>
    )
}

export default GameBoard