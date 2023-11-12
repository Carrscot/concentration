import trophy from './assets/trophy.png'

const EndGameCard = (props) => {
    const {
        src, 
        winnerName, 
        winnerScore, 
        place, 
        className} = props;
    return (
        <>
            <div className='endGameCardContainer'>
                <img className={className} src={trophy} alt="Trophy" id="trophy"/>
                <div className="endGameCard">
                    <img className="playerWinImage" src={src} alt="Player Win Image" id="playerWinImage"/>
                    <p className="bolder large-text">{place} Place</p>
                    <p className="bold large-text">{winnerName}</p>
                    <p className="bold large-text">Score: {winnerScore}</p>
                </div>
            </div>
        </>
    )
}

export default EndGameCard