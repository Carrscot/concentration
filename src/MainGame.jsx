import GameBoard from "./GameBoard";
import PlayerCard from "./PlayerCard"
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'

const MainGame = (props) => {
    const {player1, player2, choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, shuffledCards} = props;
    return (
        <>
        <div className="mainGame">
            <PlayerCard 
                src={player1Image}
                player={player1}/>
            <GameBoard 
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            setChoiceOne={setChoiceOne}
            setChoiceTwo={setChoiceTwo}
            shuffledCards={shuffledCards}/>
            <PlayerCard 
                src={player2Image}
                player={player2}/>
        </div>

        </>
    )
}

export default MainGame 