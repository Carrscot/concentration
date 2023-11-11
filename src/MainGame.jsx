import GameBoard from "./GameBoard";
import PlayerCard from "./PlayerCard"
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'

const MainGame = (props) => {
    const {playerTurn, setPlayerTurn, player1, player2, choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, shuffledCards} = props;
    return (
        <>
        <div className="mainGame">
            <PlayerCard 
                src={player1Image}
                player={player1}
                playerTurn={playerTurn===1}/>
            <GameBoard 
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            setChoiceOne={setChoiceOne}
            setChoiceTwo={setChoiceTwo}
            shuffledCards={shuffledCards}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}/>
            <PlayerCard 
                src={player2Image}
                player={player2}
                playerTurn={playerTurn===2}/>
        </div>

        </>
    )
}

export default MainGame 