import Button from "./Button"
import cardInfo from "./assets/cardInfo.json"

const Header = (props) => {
    const  {
        setPlayerTurn, 
        setPlayer1, 
        setPlayer2, 
        setPlayer1Score, 
        setPlayer2Score, 
        setChoiceOne, 
        setChoiceTwo, 
        shuffle,
        gameState,
        setGameState} = props

    function exitGame () {
        setGameState("Start");
        restartGame();
        setPlayer1('');
        setPlayer2('');
    }

    function restartGame () {
        shuffle(cardInfo);
        setPlayerTurn(1);
        setPlayer1Score(0);
        setPlayer2Score(0);
        setChoiceOne(null);
        setChoiceTwo(null);
    }

    return (
        <div className={gameState === "End" ? "inactive" : "header"}>
            <div></div>
            <h1>Concentration</h1>
            <div className="gameButtons">
                {
                    gameState === 'Start' ?
                    <div></div>

                    :

                    <Button
                    onClick={restartGame}
                    buttonText= "Restart Game"
                    buttonClass="restart"
                    id="restart"/>

                }

                <Button
                    onClick={exitGame}
                    buttonText= "Exit Game"
                    buttonClass="exit"
                    id="exit" 
                />
            </div>
        </div>
    )
}

export default Header