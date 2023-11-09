import GameBoard from "./GameBoard";
import PlayerCard from "./PlayerCard"
import player1Image from './assets/player1Image.png'
import player2Image from './assets/player2Image.png'

const MainGame = (props) => {
    const {player1, player2} = props;
    return (
        <>
        <div className="mainGame">
            <PlayerCard 
                src={player1Image}
                player={player1}/>
            <GameBoard />
            <PlayerCard 
                src={player2Image}
                player={player2}/>
        </div>

        </>
    )
}

export default MainGame 