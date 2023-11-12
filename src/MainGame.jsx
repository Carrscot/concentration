import Button from "./Button"
import GameBoard from "./GameBoard"
import PlayerCard from "./PlayerCard"
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'
import winImage from './assets/winImage.png'
import EndGameCard from "./endGameCard"

const MainGame = (props) => {
    const {
        playerTurn, 
        setPlayerTurn, 
        player1, 
        player2,
        setPlayer1,
        setPlayer2, 
        choiceOne, 
        choiceTwo, 
        setChoiceOne, 
        setChoiceTwo, 
        shuffle,
        shuffledCards,
        setCards,
        player1Score,
        player2Score,
        setPlayer1Score,
        setPlayer2Score,
        gameState,
        setGameState,
        winner} = props;

        function newGame () {
            setGameState("Start");
            shuffle(cardInfo);
            setPlayerTurn(1);
            setPlayer1Score(0);
            setPlayer2Score(0);
            setChoiceOne(null);
            setChoiceTwo(null);
            setPlayer1('');
            setPlayer2('');
        }

    return (
        <>
        {
            gameState === "End" ?

            <div className="winBoard">
                <h1>Well Done!</h1>
                <h1>{winner === player1 ? player1 : player2}</h1>
                <img className="winImage" src={winImage} alt="Win Image" id="winImage"/>
                <EndGameCard 
                    src={winner === player1 ? player1Image : player2Image} 
                    winnerName={winner === player1 ? player1 : player2} 
                    winnerScore={winner === player1 ? player1Score : player2Score}
                    place="1st"
                    className="trophy"/>
                <EndGameCard 
                    src={winner != player1 ? player1Image : player2Image} 
                    winnerName={winner != player1 ? player1 : player2} 
                    winnerScore={winner != player1 ? player1Score : player2Score}
                    place="2nd"
                    className="trophy hide"/>
                <Button
                    onClick={newGame}
                    buttonText= "Play Again"
                    buttonClass="newGame bold"
                    id="newGame"/>
            </div>

            :

            <div className="mainGame">
                <PlayerCard 
                    src={player1Image}
                    player={player1}
                    playerTurn={playerTurn===1}
                    playerScore={player1Score}/>
                <GameBoard 
                    choiceOne={choiceOne}
                    choiceTwo={choiceTwo}
                    setChoiceOne={setChoiceOne}
                    setChoiceTwo={setChoiceTwo}
                    shuffledCards={shuffledCards}
                    setCards={setCards}
                    playerTurn={playerTurn}
                    setPlayerTurn={setPlayerTurn}
                    player1Score= {player1Score} 
                    player2Score={player2Score}
                    setPlayer1Score= {setPlayer1Score} 
                    setPlayer2Score={setPlayer2Score}/>
                <PlayerCard 
                    src={player2Image}
                    player={player2}
                    playerTurn={playerTurn===2}
                    playerScore={player2Score}/>
            </div>
        }
        </>
    )
}

export default MainGame 