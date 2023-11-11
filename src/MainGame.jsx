import GameBoard from "./GameBoard";
import PlayerCard from "./PlayerCard"
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'

const MainGame = (props) => {
    const {
        playerTurn, 
        setPlayerTurn, 
        player1, 
        player2, 
        choiceOne, 
        choiceTwo, 
        setChoiceOne, 
        setChoiceTwo, 
        shuffledCards,
        setCards,
        player1Score,
        player2Score,
        setPlayer1Score,
        setPlayer2Score} = props;
    return (
        <>
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

        </>
    )
}

export default MainGame 